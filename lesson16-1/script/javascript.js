'use strict';

const  start = document.getElementById('start'),
	cancelButton = document.getElementById('cancel'),
	btnPlus = document.getElementsByTagName('button'),
	incomePlus = btnPlus[0],
	expensesPlus = btnPlus[1],
	additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
	depositCheck = document.querySelector('#deposit-check'),
	budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
	budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
	expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
	additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
	additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
	incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
	targetMonthValue = document.getElementsByClassName('target_month-value')[0],
	salaryAmount = document.querySelector('.salary-amount'),
	periodSelect = document.querySelector('.period-select'),
	additionalExpensesItem = document.querySelector('.additional_expenses-item'),
	targetAmount = document.querySelector('.target-amount'),
	getLeftFields = document.querySelector('.data'),
	leftFields = getLeftFields.querySelectorAll("input[type=text]"),
	incomeItems = document.querySelectorAll('.income-items'),
	expensesItems = document.querySelectorAll('.expenses-items'),
	depositBank = document.querySelector('.deposit-bank'),
	depositAmount = document.querySelector('.deposit-amount'),
	depositPercent = document.querySelector('.deposit-percent');

class AppData {
	constructor() {
		this.budget = 0;
		this.budgetDay = 0;
		this.budgetMonth = 0;
		this.income = {};
		this.incomeMonth = 0;
		this.addIncome = [];
		this.expenses = {};
		this.expensesMonth = 0;
		this.addExpenses = [];
		this.deposit = false;
		this.percentDeposit = 0;
		this.moneyDeposit = 0;
	}
	start() {
		if (salaryAmount.value === '') {
			start.disabled = true;
			return;
		}
		this.budget = Math.ceil(+salaryAmount.value);
		this.getBenefits();
		this.getExpensesMonth();
		this.addBenefits();
		this.getInfoDeposit();
		this.getBudget();
		this.resetFields();
		this.fieldValidation();
		this.showResult();
	}
	showResult() {
		budgetMonthValue.value = this.budgetMonth;
		budgetDayValue.value = this.budgetDay;
		expensesMonthValue.value = this.expensesMonth;
		additionalExpensesValue.value = this.addExpenses.join(', ');
		additionalIncomeValue.value = this.addIncome.join(', ');
		targetMonthValue.value = Math.ceil(this.getTargetMonth());
		incomePeriodValue.value = this.calculateSavedMoney();
		periodSelect.addEventListener('mousemove', this.getIncomePeriodValue);
	}

	fieldValidation() {
		const inputRuEnString = document.querySelectorAll('[placeholder="Наименование"]'),
			inputNumber = document.querySelectorAll('[placeholder="Сумма"], [placeholder="Процент"]');

		inputRuEnString.forEach(items => {
			items.addEventListener('input', () => {
				items.value = items.value.replace(/[^A-zА-яёЁ ,.!]/, '');
			});
		});

		inputNumber.forEach(items => {
			items.addEventListener('input', () => {
				items.value = items.value.replace(/[^0-9]/, '');
			});
		});
	}

