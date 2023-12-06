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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ClassTeacher = /** @class */ (function () {
    function ClassTeacher(teacher) {
        this.firstName = teacher.firstName;
        this.lastName = teacher.lastName;
        this.fullTimeEmployee = teacher.fullTimeEmployee;
        this.yearsOfExperience = teacher.yearsOfExperience;
        this.location = teacher.location;
        // Add any additional attribute dynamically
        for (var key in teacher) {
            if (!['firstName', 'lastName', 'fullTimeEmployee', 'yearsOfExperience', 'location'].includes(key)) {
                this[key] = teacher[key];
            }
        }
    }
    return ClassTeacher;
}());
var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
var instantiatedTeacher = new ClassTeacher(teacher3);
console.log(instantiatedTeacher);
var classDirector = /** @class */ (function (_super) {
    __extends(classDirector, _super);
    function classDirector(director) {
        var _this = _super.call(this, director) || this;
        _this.numberOfReports = director.numberOfReports;
        return _this;
    }
    return classDirector;
}(ClassTeacher));
var director = {
    firstName: 'Alice',
    fullTimeEmployee: true,
    lastName: 'Smith',
    location: 'New York',
    numberOfReports: 5,
    additionalAttribute: 'additionalValue',
};
var instantiatedDirector = new classDirector(director);
console.log(instantiatedDirector);
var printTeacher = function (firstName, lastName) {
    var firstLetter = firstName.charAt(0).toUpperCase();
    var fullName = firstLetter + ". " + lastName;
    return fullName;
};
// Example usage:
var result = printTeacher("John", "Doe");
console.log(result); // Output: J. Doe
var Student = /** @class */ (function () {
    function Student(_a) {
        var firstName = _a.firstName, lastName = _a.lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Student.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    Student.prototype.displayName = function () {
        return this.firstName;
    };
    return Student;
}());


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekVBO0lBT0Usc0JBQVksT0FBZ0I7UUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUNqQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDO1FBQ2pELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUM7UUFDbkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBRWpDLDJDQUEyQztRQUMzQyxLQUFLLElBQU0sR0FBRyxJQUFJLE9BQU8sRUFBRTtZQUN6QixJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsVUFBVSxFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFLFVBQVUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDbEcsSUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7YUFDaEM7U0FDRjtJQUNILENBQUM7SUFDSCxtQkFBQztBQUFELENBQUM7QUFFRCxJQUFNLFFBQVEsR0FBWTtJQUN4QixTQUFTLEVBQUUsTUFBTTtJQUNqQixnQkFBZ0IsRUFBRSxLQUFLO0lBQ3ZCLFFBQVEsRUFBRSxLQUFLO0lBQ2YsUUFBUSxFQUFFLFFBQVE7SUFDbEIsUUFBUSxFQUFFLEtBQUs7Q0FDaEIsQ0FBQztBQUVGLElBQU0sbUJBQW1CLEdBQWlCLElBQUksWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRXJFLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQU9qQztJQUE0QixpQ0FBWTtJQUd0Qyx1QkFBWSxRQUFtQjtRQUEvQixZQUNFLGtCQUFNLFFBQVEsQ0FBQyxTQUVoQjtRQURDLEtBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQzs7SUFDbEQsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxDQVAyQixZQUFZLEdBT3ZDO0FBRUQsSUFBTSxRQUFRLEdBQWM7SUFDMUIsU0FBUyxFQUFFLE9BQU87SUFDbEIsZ0JBQWdCLEVBQUUsSUFBSTtJQUN0QixRQUFRLEVBQUUsT0FBTztJQUNqQixRQUFRLEVBQUUsVUFBVTtJQUNwQixlQUFlLEVBQUUsQ0FBQztJQUNsQixtQkFBbUIsRUFBRSxpQkFBaUI7Q0FDdkMsQ0FBQztBQUVGLElBQU0sb0JBQW9CLEdBQWtCLElBQUksYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRXhFLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQU1sQyxJQUFNLFlBQVksR0FBeUIsVUFBQyxTQUFTLEVBQUUsUUFBUTtJQUM3RCxJQUFNLFdBQVcsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3RELElBQU0sUUFBUSxHQUFNLFdBQVcsVUFBSyxRQUFVLENBQUM7SUFDL0MsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQyxDQUFDO0FBRUYsaUJBQWlCO0FBQ2pCLElBQU0sTUFBTSxHQUFXLFlBQVksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGlCQUFpQjtBQWF0QztJQUlFLGlCQUFZLEVBQTJDO1lBQXpDLFNBQVMsaUJBQUUsUUFBUTtRQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0lBRUQsZ0NBQWMsR0FBZDtRQUNFLE9BQU8sbUJBQW1CLENBQUM7SUFDN0IsQ0FBQztJQUVELDZCQUFXLEdBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vanMvbWFpbi50c1wiKTtcbiIsImludGVyZmFjZSBUZWFjaGVyIHtcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG4gIGZ1bGxUaW1lRW1wbG95ZWU6IGJvb2xlYW47XG4gIHllYXJzT2ZFeHBlcmllbmNlPzogbnVtYmVyO1xuICBsb2NhdGlvbjogc3RyaW5nO1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmNsYXNzIENsYXNzVGVhY2hlciBpbXBsZW1lbnRzIFRlYWNoZXIge1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcbiAgZnVsbFRpbWVFbXBsb3llZTogYm9vbGVhbjtcbiAgeWVhcnNPZkV4cGVyaWVuY2U/OiBudW1iZXI7XG4gIGxvY2F0aW9uOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IodGVhY2hlcjogVGVhY2hlcikge1xuICAgIHRoaXMuZmlyc3ROYW1lID0gdGVhY2hlci5maXJzdE5hbWU7XG4gICAgdGhpcy5sYXN0TmFtZSA9IHRlYWNoZXIubGFzdE5hbWU7XG4gICAgdGhpcy5mdWxsVGltZUVtcGxveWVlID0gdGVhY2hlci5mdWxsVGltZUVtcGxveWVlO1xuICAgIHRoaXMueWVhcnNPZkV4cGVyaWVuY2UgPSB0ZWFjaGVyLnllYXJzT2ZFeHBlcmllbmNlO1xuICAgIHRoaXMubG9jYXRpb24gPSB0ZWFjaGVyLmxvY2F0aW9uO1xuXG4gICAgLy8gQWRkIGFueSBhZGRpdGlvbmFsIGF0dHJpYnV0ZSBkeW5hbWljYWxseVxuICAgIGZvciAoY29uc3Qga2V5IGluIHRlYWNoZXIpIHtcbiAgICAgIGlmICghWydmaXJzdE5hbWUnLCAnbGFzdE5hbWUnLCAnZnVsbFRpbWVFbXBsb3llZScsICd5ZWFyc09mRXhwZXJpZW5jZScsICdsb2NhdGlvbiddLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICh0aGlzIGFzIGFueSlba2V5XSA9IHRlYWNoZXJba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCB0ZWFjaGVyMzogVGVhY2hlciA9IHtcbiAgZmlyc3ROYW1lOiAnSm9obicsXG4gIGZ1bGxUaW1lRW1wbG95ZWU6IGZhbHNlLFxuICBsYXN0TmFtZTogJ0RvZScsXG4gIGxvY2F0aW9uOiAnTG9uZG9uJyxcbiAgY29udHJhY3Q6IGZhbHNlLFxufTtcblxuY29uc3QgaW5zdGFudGlhdGVkVGVhY2hlcjogQ2xhc3NUZWFjaGVyID0gbmV3IENsYXNzVGVhY2hlcih0ZWFjaGVyMyk7XG5cbmNvbnNvbGUubG9nKGluc3RhbnRpYXRlZFRlYWNoZXIpO1xuXG4vL0V4dGVuZCBkaXJlY3RvciB0byBudW1iZXIgb2YgcmVwb3J0c1xuaW50ZXJmYWNlIERpcmVjdG9ycyBleHRlbmRzIFRlYWNoZXIge1xuICBudW1iZXJPZlJlcG9ydHM6IG51bWJlcjtcbn1cblxuY2xhc3MgY2xhc3NEaXJlY3RvciBleHRlbmRzIENsYXNzVGVhY2hlciBpbXBsZW1lbnRzIERpcmVjdG9ycyB7XG4gIG51bWJlck9mUmVwb3J0czogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKGRpcmVjdG9yOiBEaXJlY3RvcnMpIHtcbiAgICBzdXBlcihkaXJlY3Rvcik7XG4gICAgdGhpcy5udW1iZXJPZlJlcG9ydHMgPSBkaXJlY3Rvci5udW1iZXJPZlJlcG9ydHM7XG4gIH1cbn1cblxuY29uc3QgZGlyZWN0b3I6IERpcmVjdG9ycyA9IHtcbiAgZmlyc3ROYW1lOiAnQWxpY2UnLFxuICBmdWxsVGltZUVtcGxveWVlOiB0cnVlLFxuICBsYXN0TmFtZTogJ1NtaXRoJyxcbiAgbG9jYXRpb246ICdOZXcgWW9yaycsXG4gIG51bWJlck9mUmVwb3J0czogNSxcbiAgYWRkaXRpb25hbEF0dHJpYnV0ZTogJ2FkZGl0aW9uYWxWYWx1ZScsIC8vIEV4YW1wbGUgb2YgYW4gYWRkaXRpb25hbCBhdHRyaWJ1dGVcbn07XG5cbmNvbnN0IGluc3RhbnRpYXRlZERpcmVjdG9yOiBjbGFzc0RpcmVjdG9yID0gbmV3IGNsYXNzRGlyZWN0b3IoZGlyZWN0b3IpO1xuXG5jb25zb2xlLmxvZyhpbnN0YW50aWF0ZWREaXJlY3Rvcik7XG5cbmludGVyZmFjZSBQcmludFRlYWNoZXJGdW5jdGlvbiB7XG4gIChmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZyk6IHN0cmluZztcbn1cblxuY29uc3QgcHJpbnRUZWFjaGVyOiBQcmludFRlYWNoZXJGdW5jdGlvbiA9IChmaXJzdE5hbWUsIGxhc3ROYW1lKSA9PiB7XG4gIGNvbnN0IGZpcnN0TGV0dGVyID0gZmlyc3ROYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpO1xuICBjb25zdCBmdWxsTmFtZSA9IGAke2ZpcnN0TGV0dGVyfS4gJHtsYXN0TmFtZX1gO1xuICByZXR1cm4gZnVsbE5hbWU7XG59O1xuXG4vLyBFeGFtcGxlIHVzYWdlOlxuY29uc3QgcmVzdWx0OiBzdHJpbmcgPSBwcmludFRlYWNoZXIoXCJKb2huXCIsIFwiRG9lXCIpO1xuY29uc29sZS5sb2cocmVzdWx0KTsgLy8gT3V0cHV0OiBKLiBEb2VcblxuLy9UYXNrIDNcbmludGVyZmFjZSBTdHVkZW50Q29uc3RydWN0b3Ige1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFN0dWRlbnRDbGFzcyB7XG4gIHdvcmtPbkhvbWV3b3JrKCk6IHN0cmluZztcbiAgZGlzcGxheU5hbWUoKTogc3RyaW5nO1xufVxuXG5jbGFzcyBTdHVkZW50IGltcGxlbWVudHMgU3R1ZGVudENsYXNzIHtcbiAgcHJpdmF0ZSBmaXJzdE5hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBsYXN0TmFtZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHsgZmlyc3ROYW1lLCBsYXN0TmFtZSB9OiBTdHVkZW50Q29uc3RydWN0b3IpIHtcbiAgICB0aGlzLmZpcnN0TmFtZSA9IGZpcnN0TmFtZTtcbiAgICB0aGlzLmxhc3ROYW1lID0gbGFzdE5hbWU7XG4gIH1cblxuICB3b3JrT25Ib21ld29yaygpOiBzdHJpbmcge1xuICAgIHJldHVybiAnQ3VycmVudGx5IHdvcmtpbmcnO1xuICB9XG5cbiAgZGlzcGxheU5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5maXJzdE5hbWU7XG4gIH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==