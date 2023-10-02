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

/***/ "./node_modules/typed.js/lib/typed.js":
/*!********************************************!*\
  !*** ./node_modules/typed.js/lib/typed.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * 
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.12
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _initializerJs = __webpack_require__(1);
	
	var _htmlParserJs = __webpack_require__(3);
	
	/**
	 * Welcome to Typed.js!
	 * @param {string} elementId HTML element ID _OR_ HTML element
	 * @param {object} options options object
	 * @returns {object} a new Typed object
	 */
	
	var Typed = (function () {
	  function Typed(elementId, options) {
	    _classCallCheck(this, Typed);
	
	    // Initialize it up
	    _initializerJs.initializer.load(this, options, elementId);
	    // All systems go!
	    this.begin();
	  }
	
	  /**
	   * Toggle start() and stop() of the Typed instance
	   * @public
	   */
	
	  _createClass(Typed, [{
	    key: 'toggle',
	    value: function toggle() {
	      this.pause.status ? this.start() : this.stop();
	    }
	
	    /**
	     * Stop typing / backspacing and enable cursor blinking
	     * @public
	     */
	  }, {
	    key: 'stop',
	    value: function stop() {
	      if (this.typingComplete) return;
	      if (this.pause.status) return;
	      this.toggleBlinking(true);
	      this.pause.status = true;
	      this.options.onStop(this.arrayPos, this);
	    }
	
	    /**
	     * Start typing / backspacing after being stopped
	     * @public
	     */
	  }, {
	    key: 'start',
	    value: function start() {
	      if (this.typingComplete) return;
	      if (!this.pause.status) return;
	      this.pause.status = false;
	      if (this.pause.typewrite) {
	        this.typewrite(this.pause.curString, this.pause.curStrPos);
	      } else {
	        this.backspace(this.pause.curString, this.pause.curStrPos);
	      }
	      this.options.onStart(this.arrayPos, this);
	    }
	
	    /**
	     * Destroy this instance of Typed
	     * @public
	     */
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.reset(false);
	      this.options.onDestroy(this);
	    }
	
	    /**
	     * Reset Typed and optionally restarts
	     * @param {boolean} restart
	     * @public
	     */
	  }, {
	    key: 'reset',
	    value: function reset() {
	      var restart = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
	
	      clearInterval(this.timeout);
	      this.replaceText('');
	      if (this.cursor && this.cursor.parentNode) {
	        this.cursor.parentNode.removeChild(this.cursor);
	        this.cursor = null;
	      }
	      this.strPos = 0;
	      this.arrayPos = 0;
	      this.curLoop = 0;
	      if (restart) {
	        this.insertCursor();
	        this.options.onReset(this);
	        this.begin();
	      }
	    }
	
	    /**
	     * Begins the typing animation
	     * @private
	     */
	  }, {
	    key: 'begin',
	    value: function begin() {
	      var _this = this;
	
	      this.options.onBegin(this);
	      this.typingComplete = false;
	      this.shuffleStringsIfNeeded(this);
	      this.insertCursor();
	      if (this.bindInputFocusEvents) this.bindFocusEvents();
	      this.timeout = setTimeout(function () {
	        // Check if there is some text in the element, if yes start by backspacing the default message
	        if (!_this.currentElContent || _this.currentElContent.length === 0) {
	          _this.typewrite(_this.strings[_this.sequence[_this.arrayPos]], _this.strPos);
	        } else {
	          // Start typing
	          _this.backspace(_this.currentElContent, _this.currentElContent.length);
	        }
	      }, this.startDelay);
	    }
	
	    /**
	     * Called for each character typed
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'typewrite',
	    value: function typewrite(curString, curStrPos) {
	      var _this2 = this;
	
	      if (this.fadeOut && this.el.classList.contains(this.fadeOutClass)) {
	        this.el.classList.remove(this.fadeOutClass);
	        if (this.cursor) this.cursor.classList.remove(this.fadeOutClass);
	      }
	
	      var humanize = this.humanizer(this.typeSpeed);
	      var numChars = 1;
	
	      if (this.pause.status === true) {
	        this.setPauseStatus(curString, curStrPos, true);
	        return;
	      }
	
	      // contain typing function in a timeout humanize'd delay
	      this.timeout = setTimeout(function () {
	        // skip over any HTML chars
	        curStrPos = _htmlParserJs.htmlParser.typeHtmlChars(curString, curStrPos, _this2);
	
	        var pauseTime = 0;
	        var substr = curString.substr(curStrPos);
	        // check for an escape character before a pause value
	        // format: \^\d+ .. eg: ^1000 .. should be able to print the ^ too using ^^
	        // single ^ are removed from string
	        if (substr.charAt(0) === '^') {
	          if (/^\^\d+/.test(substr)) {
	            var skip = 1; // skip at least 1
	            substr = /\d+/.exec(substr)[0];
	            skip += substr.length;
	            pauseTime = parseInt(substr);
	            _this2.temporaryPause = true;
	            _this2.options.onTypingPaused(_this2.arrayPos, _this2);
	            // strip out the escape character and pause value so they're not printed
	            curString = curString.substring(0, curStrPos) + curString.substring(curStrPos + skip);
	            _this2.toggleBlinking(true);
	          }
	        }
	
	        // check for skip characters formatted as
	        // "this is a `string to print NOW` ..."
	        if (substr.charAt(0) === '`') {
	          while (curString.substr(curStrPos + numChars).charAt(0) !== '`') {
	            numChars++;
	            if (curStrPos + numChars > curString.length) break;
	          }
	          // strip out the escape characters and append all the string in between
	          var stringBeforeSkip = curString.substring(0, curStrPos);
	          var stringSkipped = curString.substring(stringBeforeSkip.length + 1, curStrPos + numChars);
	          var stringAfterSkip = curString.substring(curStrPos + numChars + 1);
	          curString = stringBeforeSkip + stringSkipped + stringAfterSkip;
	          numChars--;
	        }
	
	        // timeout for any pause after a character
	        _this2.timeout = setTimeout(function () {
	          // Accounts for blinking while paused
	          _this2.toggleBlinking(false);
	
	          // We're done with this sentence!
	          if (curStrPos >= curString.length) {
	            _this2.doneTyping(curString, curStrPos);
	          } else {
	            _this2.keepTyping(curString, curStrPos, numChars);
	          }
	          // end of character pause
	          if (_this2.temporaryPause) {
	            _this2.temporaryPause = false;
	            _this2.options.onTypingResumed(_this2.arrayPos, _this2);
	          }
	        }, pauseTime);
	
	        // humanized value for typing
	      }, humanize);
	    }
	
	    /**
	     * Continue to the next string & begin typing
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'keepTyping',
	    value: function keepTyping(curString, curStrPos, numChars) {
	      // call before functions if applicable
	      if (curStrPos === 0) {
	        this.toggleBlinking(false);
	        this.options.preStringTyped(this.arrayPos, this);
	      }
	      // start typing each new char into existing string
	      // curString: arg, this.el.html: original text inside element
	      curStrPos += numChars;
	      var nextString = curString.substr(0, curStrPos);
	      this.replaceText(nextString);
	      // loop the function
	      this.typewrite(curString, curStrPos);
	    }
	
	    /**
	     * We're done typing the current string
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'doneTyping',
	    value: function doneTyping(curString, curStrPos) {
	      var _this3 = this;
	
	      // fires callback function
	      this.options.onStringTyped(this.arrayPos, this);
	      this.toggleBlinking(true);
	      // is this the final string
	      if (this.arrayPos === this.strings.length - 1) {
	        // callback that occurs on the last typed string
	        this.complete();
	        // quit if we wont loop back
	        if (this.loop === false || this.curLoop === this.loopCount) {
	          return;
	        }
	      }
	      this.timeout = setTimeout(function () {
	        _this3.backspace(curString, curStrPos);
	      }, this.backDelay);
	    }
	
	    /**
	     * Backspaces 1 character at a time
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'backspace',
	    value: function backspace(curString, curStrPos) {
	      var _this4 = this;
	
	      if (this.pause.status === true) {
	        this.setPauseStatus(curString, curStrPos, false);
	        return;
	      }
	      if (this.fadeOut) return this.initFadeOut();
	
	      this.toggleBlinking(false);
	      var humanize = this.humanizer(this.backSpeed);
	
	      this.timeout = setTimeout(function () {
	        curStrPos = _htmlParserJs.htmlParser.backSpaceHtmlChars(curString, curStrPos, _this4);
	        // replace text with base text + typed characters
	        var curStringAtPosition = curString.substr(0, curStrPos);
	        _this4.replaceText(curStringAtPosition);
	
	        // if smartBack is enabled
	        if (_this4.smartBackspace) {
	          // the remaining part of the current string is equal of the same part of the new string
	          var nextString = _this4.strings[_this4.arrayPos + 1];
	          if (nextString && curStringAtPosition === nextString.substr(0, curStrPos)) {
	            _this4.stopNum = curStrPos;
	          } else {
	            _this4.stopNum = 0;
	          }
	        }
	
	        // if the number (id of character in current string) is
	        // less than the stop number, keep going
	        if (curStrPos > _this4.stopNum) {
	          // subtract characters one by one
	          curStrPos--;
	          // loop the function
	          _this4.backspace(curString, curStrPos);
	        } else if (curStrPos <= _this4.stopNum) {
	          // if the stop number has been reached, increase
	          // array position to next string
	          _this4.arrayPos++;
	          // When looping, begin at the beginning after backspace complete
	          if (_this4.arrayPos === _this4.strings.length) {
	            _this4.arrayPos = 0;
	            _this4.options.onLastStringBackspaced();
	            _this4.shuffleStringsIfNeeded();
	            _this4.begin();
	          } else {
	            _this4.typewrite(_this4.strings[_this4.sequence[_this4.arrayPos]], curStrPos);
	          }
	        }
	        // humanized value for typing
	      }, humanize);
	    }
	
	    /**
	     * Full animation is complete
	     * @private
	     */
	  }, {
	    key: 'complete',
	    value: function complete() {
	      this.options.onComplete(this);
	      if (this.loop) {
	        this.curLoop++;
	      } else {
	        this.typingComplete = true;
	      }
	    }
	
	    /**
	     * Has the typing been stopped
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @param {boolean} isTyping
	     * @private
	     */
	  }, {
	    key: 'setPauseStatus',
	    value: function setPauseStatus(curString, curStrPos, isTyping) {
	      this.pause.typewrite = isTyping;
	      this.pause.curString = curString;
	      this.pause.curStrPos = curStrPos;
	    }
	
	    /**
	     * Toggle the blinking cursor
	     * @param {boolean} isBlinking
	     * @private
	     */
	  }, {
	    key: 'toggleBlinking',
	    value: function toggleBlinking(isBlinking) {
	      if (!this.cursor) return;
	      // if in paused state, don't toggle blinking a 2nd time
	      if (this.pause.status) return;
	      if (this.cursorBlinking === isBlinking) return;
	      this.cursorBlinking = isBlinking;
	      if (isBlinking) {
	        this.cursor.classList.add('typed-cursor--blink');
	      } else {
	        this.cursor.classList.remove('typed-cursor--blink');
	      }
	    }
	
	    /**
	     * Speed in MS to type
	     * @param {number} speed
	     * @private
	     */
	  }, {
	    key: 'humanizer',
	    value: function humanizer(speed) {
	      return Math.round(Math.random() * speed / 2) + speed;
	    }
	
	    /**
	     * Shuffle the sequence of the strings array
	     * @private
	     */
	  }, {
	    key: 'shuffleStringsIfNeeded',
	    value: function shuffleStringsIfNeeded() {
	      if (!this.shuffle) return;
	      this.sequence = this.sequence.sort(function () {
	        return Math.random() - 0.5;
	      });
	    }
	
	    /**
	     * Adds a CSS class to fade out current string
	     * @private
	     */
	  }, {
	    key: 'initFadeOut',
	    value: function initFadeOut() {
	      var _this5 = this;
	
	      this.el.className += ' ' + this.fadeOutClass;
	      if (this.cursor) this.cursor.className += ' ' + this.fadeOutClass;
	      return setTimeout(function () {
	        _this5.arrayPos++;
	        _this5.replaceText('');
	
	        // Resets current string if end of loop reached
	        if (_this5.strings.length > _this5.arrayPos) {
	          _this5.typewrite(_this5.strings[_this5.sequence[_this5.arrayPos]], 0);
	        } else {
	          _this5.typewrite(_this5.strings[0], 0);
	          _this5.arrayPos = 0;
	        }
	      }, this.fadeOutDelay);
	    }
	
	    /**
	     * Replaces current text in the HTML element
	     * depending on element type
	     * @param {string} str
	     * @private
	     */
	  }, {
	    key: 'replaceText',
	    value: function replaceText(str) {
	      if (this.attr) {
	        this.el.setAttribute(this.attr, str);
	      } else {
	        if (this.isInput) {
	          this.el.value = str;
	        } else if (this.contentType === 'html') {
	          this.el.innerHTML = str;
	        } else {
	          this.el.textContent = str;
	        }
	      }
	    }
	
	    /**
	     * If using input elements, bind focus in order to
	     * start and stop the animation
	     * @private
	     */
	  }, {
	    key: 'bindFocusEvents',
	    value: function bindFocusEvents() {
	      var _this6 = this;
	
	      if (!this.isInput) return;
	      this.el.addEventListener('focus', function (e) {
	        _this6.stop();
	      });
	      this.el.addEventListener('blur', function (e) {
	        if (_this6.el.value && _this6.el.value.length !== 0) {
	          return;
	        }
	        _this6.start();
	      });
	    }
	
	    /**
	     * On init, insert the cursor element
	     * @private
	     */
	  }, {
	    key: 'insertCursor',
	    value: function insertCursor() {
	      if (!this.showCursor) return;
	      if (this.cursor) return;
	      this.cursor = document.createElement('span');
	      this.cursor.className = 'typed-cursor';
	      this.cursor.setAttribute('aria-hidden', true);
	      this.cursor.innerHTML = this.cursorChar;
	      this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling);
	    }
	  }]);
	
	  return Typed;
	})();
	
	exports['default'] = Typed;
	module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _defaultsJs = __webpack_require__(2);
	
	var _defaultsJs2 = _interopRequireDefault(_defaultsJs);
	
	/**
	 * Initialize the Typed object
	 */
	
	var Initializer = (function () {
	  function Initializer() {
	    _classCallCheck(this, Initializer);
	  }
	
	  _createClass(Initializer, [{
	    key: 'load',
	
	    /**
	     * Load up defaults & options on the Typed instance
	     * @param {Typed} self instance of Typed
	     * @param {object} options options object
	     * @param {string} elementId HTML element ID _OR_ instance of HTML element
	     * @private
	     */
	
	    value: function load(self, options, elementId) {
	      // chosen element to manipulate text
	      if (typeof elementId === 'string') {
	        self.el = document.querySelector(elementId);
	      } else {
	        self.el = elementId;
	      }
	
	      self.options = _extends({}, _defaultsJs2['default'], options);
	
	      // attribute to type into
	      self.isInput = self.el.tagName.toLowerCase() === 'input';
	      self.attr = self.options.attr;
	      self.bindInputFocusEvents = self.options.bindInputFocusEvents;
	
	      // show cursor
	      self.showCursor = self.isInput ? false : self.options.showCursor;
	
	      // custom cursor
	      self.cursorChar = self.options.cursorChar;
	
	      // Is the cursor blinking
	      self.cursorBlinking = true;
	
	      // text content of element
	      self.elContent = self.attr ? self.el.getAttribute(self.attr) : self.el.textContent;
	
	      // html or plain text
	      self.contentType = self.options.contentType;
	
	      // typing speed
	      self.typeSpeed = self.options.typeSpeed;
	
	      // add a delay before typing starts
	      self.startDelay = self.options.startDelay;
	
	      // backspacing speed
	      self.backSpeed = self.options.backSpeed;
	
	      // only backspace what doesn't match the previous string
	      self.smartBackspace = self.options.smartBackspace;
	
	      // amount of time to wait before backspacing
	      self.backDelay = self.options.backDelay;
	
	      // Fade out instead of backspace
	      self.fadeOut = self.options.fadeOut;
	      self.fadeOutClass = self.options.fadeOutClass;
	      self.fadeOutDelay = self.options.fadeOutDelay;
	
	      // variable to check whether typing is currently paused
	      self.isPaused = false;
	
	      // input strings of text
	      self.strings = self.options.strings.map(function (s) {
	        return s.trim();
	      });
	
	      // div containing strings
	      if (typeof self.options.stringsElement === 'string') {
	        self.stringsElement = document.querySelector(self.options.stringsElement);
	      } else {
	        self.stringsElement = self.options.stringsElement;
	      }
	
	      if (self.stringsElement) {
	        self.strings = [];
	        self.stringsElement.style.display = 'none';
	        var strings = Array.prototype.slice.apply(self.stringsElement.children);
	        var stringsLength = strings.length;
	
	        if (stringsLength) {
	          for (var i = 0; i < stringsLength; i += 1) {
	            var stringEl = strings[i];
	            self.strings.push(stringEl.innerHTML.trim());
	          }
	        }
	      }
	
	      // character number position of current string
	      self.strPos = 0;
	
	      // current array position
	      self.arrayPos = 0;
	
	      // index of string to stop backspacing on
	      self.stopNum = 0;
	
	      // Looping logic
	      self.loop = self.options.loop;
	      self.loopCount = self.options.loopCount;
	      self.curLoop = 0;
	
	      // shuffle the strings
	      self.shuffle = self.options.shuffle;
	      // the order of strings
	      self.sequence = [];
	
	      self.pause = {
	        status: false,
	        typewrite: true,
	        curString: '',
	        curStrPos: 0
	      };
	
	      // When the typing is complete (when not looped)
	      self.typingComplete = false;
	
	      // Set the order in which the strings are typed
	      for (var i in self.strings) {
	        self.sequence[i] = i;
	      }
	
	      // If there is some text in the element
	      self.currentElContent = this.getCurrentElContent(self);
	
	      self.autoInsertCss = self.options.autoInsertCss;
	
	      this.appendAnimationCss(self);
	    }
	  }, {
	    key: 'getCurrentElContent',
	    value: function getCurrentElContent(self) {
	      var elContent = '';
	      if (self.attr) {
	        elContent = self.el.getAttribute(self.attr);
	      } else if (self.isInput) {
	        elContent = self.el.value;
	      } else if (self.contentType === 'html') {
	        elContent = self.el.innerHTML;
	      } else {
	        elContent = self.el.textContent;
	      }
	      return elContent;
	    }
	  }, {
	    key: 'appendAnimationCss',
	    value: function appendAnimationCss(self) {
	      var cssDataName = 'data-typed-js-css';
	      if (!self.autoInsertCss) {
	        return;
	      }
	      if (!self.showCursor && !self.fadeOut) {
	        return;
	      }
	      if (document.querySelector('[' + cssDataName + ']')) {
	        return;
	      }
	
	      var css = document.createElement('style');
	      css.type = 'text/css';
	      css.setAttribute(cssDataName, true);
	
	      var innerCss = '';
	      if (self.showCursor) {
	        innerCss += '\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ';
	      }
	      if (self.fadeOut) {
	        innerCss += '\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ';
	      }
	      if (css.length === 0) {
	        return;
	      }
	      css.innerHTML = innerCss;
	      document.body.appendChild(css);
	    }
	  }]);
	
	  return Initializer;
	})();
	
	exports['default'] = Initializer;
	var initializer = new Initializer();
	exports.initializer = initializer;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	/**
	 * Defaults & options
	 * @returns {object} Typed defaults & options
	 * @public
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var defaults = {
	  /**
	   * @property {array} strings strings to be typed
	   * @property {string} stringsElement ID of element containing string children
	   */
	  strings: ['These are the default values...', 'You know what you should do?', 'Use your own!', 'Have a great day!'],
	  stringsElement: null,
	
	  /**
	   * @property {number} typeSpeed type speed in milliseconds
	   */
	  typeSpeed: 0,
	
	  /**
	   * @property {number} startDelay time before typing starts in milliseconds
	   */
	  startDelay: 0,
	
	  /**
	   * @property {number} backSpeed backspacing speed in milliseconds
	   */
	  backSpeed: 0,
	
	  /**
	   * @property {boolean} smartBackspace only backspace what doesn't match the previous string
	   */
	  smartBackspace: true,
	
	  /**
	   * @property {boolean} shuffle shuffle the strings
	   */
	  shuffle: false,
	
	  /**
	   * @property {number} backDelay time before backspacing in milliseconds
	   */
	  backDelay: 700,
	
	  /**
	   * @property {boolean} fadeOut Fade out instead of backspace
	   * @property {string} fadeOutClass css class for fade animation
	   * @property {boolean} fadeOutDelay Fade out delay in milliseconds
	   */
	  fadeOut: false,
	  fadeOutClass: 'typed-fade-out',
	  fadeOutDelay: 500,
	
	  /**
	   * @property {boolean} loop loop strings
	   * @property {number} loopCount amount of loops
	   */
	  loop: false,
	  loopCount: Infinity,
	
	  /**
	   * @property {boolean} showCursor show cursor
	   * @property {string} cursorChar character for cursor
	   * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
	   */
	  showCursor: true,
	  cursorChar: '|',
	  autoInsertCss: true,
	
	  /**
	   * @property {string} attr attribute for typing
	   * Ex: input placeholder, value, or just HTML text
	   */
	  attr: null,
	
	  /**
	   * @property {boolean} bindInputFocusEvents bind to focus and blur if el is text input
	   */
	  bindInputFocusEvents: false,
	
	  /**
	   * @property {string} contentType 'html' or 'null' for plaintext
	   */
	  contentType: 'html',
	
	  /**
	   * Before it begins typing
	   * @param {Typed} self
	   */
	  onBegin: function onBegin(self) {},
	
	  /**
	   * All typing is complete
	   * @param {Typed} self
	   */
	  onComplete: function onComplete(self) {},
	
	  /**
	   * Before each string is typed
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  preStringTyped: function preStringTyped(arrayPos, self) {},
	
	  /**
	   * After each string is typed
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onStringTyped: function onStringTyped(arrayPos, self) {},
	
	  /**
	   * During looping, after last string is typed
	   * @param {Typed} self
	   */
	  onLastStringBackspaced: function onLastStringBackspaced(self) {},
	
	  /**
	   * Typing has been stopped
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onTypingPaused: function onTypingPaused(arrayPos, self) {},
	
	  /**
	   * Typing has been started after being stopped
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onTypingResumed: function onTypingResumed(arrayPos, self) {},
	
	  /**
	   * After reset
	   * @param {Typed} self
	   */
	  onReset: function onReset(self) {},
	
	  /**
	   * After stop
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onStop: function onStop(arrayPos, self) {},
	
	  /**
	   * After start
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onStart: function onStart(arrayPos, self) {},
	
	  /**
	   * After destroy
	   * @param {Typed} self
	   */
	  onDestroy: function onDestroy(self) {}
	};
	
	exports['default'] = defaults;
	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	/**
	 * TODO: These methods can probably be combined somehow
	 * Parse HTML tags & HTML Characters
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var HTMLParser = (function () {
	  function HTMLParser() {
	    _classCallCheck(this, HTMLParser);
	  }
	
	  _createClass(HTMLParser, [{
	    key: 'typeHtmlChars',
	
	    /**
	     * Type HTML tags & HTML Characters
	     * @param {string} curString Current string
	     * @param {number} curStrPos Position in current string
	     * @param {Typed} self instance of Typed
	     * @returns {number} a new string position
	     * @private
	     */
	
	    value: function typeHtmlChars(curString, curStrPos, self) {
	      if (self.contentType !== 'html') return curStrPos;
	      var curChar = curString.substr(curStrPos).charAt(0);
	      if (curChar === '<' || curChar === '&') {
	        var endTag = '';
	        if (curChar === '<') {
	          endTag = '>';
	        } else {
	          endTag = ';';
	        }
	        while (curString.substr(curStrPos + 1).charAt(0) !== endTag) {
	          curStrPos++;
	          if (curStrPos + 1 > curString.length) {
	            break;
	          }
	        }
	        curStrPos++;
	      }
	      return curStrPos;
	    }
	
	    /**
	     * Backspace HTML tags and HTML Characters
	     * @param {string} curString Current string
	     * @param {number} curStrPos Position in current string
	     * @param {Typed} self instance of Typed
	     * @returns {number} a new string position
	     * @private
	     */
	  }, {
	    key: 'backSpaceHtmlChars',
	    value: function backSpaceHtmlChars(curString, curStrPos, self) {
	      if (self.contentType !== 'html') return curStrPos;
	      var curChar = curString.substr(curStrPos).charAt(0);
	      if (curChar === '>' || curChar === ';') {
	        var endTag = '';
	        if (curChar === '>') {
	          endTag = '<';
	        } else {
	          endTag = '&';
	        }
	        while (curString.substr(curStrPos - 1).charAt(0) !== endTag) {
	          curStrPos--;
	          if (curStrPos < 0) {
	            break;
	          }
	        }
	        curStrPos--;
	      }
	      return curStrPos;
	    }
	  }]);
	
	  return HTMLParser;
	})();
	
	exports['default'] = HTMLParser;
	var htmlParser = new HTMLParser();
	exports.htmlParser = htmlParser;

