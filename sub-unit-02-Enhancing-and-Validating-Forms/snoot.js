"use strict";

// Exercise 01_06_01

// Snoot Flowers order form results
// Author: Todd Adcox Jr
// Date:   8-20-19 

// Filename: snoot.js

// Global variables
var twentyNine = document.createDocumentFragment();
var thirty = document.createDocumentFragment();
var thirtyOne = document.createDocumentFragment();

function setUpDays() {
    var dates = document.getElementById("delivDy").getElementsByTagName("option");
    twentyNine.appendChild(dates[28].cloneNode(true));
    thirty.appendChild(dates[28].cloneNode(true));
    thirty.appendChild(dates[29].cloneNode(true));
    thirtyOne.appendChild(dates[28].cloneNode(true));
    thirtyOne.appendChild(dates[29].cloneNode(true));
    thirtyOne.appendChild(dates[30].cloneNode(true));
}

function updateDays() {
    var deliveryDay =document.getElementById("delivDy");
    var dates = deliveryDay.getElementsByTagName("option");
    var deliveryMonth = document.getElementById("delivMo");
    var deliveryYear = document.getElementById("delivYr");
    var selectedMonth = deliveryMonth.options[deliveryMonth.selectedIndex].value;

    while (dates[28]) {
        deliveryDay.removeChild(dates[28]);
    }

    if (deliveryYear.selectedIndex === -1) {
        deliveryYear.selectedIndex =0;
    }

    if (selectedMonth === "2" && deliveryYear.options[deliveryYear.selectedIndex].value ==="2020") {
        deliveryDay.appendChild(twentyNine.cloneNode(true));
    } else if (selectedMonth === "4" || selectedMonth === "6" ||selectedMonth === "9" || selectedMonth === "11") {
        deliveryDay.appendChild(thirty.cloneNode(true));
    } else if(selectedMonth === "1" || selectedMonth === "3" || selectedMonth === "5" || selectedMonth === "7" || selectedMonth === "8" || selectedMonth === "10" || selectedMonth === "12") {
        deliveryDay.appendChild(thirtyOne.cloneNode(true));
    }
}

/* run setUpPage() function when page finishes loading */
if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}

function removeSelectDefaults() {
    var emptyBoxes = document.getElementsByTagName("select");
    alert("select lists: " + emptyBoxes.length)
}

function setUpPage() {
    removeSelectDefaults();
    setUpDays();
    createEventListeners();
}

function autoCheckCustom () {
    var messageBox = document.getElementById("customText");
    if (messageBox.value !== "" && messageBox.value !== messageBox.placeholder) {
        document.getElementById("custom").checked = "checked";
    } else {
        document.getElementById("custom").checked = "";
    }
}



function copyBillingAddress() {
    var billingInputElements = document.querySelectorAll("#billingaddress input");
    var deliveryInputElements = document.querySelectorAll("#deliveryAddress input");

    if (document.getElementById("sameAddr").checked) {
        for (var i = 0; i < billingInputElements.length; i++) {
            deliveryInputElements[i + 1].value;
        }
        document.querySelector("#deliveryAddress select").value = document.querySelector("#billingAddress select").value;
    }
}

function createEventListeners() {
    var deliveryMonth = document.getElementById("delivMo");
    if(deliveryMonth.addEventListener) {
        deliveryMonth.addEventListener("change", updateDays, false);
    } else if (deliveryMonth.attachEvent) {
        deliveryMonth.attachEvent("onchange", updateDays);
    }

    var deliveryYear =document.getElementById("delivYr");
    if (deliveryYear.addEventListener) {
        deliveryYear.addEventListener("change", updateDays, false);
    } else if (deliveryYear.attachEvent) {
        deliveryYear.attachEvent("onchange", updateDays)
    }
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

    var messageBox = document.getElementById("customText");
    if (messageBox.addEventListener) {
        messageBox.addEventListener("change", autoCheckCustom, false);
    } else if (messageBox.attachEvent) {
        messageBox.attachEvent("onchange", autoCheckCustom);
    }
}