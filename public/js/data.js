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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/data.js":
/*!******************************!*\
  !*** ./resources/js/data.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

var table_selector = ".data-table";
$(document).ready(function () {
  console.log('data');
  reload_data();
  $(".download").click(function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    $.get('/get_csv', function (file_to_download) {
      console.log(file_to_download);

      if (typeof file_to_download.download !== 'undefined') {
        window.location.href = '/uploads/files/' + file_to_download.download;
      } else {
        alert('no data');
      }
    });
  });
  $(".clear-data").click(function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    $.ajax({
      method: 'delete',
      url: '/clear_all_records',
      success: function success(respond) {
        $(table_selector + " tbody").empty();
        console.log(respond);
      },
      error: function error(_error) {
        console.log(_error);
        alert('internal server error');
      }
    });
  });
  ; //window.location.href = '/uploads/files/test.csv';
});

var init_data_table = function init_data_table() {
  $(table_selector).DataTable({
    "bPaginate": false,
    "bLengthChange": false,
    "bFilter": true,
    "bInfo": true,
    "bAutoWidth": false,
    "searching": false,
    'colReorder': true
  });
};

var reload_data = function reload_data() {
  $.get('/get_titles', function (titles) {
    console.log(titles);
    var title_row = '<tr>';
    $.each(titles, function (index, column_name) {
      title_row += '<th>' + column_name + '</th>';
    });
    title_row += '</tr>';
    $(table_selector + " thead").empty();
    $(table_selector + " tfoot").empty();
    $(table_selector + " tbody").empty();
    $(table_selector + " thead").append(title_row);
    $(table_selector + " tfoot").append(title_row);
    $.get('/get_data', function (data) {
      console.log(data);
      $.each(data, function (index, data_row) {
        var data_row_html = '<tr>';
        $.each(data_row, function (index, value) {
          data_row_html += '<td>' + value + '</td>';
        });
        data_row_html += '</tr>';
        $(table_selector + " tbody").append(data_row_html);
      });
      init_data_table();
    });
  });
};

/***/ }),

/***/ 1:
/*!************************************!*\
  !*** multi ./resources/js/data.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/datacollector/resources/js/data.js */"./resources/js/data.js");


/***/ })

/******/ });