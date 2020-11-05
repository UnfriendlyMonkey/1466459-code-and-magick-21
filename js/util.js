'use strict';

(function () {

  window.util = {
    isEscEvent: (evt, action) => {
      if (evt.key === `Escape`) {
        action();
      }
    },
    isEnterEvent: (evt, action) => {
      if (evt.key === `Enter`) {
        action();
      }
    },
    getRandomInt: (min, max) => {
      return Math.floor(Math.random() * (max - min)) + min;
    },
    findMaxValue: (arr) => {
      let maxValue = arr[0];
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxValue) {
          maxValue = arr[i];
        }
      }
      return maxValue;
    },
    getRandomEl: (array) => {
      let rand = Math.floor(Math.random() * array.length);
      return array[rand];
    },
  };

})();
