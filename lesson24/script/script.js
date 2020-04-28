'use strict';

window.addEventListener('DOMContentLoaded', () => {

  const phone = document.getElementById('phone');
  const showlog = function () {
    this.value = this.value.replace(/\D/g, '');
  };
  
  phone.addEventListener('keydown', showlog);
  // phone.addEventListener('keyup', showlog);
  // phone.addEventListener('keypress', showlog);
  // phone.addEventListener('input', showlog);

});
