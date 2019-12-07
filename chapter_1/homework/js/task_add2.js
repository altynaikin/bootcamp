var arr=[1, 0, 2, 3, 4, 0, 0, 0, 5];
// arr.sort();
// // console.log(arr);
// var newArr = arr.splice(0,4);
// // console.log(newArr)
// var addArr = newArr.push();
// console.log(arr)

var nulls = arr.filter(function(item){
    return item === 0
})
var nums = arr.filter(function(item){
    return item !== 0
})

console.log(nums.concat(nulls))

