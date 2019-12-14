// function sayHello() {
//     var name = 'Jack';
//     console.log('Hello ' + name);
//     function sayBye() {
//         console.log('Bye ' + name)
//     }
//     sayBye();
// }

// // console.log(name);

// sayHello();




// function sayHello() {
//     let name = 'Jack';
//     return function() {
//         name = 'Hello ' + name;
//         return name
//     }
// }

// // console.log(sayHello())


// let HelloFunc = sayHello();

// console.log(HelloFunc());
// console.log(HelloFunc());
// console.log(HelloFunc());




// function sumFunc(a) {
//     return function(b) {
//         return a + b
//     }
// }

// const sum = sumFunc(5);

// console.log(sum(2));
// console.log(sum(5));

// const sum2 = sumFunc(10);

// console.log(sum(4));    //a = 5; b = 4
// console.log(sum2(3))    // a = 10; b = 3




// function incEnv() {
//     let num = 0;
//     return function() {
//         num++
//         console.log(num);
//     }
// }

// let count = incEnv;

// count();
// count();
// count();




// function sumFunc(a) {
//     return function(b) {
//         return a + b
//     } 
// }

// let sum = sumFunc(3)(5);

// console.log(sum);







// function testReturn(a, b) {
//     let sum = a + b;
//     return sum

// }

// let firstRes = testReturn(2,5);
// let secRes = testReturn(10,5);

// console.log(firstRes * 2);
// console.log(secRes / 2);




// //Рекурсия

// let arrNum = [1,2,3,4,5];

// function checkArr(arr, i = 0) {
//     if(i < arr.length) {
//         console.log(arr[i])
//         i++
//         return checkArr(arr, i)
//     }
// }

// checkArr(arrNum)




const countryArr = ['Kyrgyzstan', 'USA', 'Russia', 'France'];
const countryArr2 = ['Japan', 'Canada', 'China', 'Belarus'] 

function longAndShort(countryList) {
    countryList.sort(function(a,b) {
        return a.length - b.length
    })

    let leng = countryList.length

    return countryList[0] + ' ' + countryList[leng - 1]
}

const result1 = longAndShort(countryArr);
const result2 = longAndShort(countryArr2);
console.log(result1, result2)