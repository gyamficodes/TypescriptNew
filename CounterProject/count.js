"use strict";
let counter = 0;
const el = document.querySelector(".Counter");
function upDdateCounter() {
    //  const el = document.querySelector(".Counter") as HTMLElement | null;
    if (el) {
        el.textContent = counter.toString();
    }
}
// Function to increase the counter
function increaseCounter() {
    counter += 1 * 2;
    upDdateCounter();
    if (counter > 0) {
        if (el) {
            el.style.color = "green";
        }
    }
}
// Function to decrease the counter
function decreaseCounter() {
    counter += -2;
    upDdateCounter();
    if (counter < 0) {
        if (el) {
            el.style.color = "red";
        }
    }
}
function resetCounter() {
    counter = 0;
    upDdateCounter();
    if (counter == 0) {
        if (el) {
            el.style.color = "yellow";
        }
    }
}