/***/ })
/******/ ])
});
;

/***/ }),

/***/ "./src/assets/js/burger.js":
/*!*********************************!*\
  !*** ./src/assets/js/burger.js ***!
  \*********************************/
/*! exports provided: burger, closeBurgerMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "burger", function() { return burger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeBurgerMenu", function() { return closeBurgerMenu; });


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
    close = document.querySelector(closeSelector),
    body = document.querySelector('body');
  burgerBtn.addEventListener('click', function () {
    if (!this.classList.contains(btnActiveClass)) {
      this.classList.add(btnActiveClass);
      burgerMenu.classList.add(menuActiveClass);
      // overlay.classList.add(overlayActiveClass);
      body.style.overflow = 'hidden';
      body.style.marginRight = `${getScrollWidth()}px`;
    } else {
      this.classList.remove(btnActiveClass);
      burgerMenu.classList.remove(menuActiveClass);
      // overlay.classList.remove(overlayActiveClass);
      body.style.overflow = 'unset';
      body.style.marginRight = `0px`;
    }
  });
  close.addEventListener('click', () => closeBurgerMenu(burgerBtn, burgerMenu, btnActiveClass, menuActiveClass, body));
};
function closeBurgerMenu(btnElement, menuElement, btnActiveClass, menuActiveClass, body) {
  btnElement.classList.remove(btnActiveClass);
  menuElement.classList.remove(menuActiveClass);
  body.style.overflow = 'unset';
  body.style.marginRight = `0px`;
}
function getScrollWidth() {
  let div = document.createElement('div');
  div.style.width = '50px';
  div.style.height = '50px';
  div.style.overflowY = 'scroll';
  div.style.visibility = 'hidden';
  document.body.appendChild(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  return scrollWidth;
}


/***/ }),

