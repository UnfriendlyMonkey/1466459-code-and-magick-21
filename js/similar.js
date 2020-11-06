'use strict';

(function () {

  const MAX_SIMILAR_LIST = 4;

  const userDialog = document.querySelector(`.setup`);

  userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);

  const similarListElement = document.querySelector(`.setup-similar-list`);
  const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
      .content
      .querySelector(`.setup-similar-item`);

  const renderWizard = function (wizard) {
    let wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
    wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.colorCoat;
    wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.colorEyes;

    return wizardElement;
  };

  window.backend.load(function (wizardsList) {

    const fragment = document.createDocumentFragment();
    let count = wizardsList.length < MAX_SIMILAR_LIST ? wizardsList.length : MAX_SIMILAR_LIST;
    for (let i = 0; i < count; i++) {
      fragment.appendChild(renderWizard(window.util.getRandomEl(wizardsList)));
    }

    similarListElement.appendChild(fragment);

  }, function() {});


})();
