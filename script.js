"use strict";

const navMenu = document.querySelector('.nav-menu');

const buttonYelloow = document.querySelector('.button-yelloow');
const buttonRed = document.querySelector('.button-red');
const buttonPerpol = document.querySelector('.button-perpol');
const buttonHromo = document.querySelector('.button-hromo');

const type1 = document.querySelector('.card-color0')
const type2 = document.querySelector('.card-color');
const type3 = document.querySelector('.card-color2');
const type4 = document.querySelector('.card-color3');

buttonYelloow.addEventListener('click', function (event) {
   type1.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
   })   
})
buttonPerpol.addEventListener('click', function (event) {
   type3.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
   })
})
buttonHromo.addEventListener('click', function (event) {
   type4.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
   })
})
buttonRed.addEventListener('click', function (event) {
   type2.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
   })
})

const imgButton = document.querySelector('.img');
imgButton.addEventListener('click', function () {
   navMenu.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
   })
})