/***/ "./src/assets/js/form.js":
/*!*******************************!*\
  !*** ./src/assets/js/form.js ***!
  \*******************************/
/*! exports provided: form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "form", function() { return form; });
/* harmony import */ var _services_sendRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/sendRequest */ "./src/assets/js/services/sendRequest.js");



const form = formSelector => {
  const form = document.querySelector(formSelector);
  const inputs = form.querySelectorAll('[name]');
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay-form-submit');
  const submit = form.querySelector('.contact__submit');
  const message = {
    'loading': './assets/icons/spinner.svg',
    'error': {
      'img': './assets/icons/wrong.svg'
    },
    'error-input': {
      'en': 'This field is required',
      'ru': 'Это поле обязательно для заполнения'
    },
    'error-for-btn': {
      'en': 'Some fields were not filled out',
      'ru': 'Некоторые поля формы не заполнены'
    },
    'success': {
      'img': './assets/icons/success.svg'
    }
  };
  inputs.forEach(input => {
    if (input.type !== 'checkbox') {
      input.addEventListener('input', () => {
        if (input.classList.contains('wrong')) {
          input.classList.remove('wrong');
          input.parentNode.removeChild(Array.from(input.parentNode.children)[Array.from(input.parentNode.children).length - 1]);
        }
        if (input.value !== '') {
          input.nextElementSibling.style.display = 'none';
        } else {
          input.nextElementSibling.style.display = 'block';
        }
      });
    } else {
      input.addEventListener('change', () => {
        if (input.classList.contains('wrong')) {
          input.classList.remove('wrong');
          input.parentNode.removeChild(Array.from(input.parentNode.children)[Array.from(input.parentNode.children).length - 1]);
        }
      });
    }
  });
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let spinner = document.createElement('img');
    spinner.setAttribute('src', message['loading']);
    spinner.style.cssText = `width: 40px; height: 40px; margin-left: 20px`;
    submit.appendChild(spinner);
    let a = 0;
    let hash = window.location.hash.substring(1);
    inputs.forEach(input => {
      if (!input.value || input.type === 'checkbox' && !input.checked) {
        let span = document.createElement('span');
        span.textContent = message['error-input'][hash];
        span.classList.add('contact__notfilled');
        input.parentNode.appendChild(span);
        input.classList.add('wrong');
        a = 1;
        submit.removeChild(spinner);
      }
    });
    if (a > 0) {
      let divForm = document.createElement('div');
      divForm.classList.add('contact__notfilled-main');
      divForm.innerHTML = message['error-for-btn'][hash];
      document.documentElement.appendChild(divForm);
      setTimeout(() => {
        document.documentElement.removeChild(divForm);
      }, 3000);
      return;
    }
    let formData = new FormData(form);
    let object = {};
    formData.forEach((value, key) => {
      object[key] = value;
    });
    let jsonData = JSON.stringify(object);
    Object(_services_sendRequest__WEBPACK_IMPORTED_MODULE_0__["sendReq"])("https://portfolio-mailer-8yue.onrender.com/send_mail", jsonData).then(res => {
      submit.removeChild(spinner);
      showModal(res, window.location.hash.substring(1), modal);
    }).catch(err => {
      submit.removeChild(spinner);
      showModal('error', window.location.hash.substring(1), modal);
    }).finally(() => {
      this.reset();
      inputs.forEach(input => {
        if (input.type === 'checkbox') {
          input.checked = false;
        } else {
          input.value = '';
          input.nextElementSibling.style.display = 'block';
        }
      });
      setTimeout(() => removeModal(modal), 7000);
    });
    function showModal(condition, hash, modalElem) {
      modalElem.classList.add('modal_active');
      overlay.classList.add('overlay-form-submit_active');
      document.documentElement.addEventListener('click', e => {
        if (e.target.hasAttribute('data-close') || e.target.classList.contains('overlay')) {
          removeModal(modal);
        }
      });
      if (condition.hasOwnProperty('success')) {
        modal.innerHTML = `
                        <div class="modal__img modal__img_suc">
                            <img src="${message['success']['img']}">
                        </div>
                        <div class="modal__msg">${condition.message[hash]}</div>
                        <div class="modal__close" data-close>&#10005;</div>
                    `;
      } else if (condition.hasOwnProperty('error')) {
        modal.innerHTML = `   
                        <div class="modal__img modal__img_wrong">
                            <img src="${message['error']['img']}">
                        </div>
                        <div class="modal__msg">${condition.message[hash]}</div>
                        <div class="modal__close" data-close>&#10005;</div>
                    `;
      }
    }
    function removeModal(modalElem) {
      modalElem.classList.remove('modal_active');
      overlay.classList.remove('overlay-form-submit_active');
      modalElem.innerHTML = '';
    }
  });
};


