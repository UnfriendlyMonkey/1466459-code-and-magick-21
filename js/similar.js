'use strict';

(function () {

  const MAX_SIMILAR_LIST = 4;

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

  const getScore = (wizard, coatColor, eyesColor) => {
    let score = 0;
    if (wizard.colorCoat === coatColor) {
      score += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      score += 1;
    }
    return score;
  };

  const namesComparator = (left, right) => {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  const renderSimilarList = (coatColor, eyesColor) => {

    const wizards = wizardsList.sort(function (left, right) {
      let scoreDiff = getScore(right, coatColor, eyesColor) - getScore(left, coatColor, eyesColor);
      if (scoreDiff === 0) {
        scoreDiff = namesComparator(left.name, right.name);
      }
      return scoreDiff;
    });

    similarListElement.innerHTML = ``;
    const fragment = document.createDocumentFragment();

    let count = wizards.length < MAX_SIMILAR_LIST ? wizards.length : MAX_SIMILAR_LIST;
    for (let i = 0; i < count; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }

    similarListElement.appendChild(fragment);
  };

  let wizardsList = [];

  const successHandler = (data) => {
    wizardsList = data;
    renderSimilarList(`rgb(101, 137, 164)`, `black`);
  };

  window.similar = {
    successHandler,
    renderSimilarList: window.debounce(renderSimilarList),
  };

})();
