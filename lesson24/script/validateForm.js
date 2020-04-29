'use strict';

class formValidator {
  constructor({selector, pattern, method}){
    this.form = document.querySelector(selector);
    this.pattern = pattern;
    this.method = method;
    this.formInputs = [...this.form.elements].filter( item => 
      item.tagName.toLowerCase() !== 'button' && item.type !== 'button'
    );
    this.error = new Set();
  }
  init(){
    this.addStyles();
    this.setPattern();
    this.formInputs.forEach(input => input.addEventListener('change', this.checkInputs.bind(this)));
    this.form.addEventListener('submit', event => {
      event.preventDefault();
      this.formInputs.forEach(input => this.checkInputs( {target: input} ));
      if(this.error.size){
        event.preventDefault();
      }
    });
  }
  isValid(element) {
    const validationMethod = {
      anEmpty(element){
        if(element.value.trim() === ''){
          return false;
        }
        return true;
      },
      pattern(element, pattern){
        return pattern.test(element.value);
      },
    };
    if(this.method) {
      const method = this.method[element.id];
      if(method) {
        return method.every(item => validationMethod[item[0]](element, this.pattern[item[1]]));
      }
    } else {
      console.warn('Need to provide ID of input fields and methods to check this fields')
    }
    return true;
  }
  checkInputs(event){
    const target = event.target;
    if(this.isValid(target)) {
      this.successStatus(target);
      this.error.delete(target)
    } else {
      this.errorStatus(target);
      this.error.add(target);
    }
  }
  errorStatus(input){
    input.classList.remove('success');
    input.classList.add('error');
    if(input.nextElementSibling && input.nextElementSibling.classList.contains('validator-error')){ return; }
    const errorBlock = document.createElement('div');
    // errorBlock.textContent = 'Before continue, you should fix field errors';
    errorBlock.classList.add('validator-error');
    input.insertAdjacentElement('afterend', errorBlock);
  }
  successStatus(input){
    input.classList.remove('error');
    input.classList.add('success');
    if(input.nextElementSibling && input.nextElementSibling.classList.contains('validator-error')) {
      input.nextElementSibling.remove();
    }
  }
  addStyles(){
    const style = document.createElement('style');
    style.textContent = `
      body form input.success { border: 1px solid green !important; }
      body form input.error { border: 1px solid red !important; }
      .validator-error { font-size: 10px; color: red; z-index: 1; position: relative;}
    `;
    document.head.appendChild(style);
  }
  setPattern(){
    if (!this.pattern.name) {     
      this.pattern.name = /^[а-яА-Я]+$/i;
    }
    if (!this.pattern.message) {     
      this.pattern.message = /^[а-яА-Я ]+$/i;
    }
    if(!this.pattern.phone) {
      this.pattern.phone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    }
    if(!this.pattern.email) {
      this.pattern.email = /^\w+@\w+\.\w{2,}$/;
    }
  }
}