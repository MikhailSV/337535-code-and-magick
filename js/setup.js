'use strict';
var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = document.querySelector('.setup-close');
var wizard = document.querySelector('#wizard');
var wizardCoat = wizard.querySelector('#wizard-coat');
var wizardEyes = wizard.querySelector('#wizard-eyes');
var wizarFireBall = document.querySelector('.setup-fireball-wrap');

var colorCoat = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var colorEyes = ['black', 'red', 'blue', 'yellow', 'green'];
var colorFireBall = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var getRandomColorIndex = function () {
  return Math.floor(Math.random() * colorCoat.length);
};

setupOpen.addEventListener('click', function () {
  setup.classList.remove('invisible');
});
setupClose.addEventListener('click', function () {
  setup.classList.add('invisible');
});

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = colorCoat[getRandomColorIndex(colorCoat)];
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = colorEyes[getRandomColorIndex(colorCoat)];
});
wizarFireBall.addEventListener('click', function () {
  wizarFireBall.style.background = colorFireBall[getRandomColorIndex(colorCoat)];
});
