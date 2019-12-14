// let degree1 = 30;
// let degree2 = 22;
// let degree3 =  8;
// let degree4 = 36.6;

let degree1 = +prompt('Введите градусы Цельсия');

function celsiusToF(degree) {
    if(typeof degree === 'number' && !isNaN(degree)) {
        let result = degree * 1.8 + 32;
    return result.toFixed(2) + ' F'; 
} else {
    return 'Error'
}
}
console.log(celsiusToF(degree1));