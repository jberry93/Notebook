"use strict";

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