	createBlocks() {
		let title = '', amount = '', cloneIncomeItem = '', items = '', btn = '', expenses = '';

		if (this.classList.contains('income_add')) {
			cloneIncomeItem = incomeItems[0].cloneNode(true);
			title = '.income-title';
			amount = '.income-amount';
			items = incomeItems;
			btn =	incomePlus;
			expenses = '.income-items';
		} else if (this.classList.contains('expenses_add')) {
			cloneIncomeItem = expensesItems[0].cloneNode(true);
			title = '.expenses-title';
			amount = '.expenses-amount';
			items = expensesItems;
			btn = expensesPlus;
			expenses = '.expenses-items';
		}

		cloneIncomeItem.querySelector(title).value = '';
		cloneIncomeItem.querySelector(amount).value = '';
		items[0].parentNode.insertBefore(cloneIncomeItem, btn);
		items = document.querySelectorAll(expenses);

		if (items.length === 3) {
      btn.style.display = 'none';
    }
	}
	getBenefits() {
		const count = item => {
			const benefitStr = item.className.split('-')[0];
			const itemTitle = item.querySelector(`.${benefitStr}-title`).value;
			const itemAmount = item.querySelector(`.${benefitStr}-amount`).value;
			if (itemTitle !== '' && itemAmount !== '') {
				this[benefitStr][itemTitle] = itemAmount;
			}
		};
		incomeItems.forEach(count);
		expensesItems.forEach(count);
		for (const key in this.income) {
			this.incomeMonth += +this.income[key];
		}
	}
	addBenefits() {
		this.addIncome = [];
		additionalIncomeItem.forEach(el => {
			const itemResults = el.value.trim();
			if (itemResults !== '') {
				this.addIncome.push(itemResults);
			}
		});
		this.addExpenses = [];
		const addExpenses = additionalExpensesItem.value.split(',');
		addExpenses.forEach(item => {
			if (item !== '') {
				this.addExpenses.push(item);
			}
		});
	}
	getExpensesMonth() {
		for (const key in this.expenses) {
			this.expensesMonth += +this.expenses[key];
		}
	}
	getBudget() {
		const monthDeposit = this.moneyDeposit * (this.percentDeposit / 100);
		this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + monthDeposit;
		this.budgetDay = Math.ceil(this.budgetMonth / 30);
	}
	getTargetMonth() {
		return targetAmount.value / this.budgetMonth;
	}
	calculateSavedMoney() {
		return this.budgetMonth * periodSelect.value;
	}
	updateSliderRange() {
		const sliderNumber = document.querySelector('.period-select').value;
		const updateSliderText = document.querySelector('.period-amount');
		updateSliderText.innerHTML = sliderNumber;

		//updateInputIncomeSummary = sliderNumber;
		const getCurrentNumber = this.budgetMonth;
		const liveUpdateIncomeNumber = sliderNumber * getCurrentNumber;
		incomePeriodValue.value = liveUpdateIncomeNumber;
	}
	resetFields() {
		const dataLeftInputs = document.querySelector('.data');
		const getLeftFields = dataLeftInputs.querySelectorAll("input[type=text]");

		getLeftFields.forEach(item => {
			item.setAttribute('disabled', '');
		});
		depositCheck.disabled = true;
		depositBank.disabled = true;
		depositCheck.style.display = 'none';

		start.style.display = 'none';
		cancelButton.style.display = 'inline';
		incomePlus.removeEventListener('click', this.createBlocks);
		expensesPlus.removeEventListener('click', this.createBlocks);
		const inputRang = document.querySelector('.period-select');
		inputRang.disabled = true;
	}
	resetAll() {
		start.disabled = false;
		// Get & Create variables of left input Fields
		const inputs = document.querySelectorAll('input'),
			periodAmountText = document.querySelector('.period-amount');
		// Reset fields to zero
		leftFields.forEach(item => { item.value = ''; item.disabled = false; });
		inputs.forEach(element => { element.value = ''; });
		cancelButton.style.display = 'none';
		start.style.display = 'inline';
		expensesPlus.style.display = 'inline';
		incomePlus.style.display = 'inline';
		depositPercent.style.display = 'none';
		depositBank.disabled = false;
		const selectOption = document.querySelectorAll('option');
		selectOption[0].selected = true;

		// depositCheck.style.display = 'none';
		depositCheck.disabled = false;
		depositCheck.checked = false;
		depositBank.style.display = 'none';
		depositAmount.style.display = 'none';
		//periodSelect equal to 1
		periodSelect.value = 1;
		periodAmountText.textContent = periodSelect.value;
		// Enable Range Slider
		const inputRang = document.querySelector('.period-select');
		//periodSelect.disabled
		inputRang.disabled = false;

		//Reset to zero all keys data of appData object
		this.budget = 0;
		this.budgetDay = 0;
		this.budgetMonth = 0;
		this.income = {};
		this.incomeMonth = 0;
		this.addIncome = [];
		this.expenses = {};
		this.expensesMonth = 0;
		this.addExpenses = [];
		this.deposit = false;
		this.percentDeposit = 0;
		this.moneyDeposit = 0;

		//Reset to zero all keys data of appData object
		incomePlus.addEventListener('click', this.createBlocks);
		expensesPlus.addEventListener('click', this.createBlocks);
		periodSelect.removeEventListener('mousemove', this.getIncomePeriodValue);

		let elements = document.querySelectorAll('.income-items');

		for (let i = 1; i < elements.length; i++) {
			elements[i].parentNode.removeChild(elements[i]);
		}

		elements = document.querySelectorAll('.expenses-items');
		for (let i = 1; i < elements.length; i++) {
			elements[i].parentNode.removeChild(elements[i]);
		}

		start.setAttribute('disabled', false);
	}
	getInfoDeposit() {
		if (this.deposit) {
			this.percentDeposit = +depositPercent.value;
			this.moneyDeposit = depositAmount.value;
			console.log(typeof(this.percentDeposit));
			console.log(this.percentDeposit);
			while (isNaN(depositPercent.value) || depositPercent.value <= 0 || depositPercent.value > 100)  {
				alert('Введите корректное значение в поле проценты'); break;
			}
			// if (isNaN(depositPercent.value) || depositPercent.value <= 0 || depositPercent.value > 100) {
			// 	return alert('Введите корректное значение в поле проценты');
			// }
			// do {
			// 	alert('Введите корректное значение в поле проценты'); break;
			// } while (depositPercent.value > 0 || depositPercent.value < 100);
		}
		this.fieldValidation();
	}
	changePercent() {
		const valueSelect = this.value;
		if (valueSelect === 'other') {
			depositPercent.value = '';
			depositPercent.style.display = 'inline-block';
		} else {
			depositPercent.style.display = 'none';
			depositPercent.value = valueSelect;
		}
	}
	dpeositHandler() {
		if (depositCheck.checked) {
			depositBank.style.display = 'inline-block';
			depositAmount.style.display = 'inline-block';
			this.deposit = true;
			depositBank.addEventListener('change', this.changePercent);
		} else {
			depositBank.style.display = 'none';
			depositAmount.style.display = 'none';
			depositBank.value = '';
			depositAmount.value = '';
			this.deposit = false;
			depositBank.removeEventListener('change', () => { this.changePercent; });
		}
	}

	eventsListeners() {
		this.fieldValidation();
		start.addEventListener('click', this.start.bind(this));
		cancelButton.addEventListener('click', this.resetAll.bind(this));
		periodSelect.addEventListener('input', this.updateSliderRange.bind(this));
		expensesPlus.addEventListener('click', this.createBlocks);
		incomePlus.addEventListener('click', this.createBlocks);

		salaryAmount.addEventListener('input', () => {
			if (salaryAmount.value !== '') {
				start.disabled = false;
			} else {
				start.disabled = true;
			}
		});

		depositCheck.addEventListener('change', this.dpeositHandler.bind(this));

	}
}

const appData = new AppData();
appData.eventsListeners();
