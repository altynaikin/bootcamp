// let email = prompt('Введите телефон')


// let pattern = /^\+\d{3}\(\d{3}\)\d{3}-\d{3}$/




// function validateEmail(email) {
//     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     if(email == re) {
//         return console.log(true)
//     } else{
//         return console.log(false)
//     }
//     // return console.log(re.test(email));
    
// }

// let email = prompt('Введите email')
// // alert( validateEmail('aaaaa') ); // false
// alert( validateEmail('me@onfor.info') ); // true




function validateEmail(email) {
    var pattern  = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(pattern.test(email));
}

let email = prompt('Введите email')
validateEmail(email)