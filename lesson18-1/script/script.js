'use strict';
function countTimer(deadline) {
	const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    timeOfDay = document.querySelector('.time-of-day'),
		timeDate = document.querySelector('.time-date'),
		currentTime = document.querySelector('.current-time'),
		leftDates = document.querySelector('.left-dates');

	function getTimeRemaining() {
		const date = new Date();
		const day = date.getDay() - 1;
		const localTime = date.toLocaleTimeString('ru');
		const dateStop = new Date(deadline).getTime();
		const dateNow = date.getTime();
		const timeRemaining = (dateStop - dateNow) / 1000;
		const stopDay = Math.floor(timeRemaining / 60 / 60 / 24);

		return { timeRemaining, day, localTime, stopDay };
	}

	function updateTime() {
		const timer = getTimeRemaining();

		// Priview day time
		for (let i = 0; i < week.length; i++) {
			if (i === timer.day) {
				timeDate.textContent = week[i];
			}
		}

		// Preview current time
		currentTime.textContent = timer.localTime;

		// Prview remaining dates to New Year
		leftDates.textContent = timer.stopDay;

		// время суток
		if (timer.localTime > 4 || timer.localTime < 12) {
			timeOfDay.textContent = 'Утро';
		} else if (timer.localTime > 12 || timer.localTime < 17) {
			timeOfDay.textContent = 'день';
		} else if (timer.localTime > 17 + 'AM' || timer.localTime < 24) {
			timeOfDay.textContent = 'вечер';
		} else if (timer.localTime > 24 || timer.localTime < 4) {
			timeOfDay.textContent = 'ночь';
		}

		if (timer.timeRemaining > 0) {
			setTimeout(updateTime, 1000);
		}

	}
	updateTime();
}

countTimer('1 january 2021');
