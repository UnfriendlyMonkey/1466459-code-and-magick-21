'use strict';

(function () {

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

  const userDialog = document.querySelector(`.setup`);

  userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);

  const similarListElement = document.querySelector(`.setup-similar-list`);
  const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
      .content
      .querySelector(`.setup-similar-item`);

  const createWisardsList = function (count) {
    let createdList = [];
    for (let i = 0; i < count; i++) {
      createdList[i] = {
        name: window.util.getRandomEl(NAMES_LIST) + ` ` + window.util.getRandomEl(SURNAMES_LIST),
        coatColor: window.util.getRandomEl(COAT_COLORS),
        eyesColor: window.util.getRandomEl(EYES_COLOR),
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

})();
