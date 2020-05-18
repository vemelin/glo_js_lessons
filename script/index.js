// Polyfills, that helps solve cross-browser compatibility for IE11 agent
// import 'url-polyfill';
// import "regenerator-runtime/runtime";
// import 'element-remove';
// import "@babel/polyfill";
// import 'formdata-polyfill';
// import elementClosest from 'element-closest';
// import 'es6-promise';
// import 'element-closest/browser';
// import 'whatwg-fetch';
// import "scroll-behavior-polyfill";
// import smoothscroll from 'smoothscroll-polyfill';
// import 'element-remove';
// elementClosest(window);
// smoothscroll.polyfill();

// Import list of Modules
import headerPhoneSwitcher from './modules/headerPhoneSwitcher';
import mainNav from './modules/mainNav';
import mainNavAdaptive from './modules/mainNavAdaptive';
import smoothScroll from './modules/smoothScroll';
import expandList from './modules/expandList';
import regExpPhoneMask from './modules/regExpPhoneMask';
import eulaModal from './modules/eulaModal';
import hintPopup from './modules/hintPopup';
import typesOfRepairs from './modules/typesOfRepairs';
import portfolioSlider from './modules/portfolioSlider';
import sliderModal from './modules/sliderModal';
import documentsModule from './modules/documentsModule';
import documentsPreviewModal from './modules/documentsPreviewModal';
import issuesBlock from './modules/issuesBlock';
import tabSlider from './modules/tabSlider';
import sliderTabSwitcher from './modules/sliderTabSwitcher';
import advicesBlock from './modules/advicesBlock';
import testimonialsBlock from './modules/testimonialsBlock';
import howWeWork from './modules/howWeWork';
import faqBlock from './modules/faqBlock';
import ourPartners from './modules/ourPartners';
import thankYouModal from './modules/thankYouModal';
import uploadServicesData from './modules/uploadServicesData';
import formParsing from './modules/ajaxRequests';


// Header Phone Switcher — Phone list
headerPhoneSwitcher();
// Main Navigation
mainNav();
mainNavAdaptive();
// Smooth Scroll
smoothScroll();
// Overview all available list
expandList();
// Regular Expression Mask of phone number - recall block
regExpPhoneMask();
//  End User License Agreement (EULA) - Modal Window
eulaModal();
// Tooltip popup
hintPopup();
// Type of Repairs block
typesOfRepairs();
// Portfolio block slider
portfolioSlider();
// Modal Window block slider
sliderModal();
// Documents Block
documentsModule();
documentsPreviewModal();
// Blocks with issues
issuesBlock();
// Tabs with slider block
tabSlider();
// Slider with switching tabs
sliderTabSwitcher();
// Get advices / consultations
advicesBlock();
// Testimonials Block
testimonialsBlock();
// How we work block
howWeWork();
// FAQ - Accordion block
faqBlock();
// Our Partners block
ourPartners();
// Thank you modal
thankYouModal();
// Upload Services and Prices Data
uploadServicesData();
// Send Form through AJAX
formParsing();

console.log('25 — Code Review');