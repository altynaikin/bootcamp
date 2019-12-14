// function exampleFunc() {
//     console.log('Hello world');
// }
// for(let i = 0; i < 3; i++) {
// exampleFunc();
// }




// if(false) {
//     exampleFunc()
// }




// function multiply(a, b) {
//     let result = a * b;
//     console.log(result);
// }

// multiply(2,5); 
// multiply(6,6);
// multiply(3,3);


// radiusToSquare(3);
// function Declaration
// function radiusToSquare(r) {
//     let result = Math.PI * (r * r);
//     console.log('Площадь круга ' + result)
// }

// radiusToSquare(5);
// radiusToSquare(10);



// Function Expression-не хоистится, анонимная 

// const radiusToSquare = function(r) {
//     let result = Math.PI * (r * r);
//     console.log('Площадь круга ' + result);
// }
// radiusToSquare(5);






//Self-Invokink func
// let hello = 10;

// (function(){
//     let hello = 'Hello world';
//     console.log(hello)
// })()



// let square = null;

// const radiusToSquare = function(r) {
//     let result = Math.PI * (r * r);
//     return result;
// }

// // radiusToSquare(3);
// // radiusToSquare(5)

// let square1 = radiusToSquare(3);
// let square2 = radiusToSquare(5);

// console.log(square1);
// console.log(square2);



// const inputAge = +prompt('Введите возраст:');

// const checkAge = function(age) {
//     return age >= 18
// }

// if(checkAge(inputAge)) {
//     alert('Доступ разрешен')
// } else {
//     alert('Доступ запрещен')
// }



//Arrow function

// const exampleFunc = () => {
//     console.log('hello world')
// }

