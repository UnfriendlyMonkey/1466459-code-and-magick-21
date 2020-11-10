'use strict';

(function () {

  const errorHandler = (errorMessage) => {
    let node = document.createElement(`div`);
    node.style = `z-index: 100; margin: 0 auto; text-align: center; background-color: red;`;
    node.style.position = `absolute`;
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = `30px`;

    node.textContent = errorMessage;
    document.body.insertAdjacentElement(`afterbegin`, node);
  };

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
    errorHandler,
  };

})();
