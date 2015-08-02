(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var typey = require('get-object-type')

module.exports = function (el) {

  function resize () {
    switch (typey(el)) {
      case 'HTMLCollection':
        for (var i = 0; i < el.length; i++) {
          el[i].style.height = window.innerHeight + 'px'
          el[i].style.width = window.innerWidth + 'px'
        }
        break
      case 'HTMLCanvasElement':
        el.height = window.innerHeight + 'px'
        el.width = window.innerWidth + 'px'
        break
      default:
        el.style.height = window.innerHeight + 'px'
        el.style.width = window.innerWidth + 'px'
        break
    }
  }

  window.addEventListener('resize', resize, false)

  resize()
}

},{"get-object-type":2}],2:[function(require,module,exports){
'use strict';

module.exports = exports = function (obj) {
	return ({}).toString.call(obj).slice(8, -1);
};

},{}],3:[function(require,module,exports){
var fh = require('../')
fh(document.getElementsByTagName('img'))
},{"../":1}]},{},[3]);
