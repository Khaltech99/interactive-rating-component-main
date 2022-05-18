"use strict";

let selected = document.querySelector(".selected");
let rating = document.querySelectorAll(".rating__digit");
const submit = document.querySelector(".btn-primary");
const hideit = document.querySelector(".hideit");
const hide = document.querySelector(".hide");

rating.forEach((chosen) => {
    chosen.addEventListener("click", function handleClick(event) {
        //console.log(chosen.innerHTML);
        selected.textContent = chosen.innerHTML;
        //console.log(selected.textContent);
        submit.addEventListener("click", function() {
            hideit.classList.remove("hideit");
            hide.classList.add("hideit");
        });
    });
});