/***/ }),

/***/ "./src/assets/js/lang.js":
/*!*******************************!*\
  !*** ./src/assets/js/lang.js ***!
  \*******************************/
/*! exports provided: setLanguage, lang, typed1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLanguage", function() { return setLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lang", function() { return lang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typed1", function() { return typed1; });
/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll */ "./src/assets/js/scroll.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typed.js */ "./node_modules/typed.js/lib/typed.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_1__);




const lang = {
  'lng-about': {
    'en': 'About',
    'ru': 'Обо мне'
  },
  'lng-skills': {
    'en': 'Skills',
    'ru': 'Навыки'
  },
  'lng-works': {
    'en': 'Works',
    'ru': 'Мои работы'
  },
  'lng-contact': {
    'en': 'Contact',
    'ru': 'Контакты'
  },
  'lng-intro': {
    'en': [`Hi,`, `I'm Michael,`, `web developer`],
    'ru': ['Привет,', 'меня зовут Михаил,', 'я веб-разработчик']
  },
  'lng-btnContact': {
    'en': 'Contact me!',
    'ru': 'Свяжитесь со мной'
  },
  'lng-prof': {
    'en': ['Freelancer', 'Front-end developer'],
    'ru': ['Фрилансер', 'Фронт-енд разработчик']
  },
  'lng-descr': {
    'en': "Hello, my name is Michael. I'm junior front-end developer.I've been learning front-end for two years, finished five web developing courses on Udemy and have been practicing all that time. My <a href='#works' class='about__link' aria-label='link to works section'>works</a> you can see on works section.",
    'ru': 'Привет, меня зовут Михаил. Я джуниор фронт-енд разработчик. Я изучаю фронт-енд два года, закончил пять курсов веб-разработки на Udemy, все это время практикуюсь.<a href="#works" class="about__link" aria-label="link to works section"> Мои работы</a> вы можете посмотреть в секции работ. '
  },
  'lng-skillsSubtitle': {
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
  'lng-mongodb': {
    'en': 'A document-oriented database management system that does not require a description of the table schema. Considered one of the classic examples of NoSQL systems, uses JSON-like documents and database schema.',
    'ru': 'Документоориентированная система управления базами данных, не требующая описания схемы таблиц. Считается одним из классических примеров NoSQL-систем, использует JSON-подобные документы и схему базы данных.'
  },
  'lng-nodejs': {
    'en': 'This platform allows you to create a backend for your product - "brains" that will perform actions that the user does not see.',
    'ru': 'Эта платформа позволяет создавать бэкенд для вашего продукта - “мозги”, которые будут выполнять действия, которые пользователь не видит.'
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
  },
  'lng-privacyHref': {
    'en': 'privacy-en.html',
    'ru': 'privacy-ru.html'
  },
  'lng-preview': {
    'en': 'view',
    'ru': 'смотреть'
  }
};
let typed1 = [];
function setLanguage(langObject, langSelector) {
  const select = document.querySelector(langSelector);
  const tagsForLangChange = document.querySelectorAll('.lng');
  const introTitle = Array.from(document.querySelector('.intro__title').children);
  const aboutTitle = document.querySelector('.about__subtitle');
  const introSection = document.querySelector('section.intro');
  const aboutSection = document.querySelector('section.about');
  window.location.hash = '#en';
  let hashOld = window.location.hash.substring(1);
  try {
    // Typed.js for intro__title, no loop

    for (let i = 0; i < introTitle.length; i++) {
      try {
        const typed = new typed_js__WEBPACK_IMPORTED_MODULE_1___default.a(introTitle[i], {
          strings: [lang['lng-intro'][window.location.hash.substring(1)][i]],
          typeSpeed: 40,
          startDelay: 900 * i,
          showCursor: false,
          onReset: self => {
            try {
              self.strings = [lang['lng-intro'][window.location.hash.substring(1)][i]];
            } catch (error) {
              console.log(error);
            }
          },
          onComplete: self => {
            try {
              animateText(introTitle[i], 'title-intro__letter');
            } catch (error) {
              console.log(error);
            }
          }
        });
        typed1.push(typed);
      } catch (error) {
        console.log(error);
      }
    }

    // Typed.js for about__subtitle with loop=true
    const typed2 = new typed_js__WEBPACK_IMPORTED_MODULE_1___default.a(aboutTitle, {
      strings: lang['lng-prof'][window.location.hash.substring(1)],
      typeSpeed: 60,
      loop: true,
      showCursor: false,
      smartBackspace: false,
      startDelay: 500,
      backDelay: 1000,
      backSpeed: 30,
      onReset: self => {
        try {
          aboutTitle.style.opacity = 0;
        } catch (error) {
          onslotchange.log(error);
        }
      },
      onBegin: self => {
        try {
          setTimeout(() => {
            aboutTitle.style.opacity = 1;
          }, 600);
          self.strings = lang['lng-prof'][window.location.hash.substring(1)];
          self.strings.options = lang['lng-prof'][window.location.hash.substring(1)];
        } catch (error) {
          console.log(error);
        }
      }
    });

    //change hash

    select.addEventListener('input', () => {
      let language = select.value;
      window.location.hash = `#${language}`;
      let hash = window.location.hash.substring(1);
      if (hashOld !== hash) {
        changeLanguage(hash);
      }
    });
    window.addEventListener('popstate', () => {
      //without that language changes only 1 time
      let hash = window.location.hash.substring(1);
      select.value = window.location.hash.substring(1);
      changeLanguage(hash);
    });
    function changeLanguage(hash) {
      try {
        typed1.forEach((obj, j) => {
          obj.reset();
        });
        typed2.reset();
        tagsForLangChange.forEach(item => {
          const clsNameStr = item.classList.value.match(/lng-[a-z]*/ig).join('');
          if (item.classList.contains(clsNameStr)) {
            item.innerHTML = langObject[clsNameStr][hash];
          }
        });
        document.querySelector('.privacy__link').setAttribute('href', `${lang['lng-privacyHref'][hash]}`);
      } catch (error) {
        console.log(error);
      }
    }

    //Animate literals
    function animateText(parentNode, letterClass) {
      let parent = parentNode;
      let content = parent.innerHTML;
      let themeClass = '';
      parent.innerHTML = '';
      if (window.localStorage.getItem('theme') === 'dark') {
        themeClass += 'title-intro__letter_light';
      } else {
        themeClass += 'title-intro__letter_dark';
      }
      for (let i = 0; i < content.length; i++) {
        let letter = document.createElement('span');
        if (content[i] == ' ') {
          letter.classList.add('space-item');
          letter.innerHTML = content[i];
          parent.appendChild(letter);
        } else {
          letter.classList.add(letterClass, themeClass);
          letter.innerHTML = content[i];
          parent.appendChild(letter);
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
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
/* harmony import */ var _percents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./percents */ "./src/assets/js/percents.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form */ "./src/assets/js/form.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme */ "./src/assets/js/theme.js");
/* harmony import */ var _preload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./preload */ "./src/assets/js/preload.js");
/* harmony import */ var _section_commutator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./section-commutator */ "./src/assets/js/section-commutator.js");










window.addEventListener('DOMContentLoaded', () => {
  // scroll({ arrow: '.arrow-up', arrowActive: 'arrow-up_active' });
  Object(_lang__WEBPACK_IMPORTED_MODULE_2__["setLanguage"])(_lang__WEBPACK_IMPORTED_MODULE_2__["lang"], '.lang-selector');
  Object(_burger__WEBPACK_IMPORTED_MODULE_0__["burger"])({
    btn: '.burger__btn',
    menu: '.burger__menu',
    overlay: '.overlay',
    btnActive: 'burger__btn_active',
    menuActive: 'burger__menu_active',
    overlayActive: 'overlay_active',
    close: '.menu__close'
  });
  Object(_percents__WEBPACK_IMPORTED_MODULE_3__["percentCreation"])('.skills__diagrams-item', '.diagrams-item__percent', '.bottom-diagrams-item__bg-front');
  Object(_form__WEBPACK_IMPORTED_MODULE_4__["form"])('.contact__form');
  Object(_theme__WEBPACK_IMPORTED_MODULE_5__["theme"])();
  Object(_preload__WEBPACK_IMPORTED_MODULE_6__["preload"])();
  Object(_section_commutator__WEBPACK_IMPORTED_MODULE_7__["sectionCommutator"])();
});

/***/ }),

/***/ "./src/assets/js/percents.js":
/*!***********************************!*\
  !*** ./src/assets/js/percents.js ***!
  \***********************************/
/*! exports provided: percentCreation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "percentCreation", function() { return percentCreation; });


const percentCreation = (itemSelector, percentSelector, diagramSelector) => {
  const item = document.querySelectorAll(itemSelector);
  item.forEach(node => {
    const percent = node.querySelector(percentSelector);
    const diagram = node.querySelector(diagramSelector);
    diagram.style.width = `${Array.from(percent.children)[0].textContent}%`;
  });
};


/***/ }),

