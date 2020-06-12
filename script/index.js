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
// import 'mdn-polyfills/Node.prototype.append';

// Import list of Modules
import headerPhoneSwitcher from './modules/headerPhoneSwitcher';
import mainNav from './modules/mainNav';
import smoothScroll from './modules/smoothScroll';
import regExpPhoneMask from './modules/regExpPhoneMask';
import eulaModal from './modules/eulaModal';
import problems from './modules/hintPopup';
import repairModal from './modules/repairModal';
import portfolioSlider from './modules/portfolioSlider';
import portfolioModal from './modules/portfolioModal';
import documentsModule from './modules/documentsModule';
import DocumentsSlider from './modules/documentsPreviewModal';
import advicesBlock from './modules/advicesBlock';
import testimonialsBlock from './modules/testimonialsBlock';
import howWeWork from './modules/howWeWork';
import accordion from './modules/faqBlock';
import ourPartners from './modules/ourPartners';
import formParsing from './modules/ajaxRequests';
import repairViews from './modules/repairViews';
import repairContent from './modules/repair-render-content'
import formula from './modules/formula';
import tabs from './modules/tabs';
import {desingBoolet, desingSliders, desingPopup} from './modules/desing-pagination-boolet';


let windowWidth = window.innerWidth;
window.addEventListener(`resize`, () => {
  windowWidth = window.innerWidth;
  // burgerMenu(windowWidth);
  formula(windowWidth);
  problems(windowWidth);
  documentsModule(windowWidth);
  if (windowWidth > 1024) {
    desingBoolet();
  } else {
    desingSliders({
      block: '#designs',
      wrapper: '.designs-slider-wrap',
      nav: '.designs-nav__item',
      wrapperSlide: '.designs-slider',
      arrowLeft: '#design_left',
      arrowRight: '#design_right',
      sliderCountCurrent: '.slider-counter-content__current',
      sliderCountTotal: '.slider-counter-content__total',
    });
  }
  desingSliders({
    block: '.popup-design',
    wrapper: '.popup-dialog-design',
    nav: '.designs-nav__item',
    wrapperSlide: '.popup-design-slider',
    arrowLeft: '#popup_design_left',
    arrowRight: '#popup_design_right',
    sliderCountCurrent: '.slider-counter-content__current',
    sliderCountTotal: '.slider-counter-content__total',
    popupText: '.popup-design-text',
    popupTextActiveClass: 'visible-content-block',
    dispFlex: '.popup-design-slider-wrap',

  });
});

document.addEventListener('DOMContentLoaded', () => {
//   // telMenu();
//   // burgerMenu(windowWidth);
//   // smoothScrolling();
//   // popupRepairTypes();
//   // telMask();
//   // linkPrivacy();
  formula(windowWidth);
//   problems(windowWidth);
//   const sliderRepair = new repairViews();
//   sliderRepair.start();
//   accordion();
  documentsModule(windowWidth);

//   // const sliderTransparency = new slider();
//   // sliderTransparency.start();
//   // buttonWide();

//   // const partners = new Carousel();
//   // // partners.start();

//   // sliderReviews();
//   // inspirationalPortfolio();
//   // inspirationalPortfolioPopup();

  tabs({
    block: '#designs',
    blockWrapper: '.nav',
    blockSlides: '#designs-list',
    arrowRight: '#nav-arrow-designs_right',
    arrowLeft: '#nav-arrow-designs_left'
  });

  tabs({
    block: '#scheme',
    blockWrapper: '.nav',
    blockSlides: '#scheme-list',
    arrowRight: '#nav-arrow-scheme_right',
    arrowLeft: '#nav-arrow-scheme_left'
  });

  tabs({
    block: '.popup-dialog-design',
    blockWrapper: '.nav-designs',
    blockSlides: '#nav-list-popup-designs',
    arrowRight: '#nav-arrow-popup-designs_right',
    arrowLeft: '#nav-arrow-popup-designs_left'
  });

  // scheme();
  if (windowWidth > 1024) {
    desingBoolet();
  } else {
    desingSliders({
      block: '#designs',
      wrapper: '.designs-slider-wrap',
      nav: '.designs-nav__item',
      wrapperSlide: '.designs-slider',
      arrowLeft: '#design_left',
      arrowRight: '#design_right',
      sliderCountCurrent: '.slider-counter-content__current',
      sliderCountTotal: '.slider-counter-content__total',
    });
  }

  desingSliders({
    block: '.popup-design',
    wrapper: '.popup-dialog-design',
    nav: '.designs-nav__item',
    wrapperSlide: '.popup-design-slider',
    arrowLeft: '#popup_design_left',
    arrowRight: '#popup_design_right',
    sliderCountCurrent: '.slider-counter-content__current',
    sliderCountTotal: '.slider-counter-content__total',
    popupText: '.popup-design-text',
    popupTextActiveClass: 'visible-content-block',
    dispFlex: '.popup-design-slider-wrap',

  });

  // keyDownEsc();
  desingPopup();
  // ajaxPost();
  // get();
});

// Header Phone Switcher — Phone list
headerPhoneSwitcher();
// Main Navigation
mainNav();
// Smooth Scroll
smoothScroll();
// Regular Expression Mask of phone number - recall block
regExpPhoneMask();
//  End User License Agreement (EULA) - Modal Window
eulaModal();
// Tooltip popup
problems(windowWidth);
// Type of Repairs block
repairModal();
// Portfolio block slider
portfolioSlider();
portfolioModal();
// Documents Block
documentsModule();
const docsModal = new DocumentsSlider();
docsModal.start();
// Get advices / consultations
advicesBlock();
// Testimonials Block
testimonialsBlock();
// How we work block
howWeWork();
// FAQ - Accordion block
accordion();
// Our Partners block
const ourPartnersBlock = new ourPartners();
ourPartnersBlock.start();
// Send Form through AJAX
formParsing();
//Repair views
const sliderRepair = new repairViews();
sliderRepair.start();
//Formula
// formula(windowWidth);
//Render Content
repairContent();