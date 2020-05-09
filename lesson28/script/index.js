import countTimer from './modules/countTimer';
import togglleMenu from './modules/toggleMenu';
import smoothScroll from './modules/smoothScroll';
import modalToggle from './modules/modalWindow';
import serviceBlock from './modules/ourServiceBlock';
import slider from './modules/imageSlider';
import ourTeamPic from './modules/ourTeamBlock';
import calculatorBlock from './modules/calculatorBlock';
import sendForm from './modules/ajaxRequest';

// Polyfills 
import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
import 'formdata-polyfill';
import 'fetch-polyfill';
import smoothscroll from 'smoothscroll-polyfill';
import 'element-remove';

elementClosest(window);
smoothscroll.polyfill();

// countTimer('Put your time');
countTimer("21 april 2020");

// Main navigation
togglleMenu();

// Main slow mo
smoothScroll();

// Modal window
modalToggle();

// Our Services block
serviceBlock();

// Portfolio Image Slider Scroll
slider();

// Our team block
ourTeamPic();

// Interior calculator block
calculatorBlock(100);

// Send Form through AJAX function
sendForm();