/***/ "./src/assets/js/preload.js":
/*!**********************************!*\
  !*** ./src/assets/js/preload.js ***!
  \**********************************/
/*! exports provided: preload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preload", function() { return preload; });


const preload = async () => {
  const img1 = document.querySelector('#content-img');
  const img2 = document.querySelector('#section-bg-img-dark');
  const img3 = document.querySelector('#section-bg-img-light');
  const overlay = document.querySelector('.overlay');
  try {
    img1.onload = function () {
      return true;
    };
    img2.onload = function () {
      return true;
    };
    img3.onload = function () {
      return true;
    };
    if (img1.onload() && img2.onload() && img3.onload()) {
      overlay.classList.remove('overlay_active');
    }
  } catch (error) {
    console.log(error);
  }
};


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
/* harmony import */ var _burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./burger */ "./src/assets/js/burger.js");



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
    // if (fromTop > 1200) {
    //     document.querySelectorAll('.aside-links').forEach(link => {
    //         link.style.opacity = '1';
    //     });
    // } else {
    //     document.querySelectorAll('.aside-links').forEach(link => {
    //         link.style.opacity = '0';
    //     });
    // }
  });

  links.forEach(link => {
    if (link.hash) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        // Close burger menu after click to link
        Object(_burger__WEBPACK_IMPORTED_MODULE_0__["closeBurgerMenu"])(document.querySelector('.burger__btn'), document.querySelector('.burger__menu'), 'burger__btn_active', 'burger__menu_active', document.querySelector('body'));
        //
        let toSection = document.querySelector(link.hash).getBoundingClientRect().top - 100;
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
          }
        }
      });
    }
  });
};


