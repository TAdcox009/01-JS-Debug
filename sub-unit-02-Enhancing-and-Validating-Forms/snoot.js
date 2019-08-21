"use strict";

// Exercise 01_06_01

// Snoot Flowers order form results
// Author: Todd Adcox Jr
// Date:   8-20-19 

// Filename: snoot.js

function removeSelectDefaults() {
    var emptyBoxes = document.getElementsByTagName("select");
    alert("select lists: " + emptyBoxes.length)
}

function createEventListener() {
    var submitButton = document.getElementById("submit");
    if(submitButton.addEventListener) {
        submitButton.addEventListener("click", removeSelectDefaults);
    } else if (submitButton.attachEvent) {
        submitButton.attachEvent("onClick", removeSelectDefaults);
    }

    for (var i = 0; i < emptyBoxes.length; i++) {
        emptyBoxes[i].selectedIndex = -1;
    }
}