"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 11
   Case Problem 2
   Author: Ariahnnah Porras
   Date:   3-12-2020
   
   Filename: mt_calc.js
	
   Functions List:
   init()
      Initializes the contents of the web page and sets up the
      event handlers
      
   buttonClick(e)
      Adds functions to the buttons clicked within the calcutlor
      
   calcKeys(e)
      Adds functions to key pressed within the calculator window 
      
   eraseChar(textStr)
      Erases the last character from the text string, textStr
      
   evalEq(textStr, decimals) 
      Evaluates the equation in textStr, returning a value to the number of decimals specified by the decimals parameter
   lastEq(textStr) 
      Returns the previous expression from the list of expressions in the textStr parameter
*/
window.onload = init();
function init() { //Initializes the contents of the web page and sets up the event handlers
var calcButtons = document.querySelectorAll("calcButton");
for (var i = 0; i < calcButtons.length; i++) {
   calcButtons[i].style.cursor = "click";

   calcKeys()[i].addEventListener("calcWindow");

}
}

function buttonClick(e){ //Adds functions to the buttons clicked within the calcutlor

   var calcValue = "calcWindow";
   var calcDecimal = "decimals"; 
   buttonValue()[i].addEventListener("calcWindow");
}





/* ===================================================================== */

function eraseChar(textStr) { 
   return textStr.substr(0, textStr.length - 1);
}

function evalEq(textStr, decimals) {
   var lines = textStr.split(/\r?\n/);
   var lastLine = lines[lines.length-1];
   var eqValue = eval(lastLine);
   return eqValue.toFixed(decimals);
}  

function lastEq(textStr) {
   var lines = textStr.split(/\r?\n/);
   var lastExp = lines[lines.length-2];
   return lastExp.substr(0, lastExp.indexOf("=")).trim();
}