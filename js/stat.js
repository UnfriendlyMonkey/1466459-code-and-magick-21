'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const GAP = 50;
const BAR_WIDTH = 40;
const MAX_HEIGHT = 150;
const NAMES_Y = 260;
const START_X = 150;
const BAR_MAX_Y = 90;


const renderRectangle = function (ctx, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

const renderText = function (ctx, text, x, y, color = `#000`, font = `16px PT Mono`) {
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.fillText(text, x, y);
};

const findMaxTime = function (arr) {
  let maxTime = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxTime) {
      maxTime = arr[i];
    }
  }
  return maxTime;
};

const getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

const getRandomBlue = function () {
  let saturation = getRandomInt(1, 100);
  let randomBlue = `hsl(240, ${saturation}%, 50%)`;
  return randomBlue;
};


window.renderStatistics = function (ctx, names, times) {

  renderRectangle(ctx, 110, 20, CLOUD_WIDTH, CLOUD_HEIGHT, `rgba(0, 0, 0, 0.7)`);
  renderRectangle(ctx, 100, 10, CLOUD_WIDTH, CLOUD_HEIGHT, `#fff`);

  renderText(ctx, `Ура, Вы победили!`, START_X, 40);
  renderText(ctx, `Список результатов:`, START_X, 60);

  const maximumTime = findMaxTime(times);
  let barHeight = MAX_HEIGHT;
  let difference = 0;
  let barY = BAR_MAX_Y + difference;
  let barColor = `rgba(255, 0, 0, 1)`;

  for (let i = 0; i < names.length; i++) {

    if (times[i] === maximumTime) {
      barHeight = MAX_HEIGHT;
      barY = BAR_MAX_Y;
    } else {
      barHeight = times[i] / maximumTime * MAX_HEIGHT;
      difference = MAX_HEIGHT - barHeight;
      barY = BAR_MAX_Y + difference;
    }

    renderText(ctx, names[i], START_X + (BAR_WIDTH + GAP) * i, NAMES_Y);
    renderText(ctx, Math.round(times[i]), START_X + (BAR_WIDTH + GAP) * i, barY - 10);
    if (names[i] !== `Вы`) {
      barColor = getRandomBlue();
    } else {
      barColor = `rgba(255, 0, 0, 1)`;
    }
    renderRectangle(ctx, START_X + (BAR_WIDTH + GAP) * i, barY, BAR_WIDTH, barHeight, barColor);

  }
};
