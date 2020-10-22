'use strict';

const NAMES_LIST = [
  `Иван`,
  `Хуан Себастьян`,
  `Мария`,
  `Кристоф`,
  `Виктор`,
  `Юлия`,
  `Люпита`,
  `Вашингтон`
];

const SURNAMES_LIST = [
  `да Марья`,
  `Верон`,
  `Мирабелла`,
  `Вальц`,
  `Онопко`,
  `Топольницкая`,
  `Нионго`,
  `Ирвинг`
];

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
const setupOpen = document.querySelector(`.setup-open`);
const setupClose = userDialog.querySelector(`.setup-close`);

const wizardSetup = userDialog.querySelector(`.setup-wizard`);
const coatSetup = wizardSetup.querySelector(`.wizard-coat`);
const eyesSetup = wizardSetup.querySelector(`.wizard-eyes`);
const fireballSetup = userDialog.querySelector(`.setup-fireball-wrap`);

const coatInput = userDialog.querySelector(`.coat-color`);
const eyesInput = userDialog.querySelector(`.eyes-color`);
const fireballInput = userDialog.querySelector(`.fireball-color`);

const getRandomEl = function (array) {
  let rand = Math.floor(Math.random() * array.length);
  return array[rand];
};

const changeCoatColor = (color) => {
  coatInput.value = color;
  coatSetup.style = `fill: ${color}`;
};

const changeEyesColor = (color) => {
  eyesInput.value = color;
  eyesSetup.style = `fill: ${color}`;
};

const changeFireballColor = (color) => {
  fireballInput.value = color;
  fireballSetup.style = `background: ${color}`;
};

const onPopupEscPress = (evt) => {
  if (evt.key === `Escape`) {
    evt.preventDefault();
    closeSetup();
  }
};

const openSetup = () => {
  userDialog.classList.remove(`hidden`);
  document.addEventListener(`keydown`, onPopupEscPress);
};

const closeSetup = () => {
  userDialog.classList.add(`hidden`);
  document.removeEventListener(`keydown`, onPopupEscPress);
};

// Открытие и закрытие окна настроек

setupOpen.addEventListener(`click`, function () {
  openSetup();
});

setupOpen.addEventListener(`click`, function (evt) {
  if (evt.key === `Enter`) {
    openSetup();
  }
});

setupClose.addEventListener(`click`, function () {
  closeSetup();
});

setupClose.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    closeSetup();
  }
});

// Смена цветов персонажа

coatSetup.addEventListener(`click`, function () {
  changeCoatColor(getRandomEl(COAT_COLORS));
});

eyesSetup.addEventListener(`click`, function () {
  changeEyesColor(getRandomEl(EYES_COLOR));
});

fireballSetup.addEventListener(`click`, function () {
  changeFireballColor(getRandomEl(FIREBALL_COLOR));
});

// Показ блока схожих персонажей

userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);

const similarListElement = document.querySelector(`.setup-similar-list`);
const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
    .content
    .querySelector(`.setup-similar-item`);

const createWisardsList = function (count) {
  let createdList = [];
  for (let i = 0; i < count; i++) {
    createdList[i] = {
      name: getRandomEl(NAMES_LIST) + ` ` + getRandomEl(SURNAMES_LIST),
      coatColor: getRandomEl(COAT_COLORS),
      eyesColor: getRandomEl(EYES_COLOR)
    };
  }
  return createdList;
};

const wizardsList = createWisardsList(4);

const renderWizard = function (wizard) {
  let wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

  return wizardElement;
};

const fragment = document.createDocumentFragment();
for (let i = 0; i < wizardsList.length; i++) {
  fragment.appendChild(renderWizard(wizardsList[i]));
}

similarListElement.appendChild(fragment);
