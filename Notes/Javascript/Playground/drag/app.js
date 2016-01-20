"use strict";

/* Drag Logic Start*/
var source;
var isBefore = function(first, second) {
  if(first.parentNode === second.parentNode) {
    for(var item = first; item; item = item.previousSibling) {
      if(item === second) {
        return true;
      }
    }
  }
  return false;
}
var handleDragEnter = function(event) {
  if(isBefore(source, event.target)) {
    event.target.parentNode.insertBefore(source, event.target);
  } else {
    event.target.parentNode.insertBefore(source, event.target.nextSibling);
  }
}
var handleDragStart = function(event) {
  source = event.target;
  event.dataTransfer.effectAllowed = "move";
}
/* Drag Logic End */

var sendThree = function(event) {
  event.preventDefault();
  var firstInput = document.getElementById("first");
  var secondInput = document.getElementById("second");
  var thirdInput = document.getElementById("third");
  var list = document.getElementsByTagName("ul")[0];
  var firstBox = list.getElementsByTagName("li")[0].textContent;
  var secondBox = list.getElementsByTagName("li")[1].textContent;
  var thirdBox = list.getElementsByTagName("li")[2].textContent;
  firstInput.value = firstBox;
  secondInput.value = secondBox;
  thirdInput.value = thirdBox;
};
var button = document.getElementById("button");
button.addEventListener("click", sendThree, false);
