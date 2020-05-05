/* eslint-disable strict */
window.addEventListener("DOMContentLoaded", () => {
	"use strict";

	const countTimer = deadline => {
		const timerHours = document.querySelector("#timer-hours"),
			timerMinutes = document.querySelector("#timer-minutes"),
			timerSeconds = document.querySelector("#timer-seconds");

		const getTimeRemaining = () => {
			const dateStop = new Date(deadline).getTime(),
				dateNow = new Date().getTime(),
				timeRemaining = (dateStop - dateNow) / 1000,
				seconds = Math.floor(timeRemaining % 60),
				minutes = Math.floor((timeRemaining / 60) % 60),
				hours = Math.floor(timeRemaining / 60 / 60);

			return {
				timeRemaining,
				hours,
				minutes,
				seconds,
			};
		};

		const format = value => {
			if (value < 10) {
				value = "0" + value;
			}
			return value;
		};

		const timerId = setInterval(() => {
			const timer = getTimeRemaining();
			timerHours.textContent = format(timer.hours);
			timerMinutes.textContent = format(timer.minutes);
			timerSeconds.textContent = format(timer.seconds);

			if (timer.timeRemaining < 0) {
				clearInterval(timerId);
				timerHours.textContent = "00";
				timerMinutes.textContent = "00";
				timerSeconds.textContent = "00";
				const deadline = new Date(Date.parse(new Date()) + 24 * 60 * 60 * 1000);
				countTimer(deadline);
			}
		}, 1000);
	};
	// countTimer('Put your time');
	countTimer("21 april 2020");

	// Main navigation
	const menu = document.querySelector("menu");
	const togglleMenu = () => {
		document.body.addEventListener("click", event => {
			const target = event.target;
			if (target && target.closest(".menu")) {
				menu.classList.add("active-menu");
			} else if (
				target &&
        (target.tagName === "A" || !target.classList.contains("active-menu"))
			) {
				menu.classList.remove("active-menu");
			}
		});
	};
	togglleMenu();

	// Menu slow mo
	const smoothScroll = () => {
		const menuList = document.querySelectorAll('li>a[href*="#"]');
		const arrow = document.querySelector("a>img");

		menuList.forEach(eachElements => {
			eachElements.addEventListener("click", event => {
				event.preventDefault();
				const gotId = eachElements.getAttribute("href");
				document.querySelector("" + gotId).scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			});
		});

		// Arrow scroll
		arrow.addEventListener("click", () => {
			event.preventDefault();
			arrow.scrollIntoView({ behavior: "smooth", block: "start" });
		});
	};
	smoothScroll();

	// Modal window
	const modalToggle = () => {
		const modalCloseButton = document.querySelector(".popup-close"),
			modalCTA = document.querySelectorAll(".popup-btn"),
			modal = document.querySelector(".popup");

		modalCTA.forEach(element => {
			element.addEventListener("click", () => {
				modal.style.display = "block";
			});
		});

		modal.addEventListener("click", event => {
			let target = event.target;

			if (target.classList.contains("popup-close")) {
				modal.style.display = "none";
			} else {
				target = target.closest(".popup-content");
				if (!target) {
					modal.style.display = "none";
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
					modal.style.opacity = "1";
					clearInterval(stop);
					document.body.style.cssText = `overflow: hidden;`;
				}
			};
			const stop = setInterval(appear, 35);
		};
		modalCTA.forEach(output => output.addEventListener("click", modalSlowMo));
		modalCloseButton.addEventListener("click", () => {
			modal.style.cssText = `display: none;`;
			document.body.style.cssText = `overflow: scroll;`;
		});
	};
	modalToggle();

	// Our Services block
	const serviceBlock = () => {
		const tabHeader = document.querySelector(".service-header");
		const tab = tabHeader.querySelectorAll(".service-header-tab");
		const tabContent = document.querySelectorAll(".service-tab");

		const ToggleTabContent = index => {
			for (let i = 0; i < tabContent.length; i++) {
				if (index === i) {
					tab[i].classList.add("active");
					tabContent[i].classList.remove("d-none");
				} else {
					tab[i].classList.remove("active");
					tabContent[i].classList.add("d-none");
				}
			}
		};

		tabHeader.addEventListener("click", event => {
			let target = event.target;
			target = target.closest(".service-header-tab");
			if (target.classList.contains("service-header-tab")) {
				tab.forEach((item, i) => {
					if (item === target) {
						ToggleTabContent(i);
					}
				});
			}
		});
	};
	serviceBlock();

	// Portfolio Image Slider Scroll
	const slider = () => {
		const slide = document.querySelectorAll(".portfolio-item"),
			btn = document.querySelectorAll(".portfolio-btn"),
			slider = document.querySelector(".portfolio-content"),
			dotsParrent = document.querySelector(".portfolio-dots");

		let currentSlide = 0,
			interval,
			dot;

		// Create dot html elements
		const addDots = () => {
			for (let i = 0; i < slide.length; i++) {
				const element = document.createElement("li");
				element.classList.add("dot");
				dotsParrent.appendChild(element);
			}

			dot = document.querySelectorAll(".dot");

			dot[0].classList.add("dot-active");
			slide[0].classList.add("portfolio-item-active");
		};
		addDots();

		const prevSlide = (elem, index, strClass) => {
			elem[index].classList.remove(strClass);
		};

		const nextSlide = (elem, index, strClass) => {
			elem[index].classList.add(strClass);
		};

		const autoPlay = () => {
			prevSlide(slide, currentSlide, "portfolio-item-active");
			prevSlide(dot, currentSlide, "dot-active");
			currentSlide++;
			if (currentSlide >= slide.length) {
				currentSlide = 0;
			}
			nextSlide(slide, currentSlide, "portfolio-item-active");
			nextSlide(dot, currentSlide, "dot-active");
		};

		const startPlay = (time = 3000) => {
			interval = setInterval(autoPlay, time);
		};

		const stopPlay = () => {
			clearInterval(interval);
		};

		slider.addEventListener("click", event => {
			event.preventDefault();
			const target = event.target;

			if (!target.matches(".portfolio-btn, .dot")) {
				return;
			}

			prevSlide(slide, currentSlide, "portfolio-item-active");
			prevSlide(dot, currentSlide, "dot-active");

			if (target.matches("#arrow-right")) {
				currentSlide++;
			} else if (target.matches("#arrow-left")) {
				currentSlide--;
			} else if (target.matches(".dot")) {
				dot.forEach((elem, index) => {
					if (elem === target) {
						currentSlide = index;
					}
				});
			}

			if (currentSlide >= slide.length) {
				currentSlide = 0;
			}

			if (currentSlide < 0) {
				currentSlide = slide.length - 1;
			}

			nextSlide(slide, currentSlide, "portfolio-item-active");
			nextSlide(dot, currentSlide, "dot-active");
		});

		slider.addEventListener("mouseover", event => {
			if (
				event.target.matches(".portfolio-btn") ||
        event.target.matches(".dot")
			) {
				stopPlay();
			}
		});

		slider.addEventListener("mouseout", event => {
			if (
				event.target.matches(".portfolio-btn") ||
        event.target.matches(".dot")
			) {
				startPlay();
			}
		});

		startPlay(1500);
	};
	slider();

	// Form validation
	const formValidation = () => {
		// Calculator amount block
		const input = document.querySelectorAll('input[class*="calc-item calc"]');
		input.forEach(item => {
			item.addEventListener("input", () => {
				item.value = item.value.replace(/\D/g, "");
			});
		});
	};
	formValidation();

	// Our team block
	const ourTeamPic = () => {
		const getTeamImage = document.querySelectorAll(".command__photo");
		let src;

		getTeamImage.forEach(image => {
			image.addEventListener("mouseenter", event => {
				src = event.target.getAttribute("src");
				event.target.src = event.target.dataset.img;
			});
			image.addEventListener("mouseleave", event => {
				event.target.src = src;
			});
		});
	};
	ourTeamPic();

	// Interior calculator block
	const calculatorBlock = (price = 100) => {
		const getBlockElement = document.querySelector(".calc-block"),
			getTypeElement = document.querySelector(".calc-type"),
			getSquareElement = document.querySelector(".calc-square"),
			getDayElement = document.querySelector(".calc-day"),
			getCountElement = document.querySelector(".calc-count"),
			getTotalElement = document.getElementById("total");

		// Run number slow motion
		const runNumber = input => {
			let interval,
				start = 0;

			clearInterval(interval);

			if (getTypeElement.options[getTypeElement.selectedIndex] === 0) {
				clearInterval(interval);
				start = 0;
			}

			const step = 50000;
			// seconds = 1;

			// let setTime = Math.round((seconds/(input/step))/1000);
			const setTime = Math.round(input / step / 1000);

			interval = setInterval(() => {
				start += input.toString().length;
				getTotalElement.textContent = start;
				if (start >= input) {
					getTotalElement.textContent = Math.round(input);
					clearInterval(interval);
				}
			}, setTime);
		};

		// Mathematics addition
		const addition = () => {
			let amount = 0,
				dayValue = 1,
				roomValue = 1;
			const addValue =
          getTypeElement.options[getTypeElement.selectedIndex].value,
				addSquare = +getSquareElement.value;

			if (getCountElement.value > 1) {
				roomValue += (getCountElement.value - 1) / 10;
			}

			if (getDayElement.value && getDayElement.value < 5) {
				dayValue *= 2;
			} else if (getDayElement.value && getDayElement.value < 10) {
				dayValue *= 1.5;
			}

			if (addValue && addSquare) {
				amount = price * addValue * addSquare * roomValue * dayValue;
			}

			// getTotalElement.textContent = amount;
			runNumber(amount);
		};

		// Check event from block
		getBlockElement.addEventListener("change", event => {
			const target = event.target;
			if (target.matches("select") || target.matches("input")) {
				addition();
			}
		});
	};
	calculatorBlock(100);

	// Send Form through AJAX function
	const sendForm = () => {
		const input = document.querySelectorAll("input");

		// Validation Messages
		const errorMessage = "Something went wrong...",
			successMessage = "Message successfully sent!",
			loadMessage = "Loading...";

		// Get form
		const forms = document.querySelectorAll("form");

		// Status Message
		const statusMessage = document.createElement("div");
		statusMessage.classList.add("status-message");
		statusMessage.style.cssText = `font: normal 2rem Roboto; color: white;`;
		// statusMessage.textContent = 'Statu Message Text Goes Here';

		// Parse all forms and went through event handler
		forms.forEach(form => {
			form.addEventListener("submit", event => {
				event.preventDefault();
        form.appendChild(statusMessage);
        
				// After click on send CTA show >> Loading message...
        // statusMessage.textContent = loadMessage;
        
        // After click on send button > show preloader ...
        const preloader = () => {
          return (`
            <div class="preloader">
              <img class="papa" src="https://cdn.discordapp.com/attachments/691908252677439488/707284938767990784/svg_preloader.svg"></img>
            </div>
          `);
        };
        statusMessage.innerHTML = preloader();

				// Prepare object
				const formData = new FormData(form);
				const body = {};
				formData.forEach((value, key) => (body[key] = value));
				postData(
					body,
					() => {
						statusMessage.textContent = successMessage;

						// Clear all inputs after message was sent
						input.forEach(input => (input.value = ""));
					},
					error => {
						statusMessage.textContent = errorMessage;
						console.error(error);
					}
				);
			});

			// Input filter validation handler
			form.addEventListener("input", event => {
				const target = event.target,
					sendButton = document.querySelector(".btn");

				const addStyles = () => {
					target.style.cssText = `border: 1px solid red`;
					form.appendChild(statusMessage);
					statusMessage.textContent =
            "You have entered an insufficient number of digits, must be from 8 up to 12 numbers";
					statusMessage.style.cssText = `color: #E25741;`;
				};

				const resetStyles = () => {
					statusMessage.remove();
					sendButton.disabled = false;
					target.style.cssText = `border: auto;`;
					statusMessage.style.cssText = `color: #FFFFFF;`;
				};

				// Name Field
				if (target.name === "user_name") {
					target.value = target.value.replace(/[^A-z-]/gi, "");
				}
				// Email Field
				if (target.name === "user_email") {
					target.value = target.value.replace(/^\w+@\w+\.\w{4,}$/gi, "");
				}
				// Phone# Field
				if (target.name === "user_phone") {
					// Minium letters, hilight error message + hilight input
					if (target.value.length <= 8) {
						sendButton.disabled = true;
						addStyles();
					}
					if (target.value.length > 8) {
						resetStyles();
					}
					// Limitation of typing plus(+) button
					if (!/^\+?(\d){0,18}$/g.test(target.value)) {
						target.value = target.value.substring(0, target.value.length - 1);
					}
					// If field is empty reset all styles
					if (target.value === "") {
						resetStyles();
					}
				}
				// Message Field
				if (target.name === "user_message") {
					target.value = target.value.replace(/[^A-z-!?\s]/gi, "");
				}
			});
		});

		// AJAX Connection setup
		const postData = (body, outputData, errorData) => {
			const request = new XMLHttpRequest();
			// When Status is equal = 1
			request.addEventListener("readystatechange", () => {
				if (request.readyState !== 4) {
					return;
				}
				if (request.status === 200) {
					outputData();
				} else {
					errorData(request.status);
				}
			});

			// Connection set-up
			request.open("POST", "./server.php");
			request.setRequestHeader(
				"Content-Type",
				"application/json; charset=utf-8"
			);
			request.send(JSON.stringify(body));
		};
	};
	sendForm();
});