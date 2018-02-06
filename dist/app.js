(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

<<<<<<< HEAD
let translator = () => {
    //create constant that reads the value of the selector (German, French, Norwegian, Spanish)
    const select = document.getElementById("selector").value;

    console.log("select: ", select);

    //creat constant that reads the value of the card to be translated
    const userCard = document.getElementById("card").value;
    console.log("user card: ", userCard);
    
    //create a function that localizes userCard and splits the user input into an array from a string and returns it
    let userGreetingArray = () => {
        let userString = userCard;
        let englishGreeting = userString.split(" ");
        return englishGreeting;
    };

    //ceate a varibale that calls the function
    let englishArray = userGreetingArray();

    console.log(englishArray); 

    //take array items and translate them
    

    //concatenate the translatedGreeting array into a string
    let concatTranslate = englishArray.join(" ");
    console.log("concatenate translation: ", concatTranslate);

    //print that string to the DOM
    document.getElementById("cardTranslated").innerText = concatTranslate;
};
    //run translator function when translate button is clicked
let translateButton = document.getElementById("button");

translateButton.addEventListener("click", translator, false);
=======

const select = document.getElementById("selector").value;
// const select = document.getElementbyID("selector").checked;
// const select = document.getElementbyID("selector").checked;
// const select = document.getElementbyID("selector").checked;

console.log("select", select);

const userCard = document.getElementById("card").innerText;
console.log(userCard);
>>>>>>> 17279009667224ba843110dccba1363a1654fe06
},{}]},{},[1]);
