function getTimeRemaining(endtime) {
	const t = Date.parse(endtime) - Date.parse(new Date());
	const seconds = Math.floor((t / 1000) % 60);
	const minutes = Math.floor((t / 1000 / 60) % 60);
	const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	const days = Math.floor(t / (1000 * 60 * 60 * 24));
	return {
		'total': t,
		days,
		hours,
		minutes,
		seconds
	};
}

function initializeClock(id, endtime) {
	const clock = document.getElementById(id);
	const daysSpan = clock.querySelector('.days');
	const hoursSpan = clock.querySelector('.hours');
	const minutesSpan = clock.querySelector('.minutes');
	const secondsSpan = clock.querySelector('.seconds');

	function updateClock() {
		const t = getTimeRemaining(endtime);

		daysSpan.innerHTML = t.days;
		hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
		minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
		secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

		if (t.total <= 0) {
			clearInterval(timeinterval);
		}
	}

	updateClock();
	var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
initializeClock('countdown', deadline);
// 'use strict';
// window.addEventListener('DOMContentLoaded', () => {

// 	function countTimer(deadline) {
// 		const timerHours = document.querySelector('#timer-hours'),
// 			timerMinutes = document.querySelector('#timer-minutes'),
// 			timerSeconds = document.querySelector('#timer-seconds');

// 		function getTimeRemaining() {
// 			const dateStop = new Date(deadline).getTime(),
// 				dateNow = new Date().getTime(),
// 				timeRemaining = (dateStop - dateNow) / 1000,
// 				seconds = Math.floor(timeRemaining % 60),
// 				minutes = Math.floor((timeRemaining / 60) % 60),
// 				hours = Math.floor(timeRemaining / 60 / 60);

// 			return { timeRemaining, hours, minutes, seconds };
// 		}

// 		const format = value => { if (value < 10) { value = '0' + value; } return value; };

// 		const timerId = setInterval(() => {
// 			const timer = getTimeRemaining();
// 			timerHours.textContent = format(timer.hours);
// 			timerMinutes.textContent = format(timer.minutes);
// 			timerSeconds.textContent = format(timer.seconds);

// 			if (timer.timeRemaining < 0) {
// 				clearInterval(timerId);
// 				timerHours.textContent = '00';
// 				timerMinutes.textContent = '00';
// 				timerSeconds.textContent = '00';
// 			}
// 		}, 1000);
// 	}
// 	countTimer('22 april 2020');

// });

// // console.log(6 + 45.85 + 78.69 + 45.27 + 15.96 + 6.00 + 7.04 + 41.41 + 1533.65);
// // console.log(2125.81 - (6 + 45.85 + 78.69 + 45.27 + 15.96 + 6.00 + 7.04 + 41.41 + 1533.65 + 240));

