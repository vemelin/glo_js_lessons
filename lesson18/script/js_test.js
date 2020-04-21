'use strict'

window.addEventListener('DOMContentLoaded', () => {

	function countTimer(deadline) {
		const timerHours = document.querySelector('#timer-hours'),
			timerMinutes = document.querySelector('#timer-minutes'),
			timerSeconds = document.querySelector('#timer-seconds');

		function getTimeRemaining() {
			const dateStop = new Date(deadline).getTime(),
				dateNow = new Date().getTime(),
				timeRemaining = (dateStop - dateNow) / 1000,
				seconds = Math.floor(timeRemaining % 60),
				minutes = Math.floor((timeRemaining / 60) % 60),
        hours = Math.floor(timeRemaining / 60 / 60);

			return { timeRemaining, hours, minutes, seconds };
		}

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
	}
	// countTimer('22 april 2020');
	countTimer('21 april 2020');
});