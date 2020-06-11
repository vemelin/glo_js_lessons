/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./script/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./script/index.js":
/*!*************************!*\
  !*** ./script/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_headerPhoneSwitcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/headerPhoneSwitcher */ "./script/modules/headerPhoneSwitcher.js");
/* harmony import */ var _modules_mainNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/mainNav */ "./script/modules/mainNav.js");
/* harmony import */ var _modules_smoothScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/smoothScroll */ "./script/modules/smoothScroll.js");
/* harmony import */ var _modules_regExpPhoneMask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/regExpPhoneMask */ "./script/modules/regExpPhoneMask.js");
/* harmony import */ var _modules_eulaModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/eulaModal */ "./script/modules/eulaModal.js");
/* harmony import */ var _modules_hintPopup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/hintPopup */ "./script/modules/hintPopup.js");
/* harmony import */ var _modules_repairModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/repairModal */ "./script/modules/repairModal.js");
/* harmony import */ var _modules_portfolioSlider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/portfolioSlider */ "./script/modules/portfolioSlider.js");
/* harmony import */ var _modules_portfolioModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/portfolioModal */ "./script/modules/portfolioModal.js");
/* harmony import */ var _modules_documentsModule__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/documentsModule */ "./script/modules/documentsModule.js");
/* harmony import */ var _modules_documentsPreviewModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/documentsPreviewModal */ "./script/modules/documentsPreviewModal.js");
/* harmony import */ var _modules_advicesBlock__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/advicesBlock */ "./script/modules/advicesBlock.js");
/* harmony import */ var _modules_testimonialsBlock__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/testimonialsBlock */ "./script/modules/testimonialsBlock.js");
/* harmony import */ var _modules_howWeWork__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/howWeWork */ "./script/modules/howWeWork.js");
/* harmony import */ var _modules_faqBlock__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/faqBlock */ "./script/modules/faqBlock.js");
/* harmony import */ var _modules_ourPartners__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/ourPartners */ "./script/modules/ourPartners.js");
/* harmony import */ var _modules_ajaxRequests__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/ajaxRequests */ "./script/modules/ajaxRequests.js");
/* harmony import */ var _modules_repairViews__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/repairViews */ "./script/modules/repairViews.js");
/* harmony import */ var _modules_repair_render_content__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/repair-render-content */ "./script/modules/repair-render-content.js");
/* harmony import */ var _modules_formula__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modules/formula */ "./script/modules/formula.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modules/tabs */ "./script/modules/tabs.js");
/* harmony import */ var _modules_desing_pagination_boolet__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modules/desing-pagination-boolet */ "./script/modules/desing-pagination-boolet.js");
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






















let windowWidth = window.innerWidth;
window.addEventListener(`resize`, () => {
  windowWidth = window.innerWidth; // burgerMenu(windowWidth);

  Object(_modules_formula__WEBPACK_IMPORTED_MODULE_19__["default"])(windowWidth);
  Object(_modules_hintPopup__WEBPACK_IMPORTED_MODULE_5__["default"])(windowWidth);
  documentSlider(windowWidth);

  if (windowWidth > 1024) {
    Object(_modules_desing_pagination_boolet__WEBPACK_IMPORTED_MODULE_21__["desingBoolet"])();
  } else {
    Object(_modules_desing_pagination_boolet__WEBPACK_IMPORTED_MODULE_21__["desingSliders"])({
      block: '#designs',
      wrapper: '.designs-slider-wrap',
      nav: '.designs-nav__item',
      wrapperSlide: '.designs-slider',
      arrowLeft: '#design_left',
      arrowRight: '#design_right',
      sliderCountCurrent: '.slider-counter-content__current',
      sliderCountTotal: '.slider-counter-content__total'
    });
  }

  Object(_modules_desing_pagination_boolet__WEBPACK_IMPORTED_MODULE_21__["desingSliders"])({
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
    dispFlex: '.popup-design-slider-wrap'
  });
});
document.addEventListener('DOMContentLoaded', () => {
  //   // telMenu();
  //   // burgerMenu(windowWidth);
  //   // smoothScrolling();
  //   // popupRepairTypes();
  //   // telMask();
  //   // linkPrivacy();
  //   formula(windowWidth);
  //   problems(windowWidth);
  //   const sliderRepair = new repairViews();
  //   sliderRepair.start();
  //   accordion();
  //   // documentSlider(windowWidth);
  //   // const sliderTransparency = new slider();
  //   // sliderTransparency.start();
  //   // buttonWide();
  //   // const partners = new Carousel();
  //   // // partners.start();
  //   // sliderReviews();
  //   // inspirationalPortfolio();
  //   // inspirationalPortfolioPopup();
  Object(_modules_tabs__WEBPACK_IMPORTED_MODULE_20__["default"])({
    block: '#designs',
    blockWrapper: '.nav',
    blockSlides: '#designs-list',
    arrowRight: '#nav-arrow-designs_right',
    arrowLeft: '#nav-arrow-designs_left'
  });
  Object(_modules_tabs__WEBPACK_IMPORTED_MODULE_20__["default"])({
    block: '#scheme',
    blockWrapper: '.nav',
    blockSlides: '#scheme-list',
    arrowRight: '#nav-arrow-scheme_right',
    arrowLeft: '#nav-arrow-scheme_left'
  });
  Object(_modules_tabs__WEBPACK_IMPORTED_MODULE_20__["default"])({
    block: '.popup-dialog-design',
    blockWrapper: '.nav-designs',
    blockSlides: '#nav-list-popup-designs',
    arrowRight: '#nav-arrow-popup-designs_right',
    arrowLeft: '#nav-arrow-popup-designs_left'
  }); // scheme();

  if (windowWidth > 1024) {
    Object(_modules_desing_pagination_boolet__WEBPACK_IMPORTED_MODULE_21__["desingBoolet"])();
  } else {
    Object(_modules_desing_pagination_boolet__WEBPACK_IMPORTED_MODULE_21__["desingSliders"])({
      block: '#designs',
      wrapper: '.designs-slider-wrap',
      nav: '.designs-nav__item',
      wrapperSlide: '.designs-slider',
      arrowLeft: '#design_left',
      arrowRight: '#design_right',
      sliderCountCurrent: '.slider-counter-content__current',
      sliderCountTotal: '.slider-counter-content__total'
    });
  }

  Object(_modules_desing_pagination_boolet__WEBPACK_IMPORTED_MODULE_21__["desingSliders"])({
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
    dispFlex: '.popup-design-slider-wrap'
  }); // keyDownEsc();

  Object(_modules_desing_pagination_boolet__WEBPACK_IMPORTED_MODULE_21__["desingPopup"])(); // ajaxPost();
  // get();
}); // Header Phone Switcher — Phone list

Object(_modules_headerPhoneSwitcher__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Main Navigation

Object(_modules_mainNav__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Smooth Scroll

Object(_modules_smoothScroll__WEBPACK_IMPORTED_MODULE_2__["default"])(); // Regular Expression Mask of phone number - recall block

Object(_modules_regExpPhoneMask__WEBPACK_IMPORTED_MODULE_3__["default"])(); //  End User License Agreement (EULA) - Modal Window

Object(_modules_eulaModal__WEBPACK_IMPORTED_MODULE_4__["default"])(); // Tooltip popup

Object(_modules_hintPopup__WEBPACK_IMPORTED_MODULE_5__["default"])(windowWidth); // Type of Repairs block

Object(_modules_repairModal__WEBPACK_IMPORTED_MODULE_6__["default"])(); // Portfolio block slider

Object(_modules_portfolioSlider__WEBPACK_IMPORTED_MODULE_7__["default"])();
Object(_modules_portfolioModal__WEBPACK_IMPORTED_MODULE_8__["default"])(); // Documents Block

Object(_modules_documentsModule__WEBPACK_IMPORTED_MODULE_9__["default"])();
const docsModal = new _modules_documentsPreviewModal__WEBPACK_IMPORTED_MODULE_10__["default"]();
docsModal.start(); // Get advices / consultations

Object(_modules_advicesBlock__WEBPACK_IMPORTED_MODULE_11__["default"])(); // Testimonials Block

Object(_modules_testimonialsBlock__WEBPACK_IMPORTED_MODULE_12__["default"])(); // How we work block

Object(_modules_howWeWork__WEBPACK_IMPORTED_MODULE_13__["default"])(); // FAQ - Accordion block

Object(_modules_faqBlock__WEBPACK_IMPORTED_MODULE_14__["default"])(); // Our Partners block

const ourPartnersBlock = new _modules_ourPartners__WEBPACK_IMPORTED_MODULE_15__["default"]();
ourPartnersBlock.start(); // Send Form through AJAX

Object(_modules_ajaxRequests__WEBPACK_IMPORTED_MODULE_16__["default"])(); //Repair views

const sliderRepair = new _modules_repairViews__WEBPACK_IMPORTED_MODULE_17__["default"]();
sliderRepair.start(); //Formula

Object(_modules_formula__WEBPACK_IMPORTED_MODULE_19__["default"])(windowWidth); //Render Content

Object(_modules_repair_render_content__WEBPACK_IMPORTED_MODULE_18__["default"])();

/***/ }),

