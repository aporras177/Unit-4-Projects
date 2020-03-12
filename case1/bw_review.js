"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 1
   Author: Ariahnnah Porras
   Date:   03/11/2020
   
   Filename: bw_review.js
	
   Functions List:
   init()
      Initializes the contents of the web page and sets up the
      event handlers.
      
   lightStars(e)
      Function that colors the stars representing the user rating
      for the book.
      
   turnOffStars(e)
      Function that restores the stars to empty colors, removing
      the user rating for the book.
   updateCount()
      Updates the count of characters in the wordCountBox
      element.
   countCharacters(textStr)
      Returns the number of a non-whitespace characters
      within textStr
*/

window.onload = init();

function init() {
   //selects every star image and stores as shorthand array
   var stars = document.querySelectorAll("span#stars img");

   for (var i = 0; i < stars.length; i++) {
      stars[i].style.cursor = "pointer";

      stars[i].addEventListener("mouseenter", lightStars);
   }
   document.querySelector("textarea").addEventListener("keyup", updateCont);
}

function lightStars(event) {
   var stars = document.querySelectorAll("span#stars img"); //stores location of each star img
   var starNumber = event.target.getAttribute("alt"); //targets the alt attribute of each star

   //makes the star checked and shows how many are selected in the DOM
   for (var i = 0; i < starNumber; i++) {
      stars[i].src = "bw_star2.png";
      document.querySelector("input#rating").value = starNumber + " stars";
   }

   //sets the star back to unselected after the mouse is moved away from it
 //makes the stars stay if you click it
   for (var i = starNumber; i < 5; i++) {
      stars[i].src = "bw_star.png";
      stars[i].addEventListener("mouseleave", turnOffStars);
      event.target.addEventListener("click", function (event) {
         event.target.removeEventListener("mouseleave", turnOffStars);
      })
   }
}

//used in conjunction with the for loop above
function turnOffStars() {
   var stars = document.querySelectorAll("span#stars img");

   for (var i = starNumber; i < 5; i++) {
      stars[i].src = "bw_star.png";
      document.querySelector("input#rating").value = "";
   }
}

//This code sets the char count as the user types and the if statement 
// achanges the text to see if there is an error after 1000 characters
function updateCont() {
   var commentText = document.querySelector("textarea#comment").value;
   var charCount = countCharacters(commentText); //calls the function below the divider which handles the char count
   var wordCountBox = document.querySelector("input#wordCount");

   wordCountBox.value = charCount + "/1000";

   if(charCount > 1000){
      wordCountBox.style.color = "white";
      wordCountBox.style.backgroundColor = "red";
   }
   else{
      wordCountBox.style.color = "black";
      wordCountBox.style.backgroundColor = "white";
   }
}

/*=================================================================*/

function countCharacters(textStr) {
   var commentregx = /\s/g;
   var chars = textStr.replace(commentregx, "");
   return chars.length;
}   