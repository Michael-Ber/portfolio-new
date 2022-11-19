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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/burger.js":
/*!*********************************!*\
  !*** ./src/assets/js/burger.js ***!
  \*********************************/
/*! exports provided: burger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "burger", function() { return burger; });


const burger = _ref => {
  let {
    btn: btnSelector,
    menu: menuSelector,
    overlay: overlaySelector,
    btnActive: btnActiveClass,
    menuActive: menuActiveClass,
    overlayActive: overlayActiveClass,
    close: closeSelector
  } = _ref;
  const burgerBtn = document.querySelector(btnSelector),
    burgerMenu = document.querySelector(menuSelector),
    overlay = document.querySelector(overlaySelector),
    close = document.querySelector(closeSelector);
  burgerBtn.addEventListener('click', function () {
    if (!this.classList.contains(btnActiveClass)) {
      this.classList.add(btnActiveClass);
      burgerMenu.classList.add(menuActiveClass);
      overlay.classList.add(overlayActiveClass);
    } else {
      this.classList.remove(btnActiveClass);
      burgerMenu.classList.remove(menuActiveClass);
      overlay.classList.remove(overlayActiveClass);
    }
  });
  close.addEventListener('click', () => {
    burgerBtn.classList.remove(btnActiveClass);
    burgerMenu.classList.remove(menuActiveClass);
    overlay.classList.remove(overlayActiveClass);
  });
};


/***/ }),

/***/ "./src/assets/js/lang.js":
/*!*******************************!*\
  !*** ./src/assets/js/lang.js ***!
  \*******************************/
/*! exports provided: setLanguage, lang */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLanguage", function() { return setLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lang", function() { return lang; });
const lang = {
  'lng-about': {
    'en': 'about',
    'ru': 'обо мне'
  },
  'lng-skills': {
    'en': 'skills',
    'ru': 'навыки'
  },
  'lng-works': {
    'en': 'works',
    'ru': 'мои работы'
  },
  'lng-contact': {
    'en': 'contact',
    'ru': 'контакты'
  },
  'lng-intro': {
    'en': `Hi, <br>I'm Michael,<br> web developer`,
    'ru': 'Привет,<br> меня зовут Михаил,<br> я веб-разработчик'
  },
  'lng-btnContact': {
    'en': 'Contact me!',
    'ru': 'Свяжитесь со мной'
  },
  'lng-prof': {
    'en': 'Freelancer',
    'ru': 'Фрилансер'
  },
  'lng-descr': {
    'en': "Hello, my name is Michael. I'm junior front-end developer.I've been learning front-end for two years, finished five web developing courses on Udemy and have been practicing all that time. My you can see below.",
    'ru': 'Привет, меня зовут Михаил. Я джуниор фронт-енд разработчик. Я изучаю фронт-енд два года, закончил пять курсов веб-разработки на Udemy, все это время практикуюсь. вы можете посмотреть ниже '
  },
  'lng-worksSubtitle': {
    'en': 'What i use in my work',
    'ru': 'Что я использую в работе'
  },
  'lng-html': {
    'en': 'HTML can be described as the language that ultimately gives web pages (and websites) the appearance and structure that is seen by end users.',
    'ru': 'HTML - стандартизированный язык гипертекстовой разметки документов для просмотра веб-страниц в браузере'
  },
  'lng-css': {
    'en': 'CSS is the abbreviation for the term “cascading style sheets” and describes how HTML elements should be displayed.',
    'ru': 'CSS расшифровывается как каскадные таблицы стилей и описывает как HTML элементы должны отображаться'
  },
  'lng-js': {
    'en': 'This programming language allows you to bring anything to life: sliders, windows, tooltips, tabs, receiving data from the server, and much more.',
    'ru': 'Этот язык программирования позволяет оживить все что угодно: слайдеры, окна, подсказки, вкладки, получение данных от сервера и многое другое'
  },
  'lng-react': {
    'en': 'This library allows you to create web applications. I can create the most interactive product for your purposes.',
    'ru': 'Эта библиотека позволяет создавать web-приложения. Я могу создать максимально интерактивный продукт именно под ваши цели'
  },
  'lng-jquery': {
    'en': 'The Jquery library will speed up development. Without the need to integrate it into the project, we will not, but the skill of working with it is present.',
    'ru': 'Библиотека Jquery позволит ускорить разработку. Без необходимости интегрировать в проект мы её не будем, но навык работы с ней присутствует.'
  },
  'lng-sites': {
    'en': 'Web sites creating',
    'ru': 'Создание веб-сайтов'
  },
  'lng-apps': {
    'en': 'Web applications creating',
    'ru': 'Создание веб-приложений'
  },
  'lng-data': {
    'en': 'Work with data',
    'ru': 'Работа с данными'
  },
  'lng-creativity': {
    'en': 'Creativity',
    'ru': 'Креативность'
  },
  'lng-design': {
    'en': 'Design creating',
    'ru': 'Создание дизайна'
  },
  'lng-softSkills': {
    'en': 'Soft skills',
    'ru': 'Soft skills'
  },
  'lng-portfolio': {
    'en': 'Portfolio',
    'ru': 'Портфолио'
  },
  'lng-worksSubtitle': {
    'en': 'Some of my works',
    'ru': 'Мои работы'
  },
  'lng-contactSubtitle': {
    'en': 'Form for contact',
    'ru': 'Форма для связи'
  },
  'lng-contactDescr': {
    'en': "I'm interested in freelance opportunities. However, if you have other request or question, you can use a form.",
    'ru': 'Мне интересны фриланс-возможности. Если у вас остались вопросы, можете использовать форму для связи'
  },
  'lng-name': {
    'en': 'Name',
    'ru': 'Имя'
  },
  'lng-email': {
    'en': 'Email',
    'ru': 'Почта'
  },
  'lng-msg': {
    'en': 'Message',
    'ru': 'Сообщение'
  },
  'lng-btnSend': {
    'en': 'Send message!',
    'ru': 'Отправить!'
  },
  'lng-privacy': {
    'en': 'I agree with the',
    'ru': 'Я согласен(а) с'
  },
  'lng-privacyLink': {
    'en': 'privacy policy',
    'ru': 'политикой конфиденциальности'
  }
};
function setLanguage(langObject, langSelector) {
  const select = document.querySelector(langSelector);
  const tagsForLangChange = document.querySelectorAll('.lng');
  window.location.hash = '#en';
  select.addEventListener('change', () => {
    let language = select.value;
    window.location.hash = `#${language}`;
    let hash = window.location.hash;
    tagsForLangChange.forEach(item => {
      const clsNameStr = item.classList.value.match(/lng-[a-z]*/ig).join('');
      console.log(item);
      if (item.classList.contains(clsNameStr)) {
        item.innerHTML = langObject[clsNameStr][hash.substring(1)];
      }
      // console.log(clsNameStr);
      // console.log(lang[clsNameStr]['ru']);
    });
  });
}