/***/ "./script/modules/advicesBlock.js":
/*!****************************************!*\
  !*** ./script/modules/advicesBlock.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const advicesBlock = () => {
  const cta = document.querySelectorAll('.button_wide'),
        modal = document.querySelector('.popup-consultation'),
        close = modal.querySelector('.close-consultation'),
        hidden = () => {
    modal.style.cssText = "visibility: hidden;";
    document.body.removeAttribute('style'); //Clear styles
  },
        visible = () => {
    document.body.style.cssText = `overflow: hidden; height: 100%;`;
    modal.style.cssText = "visibility: visible;";
  };

  cta.forEach(element => element.addEventListener(`click`, () => visible()));
  close.addEventListener(`click`, () => hidden());
  modal.addEventListener(`click`, event => {
    if (event.target.classList.contains('popup-consultation')) {
      hidden();
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (advicesBlock);

/***/ }),

/***/ "./script/modules/ajaxRequests.js":
/*!****************************************!*\
  !*** ./script/modules/ajaxRequests.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const checkboxes = document.querySelectorAll('.checkbox__input');
checkboxes.forEach(element => element.removeAttribute("required"));

const styles = color => {
  const style = document.createElement('style');
  style.id = 'form-send-request-styles';
  style.type = 'text/css';
  style.textContent = `
    /* Form render request data styles */
    .preloader{
      width: 100%;
      text-align: center;
      color: ${color};
      margin: 5px 0;
    }
  `;
  document.head.appendChild(style);
};

const successPopup = () => {
  const modal = document.querySelector('.popup-thank');
  modal.style.cssText = `visibility: visible;`;
  modal.addEventListener(`click`, e => {
    if (e.target.classList.contains('close-thank')) {
      modal.style.cssText = 'visibility: hidden;';
    } else if (e.target.classList.contains('popup-thank')) {
      modal.style.cssText = 'visibility: hidden;';
    }
  });
};

const form = () => {
  const forms = document.querySelectorAll('form');
  let loaderHtml = '';

  const addStatus = (form, status, color = 'red') => {
    styles(color);
    const preloader = `<div class="preloader">${status}</div>`;

    if (document.querySelector('.preloader')) {
      return;
    }

    form.insertAdjacentHTML(`afterbegin`, preloader);
    loaderHtml = document.querySelector('.preloader');
    setTimeout(() => {
      loaderHtml.remove();
    }, 5000);
  };

  forms.forEach(form => {
    const postData = data => {
      return fetch('./server.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: data,
        mode: 'cors'
      });
    };

    form.addEventListener('submit', event => {
      event.preventDefault();
      console.log([...event.target.elements]);
      const checkbox = [...event.target.elements].filter(item => item.type === 'checkbox');

      if (!checkbox[0].checked) {
        addStatus(form, 'Согласитесь на обработку данных');
        return;
      }

      const formTel = [...event.target.elements].filter(item => item.name === 'phone');

      if (phoneValidation(formTel)) {
        addStatus(form, 'Неверный номер телефона');
        return;
      }

      const formData = new FormData(form); // let body = {};
      // for (let val of formData.entries()) {
      //   body[val[0]] = val[1];
      // }

      const outputData = () => {
        successPopup();
        addStatus(form, 'Спасибо, мы получили ваш запрос!', 'green');
        form.reset();
      };

      const error = () => {
        addStatus(form, 'Ошибка запроса', 'red');
        form.reset();
      };

      postData(formData).then(response => {
        if (response.status !== 200) {
          throw 'error !!! ';
        }

        outputData();
      }).catch(error);
    });
  });

  const phoneValidation = tel => {
    let str = tel[0].value.length;

    if (str === 18) {
      return false;
    } else {
      return true;
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (form);

/***/ }),

/***/ "./script/modules/desing-pagination-boolet.js":
/*!****************************************************!*\
  !*** ./script/modules/desing-pagination-boolet.js ***!
  \****************************************************/
/*! exports provided: desingBoolet, desingSliders, desingPopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "desingBoolet", function() { return desingBoolet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "desingSliders", function() { return desingSliders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "desingPopup", function() { return desingPopup; });
const desingBoolet = () => {
  const designs = document.querySelector('#designs');
  const designsBtn = designs.querySelectorAll('.designs-nav__item');
  let designsSlide = designs.querySelector('.designs-slider').children;
  designsSlide = Array.from(designsSlide);
  const designsSlideBulet = designs.querySelectorAll('.preview-block');
  const previewItemInner = designs.querySelectorAll('.preview-block__item-inner');
  let designsHeight = designs.querySelector('.designs-slider-wrap').offsetHeight;
  let slideActive = 0;
  let buletItemAvtive = 0;
  designsBtn.forEach((el, i) => {
    el.addEventListener('click', () => {
      slideActive = i;
      render();
    });
  });
  previewItemInner.forEach((el, itemBulet) => {
    el.addEventListener(`click`, () => {
      buletItemAvtive = itemBulet;
      renderBulet();
    });
  });

  const renderBulet = () => {
    previewItemInner.forEach(el => {
      el.classList.remove('preview_active');
    });
    previewItemInner[buletItemAvtive].classList.add('preview_active');
    let arr = Array.from(designsSlideBulet[slideActive].children);
    arr.forEach((el, i) => {
      if (el.querySelector('.preview-block__item-inner').matches('.preview_active')) {
        designsHeight = designsHeight = designs.querySelector('.designs-slider-wrap').offsetHeight;
        buletItemAvtive = i;
        designsSlide[slideActive].style.cssText = `
        transform: translateY(-${designsHeight * i}px);
        transition: 0.3s;`;
      }
    });
  };

  const render = () => {
    buletItemAvtive = 0;
    designsBtn.forEach(el => {
      el.classList.remove('active');
    });
    designsBtn[slideActive].classList.add('active');
    designsSlide.forEach(el => {
      el.style.display = 'none';
    });
    designsSlide[slideActive].style.display = 'block';
    designsSlideBulet.forEach(el => {
      el.classList.remove('visible');
    });
    designsSlideBulet[slideActive].classList.add('visible');
    designsSlideBulet[slideActive].querySelector('.preview-block__item-inner').classList.add('preview_active');
    previewItemInner.forEach(el => {
      el.classList.remove('preview_active');
    });
    previewItemInner[buletItemAvtive].classList.add('preview_active');
  };
};
const desingSliders = obj => {
  const design = document.querySelector(obj.block);
  const designWrapper = design.querySelector(obj.wrapper);
  const designBtn = design.querySelectorAll(obj.nav);
  const designWrapperSlide = design.querySelector(obj.wrapperSlide);
  let designSlides = Array.from(designWrapperSlide.children);
  const designArrowLeft = design.querySelector(obj.arrowLeft);
  const designArrowRight = design.querySelector(obj.arrowRight);
  const sliderCountCurrent = design.querySelector(obj.sliderCountCurrent);
  const sliderCountTotal = design.querySelector(obj.sliderCountTotal);
  let designsHeight = designSlides[0].querySelector('img').clientHeight;
  let countAll = designSlides[0].children.length;
  let activeBtn = 0;
  let activeSlides = 0;
  let popupText = '';

  if (obj.popupText) {
    popupText = design.querySelectorAll(obj.popupText);
    designWrapperSlide.style.display = 'flex';
  }

  if (obj.dispFlex) {
    design.querySelector(obj.dispFlex).style.display = 'flex';
  }

  const arrowVisible = () => {
    if (activeSlides >= countAll - 1) {
      designArrowLeft.style.display = 'flex';
      designArrowRight.style.display = 'none';
    } else if (activeSlides <= 0) {
      designArrowLeft.style.display = 'none';
      designArrowRight.style.display = 'flex';
    } else {
      designArrowLeft.style.display = 'flex';
      designArrowRight.style.display = 'flex';
    }
  };

  designBtn.forEach((el, i) => {
    el.addEventListener('click', () => {
      activeBtn = i;
      activeSlides = 0;
      render();
    });
  });
  designArrowRight.addEventListener('click', () => {
    ++activeSlides;

    if (activeSlides > countAll - 1) {
      activeSlides = countAll - 1;
      return;
    }

    render();
  });
  designArrowLeft.addEventListener('click', () => {
    --activeSlides;

    if (activeSlides < 0) {
      activeSlides = 0;
      return;
    }

    render();
  });

  const render = () => {
    arrowVisible();
    designSlides[activeBtn].style.cssText = `
    transform: translateY(-${0}px);
    transition: 0.3s;
  `;
    designBtn.forEach(el => {
      el.classList.remove('active');
    });
    designBtn[activeBtn].classList.add('active');
    designSlides.forEach(el => {
      el.style.display = 'none';
    });
    designSlides[activeBtn].style.display = 'block';

    if (obj.popupText) {
      popupText.forEach(el => {
        el.classList.remove(obj.popupTextActiveClass);
      });
      popupText[activeBtn].classList.add(obj.popupTextActiveClass);
    }

    designsHeight = designSlides[activeBtn].querySelector('img').clientHeight;
    countAll = designSlides[activeBtn].children.length;
    designSlides[activeBtn].style.cssText = `
      transform: translateY(-${designsHeight * activeSlides}px);
      transition: 0.3s;
    `;
    sliderCountCurrent.textContent = activeSlides + 1;
    sliderCountTotal.textContent = countAll;
  };

  arrowVisible();
};
const desingPopup = () => {
  const designs = document.querySelector('#designs');
  const linkPopup = designs.querySelector('.link-list-designs a');
  const popupDesing = document.querySelector('.popup-design');
  const closrPopup = popupDesing.querySelector('.close.mobile-hide');
  const closrPopupMobile = popupDesing.querySelector('.close.tablet-hide.desktop-hide');
  linkPopup.addEventListener(`click`, evt => {
    evt.preventDefault();
    popupDesing.style.visibility = 'visible';
  });
  closrPopup.addEventListener(`click`, evt => {
    popupDesing.style.visibility = 'hidden';
  });
  closrPopupMobile.addEventListener(`click`, evt => {
    popupDesing.style.visibility = 'hidden';
  });
};

/***/ }),

/***/ "./script/modules/documentsModule.js":
/*!*******************************************!*\
  !*** ./script/modules/documentsModule.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const documentsModule = windowWidth => {
  const transparency = document.querySelector('#transparency');
  const transparencyItem = transparency.querySelectorAll('.transparency-item');
  const transparencyItemCount = transparencyItem.length;
  const arrowRight = transparency.querySelector('#transparency-arrow_right');
  const arrowLeft = transparency.querySelector('#transparency-arrow_left');
  let sliderCount = 0;

  const resize = () => {
    if (windowWidth <= 1090) {
      transparencyItem.forEach(el => {
        el.style.display = 'none';
      });
      transparencyItem[sliderCount].style.display = 'flex';
    } else {
      transparencyItem.forEach(el => {
        el.style.display = 'flex';
      });
    }
  };

  resize();

  const render = () => {
    transparencyItem.forEach(el => {
      el.style.display = 'none';
    });
    transparencyItem[sliderCount].style.display = 'flex';
  };

  arrowRight.addEventListener(`click`, evt => {
    ++sliderCount;

    if (transparencyItemCount <= sliderCount) {
      sliderCount = 0;
    }

    render();
  });
  arrowLeft.addEventListener(`click`, evt => {
    --sliderCount;

    if (sliderCount < 0) {
      sliderCount = transparencyItemCount - 1;
    }

    render();
  });
};

/* harmony default export */ __webpack_exports__["default"] = (documentsModule);

/***/ }),

/***/ "./script/modules/documentsPreviewModal.js":
/*!*************************************************!*\
  !*** ./script/modules/documentsPreviewModal.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class DocumentsSlider {
  constructor() {
    this.slideWrapper = document.querySelector('#transparency');
    this.slideWrapperSlide = this.slideWrapper.querySelectorAll('.transparency-item .transparency-item__img');
    this.popupTransparency = document.querySelector('.popup-transparency');
    this.popupTransparencyClose = this.popupTransparency.querySelector('.close');
    this.slideWrapperBig = this.popupTransparency.querySelectorAll('.popup-transparency-slider__slide');
    this.arrowRight = this.popupTransparency.querySelector('#transparency_right');
    this.arrowLeft = this.popupTransparency.querySelector('#transparency_left');
    this.slideActive = 0;
    this.slideAfterAll = 0;
    this.slideAfterActive = 1;
    this.sliderCurrent = this.popupTransparency.querySelector('.slider-counter-content__current');
    this.sliderTotal = this.popupTransparency.querySelector('.slider-counter-content__total');
    this.sliderCurrent.textContent = this.slideAfterActive;
    this.sliderTotal.textContent = this.slideAfterAll;
    this.slideChildren = this.slideWrapperBig[this.slideActive].querySelectorAll('img');
  }

  start() {
    this.eventListener();
  }

  eventListener() {
    this.slideWrapperSlide.forEach((el, i) => {
      el.addEventListener('click', () => {
        this.popupTransparency.style.visibility = 'visible';
        this.slideActive = i;
        this.render();
      });
    });
    this.popupTransparencyClose.addEventListener('click', () => {
      this.popupTransparency.style.visibility = 'hidden';
      this.slideActive = 0;
      this.slideAfterAll = 0;
      this.slideAfterActive = 1;
    });
    this.arrowRight.addEventListener('click', () => {
      ++this.slideAfterActive;

      if (this.slideAfterActive > this.slideAfterAll) {
        this.slideAfterActive = 1;
      }

      this.renderChildren();
    });
    this.arrowLeft.addEventListener('click', () => {
      --this.slideAfterActive;

      if (this.slideAfterActive <= 0) {
        this.slideAfterActive = this.slideAfterAll;
      }

      this.renderChildren();
    });
  }

  renderChildren() {
    this.slideChildren.forEach(el => {
      el.style.display = 'none';
    });
    this.slideChildren[this.slideAfterActive - 1].style.display = 'block';
    this.sliderCurrent.textContent = this.slideAfterActive;
  }

  render() {
    this.slideWrapperBig.forEach(el => {
      el.style.display = 'none';
    });
    this.slideWrapperBig[this.slideActive].style.display = 'flex';
    this.slideAfterAll = this.slideWrapperBig[this.slideActive].children.length;
    this.sliderTotal.textContent = this.slideAfterAll;
    this.slideChildren = this.slideWrapperBig[this.slideActive].querySelectorAll('img');
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DocumentsSlider);

/***/ }),

/***/ "./script/modules/eulaModal.js":
/*!*************************************!*\
  !*** ./script/modules/eulaModal.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const eulaModal = () => {
  const open = document.querySelectorAll('.link-privacy'),
        outOfModal = document.querySelector('.popup-privacy'),
        close = outOfModal.querySelector('.mobile-hide');
  open.forEach(element => {
    element.addEventListener(`click`, () => {
      outOfModal.style = "visibility: visible;";
      document.body.style.cssText = `overflow: hidden; height: 100%;`;
    });
  });
  outOfModal.addEventListener(`click`, e => {
    if (e.target.classList.contains('popup-privacy')) {
      outOfModal.style = "visibility: hidden;";
      document.body.removeAttribute('style'); //Reset styles
    }
  });
  close.addEventListener(`click`, () => {
    outOfModal.style = "visibility: hidden;";
    document.body.style.cssText = `overflow: auto; height: auto;`;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (eulaModal);

/***/ }),

/***/ "./script/modules/faqBlock.js":
/*!************************************!*\
  !*** ./script/modules/faqBlock.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// const faqBlock = () => {
//   let li = document.querySelectorAll('.accordion .title_block');
//   document.querySelector('.accordion ul').addEventListener(`click`, e => {
//     li.forEach(item => item == e.target ? item.classList.toggle('msg-active') : item.classList.remove('msg-active'));
//   });
// }; 
// export default faqBlock;
const styles = () => {
  const style = document.createElement('style');
  style.id = 'accordion-styles';
  style.type = 'text/css';
  style.textContent = `
    /* FAQ block - Accordion styles */
    .title_block::after{
      content: '+';
      float: right;
    }
    .title_block.msg-active::after{
      content: '–';
    }
    .msg{
      max-height: 0;
      transition: max-height 0.1s ease-in-out !important;
    }
    .msg-active{
      color: #fff !important; 
      background: linear-gradient(90deg, #f48922 0, #ffb015 100%) !important;
    }
  `;
  document.head.appendChild(style);
};

const accordion = () => {
  styles();
  const accordions = document.querySelectorAll('.accordion .title_block'),
        messages = document.querySelectorAll('.msg'); // Remove ative element from current list

  accordions.forEach(item => item.classList.remove('msg-active'));
  accordions.forEach(element => {
    element.addEventListener('click', e => {
      e.preventDefault();
      const nextElement = e.target.nextElementSibling;

      if (nextElement.style.maxHeight) {
        nextElement.style.maxHeight = null;
        e.target.classList.remove('msg-active');
      } else {
        nextElement.style.maxHeight = nextElement.scrollHeight + 'px';
        e.target.classList.add('msg-active');
      }

      messages.forEach(item => {
        if (item !== nextElement) {
          item.style.maxHeight = null;
        }
      });
      accordions.forEach(item => {
        if (item !== e.target) {
          item.classList.remove('msg-active');
        }
      });
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (accordion);

/***/ }),

/***/ "./script/modules/formula.js":
/*!***********************************!*\
  !*** ./script/modules/formula.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const styles = () => {
  const style = document.createElement('style');
  style.id = 'hint-styles';
  style.type = 'text/css';
  style.textContent = `
    /* Formula hint styles */
    .active-item:hover span {
      color: #fff;
    }
  `;
  document.head.appendChild(style);
};

const formula = size => {
  styles();
  const formula = document.querySelector('#formula');
  const formulaItem = formula.querySelectorAll('.formula-item');

  if (size > 1024) {
    const activeFormula = document.createElement('style');
    activeFormula.textContent = `
    .active-formula::before {
      z-index: -1;
      transform: rotate(180deg);
    }`;
    formula.append(activeFormula);
    formulaItem.forEach(element => {
      const formulaItemIcon = element.querySelector('.formula-item__icon');
      const formulaItemPopup = element.querySelector('.formula-item-popup');
      formulaItemIcon.addEventListener('mouseover', evt => {
        formulaItemIcon.classList.add('active-item');

        if (!evt.target.matches('.formula-item__icon')) {
          if (formulaItemPopup.getBoundingClientRect().top > 0) {
            formulaItemPopup.style.cssText = "opacity: 1; visibility: visible; transition: opacity 0.3s;";
          } else {
            element.style.zIndex = "1";
            formulaItemPopup.style.cssText = "opacity: 1; visibility: visible; transition: opacity 0.3s; top: 100px; padding: 40px 40px 0;";
            formulaItemPopup.classList.add('active-formula');
          }
        }
      });
      formulaItemIcon.addEventListener('mouseout', evt => {
        if (!evt.target.matches('.formula-item__icon')) {
          formulaItemIcon.classList.remove('active-item');
          element.style.zIndex = "0";
          formulaItemPopup.style.cssText = "opacity: 0.1; visibility: hidden; transition: opacity 0.3s;";
          formulaItemPopup.classList.remove('active-formula');
        }
      });
    });
  } else {
    const formulaSlider = formula.querySelector('.formula-slider');
    const formulaSliderSlide = formulaSlider.querySelectorAll('.formula-slider__slide');
    const arrowRight = formula.querySelector('#formula-arrow_right');
    const arrowLeft = formula.querySelector('#formula-arrow_left');
    const formulaSliderWrap = formula.querySelector('.formula-slider-wrap');
    formulaSliderWrap.style.overflow = "hidden";
    let sixePx = 33;

    if (size < 576) {
      sixePx = 100;
    } else {
      let first = formulaSliderSlide[0].cloneNode(true);
      let last = formulaSliderSlide[5].cloneNode(true);
      formulaSlider.appendChild(first);
      formulaSlider.prepend(last);
    }

    formulaSlider.style.cssText = `
      display: flex;
      align-items: flex-start;
      will-change: transform;
    `;
    formulaItem.forEach(element => {
      element.style.cssText = `
        flex: 0 0 ${sixePx}%;
      `;
    });

    const render = count => {
      formulaSliderSlide.forEach((element, i) => {
        element.classList.remove('active-item');

        if (i === count) {
          element.classList.add('active-item');
        }
      });
    };

    let count = 0;
    let slide = 0;
    let pos = sixePx;
    formulaSlider.style.transform = `translateX(${slide * pos}%)`;
    render(count);
    arrowRight.addEventListener('click', () => {
      count++;
      slide--;

      if (count > 5) {
        count = 0;
        slide = 0;
      }

      formulaSlider.style.transform = `translateX(${slide * pos}%)`;
      render(count);
    });
    arrowLeft.addEventListener('click', () => {
      count--;
      slide++;

      if (count < 0) {
        count = 5;
        slide = -5;
      }

      formulaSlider.style.transform = `translateX(${slide * pos}%)`;
      render(count);
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (formula);

/***/ }),

/***/ "./script/modules/headerPhoneSwitcher.js":
/*!***********************************************!*\
  !*** ./script/modules/headerPhoneSwitcher.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const styles = () => {
  const style = document.createElement('style');
  style.id = 'header-phone-switcher-styles';
  style.type = 'text/css';
  style.textContent = `
    /* Header phone toggle switcher */
    .hidden-phone {top: 25px;}
    .hidden-phone a {opacity: 1;}
  `;
  document.head.appendChild(style);
};

const headerPhoneSwitcher = () => {
  styles();
  const click = document.querySelector('.header-contacts__arrow'),
        expand = document.querySelector('.header-contacts__phone-number-accord');
  click.addEventListener('click', () => expand.classList.toggle('hidden-phone'));
};

/* harmony default export */ __webpack_exports__["default"] = (headerPhoneSwitcher);

/***/ }),

/***/ "./script/modules/hintPopup.js":
/*!*************************************!*\
  !*** ./script/modules/hintPopup.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const problems = size => {
  const problems = document.querySelector('#problems');
  const problemsItem = problems.querySelectorAll('.problems-item:not(.problems-slider__slide)');
  const problemsItemmobile = problems.querySelectorAll('.problems-item');

  if (size > 1024) {
    const activeproblems = document.createElement('style');
    activeproblems.textContent = `
    .active-problems::before {
      z-index: -1;
      transform: rotate(180deg);
      
    }
    .active-problems-top::before {
      z-index: -1;
      transform: rotate(0deg);
    }`;
    problems.append(activeproblems);
    problemsItem.forEach(element => {
      let problemsItemIcon = element.querySelector('.problems-item__icon');
      const problemsItemPopup = element.querySelector('.problems-item-popup');
      problemsItemIcon.addEventListener('mouseover', evt => {
        problemsItemIcon.style.cssText = `
          color: white;
          background: linear-gradient(90deg, #f48922 0, #ffb015 100%) !important;
        `;

        if (!evt.target.matches('.problems-item__icon')) {
          element.style.zIndex = "1";

          if (problemsItemPopup.getBoundingClientRect().top > 0 && problemsItemPopup.getBoundingClientRect().bottom < window.innerHeight) {
            problemsItemPopup.style.cssText = "opacity: 1; visibility: visible; transition: opacity 0.3s; bottom: 86px;";
          } else if (problemsItemPopup.getBoundingClientRect().bottom > window.innerHeight) {
            problemsItemPopup.style.cssText = "opacity: 1; visibility: visible; transition: opacity 0.3s; top: -380px;";
            problemsItemPopup.classList.add('active-problems-top');
          } else {
            problemsItemPopup.style.cssText = "opacity: 1; visibility: visible; transition: opacity 0.3s; top: 100px; padding: 40px 40px 0;";
            problemsItemPopup.classList.add('active-problems');
          }
        }
      });
      problemsItemIcon.addEventListener('mouseout', evt => {
        if (!evt.target.matches('.problems-item__icon')) {
          problemsItemPopup.classList.remove('active-problems-top');
          problemsItemPopup.classList.remove('active-problems');
          problemsItemIcon.style.background = '';
          element.style.zIndex = "0";
          problemsItemPopup.style.cssText = "opacity: 0.1; visibility: hidden; transition: opacity 0.3s;";
        }
      });
    });
  } else {
    const problemsSlider = problems.querySelector('.problems-slider');
    const problemsSliderSlide = problemsSlider.querySelectorAll('.problems-slider__slide');
    const arrowRight = problems.querySelector('#problems-arrow_right');
    const arrowLeft = problems.querySelector('#problems-arrow_left');
    const problemsSliderWrap = problems.querySelector('.problems-slider-wrap');
    problemsSliderWrap.style.overflow = "hidden";
    let sixePx = 33;

    if (size < 576) {
      sixePx = 100;
    } else {
      let first = problemsSliderSlide[0].cloneNode(true);
      let last = problemsSliderSlide[3].cloneNode(true);
      problemsSlider.appendChild(first);
      problemsSlider.prepend(last);
      problemsSlider.querySelectorAll('.problems-slider__slide').forEach(el => el.classList.remove('active-item'));
    }

    problemsSlider.style.cssText = `
      display: flex;
      align-items: flex-start;
      will-change: transform;
    `;
    problemsItemmobile.forEach(element => {
      element.style.cssText = `
        flex: 0 0 ${sixePx}%;
      `;
    });

    const render = count => {
      problemsSliderSlide.forEach((element, i) => {
        element.style.width = "33%";
        element.classList.remove('active-item');

        if (i === count) {
          element.classList.add('active-item');
        }
      });
    };

    let count = 0;
    let slide = 0;
    let pos = sixePx;
    problemsSlider.style.transform = `translateX(${slide * pos}%)`;
    render(count);
    arrowRight.addEventListener('click', () => {
      count++;
      slide--;

      if (count > 3) {
        count = 0;
        slide = 0;
      }

      problemsSlider.style.transform = `translateX(${slide * pos}%)`;
      render(count);
    });
    arrowLeft.addEventListener('click', () => {
      count--;
      slide++;

      if (count < 0) {
        count = 3;
        slide = -3;
      }

      problemsSlider.style.transform = `translateX(${slide * pos}%)`;
      render(count);
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (problems);

/***/ }),

/***/ "./script/modules/howWeWork.js":
/*!*************************************!*\
  !*** ./script/modules/howWeWork.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const howWeWork = () => {
  const scheme = document.querySelector('#scheme'),
        schemeSlide = scheme.querySelectorAll('.scheme-nav__item'),
        schemeImage = scheme.querySelectorAll('.scheme-slider__slide.fade-tab'),
        schemeDescription = scheme.querySelectorAll('.scheme-description-block');
  let activeTab = 0;
  schemeSlide.forEach((element, i) => {
    element.classList.remove('active');
    element.addEventListener('click', () => {
      activeTab = i;
      tabs();
      element.classList.add('active');
    });
  });

  const tabs = () => {
    schemeSlide.forEach(element => {
      element.classList.remove('active');
    });
    schemeImage.forEach(element => {
      element.style.display = 'none';
    });
    schemeDescription.forEach(element => {
      element.classList.remove('visible-content-block');
    });
    schemeSlide[activeTab].classList.add('active');
    schemeImage[activeTab].style.display = 'flex';
    schemeDescription[activeTab].classList.add('visible-content-block');
  };

  tabs();
};

/* harmony default export */ __webpack_exports__["default"] = (howWeWork);

/***/ }),

/***/ "./script/modules/mainNav.js":
/*!***********************************!*\
  !*** ./script/modules/mainNav.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const styles = () => {
  const style = document.createElement('style');
  style.id = 'main-navigation-styles';
  style.type = 'text/css';
  style.textContent = `
    /* Main navigation */
    .selected {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  `;
  document.head.appendChild(style);
};

const mainNav = () => {
  styles();
  const open = document.querySelectorAll('.menu'),
        modal = document.querySelector('.popup-dialog-menu'),
        wrapper = document.querySelector('.popup-menu');
  open[1].style.cssText = `display: block;`;
  open.forEach(element => element.addEventListener('click', () => modal.classList.toggle('selected'))); // open.addEventListener('click', () => modal.classList.toggle('selected'));

  modal.addEventListener('click', e => {
    if (e.target.classList.contains('close-menu')) {
      modal.classList.toggle('selected');
    } else if (e.target.closest('.popup-dialog-menu')) {
      modal.classList.toggle('selected');
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (mainNav); // .visible {
//   display: -webkit-box;
//   display: -ms-flexbox;
//   display: flex; }
//   .visible-content {
//     display: block; }
//     @media (max-width: 1024px) and (min-width: 576px) {
//       .visible-content {
//         display: -webkit-box;
//         display: -ms-flexbox;
//         display: flex;
//         -webkit-box-orient: horizontal;
//         -webkit-box-direction: normal;
//         -ms-flex-direction: row;
//         flex-direction: row;
//         -ms-flex-pack: distribute;
//         justify-content: space-around; } }
//     .visible-content-block {
//       display: block; }

/***/ }),

/***/ "./script/modules/ourPartners.js":
/*!***************************************!*\
  !*** ./script/modules/ourPartners.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class ourPartners {
  constructor(param) {
    this.id = document.querySelector('#partners');
    this.container = this.id.querySelector('.partners-slider');
    this.slides = this.id.querySelectorAll('.partners-slider__slide');
    this.arrowLeft = this.id.querySelector('#partners-arrow_left');
    this.arrowRight = this.id.querySelector('#partners-arrow_right');
    this.slideActive = 0;
    this.slidesCountAll = this.slides.length;
    this.slideWidth = this.slides[0].offsetWidth;
    this.resizeWidth = window.innerWidth;
    this.countPageSlide = '';
  }

  start() {
    this.resize();
    this.addStyle();
    this.evenrListener();
    this.slideWidth = this.slides[0].offsetWidth;
  }

  evenrListener() {
    this.arrowRight.addEventListener(`click`, () => {
      ++this.slideActive;

      if (this.slideActive > this.slidesCountAll - this.countPageSlide) {
        this.slideActive = 0;
      }

      this.render();
    });
    this.arrowLeft.addEventListener(`click`, () => {
      --this.slideActive;

      if (this.slideActive < 0) {
        this.slideActive = this.slidesCountAll - this.countPageSlide;
      }

      this.render();
    });
  }

  resize() {
    this.resizeWidth = window.innerWidth;

    if (this.resizeWidth > 575) {
      this.countPageSlide = 3;
    } else {
      this.countPageSlide = 1;
    }

    this.addStyle();
    window.addEventListener(`resize`, () => {
      this.resizeWidth = window.innerWidth;

      if (this.resizeWidth > 575) {
        this.countPageSlide = 3;
      } else {
        this.countPageSlide = 1;
      }

      this.addStyle();
    });
  }

  render() {
    this.container.style.cssText = `
      transform: translateX(-${this.slideActive * this.slideWidth}px);
      position: relative;
      display: flex;
      width: 100%;
      height: 100%;
    `;
  }

  addStyle() {
    this.id.querySelector('.wrapper').style.overflow = 'hidden';
    this.container.style.cssText = `
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    `;
    this.slides.forEach(el => {
      el.style.cssText = `
      min-width: ${100 / this.countPageSlide}%;
      `;
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ourPartners);

/***/ }),

/***/ "./script/modules/portfolioModal.js":
/*!******************************************!*\
  !*** ./script/modules/portfolioModal.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const portfolioModal = () => {
  const portfolio = document.querySelector('#portfolio');
  const portfolioBtnDesctop = portfolio.querySelectorAll('.portfolio-slider.mobile-hide .portfolio-slider__slide-frame');
  const portfolioBtnMobile = portfolio.querySelectorAll('.portfolio-slider-mobile.tablet-hide.desktop-hide .portfolio-slider__slide-frame');
  const popupPortfolio = document.querySelector('.popup-portfolio');
  const popupPortfolioClose = popupPortfolio.querySelector('.mobile-hide');
  const popupPortfolioCloseMobile = popupPortfolio.querySelector('.close.tablet-hide.desktop-hide');
  const popupPortfolioSlide = popupPortfolio.querySelector('.popup-portfolio-slider');
  const popupPortfolioText = popupPortfolio.querySelectorAll('.popup-portfolio-text');
  const mobileSlides = popupPortfolio.querySelectorAll('.popup-portfolio-slider__slide');
  const countSlide = popupPortfolioText.length;
  let slideHeight;
  const textWrapper = popupPortfolio.querySelector('#popup-portfolio-counter');
  const arrowRight = popupPortfolio.querySelector('#popup_portfolio_right');
  const arrowLeft = popupPortfolio.querySelector('#popup_portfolio_left');
  let slideActive = 0;
  textWrapper.querySelector('.slider-counter-content__total').textContent = countSlide;

  const render = () => {
    slider();
    textWrapper.querySelector('.slider-counter-content__current').textContent = slideActive + 1;
    mobileSlides.forEach(el => {
      el.style.display = "none";
    });
    mobileSlides[slideActive].style.display = "flex";
  };

  arrowRight.addEventListener('click', () => {
    ++slideActive;

    if (slideActive > countSlide - 1) {
      slideActive = 0;
    }

    render();
  });
  arrowLeft.addEventListener('click', () => {
    --slideActive;

    if (slideActive < 0) {
      slideActive = countSlide - 1;
    }

    render();
  });
  portfolioBtnMobile.forEach((element, i) => {
    element.addEventListener('click', evt => {
      popupPortfolio.style.visibility = 'visible';
      render();
    });
  });
  portfolioBtnDesctop.forEach((element, i) => {
    element.addEventListener('click', evt => {
      popupPortfolio.style.visibility = 'visible';
      slideActive = i;
      slideHeight = popupPortfolioSlide.querySelector('img').height;
      render();
      textWrapper.querySelector('.slider-counter-content__current').textContent = slideActive + 1;
      textWrapper.style.top = `${slideHeight - 100}px`;
      arrowRight.style.top = `${slideHeight / 2}px`;
      arrowLeft.style.top = `${slideHeight / 2}px`;
    });
  });
  popupPortfolio.addEventListener('click', e => {
    ;

    if (e.target.classList.contains('popup-portfolio')) {
      // console.log(e.target);
      popupPortfolio.style.cssText = "visibility: hidden;";
    }
  });
  popupPortfolioCloseMobile.addEventListener(`click`, () => {
    popupPortfolio.style.cssText = "visibility: hidden;";
  });
  popupPortfolioClose.addEventListener(`click`, () => {
    popupPortfolio.style.cssText = "visibility: hidden;";
  });
  let windowWidth = window.innerWidth;
  window.addEventListener(`resize`, () => {
    windowWidth = window.innerWidth;
    mobileSlides.forEach(el => {
      el.style.display = "block";
    });
    slider();
    render();
  });

  const slider = () => {
    if (windowWidth <= 1024) {
      mobileSlides.forEach(el => {
        el.style.display = "none";
      });
      mobileSlides[slideActive].style.display = "block";
    }

    popupPortfolioText.forEach(el => {
      el.style.display = "none";
    });
    popupPortfolioText[slideActive].style.display = "block";
  };
};

/* harmony default export */ __webpack_exports__["default"] = (portfolioModal);

/***/ }),

/***/ "./script/modules/portfolioSlider.js":
/*!*******************************************!*\
  !*** ./script/modules/portfolioSlider.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const portfolioSlider = () => {
  const portfolio = document.querySelector('#portfolio');
  const arrowRight = portfolio.querySelector('#portfolio-arrow_right');
  const arrowLeft = portfolio.querySelector('#portfolio-arrow_left');
  const slides = portfolio.querySelectorAll('.portfolio-slider__slide');
  let slideWidth = slides[0].offsetWidth;
  let SlideActive = 0;
  let slideCount;
  let windowWidth = window.innerWidth;
  const mobileslide = portfolio.querySelectorAll('.portfolio-slider-mobile .portfolio-slider__slide-frame');
  const mobileSliderTotal = portfolio.querySelector('.slider-counter-content__total');
  mobileSliderTotal.textContent = mobileslide.length;
  const mobileSliderCurrent = portfolio.querySelector('.slider-counter-content__current');
  let mobileSlidActive = 0;
  mobileSliderCurrent.textContent = mobileSlidActive + 1;
  const mobileArrowRight = portfolio.querySelector('#portfolio-arrow-mobile_right');
  const mobileArrowLeft = portfolio.querySelector('#portfolio-arrow-mobile_left');

  const mobileArrowVisible = () => {
    if (mobileSlidActive <= 0) {
      mobileArrowLeft.style.display = 'none';
      mobileArrowRight.style.display = 'flex';
    } else if (mobileSlidActive >= mobileslide.length - 1) {
      mobileArrowLeft.style.display = 'flex';
      mobileArrowRight.style.display = 'none';
    } else {
      mobileArrowRight.style.display = 'flex';
      mobileArrowLeft.style.display = 'flex';
    }
  };

  mobileArrowVisible();

  const mobileRender = () => {
    mobileslide.forEach(element => {
      element.style.display = 'none';
    });
    mobileslide[mobileSlidActive].style.display = 'flex';
    mobileSliderCurrent.textContent = mobileSlidActive + 1;
  };

  mobileRender();
  mobileArrowRight.addEventListener('click', () => {
    ++mobileSlidActive;
    mobileArrowVisible();

    if (mobileSlidActive >= mobileslide.length) {
      mobileSlidActive = mobileslide.length;
      return;
    }

    mobileRender();
  });
  mobileArrowLeft.addEventListener('click', () => {
    --mobileSlidActive;
    mobileArrowVisible();

    if (mobileSlidActive < 0) {
      mobileSlidActive = 0;
      return;
    }

    mobileRender();
  });

  const render = () => {
    slides.forEach(element => {
      element.style.cssText = `
      position: relative;
      left: -${SlideActive * slideWidth}px;
      transition: 0.3s;
      `;
    });
  };

  render();

  const arrowVisible = () => {
    if (SlideActive <= 0) {
      arrowLeft.style.display = 'none';
      arrowRight.style.display = 'flex';
    } else if (SlideActive >= slides.length - slideCount) {
      arrowLeft.style.display = 'flex';
      arrowRight.style.display = 'none';
    } else {
      arrowRight.style.display = 'flex';
      arrowLeft.style.display = 'flex';
    }
  };

  const resize = () => {
    slideWidth = slides[0].offsetWidth;
    SlideActive = 0;
    mobileArrowRight.style.zIndex = '-1';
    mobileArrowLeft.style.zIndex = '-1';
    arrowRight.style.display = 'flex';
    arrowLeft.style.display = 'flex';

    if (windowWidth > 1024) {
      slideCount = 3;
      arrowVisible();
    } else if (windowWidth <= 1024 && windowWidth > 900) {
      slideCount = 2;
      arrowVisible();
    } else if (windowWidth <= 900 && windowWidth > 576) {
      slideCount = 1;
      arrowVisible();
    } else {
      mobileArrowRight.style.zIndex = '11111';
      mobileArrowLeft.style.zIndex = '11111';
      arrowRight.style.display = 'none';
      arrowLeft.style.display = 'none';
      render();
    }
  };

  resize();
  window.addEventListener(`resize`, () => {
    windowWidth = window.innerWidth;
    resize();
  });
  arrowRight.addEventListener('click', () => {
    ++SlideActive;
    arrowVisible();

    if (SlideActive > slides.length - slideCount) {
      SlideActive = slides.length - slideCount;
      return;
    }

    render();
  });
  arrowLeft.addEventListener('click', () => {
    --SlideActive;
    arrowVisible();

    if (SlideActive < 0) {
      SlideActive = 0;
      return;
    }

    render();
  });
};

/* harmony default export */ __webpack_exports__["default"] = (portfolioSlider);

/***/ }),

/***/ "./script/modules/regExpPhoneMask.js":
/*!*******************************************!*\
  !*** ./script/modules/regExpPhoneMask.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const regExpPhoneMask = () => {
  const input = document.querySelectorAll('input[name="phone"]');
  input.forEach(element => {
    element.setAttribute('placeholder', '+7 (___) ___-__-__');
    element.addEventListener('input', evt => {
      const keyCode = evt.keyCode;
      const template = '+7 (___) ___-__-__';
      const def = template.replace(/\D/g, "");
      const val = element.value.replace(/\D/g, "");
      let i = 0;
      let newValue = template.replace(/[_\d]/g, a => i < val.length ? val.charAt(i++) || def.charAt(i) : a);
      i = newValue.indexOf("_");

      if (i !== -1) {
        newValue = newValue.slice(0, i);
      }

      let reg = template.substr(0, element.value.length).replace(/_+/g, a => "\\d{1," + a.length + "}").replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");

      if (!reg.test(element.value) || element.value.length < 5 || keyCode > 47 && keyCode < 58) {
        element.value = newValue;
      }

      if (event.type === "blur" && element.value.length < 5) {
        element.value = "";
      }
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (regExpPhoneMask);

/***/ }),

/***/ "./script/modules/repair-render-content.js":
/*!*************************************************!*\
  !*** ./script/modules/repair-render-content.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const repairContent = () => {
  const popup = document.querySelector('.popup.popup-repair-types');
  let data = {};

  const postData = () => {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.addEventListener('readystatechange', () => {
        if (request.readyState !== 4) {
          return;
        }

        if (request.status === 200) {
          data = JSON.parse(request.responseText);
          resolve(data);
        } else {
          reject(request.status);
        }
      });
      request.open('GET', './db/db.json');
      request.setRequestHeader('Content-type', 'application/json');
      request.send();
    });
  };

  let dataTemp = {};

  const render = (container, template, place = `beforeend`) => {
    container.insertAdjacentHTML(place, template);
  };

  const outputData = data => {
    dataTemp = data;
    clearFormBtn();
    clearFormContent();
    renderData(dataTemp);
    renderBtn(dataTemp);
    renderContext();
  };

  const errorData = () => {
    const status = popup.querySelector('.popup-repair-types-content__head-title');
    status.textContent = "Ошибка загрузки, повторите попытку позже!";
    status.style.color = 'red';
  };

  postData().then(outputData).catch(errorData);

  const renderBtn = dataTemp => {
    const btnWrapper = popup.querySelector('.nav-list.nav-list-popup-repair');
    dataTemp.forEach(el => {
      if (el.title) {
        render(btnWrapper, menuBtnTemplate(el.title));
      }
    });
    btnEvent(dataTemp);
  };

  const btnEvent = dataTemp => {
    const btn = popup.querySelectorAll('.popup-repair-types-nav__item');
    btn.forEach(el => {
      el.addEventListener('click', () => {
        renderActiveBtn(btn, el, dataTemp);
      });
    });
  };

  const renderActiveBtn = (btn, activeBtn, dataTemp) => {
    let headText = popup.querySelector('#switch-inner');
    btn.forEach(el => {
      el.classList.remove('active');
    });
    headText.textContent = activeBtn.textContent;
    activeBtn.classList.add('active');
    dataTemp.forEach(el => {
      if (activeBtn.textContent === el.title) {
        renderContext(el.priceList);
      }
    });
  };

  const renderContext = (data = 1) => {
    if (data === 1) {
      data = dataTemp[data].priceList;
    }

    let popupContentClear = popup.querySelectorAll('.popup-repair-types-content-table__list');
    removeAll(popupContentClear);
    const contentWrapper = popup.querySelector('.popup-repair-types-content-table');
    render(contentWrapper, menuCardWrapperTemplate());
    const wrapper = popup.querySelector('.popup-repair-types-content-table__list-wrapperPaste');
    data.forEach(el => {
      render(wrapper, menuCardTemplate(el));
    });
  };

  const clearFormBtn = () => {
    const btnRemove = popup.querySelectorAll('.popup-repair-types-nav__item');
    removeAll(btnRemove);
  };

  const clearFormContent = () => {
    const popupContent = popup.querySelectorAll('.popup-repair-types-content-table__list');
    removeAll(popupContent);
  };

  const remove = element => {
    element.remove();
  };

  const removeAll = element => {
    element.forEach(el => {
      remove(el);
    });
  };

  const menuBtnTemplate = text => {
    return `<button class="button_o popup-repair-types-nav__item">${text}</button>`;
  };

  const menuCardTemplate = el => {
    return `
    <tr class="mobile-row">
      <td class="repair-types-name">${el.typeService}</td>
      <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
      <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
      <td class="repair-types-value">${el.units}<sup>2</sup></td>
      <td class="repair-types-value">${el.cost} руб.</td>
    </tr>
  `;
  };

  const menuCardWrapperTemplate = () => {
    return `
    <table class="popup-repair-types-content-table__list">
      <tbody class="popup-repair-types-content-table__list-wrapperPaste">
      </tbody>
    </table>
    `;
  };

  const renderData = dataTemp => {
    const popupData = popup.querySelector('.popup-repair-types-content__head-date');
    popupData.textContent = dataTemp[0].date;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (repairContent);

/***/ }),

/***/ "./script/modules/repairModal.js":
/*!***************************************!*\
  !*** ./script/modules/repairModal.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const repairModal = () => {
  const cta = document.querySelectorAll('.link-list'),
        modal = document.querySelector(`.popup-repair-types`),
        close = modal.querySelectorAll(`.close`),
        hidden = () => {
    modal.style.cssText = "visibility: hidden;";
    document.body.style.cssText = `overflow: auto; height: auto;`;
  },
        visible = () => {
    // document.querySelector('.popup-menu').style.cssText = 'transform: translateX(645px);';
    document.body.style.cssText = `overflow: hidden; height: 100%;`;
    modal.style.cssText = "visibility: visible;";
  };

  cta.forEach(element => {
    if (!element.matches('a')) {
      element.addEventListener(`click`, () => visible());
    }
  });
  modal.addEventListener(`click`, event => {
    if (event.target.classList.contains('popup-repair-types')) {
      hidden();
    }
  });
  close.forEach(element => element.addEventListener(`click`, () => hidden()));
};

/* harmony default export */ __webpack_exports__["default"] = (repairModal);

/***/ }),

/***/ "./script/modules/repairViews.js":
/*!***************************************!*\
  !*** ./script/modules/repairViews.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class repairViews {
  constructor() {
    this.repairTypes = document.querySelector('#repair-types');
    this.repairItems = this.repairTypes.querySelectorAll('.repair-types-nav__item');
    this.repairSlideCollection = this.repairTypes.querySelector('.repair-types-slider').children;
    this.repairSlide = Array.from(this.repairSlideCollection);
    this.sliderCounterContentTotal = this.repairTypes.querySelector('.slider-counter-content__total');
    this.sliderCounterContentCurrent = this.repairTypes.querySelector('.slider-counter-content__current');
    this.arrowLeft = this.repairTypes.querySelector('#repair-types-arrow_left');
    this.arrowRight = this.repairTypes.querySelector('#repair-types-arrow_right');
    this.slideHeight = this.repairSlide[1].querySelector('img').height;
    this.navArrowLeft = this.repairTypes.querySelector('#nav-arrow-repair-left_base');
    this.navArrowRight = this.repairTypes.querySelector('#nav-arrow-repair-right_base');
    this.navListRepair = this.repairTypes.querySelector('.nav-list-repair');
    this.repairWidth = this.repairTypes.querySelector('.repair-types-nav').offsetWidth;
    this.navListRepairWidth = (this.navListRepair.offsetWidth - this.repairWidth) / this.navListRepair.children.length;
    this.base = 0;
    this.sliderCount = 0;
    this.slide = 0;
  }

  start() {
    this.eventListener();
    this.eventListenerSlides();
    this.eventListenerBase();
    this.sliderCounterContentTotal.textContent = this.repairSlide[0].children.length;
    this.sliderCounterContentCurrent.textContent = this.slide + 1;
  }

  eventListenerBase() {
    this.navArrowRight.addEventListener(`click`, () => {
      if (this.base >= this.navListRepair.children.length) return;
      ++this.base;
      this.navListRepairWidth = (this.navListRepair.offsetWidth - this.repairWidth) / this.navListRepair.children.length;
      this.navListRepair.style.transform = `translateX(-${this.navListRepairWidth * this.base}px)`;
    });
    this.navArrowLeft.addEventListener(`click`, () => {
      if (this.base <= 0) return;
      --this.base;
      this.navListRepairWidth = (this.navListRepair.offsetWidth - this.repairWidth) / this.navListRepair.children.length;
      this.navListRepair.style.transform = `translateX(-${this.navListRepairWidth * this.base}px)`;
    });
  }

  eventListenerSlides() {
    this.arrowRight.addEventListener(`click`, () => {
      ++this.slide;

      if (this.slide >= this.repairSlide[this.sliderCount].children.length) {
        this.slide = 0;
      }

      this.sliderCounterContentCurrent.textContent = this.slide + 1;
      this.repairSlide[this.sliderCount].style.transform = `translateY(-${this.slideHeight * this.slide}px)`;
    });
    this.arrowLeft.addEventListener(`click`, () => {
      --this.slide;

      if (this.slide < 0) {
        this.slide = this.repairSlide[this.sliderCount].children.length - 1;
      }

      this.sliderCounterContentCurrent.textContent = this.slide + 1;
      this.repairSlide[this.sliderCount].style.transform = `translateY(-${this.slideHeight * this.slide}px)`;
    });
  }

  eventListener() {
    window.addEventListener(`resize`, () => {
      this.repairWidth = this.repairTypes.querySelector('.repair-types-nav').offsetWidth;
      this.navListRepairWidth = (this.navListRepair.offsetWidth - this.repairWidth) / this.navListRepair.children.length;
      this.navListRepair.style.transform = `translateX(-${0}px)`;
      this.base = 0;
    });
    this.repairItems.forEach((el, i) => {
      el.addEventListener(`click`, () => {
        this.base = 0;
        this.sliderCount = 0;
        this.slide = 0;
        this.render();
        el.classList.add('active');
        this.repairSlide[i].style.display = 'block';
        this.sliderCount = i;
        this.sliderCounterContentTotal.textContent = this.repairSlide[i].children.length;
      });
    });
  }

  render() {
    this.repairItems.forEach((el, i) => {
      el.classList.remove('active');
    });
    this.repairSlide.forEach((el, i) => {
      this.repairSlide[i].style.display = 'none';
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (repairViews);

/***/ }),

/***/ "./script/modules/smoothScroll.js":
/*!****************************************!*\
  !*** ./script/modules/smoothScroll.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const smoothScroll = () => {
  const menuList = document.querySelectorAll('.popup-menu-nav__item>a[href*="#"]'),
        moveUp = document.querySelector('.button-footer>a'); // Navigation scroll

  menuList.forEach(element => {
    element.addEventListener('click', event => {
      event.preventDefault();
      const gotId = element.getAttribute('href');
      document.querySelector('' + gotId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }); // Arrow scroll up to the top

  moveUp.addEventListener('click', event => {
    let target = event.target;
    event.preventDefault();
    const gotId = target.getAttribute('href');
    document.querySelector('' + gotId).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (smoothScroll);

/***/ }),

/***/ "./script/modules/tabs.js":
/*!********************************!*\
  !*** ./script/modules/tabs.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const tabs = obj => {
  const block = document.querySelector(obj.block);
  const blockWrapper = block.querySelector(obj.blockWrapper);
  const blockSlides = block.querySelector(obj.blockSlides);
  const arrowRight = block.querySelector(obj.arrowRight);
  const arrowLeft = block.querySelector(obj.arrowLeft);
  const slidesAll = blockSlides.children.length;
  let sizeWrapper = blockWrapper.clientWidth;
  let sizeSlides = blockSlides.clientWidth;
  let activeSlide = 0;
  let count = (sizeSlides - sizeWrapper) / slidesAll;
  window.addEventListener(`resize`, () => {
    sizeWrapper = blockWrapper.clientWidth;
    sizeSlides = blockSlides.clientWidth;
    activeSlide = 0;
    count = (sizeSlides - sizeWrapper) / slidesAll;
    render();
  });
  arrowRight.addEventListener('click', () => {
    ++activeSlide;

    if (activeSlide > slidesAll) {
      activeSlide = slidesAll;
      return;
    }

    render();
  });
  arrowLeft.addEventListener('click', () => {
    --activeSlide;

    if (activeSlide < 0) {
      activeSlide = 0;
      return;
    }

    render();
  });

  const render = () => {
    visibleArrow();
    blockSlides.style.transform = `translateX(-${count * activeSlide}px)`;
  };

  const visibleArrow = () => {
    if (activeSlide === 0) {
      arrowLeft.style.display = 'none';
      arrowRight.style.display = 'flex';
    } else if (activeSlide >= slidesAll) {
      arrowLeft.style.display = 'flex';
      arrowRight.style.display = 'none';
    } else {
      arrowRight.style.display = 'flex';
      arrowLeft.style.display = 'flex';
    }
  };

  visibleArrow();
};

/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ }),

/***/ "./script/modules/testimonialsBlock.js":
/*!*********************************************!*\
  !*** ./script/modules/testimonialsBlock.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const testimonialsBlock = () => {
  const testimonials = document.querySelector('#reviews'),
        left = testimonials.querySelector('#reviews-arrow_left'),
        right = testimonials.querySelector('#reviews-arrow_right'),
        slide = testimonials.querySelectorAll('.reviews-slider__slide'),
        count = slide.length;
  let current = 0;

  const renderSlide = () => {
    slide.forEach(element => element.style.display = 'none');
    slide[current].style.display = 'flex';
  };

  right.addEventListener('click', () => {
    ++current;

    if (current > count - 1) {
      current = 0;
    }

    renderSlide();
  });
  left.addEventListener('click', () => {
    --current;

    if (current < 0) {
      current = count - 1;
    }

    renderSlide();
  });
};

/* harmony default export */ __webpack_exports__["default"] = (testimonialsBlock);

/***/ })

/******/ });
//# sourceMappingURL=main.js.map