/***/ }),

/***/ "./src/assets/js/section-commutator.js":
/*!*********************************************!*\
  !*** ./src/assets/js/section-commutator.js ***!
  \*********************************************/
/*! exports provided: sectionCommutator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sectionCommutator", function() { return sectionCommutator; });
const sectionCommutator = () => {
  // const sections = document.querySelectorAll('section');
  // const linksWrapper = document.querySelector('.links-header__list');

  // linksWrapper.addEventListener('click', (e) => {
  //     e.preventDefault();
  //     if (e.target.hash) {
  //         const showSection = Array.from(sections).filter(section => section.id === e.target.hash.substring(1))[0];
  //         sections.forEach(section => section.classList.remove('section-active'));
  //         if (e.target.hash === '#about') {
  //             showSection.style.display = 'flex';
  //             showSection.classList.add('section-active');
  //         } else {
  //             showSection.style.display = 'block';
  //         }

  //     }
  // })

  const slider = document.querySelector('.slider');
  const sliderWrapper = document.querySelector('.slider-wrapper');
  const sections = document.querySelectorAll('section');
  const linksWrapper = document.querySelector('.links-header__list');
  const slideWidth = slider.getBoundingClientRect().width;
  const slideHeight = slider.getBoundingClientRect().height;
  const toFirstSlide = document.querySelector('.header__logo');
  sliderWrapper.style.width = slideWidth * sections.length + 'px';
  sections.forEach(section => section.style.width);
  slider.style.height = '100vh';
  console.log(window.innerHeight);
  linksWrapper.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.hash) {
      const sectionNum = Array.from(sections).findIndex(section => section.id === e.target.hash.substring(1));
      sliderWrapper.style.transform = `translateX(-${sectionNum * slideWidth}px)`;
      slider.style.height = Array.from(sections)[sectionNum].getBoundingClientRect().height + 'px';
    }
  });
  toFirstSlide.addEventListener('click', e => {
    e.preventDefault();
    sliderWrapper.style.transform = `translateX(${0}px)`;
  });
};

/***/ }),

