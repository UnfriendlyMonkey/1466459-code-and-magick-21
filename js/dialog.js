'use strict';

(function () {

  const userDialog = document.querySelector(`.setup`);
  const setupOpen = document.querySelector(`.setup-open`);
  const setupClose = userDialog.querySelector(`.setup-close`);

  const onPopupEscPress = (evt) => {
    window.util.isEscEvent(evt, closeSetup);
  };

  const openSetup = () => {
    userDialog.classList.remove(`hidden`);
    document.addEventListener(`keydown`, onPopupEscPress);
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

}) ();
