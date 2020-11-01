'use strict';

(function () {

  const COAT_COLORS = [
    `rgb(101, 137, 164)`,
    `rgb(241, 43, 107)`,
    `rgb(146, 100, 161)`,
    `rgb(56, 159, 117)`,
    `rgb(215, 210, 55)`,
    `rgb(0, 0, 0)`
  ];

  const EYES_COLOR = [
    `black`,
    `red`,
    `blue`,
    `yellow`,
    `green`
  ];

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
