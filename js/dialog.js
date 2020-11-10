'use strict';

(function () {

  const userDialog = document.querySelector(`.setup`);
  const setupOpen = document.querySelector(`.setup-open`);
  const setupClose = userDialog.querySelector(`.setup-close`);

  const form = userDialog.querySelector(`.setup-wizard-form`);

  const onPopupEscPress = (evt) => {
    window.util.isEscEvent(evt, closeSetup);
  };

  const openSetup = () => {
    userDialog.classList.remove(`hidden`);
    document.addEventListener(`keydown`, onPopupEscPress);
    window.backend.load(window.similar.successHandler, window.util.errorHandler);
    userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);
  };

  const closeSetup = () => {
    userDialog.classList.add(`hidden`);
    userDialog.removeAttribute(`style`);
    document.removeEventListener(`keydown`, onPopupEscPress);
  };

  setupOpen.addEventListener(`click`, function () {
    openSetup();
  });

  setupOpen.addEventListener(`click`, function (evt) {
    window.util.isEnterEvent(evt, openSetup);
  });

  setupClose.addEventListener(`click`, function () {
    closeSetup();
  });

  setupClose.addEventListener(`keydown`, function (evt) {
    window.util.isEnterEvent(evt, closeSetup);
  });

  const submitHandler = (evt) => {
    window.backend.save(new FormData(form), closeSetup, window.util.errorHandler);
    evt.preventDefault();
  };

  form.addEventListener(`submit`, submitHandler);

})();
