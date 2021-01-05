// // "use strict";

// // let btns = document.querySelectorAll("button");
// // let circles = document.querySelectorAll(".circle");
// // let hearts = document.querySelector("hearts");
// // let wrapper = document.querySelector(".wrapper");

// // btns[0].style.backgroundColor = "red";

// // // for (let i = 0; i < circles.length; i++){
// // //     circles[i].style.backgroundColor = "blue";
// // // }
// // // hearts.style.classList = "border: 1px solid black; border-radius: 2px;";

// // circles.forEach(item => {   
// //     item.style.backgroundColor = "red";
// // });

// // const div = document.createElement("div");
// // const div2 = document.createElement("div");
// // div.classList.add("yellow");
// // div2.classList.add("yellow");

// // document.body.append(div);
// // div.innerHTML = "<h1>Hello World!!!</h1> <p>This is paragraph</p>";

// // let oneButton = document.createElement("button");
// // oneButton.innerHTML = "6";
// // btns[4].after(oneButton);
"use strict";

const btns = document.querySelectorAll("button"),
      overlay = document.querySelector(".overlay"),
      link = document.querySelector("a");
// let i = 0;
const deleteValue = (e) => {
    console.log(e.target);
    console.log(e.type);
    // i++;
    // if( i == 1){
    //     btn.removeEventListener("click", deleteValue);
    // }
};
// link.addEventListener("click", function(event){
//     event.preventDefault();

//     console.log(event.target);
// });

// btn.addEventListener("click", deleteValue);
// overlay.addEventListener("click", deleteValue);
btns.forEach(btn => {
    btn.addEventListener("click", deleteValue);
});


