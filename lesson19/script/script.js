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
		}, 500);
	};
	// countTimer('22 april 2020');
  countTimer('21 april 2020');
  
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
			const requestId = requestAnimationFrame(animate);
			count += 4;
			menu.style.transform = `translate(${count}%)`;
			if (count === 0) {
				cancelAnimationFrame(requestId);
			}
		};

		const menuHandler = input => {
			menu.classList.toggle('active-menu');
		};

		// Smoothest glide for each elements which has anchors
		const smoothScroll = () => {
			const menuList = document.querySelectorAll('a[href*="#"]');
			// const menuList = document.querySelectorAll('li > a');
			menuList.forEach(eachElements => {
				eachElements.addEventListener('click', (event) => {
					event.preventDefault();
					const gotId = eachElements.getAttribute('href');
					document.querySelector('' + gotId).scrollIntoView({ behavior: 'smooth', block: 'start' });
				}); });
		};
		smoothScroll();

		menuCTA.addEventListener('click', menuHandler);
		closeCTA.addEventListener('click', menuHandler);
		menuList.forEach(output => { output.addEventListener('click', menuHandler); });

	}; toggleMenu();

	// Modal window
	const modalCTA = document.querySelectorAll('.popup-btn'),
		modalCloseButton = document.querySelector('.popup-close'),
		modal = document.querySelector('.popup');

	const modalToggle = () => {
		// Slow motion
		modal.style.cssText = `display: block; opacity: 0;`;
		let count = 0;
		const appear = () => {
			count++;
			modal.style.opacity = `.${count}`;

			if (count > 8) {
				modal.style.opacity = '1';
				clearInterval(stop);
			}
		};
		const stop = setInterval(appear, 35);
	};

	modalCTA.forEach(output => output.addEventListener('click', modalToggle));
	modalCloseButton.addEventListener('click', () => { modal.style.display = 'none'; });

});