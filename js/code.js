"use strict";
//Email
let submit = document.querySelector(".submit");
let input = document.getElementById("email");
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

submit.addEventListener("click", function () {
  if (input.value.match(regex)) {
    document.querySelector(".ps-info-verify").classList.add("hidden");
    document.querySelector(".ps-info").classList.remove("hidden");
  } else {
    alert("Please fill in an email !");
    input.placeholder = "Type again";
    input.value = "";
  }
});
//HIDE-SHOW
let viewMore = document.querySelectorAll(".view-more");
let contentOverAll = document.querySelectorAll(".content-overall");
let viewLess = document.querySelectorAll(".view-less");
let contentHeader = document.querySelectorAll(".content-header");
for (let i = 0; i < viewMore.length; i++) {
  contentHeader[i].addEventListener("mouseover", function () {
    if (
      viewMore[i].classList.contains("hidden") &&
      viewLess[i].classList.contains("hidden")
    ) {
      viewMore[i].classList.remove("hidden");
    }
  });
  contentHeader[i].addEventListener("mouseout", function () {
    if (
      !viewMore[i].classList.contains("hidden") &&
      viewLess[i].classList.contains("hidden")
    ) {
      viewMore[i].classList.add("hidden");
    }
  });

  viewMore[i].addEventListener("click", function () {
    viewMore[i].classList.add("hidden");
    contentOverAll[i].classList.remove("hidden");
    viewLess[i].classList.remove("hidden");
  });
  viewLess[i].addEventListener("click", function () {
    contentOverAll[i].classList.add("hidden");
    viewLess[i].classList.add("hidden");
  });
}
