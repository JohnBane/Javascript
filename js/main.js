"use strict";

let btns = document.querySelectorAll("button");
let circles = document.querySelectorAll(".circle");
let hearts = document.querySelector("hearts");
let wrapper = document.querySelector(".wrapper");

btns[0].style.backgroundColor = "red";

// for (let i = 0; i < circles.length; i++){
//     circles[i].style.backgroundColor = "blue";
// }
// hearts.style.classList = "border: 1px solid black; border-radius: 2px;";

circles.forEach(item => {   
    item.style.backgroundColor = "red";
});

const div = document.createElement("div");
const div2 = document.createElement("div");
div.classList.add("black");
div2.classList.add("yellow");

document.body.prepend(div);

circles[0].before(div);
circles[2].after(div2);

circles[0].replaceWith(btns[0]);

btns[2].replaceWith(circles[1]);