"use strict";const navMenu=document.querySelector(".nav-menu"),buttonYelloow=document.querySelector(".button-yelloow"),buttonRed=document.querySelector(".button-red"),buttonPerpol=document.querySelector(".button-perpol"),buttonHromo=document.querySelector(".button-hromo"),type1=document.querySelector(".card-color0"),type2=document.querySelector(".card-color"),type3=document.querySelector(".card-color2"),type4=document.querySelector(".card-color3");buttonYelloow.addEventListener("click",(function(t){type1.scrollIntoView({block:"start",behavior:"smooth"})})),buttonPerpol.addEventListener("click",(function(t){type3.scrollIntoView({block:"start",behavior:"smooth"})})),buttonHromo.addEventListener("click",(function(t){type4.scrollIntoView({block:"start",behavior:"smooth"})})),buttonRed.addEventListener("click",(function(t){type2.scrollIntoView({block:"start",behavior:"smooth"})}));const imgButton=document.querySelector(".img");imgButton.addEventListener("click",(function(){navMenu.scrollIntoView({block:"start",behavior:"smooth"})}));