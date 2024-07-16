
// ESS - functionally scope
// es6 - block scoped

// var abc=10;

//SCOPPING
// function testing(){
//     var abc=20;
//     let def=100;
//     console.log(abc);
//     // Block Scope
//     if(1){
//         let xyz='block scoped';
//         console.log('Insid If',xyz);
//         console.log(abc);
//     }
//     console.log('Outside if', xyz);
// }

// testing(); // calling a function

// var name='Cipher';
// let year=2020;

// function test(){
//     console.log(name);
//     console.log(year);
// }

// test();

// Function declaration and function expression

//Hoisting
// myFunc()
// myFunc2();

// function myFunc(){
//     console.log('Inside myFun Declaration')
// }

// //function  expression
// let myFunc2= function(){
//     console.log('Inside myFun2: function expression');
// }


//console.log(name2)
//name();

//var name2='Mrudhula';
// function name(){
//     console.log('hello');
// }

//Arrow Functions - ES6 feature
// this- context
// let newFunc = ()=>{
//     console.log('Arrow Functions Created');
//     console.log(this);
// }

// newFunc();

// let funcExp=function(){
//     console.log('Function expression Created');
//     console.log(this);
// }
// funcExp();

let newFunc= name => console.log(name); //Arrow
newFunc('cipher'); //argument