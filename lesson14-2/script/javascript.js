/* eslint-disable prefer-const */
'use strict';

let  start = document.getElementById('start'),
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
	expensesItems = document.querySelectorAll('.expenses-items'),
	incomeItems = document.querySelectorAll('.income-items'),
	periodSelect = document.querySelector('.period-select'),
	additionalExpensesItem = document.querySelector('.additional_expenses-item'),
	targetAmount = document.querySelector('.target-amount'),
	getLeftFields = document.querySelector('.data'),
	leftFields = getLeftFields.querySelectorAll("input[type=text]");

const fieldValidation = () => {
	const inputRuEnString = document.querySelectorAll('[placeholder="Наименование"]'),
		inputNumber = document.querySelectorAll('[placeholder="Сумма"]');

	inputRuEnString.forEach(items => {
		items.addEventListener('input', () => {
			items.value = items.value.replace(/[^A-zА-яёЁ ,.!]/, '');
		}, this);
	});

	inputNumber.forEach(items => {
		items.addEventListener('input', () => {
			items.value = items.value.replace(/[^0-9]/, '');
		}, this);
	});
	return this;
};

const AppData = function() {
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
};

AppData.prototype.start = function() {
	if (salaryAmount.value === '') {
		startBtn.disabled = true;
		return;
	}
	this.budget = Math.ceil(+salaryAmount.value);
	this.getExpenses();
	this.getIncome();
	this.getExpensesMonth();
	this.getAddExpenses();
	this.getAddIncome();
	this.getBudget();
	this.resetFields();
	this.showResult();
};

AppData.prototype.showResult = function() {
	budgetMonthValue.value = this.budgetMonth;
	budgetDayValue.value = this.budgetDay;
	expensesMonthValue.value = this.expensesMonth;
	additionalExpensesValue.value = this.addExpenses.join(', ');
	additionalIncomeValue.value = this.addIncome.join(', ');
	targetMonthValue.value = Math.ceil(this.getTargetMonth());
	incomePeriodValue.value = this.calculateSavedMoney();
	periodSelect.addEventListener('mousemove', this.getIncomePeriodValue);
};

AppData.prototype.addExpensesBlock = function() {
	const cloneExpensesItems = expensesItems[0].cloneNode(true),
		clearTitleField = cloneExpensesItems.querySelector('.expenses-title'),
		cloneAmountField = cloneExpensesItems.querySelector('.expenses-amount');

	// Clearing fields
	clearTitleField.value = '';
	cloneAmountField.value = '';
	expensesItems[0].parentNode.insertBefore(cloneExpensesItems, expensesPlus);
	expensesItems = document.querySelectorAll('.expenses-items');

	if (expensesItems.length === 3) {
		expensesPlus.style.display = 'none';
	}
	fieldValidation();
};

AppData.prototype.getExpenses = function() {
	expensesItems.forEach(function(item) {
		const itemExpenses = item.querySelector('.expenses-title').value;
		const cashExpenses = item.querySelector('.expenses-amount').value;
		if (itemExpenses !== '' && cashExpenses !== '') {
			this.expenses[itemExpenses] = cashExpenses;
		}
	}, this);
};

AppData.prototype.addIncomeBlock = function() {
	const cloneIncomeItems = incomeItems[0].cloneNode(true),
		clearTitleField = cloneIncomeItems.querySelector('.income-title'),
		cloneAmountField = cloneIncomeItems.querySelector('.income-amount');

	// Clearing fields
	clearTitleField.value = '';
	cloneAmountField.value = '';

	incomeItems[0].parentNode.insertBefore(cloneIncomeItems, incomePlus);
	incomeItems = document.querySelectorAll('.income-items');

	if (incomeItems.length === 3) {
		incomePlus.style.display = 'none';
	}
	fieldValidation();
};

AppData.prototype.getIncome = function() {
	incomeItems.forEach(function(item) {
		const incomeTitle = item.querySelector('.income-title').value;
		const incomeAmount = item.querySelector('.income-amount').value;
		if (incomeTitle !== '' && incomeAmount !== '') {
			this.expenses[incomeTitle] = incomeAmount;
		}
	}, this);

	for (const key in this.income) {
		this.incomeMonth += this.income[key];
	}
};

AppData.prototype.getAddExpenses = function() {
	const addExpenses = additionalExpensesItem.value.split(',');
	addExpenses.forEach(function(item) {
		item = item.trim();
		if (item !== '') {
			this.addExpenses.push(item);
		}
	}, this);
};

AppData.prototype.getAddIncome = function() {
	additionalIncomeItem.forEach(function(item) {
		const itemValue = item.value.trim();
		if (itemValue !== '') {
			this.addIncome.push(itemValue);
		}
	}, this);
};

AppData.prototype.getExpensesMonth = function() {
	for (const key in this.expenses) {
		this.expensesMonth += +this.expenses[key];
	}
};

AppData.prototype.getBudget = function() {
	this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
	this.budgetDay = Math.ceil(this.budgetMonth / 30);
};

AppData.prototype.getTargetMonth = function() {
	return targetAmount.value / this.budgetMonth;
};

AppData.prototype.calculateSavedMoney = function() {
	return this.budgetMonth * periodSelect.value;
};

AppData.prototype.updateSliderRange = function() {
	const sliderNumber = document.querySelector('.period-select').value;
	const updateSliderText = document.querySelector('.period-amount');
	updateSliderText.innerHTML = sliderNumber;

	//updateInputIncomeSummary = sliderNumber;
	const getCurrentNumber = this.budgetMonth;
	const liveUpdateIncomeNumber = sliderNumber * getCurrentNumber;
	incomePeriodValue.value = liveUpdateIncomeNumber;
};

AppData.prototype.resetFields = function() {
	const dataLeftInputs = document.querySelector('.data');
	const getLeftFields = dataLeftInputs.querySelectorAll("input[type=text]");

	getLeftFields.forEach(item => {
		item.setAttribute('disabled', '');
	});

	start.style.display = 'none';
	cancelButton.style.display = 'inline';
	incomePlus.removeEventListener('click', this.addIncomeBlock);
	expensesPlus.removeEventListener('click', this.addExpensesBlock);
	const inputRang = document.querySelector('.period-select');
	inputRang.disabled = true;
};

AppData.prototype.resetAll = function() {
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

	depositCheck.checked = false;
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
	incomePlus.addEventListener('click', this.addIncomeBlock);
	expensesPlus.addEventListener('click', this.addExpensesBlock);
	periodSelect.removeEventListener('mousemove', this.getIncomePeriodValue);

	let elements = document.querySelectorAll('.income-items');

	for (let i = 1; i < elements.length; i++) {
		elements[i].parentNode.removeChild(elements[i]);
	}
	console.log(elements[0]);

	elements = document.querySelectorAll('.expenses-items');
	for (let i = 1; i < elements.length; i++) {
		elements[i].parentNode.removeChild(elements[i]);
	}
	console.log(elements[0]);

	start.setAttribute('disabled', false);
};

AppData.prototype.eventsListeners = function() {
	fieldValidation();
	start.addEventListener('click', this.start.bind(this));
	cancelButton.addEventListener('click', this.resetAll.bind(this));
	periodSelect.addEventListener('input', this.updateSliderRange.bind(this));
	expensesPlus.addEventListener('click', this.addExpensesBlock);
	incomePlus.addEventListener('click', this.addIncomeBlock);

	salaryAmount.addEventListener('input', () => {
		if (salaryAmount.value !== '') {
			start.disabled = false;
		} else {
			start.disabled = true;
		}
	});
};

const appData = new AppData();
appData.eventsListeners();
console.log(appData);