/***/ }),

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./burger */ "./src/assets/js/burger.js");
/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scroll */ "./src/assets/js/scroll.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lang */ "./src/assets/js/lang.js");





window.addEventListener('DOMContentLoaded', () => {
  Object(_burger__WEBPACK_IMPORTED_MODULE_0__["burger"])({
    btn: '.burger__btn',
    menu: '.burger__menu',
    overlay: '.overlay',
    btnActive: 'burger__btn_active',
    menuActive: 'burger__menu_active',
    overlayActive: 'overlay_active',
    close: '.menu__close'
  });
  Object(_scroll__WEBPACK_IMPORTED_MODULE_1__["scroll"])({
    arrow: '.arrow-up',
    arrowActive: 'arrow-up_active'
  });
  document.querySelectorAll('.lng').forEach(item => {
    const clsNameStr = item.classList.value.match(/lng-[a-z]*/ig).join('');
    // console.log(clsNameStr);
    // console.log(lang[clsNameStr]['ru']);
  });

  Object(_lang__WEBPACK_IMPORTED_MODULE_2__["setLanguage"])(_lang__WEBPACK_IMPORTED_MODULE_2__["lang"], '.lang-selector');
});

/***/ }),

/***/ "./src/assets/js/scroll.js":
/*!*********************************!*\
  !*** ./src/assets/js/scroll.js ***!
  \*********************************/
/*! exports provided: scroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scroll", function() { return scroll; });


const scroll = _ref => {
  let {
    arrow: arrowSelector,
    arrowActive: arrowActiveClass
  } = _ref;
  const links = document.querySelectorAll('[href^="#"]');
  const speed = 0.2;
  window.addEventListener('scroll', () => {
    let fromTop = document.documentElement.scrollTop;
    let arrow = document.querySelector(arrowSelector);
    if (fromTop > 1650) {
      arrow.classList.add(arrowActiveClass);
    } else {
      arrow.classList.remove(arrowActiveClass);
    }
  });
  links.forEach(link => {
    if (link.hash) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        let toSection = document.querySelector(link.hash).getBoundingClientRect().top - 100;
        let hash = this.hash;
        let fromTop = document.documentElement.scrollTop;
        let start = null;
        requestAnimationFrame(step);
        function step(time) {
          if (start === null) {
            start = time;
          }
          let progress = time - start;
          let r = toSection < 0 ? Math.max(fromTop - progress / speed, fromTop + toSection) : Math.min(fromTop + progress / speed, fromTop + toSection);
          document.documentElement.scrollTo(0, r);
          if (r != fromTop + toSection) {
            requestAnimationFrame(step);
          } else {
            location.hash = hash;
          }
        }
      });
    }
  });
};


/***/ })

/******/ });
//# sourceMappingURL=script.js.map