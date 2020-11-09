'use strict';

(function () {

  const MAX_SIMILAR_LIST = 4;

  const userDialog = document.querySelector(`.setup`);

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

  const successHandler = (wizardsList) => {
    const fragment = document.createDocumentFragment();
    let count = wizardsList.length < MAX_SIMILAR_LIST ? wizardsList.length : MAX_SIMILAR_LIST;
    for (let i = 0; i < count; i++) {
      fragment.appendChild(renderWizard(window.util.getRandomEl(wizardsList)));
    }

    similarListElement.appendChild(fragment);

    userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);
  };

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

  window.similar = {
    successHandler,
    errorHandler,
  };

})();
