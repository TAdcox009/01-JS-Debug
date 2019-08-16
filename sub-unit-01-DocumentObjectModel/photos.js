/*    Exercise 01_05_01

 *    Photo gallery
 *    Variables and functions
 *    Author: Todd Adcox Jr
*     Date:   8-15-19   

 *    Filename: photos.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrder = [1,2,3,4,5];

/* shift all images one figure to the left, and change values in photoOrder array to match  */
function rightArrow() {
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] + 1) === 6) {
         photoOrder[i] = 1;
      } else {
         photoOrder[i] += 1;
      }
      populateFigures();
   }
}

/* shift all images one figure to the right, and change values in photoOrder array to match  */
function leftArrow() {
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] - 1) === 0) {
         photoOrder[i] = 5;
      } else {
         photoOrder[i] -= 1;
      }
      populateFigures();
   }
}

/* open center figure in separate window */
function zoomFig() {
   var leftarrow;
}

function createEventListeners() {
   var leftarrow = document.getElementById("leftarrow");
   var rightarrow = document.getElementById("rightarrow");
   if(leftarrow.addEventListener ) {
      leftarrow.addEventListener("click", leftArrow, false);
   }
   else if (leftarrow.attachEvent) {
      leftarrow.attachEvent("onClick", leftArrow);
   }
   if(rightarrow.addEventListener ) {
      rightarrow.addEventListener("click", rightArrow, false);
   }
   else if (rightarrow.attachEvent) {
      rightarrow.attachEvent("onClick", rightArrow);
   }

   var mainFig = document.getElementsByTagName("img")[1];
   alert(mainFIg);

   if (mainFig.addEventListener) {
      mainFig.addEventListener("click", zoomFig, false);
   }
   else if (mainFig.attachEvent) {
      mainFig.attachEvent("onClick", zoomFig);
   }
}

function zoomFig() {
   alert("center image clicked");
}
/* create event listeners and populate image elements */
function setUpPage() {
   createEventListeners();
   populateFigures();
}

/* run setUpPage() function when page finishes loading */
if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false); 
} else if (window.attachEvent)  {
  window.attachEvent("onload", setUpPage);
}