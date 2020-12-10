// "use strict";

// function copy(mainObj){
//     let objCopy = {};

//     let key;
//     for( key in mainObj){
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
    
// };

// // const newNumbers = copy(numbers);

// // newNumbers.a = 10;

// // console.log(newNumbers);
// // console.log(numbers);
// const addNumbers = {
//     g: 50,
//     h: 60
// };

// const clone = Object.assign({},addNumbers);

// clone.h = 100;
// console.log(clone);
// console.log(numbers);

// const oldArray = ["1", "2", "3"];
// const newArray = oldArray.slice();

// newArray[0] = "qweasd";

// console.log(newArray);
// console.log(oldArray);

const video = ["Youtube","TikTOk","Instagram"],
      blogs = ["Instagram","FaceBook","Vk"],
      my = [...video,...blogs,"D2ru", "cybersport"];
console.log(my);