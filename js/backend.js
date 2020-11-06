'use strict';

(() => {

  const SAVE_URL = `https://21.javascript.pages.academy/code-and-magick`;
  const LOAD_URL = `https://21.javascript.pages.academy/code-and-magick/data`;

  window.backend = {
    load: (onLoad, onError) => {
      let xhr = new XMLHttpRequest();
      xhr.responseType = `json`;

      xhr.addEventListener(`load`, function () {
        onLoad(xhr.response);
      });

      xhr.open(`GET`, LOAD_URL);
      xhr.send();
    },
    save: (data, onLoad, onError) => {
      let xhr = new XMLHttpRequest();
      xhr.responseType = `json`;

      xhr.addEventListener(`load`, function () {
        onLoad(xhr.response);
      });

      xhr.open(`POST`, SAVE_URL);
      xhr.send(data);
    },
  };

})();
