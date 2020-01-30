// setTimeout(() => {
//     console.log('Async')
// }, 1000)

// console.log('Sync')


// for(let i = 0; i > 150000000000; i++) {

// }
// console.log('Sync')



// let xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/');

// xhr.onload = function() {
//     console.log(JSON.parse(this.response))
// }

// xhr.send()



// $.ajax({
//     url: 'https://pokeapi.co/api/v2/pokemon/',
//     success: function(data){
//     console.log(data)
//     }
// })


// const request = fetch('https://pokeapi.co/api/v2/pokemon/')
//     .then(result => result.json())
//     .then(data => console.log(data))
//     .catch(err => console.log('Some error'))

const age = 22;

// const newPr = new Promise(function(resolve, reject) {
//     if(age >= 21) {
//         resolve({age, status: true})
//     } else {
//         reject({age, status: false})
//     }
// })

// newPr
//     .then(data => console.log(data))
//     .catch(err => console.log(err))


const checkAge = age => {
    return new Promise((resolve,reject) => {

        const newPr = data => {
            new Promise((resolve,reject) => {
                resolve({age: data, status:true})
            })
        }
        if(age >=21) {
            resolve(newPr(age))
        }else {
            reject({age, status: false})
        }
    })
}

checkAge(22)
    .then(data => console.log(data))
    .catch(err => console.log(err))

//  checkAge(25)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))