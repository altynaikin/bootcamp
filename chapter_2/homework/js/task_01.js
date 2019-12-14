let countryArr = ['Kyrgyzstan','Russia', 'Japan', 'USA', 'Sweden', 'Great Britain']
console.log(countryArr);

// var longest = 0

// for(var i = 0; i < countryArr.length; i++) {
//     if(longest < countryArr[i].length){
//         longest = countryArr[i]
//     }
// }

// console.log(longest)

// var countryLengths = countryArr.map(function(country) {
//     for(var i = 0; i < countryArr.length; i++) {
//     }
//     return country.length

     
// })

// console.log(countryLengths)


var arr = countryArr.sort(function(a,b) {
return a.length - b.length
}) 

console.log(arr)

let longestWord = arr.pop();
 console.log(longestWord)

let shortestWord = arr.shift();
 console.log(shortestWord)