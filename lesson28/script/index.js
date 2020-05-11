// Polyfills
import 'url-polyfill';
import "regenerator-runtime/runtime";
import 'element-remove';
import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';
import elementClosest from 'element-closest';
import 'es6-promise';
import 'element-closest/browser';
import 'whatwg-fetch';
import "scroll-behavior-polyfill";
import smoothscroll from 'smoothscroll-polyfill';
import 'element-remove';
elementClosest(window);
smoothscroll.polyfill();

// Import list of Modules
import countTimer from './modules/countTimer';
import togglleMenu from './modules/toggleMenu';
import smoothScroll from './modules/smoothScroll';
import modalToggle from './modules/modalWindow';
import serviceBlock from './modules/ourServiceBlock';
import slider from './modules/imageSlider';
import ourTeamPic from './modules/ourTeamBlock';
import calculatorBlock from './modules/calculatorBlock';
import sendForm from './modules/ajaxRequest';

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