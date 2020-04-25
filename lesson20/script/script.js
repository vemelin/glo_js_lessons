'use strict'

window.addEventListener('DOMContentLoaded', () => {

	const countTimer = deadline => {
		const timerHours = document.querySelector('#timer-hours'),
			timerMinutes = document.querySelector('#timer-minutes'),
			timerSeconds = document.querySelector('#timer-seconds');

		const getTimeRemaining = () => {
			const dateStop = new Date(deadline).getTime(),
				dateNow = new Date().getTime(),
				timeRemaining = (dateStop - dateNow) / 1000,
				seconds = Math.floor(timeRemaining % 60),
				minutes = Math.floor((timeRemaining / 60) % 60),
        hours = Math.floor(timeRemaining / 60 / 60);

			return { timeRemaining, hours, minutes, seconds };
		};

		const format = value => { if (value < 10) { value = '0' + value; } return value; };

		const timerId = setInterval(() => {
			const timer = getTimeRemaining();
			timerHours.textContent = format(timer.hours);
			timerMinutes.textContent = format(timer.minutes);
			timerSeconds.textContent = format(timer.seconds);

			if (timer.timeRemaining < 0) {
        clearInterval(timerId);
				timerHours.textContent = '00';
				timerMinutes.textContent = '00';
				timerSeconds.textContent = '00';
        let deadline = new Date(Date.parse(new Date()) + 24 * 60 * 60 * 1000);;
        countTimer(deadline);
			}
		}, 1000);
	};
	// countTimer('Put your time');
  countTimer('21 april 2020');
  
  // Main navigation
  const togglleMenu = () => {
    const menu = document.querySelector('menu');
      document.body.addEventListener('click', (event) =>{
          let target = event.target;
          if(target && target.closest('.menu')){
             menu.classList.add('active-menu');
          } else if ( target && (target.tagName === 'A' || !target.classList.contains('active-menu'))){
              menu.classList.remove('active-menu');
          }
      });
  };
  togglleMenu();


	// Menu slow mo
	const smoothScroll = () => {
		const menuList = document.querySelectorAll('li>a[href*="#"]');
		const arrow = document.querySelector('a>img');
    
		menuList.forEach(eachElements => {
			eachElements.addEventListener('click', event => {
				event.preventDefault();
				const gotId = eachElements.getAttribute('href');
				document.querySelector('' + gotId).scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
			});
		});

		// Arrow scroll
		arrow.addEventListener('click', () => {
			event.preventDefault();
			arrow.scrollIntoView({ behavior: 'smooth', block: 'start' });
		});

	};
  smoothScroll();
  
		// Modal window
    const modalToggle = () => {
      const modalCloseButton = document.querySelector('.popup-close'),
        modalCTA = document.querySelectorAll('.popup-btn'),
        modal = document.querySelector('.popup');
  
      modalCTA.forEach(element => {
        element.addEventListener('click', () => {
          modal.style.display = 'block';
        });
      });
  
      modal.addEventListener('click', event => {
        let target = event.target;
  
        if (target.classList.contains('popup-close')) {
          modal.style.display = 'none';
        } else {
          target = target.closest('.popup-content');
          if (!target) {
            modal.style.display = 'none';
            document.body.style.cssText = `overflow: scroll;`;
          }
        }
  
      });
  
      // Slow motion
      const modalSlowMo = () => {
        modal.style.cssText = `display: block; opacity: 0;`;
        let count = 0;
        const appear = () => {
          count++;
          modal.style.opacity = `.${count}`;
  
          if (count > 8) {
            modal.style.opacity = '1';
            clearInterval(stop);
            document.body.style.cssText = `overflow: hidden;`;
          }
        };
        const stop = setInterval(appear, 35);
      };
      modalCTA.forEach(output => output.addEventListener('click', modalSlowMo));
      modalCloseButton.addEventListener('click', () => {
        modal.style.cssText = `display: none;`;
        document.body.style.cssText = `overflow: scroll;`;
      });
  
    };
    modalToggle();

  // Our Services block
  const serviceBlock = () => {
    const tabHeader = document.querySelector('.service-header');
    const tab = tabHeader.querySelectorAll('.service-header-tab');
    const tabContent = document.querySelectorAll('.service-tab');

    const ToggleTabContent = (index) => {
      for (let i = 0; i < tabContent.length; i++) {
        if (index === i) {
          tab[i].classList.add('active');
          tabContent[i].classList.remove('d-none');
        } else {
          tab[i].classList.remove('active');
          tabContent[i].classList.add('d-none');
        }
      }
    };

    tabHeader.addEventListener('click', (event) => {
      let target = event.target;
      target = target.closest('.service-header-tab');
        if (target.classList.contains('service-header-tab')) {
          tab.forEach((item, i) => {
            if (item === target) {
              ToggleTabContent(i);
            }
          });
        }
    });

  };
  serviceBlock();

});