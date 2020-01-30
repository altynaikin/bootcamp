const sumOf = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
        console.log(sum);
     }
    return sum;
  
  }
  
  let myArr = [1, 2, 3, 4, 10, 11];
  sumOf (myArr);