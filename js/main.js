"use strict";

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