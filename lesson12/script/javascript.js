'use sctrict';

let isNum = function(number){
        return !isNaN(parseFloat(number)) && isFinite(number);
    };

let start = document.getElementById('start'),
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
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    incomeItems = document.querySelectorAll('.income-items'),
    additionalExpenses = document.querySelector('.additional_expenses'),
    periodSelect = document.querySelector('.period-select'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    incomeItem = document.querySelectorAll('.income-items'),
    periodAmountText = document.getElementsByClassName('period-amount');

    let getLeftFields = document.querySelector('.data'),
        leftFields = getLeftFields.querySelectorAll("input[type=text]"),
        rightInputField = document.querySelector('.result');

let appData = { 
    budget:                     0,
    budgetDay:                  0,
    budgetMonth:                0,
    income:                     {},
    incomeMonth:                0,
    addIncome:                  [],
    expenses:                   {},
    expensesMonth:              0,
    addExpenses:                [],
    deposit:                    false,
    percentDeposit:             0,
    moneyDeposit:               0,

    start:                      function () {
                                    

                                    if (!isNum(salaryAmount.value) || salaryAmount.value.trim() === '' || salaryAmount.value === null) {
                                        
                                        return;
                                    }

                                    this.budget = Math.ceil(+salaryAmount.value);

                                    // Required Methods to Call
                                    this.getExpenses();
                                    this.getIncome();
                                    this.getExpensesMonth();
                                    this.getAddExpenses();
                                    this.getAddIncome();
                                    this.getBudget();   

                                    this.resetALl();
                                    this.showResult();
                                    
                                },

    showResult:                 function () {

                                    budgetMonthValue.value = this.budgetMonth;
                                    budgetDayValue.value = this.budgetDay;
                                    expensesMonthValue.value = this.expensesMonth;
                                    additionalExpensesValue.value = this.addExpenses.join(', ');
                                    additionalIncomeValue.value = this.addIncome.join(', ');
                                    targetMonthValue.value = Math.ceil(this.getTargetMonth());
                                    incomePeriodValue.value = this.calculateSavedMoney();
 
                                },

    addExpensesBlock:           function () {

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
        
                                },

    getExpenses:                function () {

                                    expensesItems.forEach(function (item) {
                                       
                                        let itemExpenses = item.querySelector('.expenses-title').value;
                                        let cashExpenses = item.querySelector('.expenses-amount').value;

                                        if (itemExpenses !== '' && cashExpenses !== '') {
                                            this.expenses[itemExpenses] = cashExpenses;
                                        }
                                        
                                    }, this);

                                },

    addIncomeBlock:           function () {

                                    let cloneIncomeItems = incomeItems[0].cloneNode(true),
                                        clearTitleField = cloneIncomeItems.querySelector('.income-title'),
                                        cloneAmountField = cloneIncomeItems.querySelector('.income-amount');

                                        // Clearing fields
                                        clearTitleField.value = '';
                                        cloneAmountField.value = '';

                                        incomeItems[0].parentNode.insertBefore(cloneIncomeItems, incomePlus);
                                        incomeItems = document.querySelectorAll('.income-items');

                                        if(incomeItems.length === 3) {
                                            incomePlus.style.display = 'none';
                                        }
        
                                },

    getIncome:                   function () {

                                    incomeItems.forEach(function (item) {
                                                                
                                        let incomeTitle = item.querySelector('.income-title').value;
                                        let incomeAmount = item.querySelector('.income-amount').value;

                                        if (incomeTitle !== '' && incomeAmount !== '') {
                                            this.expenses[incomeTitle] = incomeAmount;
                                        }
                                        
                                    }, this);

                                    for (let key in this.income) {
                                        this.incomeMonth += this.income[key];
                                    }

                                },

    getAddExpenses:             function () {

                                    let addExpenses = additionalExpensesItem.value.split(',');
                                        addExpenses.forEach(function (item) { 

                                            item = item.trim();

                                            if (item !== '') {
                                                this.addExpenses.push(item);
                                            }

                                        }, this);

                                },

    getAddIncome:               function () {

                                    additionalIncomeItem.forEach(function(item) {

                                        let itemValue = item.value.trim();

                                            if (itemValue !== '') {

                                                this.addIncome.push(itemValue);

                                            }

                                    }, this);

                                },

    getExpensesMonth:           function () {

                                    for (let key in this.expenses) {
                                        this.expensesMonth += +this.expenses[key];
                                    }
                                    // return this.expensesMonth;

                                },

    getBudget:                  function () {

                                    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
                                    this.budgetDay = Math.ceil(this.budgetMonth / 30);

                                },

    getTargetMonth:             function () {

                                    return targetAmount.value / this.budgetMonth;
                                    
                                },

    calculateSavedMoney:        function () {
                                    return this.budgetMonth * periodSelect.value;

    },
    
    updateSliderRange:          function () {

                                    let sliderNumber = document.querySelector('.period-select').value;
                                    let updateSliderText = document.querySelector('.period-amount');
                                        updateSliderText.innerHTML = sliderNumber;
                                        
                                    //updateInputIncomeSummary = sliderNumber;
                                    let getCurrentNumber = this.budgetMonth;
                                    console.log(getCurrentNumber);
                                    let liveUpdateIncomeNumber = sliderNumber * getCurrentNumber;
                                        incomePeriodValue.value = liveUpdateIncomeNumber;
                                        
                                },



    resetALl:                   function() {

                                    let dataLeftInputs = document.querySelector('.data');
                                    let getLeftFields = dataLeftInputs.querySelectorAll("input[type=text]");

                                    getLeftFields.forEach(function(item, index) {

                                        item.setAttribute('disabled', '');
                                    
                                    });

                                    start.style.display = 'none';
                                    
                                    cancelButton.style.display = 'inline';
                                    incomePlus.removeEventListener('click', this.addIncomeBlock);
                                    expensesPlus.removeEventListener('click', this.addExpensesBlock);

                                },

    resetFields:                function () {

                                         // Get & Create variables of left input Fields
                                        let getLeftFields = document.querySelector('.data'),
                                            leftFields = getLeftFields.querySelectorAll('input[type=text]'),
                                            rightInputField = document.querySelector('.result'),
                                            updateSliderText = document.querySelector('.period-amount');

                                            // Reset fields to zero
                                            leftFields.forEach(function(item) {
                                            
                                                item.value = '';
                                                item.disabled = false;

                                            });
                                        
                                            leftFields = rightInputField.querySelectorAll('input[type=text]');

                                            leftFields.forEach(function(item) {

                                                item.value = '';
                                                item.disabled = false;
                                            
                                            });
                                    
                                            periodSelect.value = '1';
                                            updateSliderText.innerHTML = '1';
                                            cancelButton.style.display = 'none';
                                            start.style.display = 'inline';
                                            expensesPlus.style.display = 'inline';
                                            depositCheck.checked = false;

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
                                    
                                            incomePlus.addEventListener('click', appData.addIncomeBlock);
                                            expensesPlus.addEventListener('click', appData.addExpensesBlock);
                                            periodSelect.removeEventListener('mousemove', appData.getIncomePeriodValue);
                                    
                                            let elements = document.querySelectorAll('.income-items');

                                            for (let i = 1; i < elements.length; i++) {

                                                elements[i].parentNode.removeChild(elements[i]);

                                            }
                                        
                                            elements = document.querySelectorAll('.expenses-items');

                                            for (let i = 1; i < elements.length; i++) {

                                                elements[i].parentNode.removeChild(elements[i]);

                                            }
                                    
                                }
        

};

// Start programm

//start.addEventListener('click', appData.start);
start.addEventListener('click', appData.start.bind(appData));
periodSelect.addEventListener('input', appData.updateSliderRange.bind(appData));
expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);


// Reset fields
// let resetButton = appData.resetAll.bind(appData);
// cancelButton.addEventListener('click', resetButton);

cancelButton.addEventListener('click', appData.resetFields.bind(appData));