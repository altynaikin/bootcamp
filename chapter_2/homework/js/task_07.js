//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711
//Fn = Fn-1 + Fn-2
function F(n) {
   if(n <= 1 ){
     return n
   }else {
    return F(n - 1) + F(n - 2);
}
}

console.log(F(6))