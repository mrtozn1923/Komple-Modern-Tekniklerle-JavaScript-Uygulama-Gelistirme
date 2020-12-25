"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RandomStringArray = /*#__PURE__*/function () {
  function RandomStringArray() {
    _classCallCheck(this, RandomStringArray);
  }

  _createClass(RandomStringArray, null, [{
    key: "generator",
    value: function generator() {
      var randomNumbers = [];
      var randomStringNumber = [];
      var randomNumber = 0;
      var location = 0;
      var location2 = 0;

      while (randomNumbers.length < 6) {
        randomNumber = Math.floor(Math.random() * 3);
        location = randomNumbers.indexOf(randomNumber);
        location2 = randomNumbers.indexOf(randomNumber, location + 1);

        if (location === -1) {
          randomNumbers.push(randomNumber);
        } else if (location2 === -1) {
          randomNumbers.push(randomNumber);
        }
      }

      randomNumbers.forEach(function (number) {
        if (number === 0) {
          randomStringNumber.push("zero");
        } else if (number === 1) {
          randomStringNumber.push("one");
        } else if (number === 2) {
          randomStringNumber.push("two");
        }
      });
      return randomStringNumber;
    }
  }]);

  return RandomStringArray;
}();