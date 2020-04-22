'use strict';

window.addEventListener('DOMContentLoaded', () => {
  
  // Main navigation
  const toggleMenu = () => {
    const menuCTA = document.querySelector('.menu'),
    menu = document.querySelector('menu'),
    closeCTA = document.querySelector('.close-btn'),
    menuList = menu.querySelectorAll('ul>li');

      let count = -100;
      
      // Main navigation slow motion
      const animate = () => {
          if (document.documentElement.clientWidth < 768) {
              menu.style.transform = `translate(0)`;
              return;
          }
          let requestId = requestAnimationFrame(animate);
          count += 4;
          menu.style.transform = `translate(${count}%)`;
          if (count === 0) {
              cancelAnimationFrame(requestId);
          }
      };
    
      const menuHandler = (input) => {
        input.preventDefault();
        if (input.target.tagName === 'A' && input.target.className !== 'close-btn') {
          scrolling(evt.target);
        }
        
        if (!menu.style.transform || menu.style.transform === `translate(-100%)`) {
          count = -100;
          animate();
        } else {
          if (input.target.tagName === 'A') {
            menu.style.transform = `translate(-100%)`;
          }
        }  
      };
      
      // Smoothest glide for each elements which has anchors
      const smoothScroll = () => {
        const menuList = document.querySelectorAll('a[href*="#"]');
        // const menuList = document.querySelectorAll('li > a');

        menuList.forEach(eachElements => { eachElements.addEventListener('click', (event) => {

          event.preventDefault();
          const gotId = eachElements.getAttribute('href')
          
          document.querySelector('' + gotId).scrollIntoView({ behavior: 'smooth', block: 'start' })

        } ) });
      }; 
      smoothScroll();

      menuCTA.addEventListener('click', menuHandler);
      closeCTA.addEventListener('click', menuHandler);
      menuList.forEach(output => {output.addEventListener('click', menuHandler) });

  }; toggleMenu();
  
  // Modal window
  const modalCTA = document.querySelectorAll('.popup-btn'),
    modalCloseButton = document.querySelector('.popup-close'),
    modal = document.querySelector('.popup');

  const modalToggle = () => {
    // Slow motion
    modal.style.cssText = `display: block; opacity: 0;`
    const count = 0;
    const appear = () => {
        count++;
        modal.style.opacity = `.${count}`;

        if (count > 8) {
          modal.style.opacity = '1';
          clearInterval(stop);
        }
    };
    let stop = setInterval(appear, 35);      
  };

  modalCTA.forEach(output => output.addEventListener('click', modalToggle));
  modalCloseButton.addEventListener('click', () => { modal.style.display = 'none' });

});
