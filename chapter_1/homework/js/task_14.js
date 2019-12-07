// var str = prompt('Введите слово');
// var arr = [];


// for(var x = 0; x < str.length; x++) {
//     for(var y = x + 1; y < str.length + 1; y++){
//         console.log(str.slice(x, y))
//     }
// }


// console.log(str.push)


var str = prompt('Введите слово');
var newArr = []

for(var y = 0; y < str.length; y++) {
    for(var x = 0; x < str.length - y; x++) {
        newArr.push(str.slice(y, str.length - x))
    }
}
console.log(newArr)