/***/ "./src/assets/js/services/sendRequest.js":
/*!***********************************************!*\
  !*** ./src/assets/js/services/sendRequest.js ***!
  \***********************************************/
/*! exports provided: sendReq */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendReq", function() { return sendReq; });


const sendReq = async (url, data) => {
  try {
    let result = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: data
    });
    if (!result.ok) {
      throw new Error(`Could not fetch ${url}, status ${result.status}`);
    }
    return await result.json();
  } catch (e) {
    throw e;
  }
};


/***/ }),

/***/ "./src/assets/js/theme.js":
/*!********************************!*\
  !*** ./src/assets/js/theme.js ***!
  \********************************/
/*! exports provided: theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return theme; });
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang */ "./src/assets/js/lang.js");

const theme = () => {
  const btn = document.querySelector('.theme-btn');
  const trigger = btn.querySelector('.theme-btn__trigger');
  const elementToChangeBackgroundColor = document.querySelectorAll('.theme-bg');
  const elementToChangeTextColor = document.querySelectorAll('.theme-color');
  const btnsToChangeBorderColor = document.querySelectorAll('.btn.theme');
  const burgerLinesChangeColor = document.querySelectorAll('.theme-burger');
  const svgToChangeColor = document.querySelectorAll('svg.theme');
  const githubSvg = svgToChangeColor[0];
  const mailSvg = svgToChangeColor[1];
  const introImgChangeTheme = document.querySelector('.intro');
  const checkboxChangeTheme = document.querySelector('input.theme');
  const skillsCardsChangeTheme = document.querySelectorAll('article.theme');
  const aboutImagesDark = document.querySelectorAll('.section-bg .theme-dark');
  const aboutImagesLight = document.querySelectorAll('.section-bg .theme-light');
  const introStrokes = document.querySelectorAll('.title-intro__str');
  const sectionBg = document.querySelectorAll('.section-bg__bg.theme');
  if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'light');
    lightTheme();
  } else {
    if (localStorage.getItem('theme') === 'dark') {
      btn.classList.add('theme-btn_dark');
      trigger.classList.add('theme-btn__trigger_dark');
      darkTheme();
    } else {
      lightTheme();
    }
  }
  btn.addEventListener('click', function () {
    if (!this.classList.contains('theme-btn__trigger_dark')) {
      this.classList.toggle('theme-btn_dark');
      trigger.classList.toggle('theme-btn__trigger_dark');
    }
    switch (localStorage.getItem('theme')) {
      case 'light':
        localStorage.setItem('theme', 'dark');
        break;
      case 'dark':
        localStorage.setItem('theme', 'light');
        break;
    }
    if (localStorage.getItem('theme') === 'light') {
      lightTheme();
    } else {
      darkTheme();
    }
  });
  function lightTheme() {
    elementToChangeBackgroundColor.forEach(item => {
      switch (item.tagName) {
        case 'HEADER':
          item.style.boxShadow = '0 0 5px 0 #000';
          item.style.background = '#fff';
          break;
        case 'SELECT':
          item.style.border = '1px solid #000';
          item.style.background = '#fff';
          break;
        case 'I':
          item.style.background = '#000';
          break;
        default:
          item.style.background = '#fff';
      }
    });
    burgerLinesChangeColor.forEach(line => {
      line.style.backgroundColor = '#333';
    });
    elementToChangeTextColor.forEach(item => {
      item.style.color = '#000';
    });
    btnsToChangeBorderColor.forEach(item => {
      item.classList.remove('btn_dark');
    });
    skillsCardsChangeTheme.forEach(card => {
      card.classList.remove('theme-skills-card');
    });
    introStrokes.forEach(stroke => {
      stroke.style.color = '#000';
    });
    githubSvg.classList.remove('theme-github');
    mailSvg.classList.remove('theme-mail');
    introImgChangeTheme.classList.remove('theme-intro');
    checkboxChangeTheme.classList.remove('theme-checkbox');
    aboutImagesDark.forEach(img => {
      img.style.display = 'none';
    });
    aboutImagesLight.forEach(img => {
      img.style.display = 'block';
    });
    _lang__WEBPACK_IMPORTED_MODULE_0__["typed1"].forEach(typed => {
      typed.reset(true);
    });
    sectionBg.forEach(bg => {
      bg.classList.remove('section-bg__bg_dark');
      bg.classList.add('section-bg__bg_light');
    });
  }
  function darkTheme() {
    elementToChangeBackgroundColor.forEach(item => {
      switch (item.tagName) {
        case 'HEADER':
          item.style.boxShadow = '0 0 5px 0 #fff';
          item.style.background = '#0d1221';
          break;
        case 'SELECT':
          item.style.border = '1px solid #fff';
          item.style.background = '#0d1221';
          break;
        case 'I':
          item.style.background = '#fff';
          break;
        case 'OPTION':
          item.style.background = '#000';
          break;
        default:
          item.style.background = ' #0d1221';
      }
    });
    burgerLinesChangeColor.forEach(line => {
      line.style.backgroundColor = '#fff';
    });
    elementToChangeTextColor.forEach(item => {
      item.style.color = '#fff';
    });
    btnsToChangeBorderColor.forEach(item => {
      item.classList.toggle('btn_dark');
    });
    skillsCardsChangeTheme.forEach(card => {
      card.classList.toggle('theme-skills-card');
    });
    introStrokes.forEach(stroke => {
      stroke.style.color = '#fff';
    });
    githubSvg.classList.toggle('theme-github');
    mailSvg.classList.toggle('theme-mail');
    introImgChangeTheme.classList.add('theme-intro');
    checkboxChangeTheme.classList.toggle('theme-checkbox');
    aboutImagesDark.forEach(img => {
      img.style.display = 'block';
    });
    aboutImagesLight.forEach(img => {
      img.style.display = 'none';
    });
    _lang__WEBPACK_IMPORTED_MODULE_0__["typed1"].forEach(typed => {
      typed.reset(true);
    });
    sectionBg.forEach(bg => {
      bg.classList.remove('section-bg__bg_light');
      bg.classList.add('section-bg__bg_dark');
    });
  }
};


/***/ })

/******/ });
//# sourceMappingURL=script.js.map