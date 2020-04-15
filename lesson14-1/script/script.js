'use sctrict';
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
     acumulateMonthValue = document.getElementsByClassName('acumulate_month-value')[0],
     additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
     additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
     incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
     targetMonthValue = document.getElementsByClassName('target_month-value')[0],
     salaryAmount = document.querySelector('.salary-amount'),     incomeTitle = document.querySelector('.income-title'),
     expensesTitle = document.querySelector('.expenses-title'),
     expensesItems = document.querySelectorAll('.expenses-items'),
     incomeItems = document.querySelectorAll('.income-items'),
     additionalExpenses = document.querySelector('.additional_expenses'),
     periodSelect = document.querySelector('.period-select'),
     additionalExpensesItem = document.querySelector('.additional_expenses-item'),
     targetAmount = document.querySelector('.target-amount'),
     incomeItem = document.querySelectorAll('.income-items'),
     periodAmountText = document.getElementsByClassName('period-amount'),
     getLeftFields = document.querySelector('.data'),
     leftFields = getLeftFields.querySelectorAll("input[type=text]"),
     rightInputField = document.querySelector('.result');

//Disable Start button and check is it empty
start.setAttribute('disabled', true);

function domElement(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
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
  this.budget = Math.ceil(+salaryAmount.value);   
  this.getExpenses();
  this.getIncome();
  this.getExpensesMonth();
  this.getAddExpenses();
  this.getAddIncome();
  this.getBudget();       
  // New methods Reset Fields & Form fields validation
  // this.fieldValidation();   
  this.resetFields();
  this.showResult();
},

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

AppData.prototype.fieldValidation = function () {  
  let inputRuEnString = document.querySelectorAll('[placeholder="Наименование"]'),
      inputNumber = document.querySelectorAll('[placeholder="Сумма"]');
    
  inputRuEnString.forEach(items => {  
    items.addEventListener('input', ()=> {  
      items.value = items.value.replace(/[^A-zА-яёЁ ,.!]/,'');  
    },this);  
  });
  
  inputNumber.forEach(items => {  
    items.addEventListener('input', ()=> {  
      items.value = items.value.replace(/[^0-9]/,'');  
    },this);  
  });   
return this;
};

AppData.prototype.addExpensesBlock = function () { 
  let cloneExpensesItems = expensesItems[0].cloneNode(true),
      clearTitleField = cloneExpensesItems.querySelector('.expenses-title'),
      cloneAmountField = cloneExpensesItems.querySelector('.expenses-amount'); 

  // Clearing fields
  clearTitleField.value = '';
  cloneAmountField.value = '';  
  expensesItems[0].parentNode.insertBefore(cloneExpensesItems, expensesPlus);
  expensesItems = document.querySelectorAll('.expenses-items');  

  if(expensesItems.length === 3) {
      expensesPlus.style.display = 'none';
  } 
  appData.fieldValidation();
};

AppData.prototype.getExpenses = function () {  
  expensesItems.forEach(function (item) {
    let itemExpenses = item.querySelector('.expenses-title').value;
    let cashExpenses = item.querySelector('.expenses-amount').value;  
    if (itemExpenses !== '' && cashExpenses !== '') {
        this.expenses[itemExpenses] = cashExpenses;
    }
  }, this);  
};

AppData.prototype.addIncomeBlock = function () {                   
  let cloneIncomeItems = incomeItems[0].cloneNode(true),
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
  appData.fieldValidation();
};

AppData.prototype.getIncome = function () {  
  incomeItems.forEach(function (item) {
      let incomeTitle = item.querySelector('.income-title').value;
      let incomeAmount = item.querySelector('.income-amount').value;  
      if (incomeTitle !== '' && incomeAmount !== '') {
          this.expenses[incomeTitle] = incomeAmount;
      }
  },this);

  for (let key in this.income) {
      this.incomeMonth += this.income[key];
  }  
};

AppData.prototype.getAddExpenses = function () {  
  let addExpenses = additionalExpensesItem.value.split(',');
  addExpenses.forEach(function (item) {   
    item = item.trim();  
    if (item !== '') {
        this.addExpenses.push(item);
    }  
  }, this);  
};

AppData.prototype.getAddIncome = function () {  
  additionalIncomeItem.forEach(function(item) {  
    let itemValue = item.value.trim();  
    if (itemValue !== '') {  
      this.addIncome.push(itemValue);  
    }  
  }, this);
};

AppData.prototype.getExpensesMonth = function () {  
  for (let key in this.expenses) {
    this.expensesMonth += +this.expenses[key];
  }  
};

AppData.prototype.getBudget = function () {  
  this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
  this.budgetDay = Math.ceil(this.budgetMonth / 30);  
};

AppData.prototype.getTargetMonth = function () {  
  return targetAmount.value / this.budgetMonth;                              
};

AppData.prototype.calculateSavedMoney = function () {  
  return this.budgetMonth * periodSelect.value;  
};

AppData.prototype.updateSliderRange = function () {  
  let sliderNumber = document.querySelector('.period-select').value;
  let updateSliderText = document.querySelector('.period-amount');
      updateSliderText.innerHTML = sliderNumber;
      
  //updateInputIncomeSummary = sliderNumber;
  let getCurrentNumber = this.budgetMonth;
  let liveUpdateIncomeNumber = sliderNumber * getCurrentNumber;
      incomePeriodValue.value = liveUpdateIncomeNumber;
};

AppData.prototype.resetFields = function() {  
  let dataLeftInputs = document.querySelector('.data');
  let getLeftFields = dataLeftInputs.querySelectorAll("input[type=text]");  

  getLeftFields.forEach(function(item, index) {  
      item.setAttribute('disabled', '');
  
  });
  
  start.style.display = 'none';
  
  cancelButton.style.display = 'inline';
  incomePlus.removeEventListener('click', this.addIncomeBlock);
  expensesPlus.removeEventListener('click', this.addExpensesBlock);
  let inputRang = document.querySelector('.period-select');
  inputRang.disabled = true;
};

AppData.prototype.resetAll = function () {  
  // Get & Create variables of left input Fields
  let inputs = document.querySelectorAll('input'),
      periodAmountText = document.querySelector('.period-amount');  
  // Reset fields to zero
  leftFields.forEach(item => {item.value = ''; item.disabled = false;});  
  inputs.forEach(element => {element.value = '';});  
  cancelButton.style.display = 'none';
  start.style.display = 'inline';                                              
  expensesPlus.style.display = 'inline';
  incomePlus.style.display = 'inline';
  
  depositCheck.checked = false;  
  //periodSelect equal to 1
  periodSelect.value = 1;
  periodAmountText.textContent = periodSelect.value;  
  // Enable Range Slider
  let inputRang = document.querySelector('.period-select');  
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

  start.setAttribute('disabled', true);
};

appData.prototype.eventsListeners = function () {

  rangePeriod.addEventListener('input', function () {
    periodAmount.innerHTML = rangePeriod.value;
  });

  сalculationBtn.addEventListener('click', this.сalculationBtn.bind(this));
  userQuit.addEventListener('click', this.reset.bind(this));
  plusExp.addEventListener('click', this.addExpensesBlock.bind(this));
  plusInc.addEventListener('click', this.addIncomeBlock.bind(this));

};

const newAppData = new appData();

newAppData.eventsListeners();