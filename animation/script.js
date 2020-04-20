'use strict';

window.addEventListener("DOMContentLoaded", () => {

  const startCTA = document.querySelector('.start');
  const resetCTA = document.querySelector('.reset');
  const img = document.querySelector('img');
  img.style.cssText = 'position: relative; left: 0; margin: 50px 0 0 0;'

let flyInterval;
let count = 0;
let startAnimation = false;

let start = function() {
  flyInterval = requestAnimationFrame(start);
    count++;
      if (count < 150) {
        img.style.left = count * 2 + 'px';
      } else {
        count = 0;
      }
};

resetCTA.addEventListener('click', () => {
  count = 0;
  startAnimation = false;
  img.style.left = 0;
  cancelAnimationFrame(flyInterval);
});

  startCTA.addEventListener('click', function () {
    if (!startAnimation) {
      startAnimation = true;
      flyInterval = requestAnimationFrame(start);
    } else {
      startAnimation = false;
      cancelAnimationFrame(flyInterval);
    }
    
  });
});