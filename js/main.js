"use strict";

// console.log(document.querySelector("[data-current='3']").nextElementSibling);
// console.log(document.querySelector(".first").childNodes);

for (let node of document.querySelectorAll(".wrapper")){
    if(node.nodeName == "#text"){
        continue;
    }

    console.log(node);
}
