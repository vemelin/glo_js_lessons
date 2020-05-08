"use strict";

// Polyfills 
import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import 'fetch-polyfill';

// countTimer('Put your time');
import countTimer from './modules/countTimer';
countTimer("21 april 2020");

// Main navigation
import togglleMenu from './modules/toggleMenu';
togglleMenu();

// Main slow mo
import smoothScroll from './modules/smoothScroll';
smoothScroll();

// Modal window
import modalToggle from './modules/modalWindow';
modalToggle();

// Our Services block
import serviceBlock from './modules/ourServiceBlock';
serviceBlock();

// Portfolio Image Slider Scroll
import slider from './modules/imageSlider';
slider();

// Form validation
import formValidation from './modules/formValidation';
formValidation();

// Our team block
import ourTeamPic from './modules/ourTeamBlock';
ourTeamPic();

// Interior calculator block
import calculatorBlock from './modules/calculatorBlock';
calculatorBlock(100);

// Send Form through AJAX function
import sendForm from './modules/ajaxRequest';
sendForm();