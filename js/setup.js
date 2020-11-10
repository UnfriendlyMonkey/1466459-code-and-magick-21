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

  const FIREBALL_COLOR = [
    `#ee4830`,
    `#30a8ee`,
    `#5ce6c0`,
    `#e848d5`,
    `#e6e848`
  ];

  const userDialog = document.querySelector(`.setup`);

  const wizardSetup = userDialog.querySelector(`.setup-wizard`);
  const coatSetup = wizardSetup.querySelector(`.wizard-coat`);
  const eyesSetup = wizardSetup.querySelector(`.wizard-eyes`);
  const fireballSetup = userDialog.querySelector(`.setup-fireball-wrap`);

  const coatInput = userDialog.querySelector(`.coat-color`);
  const eyesInput = userDialog.querySelector(`.eyes-color`);
  const fireballInput = userDialog.querySelector(`.fireball-color`);

  let coatColor = `rgb(101, 137, 164)`;
  let eyesColor = `black`;

  const changeCoatColor = (color) => {
    coatInput.value = color;
    coatSetup.style = `fill: ${color}`;
    coatColor = color;
    window.debounce(window.similar.renderSimilarList(coatColor, eyesColor));
  };

  const changeEyesColor = (color) => {
    eyesInput.value = color;
    eyesSetup.style = `fill: ${color}`;
    eyesColor = color;
    window.debounce(window.similar.renderSimilarList(coatColor, eyesColor));
  };

  const changeFireballColor = (color) => {
    fireballInput.value = color;
    fireballSetup.style = `background: ${color}`;
  };

  coatSetup.addEventListener(`click`, function () {
    changeCoatColor(window.util.getRandomEl(COAT_COLORS));
  });

  eyesSetup.addEventListener(`click`, function () {
    changeEyesColor(window.util.getRandomEl(EYES_COLOR));
  });

  fireballSetup.addEventListener(`click`, function () {
    changeFireballColor(window.util.getRandomEl(FIREBALL_COLOR));
  });

})();
