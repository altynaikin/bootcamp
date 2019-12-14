// function diapazone(num){
//     let i = 1;
//     let arr = [];
//     while(i!=num){
//         arr.push(i)
//         if(i<num){
//             i++;
//         } else if(i>num){
//             i--;
//         }
//     }
//     arr.push(num)
//     return arr;
// }

// console.log(diapazone(-2))
//////////////////////////////////////////////////////
function diapazone(num){
    let i = 1;
    let arr = [1];
    while(i != num){
        if(i < num){
            arr.push(++i)
        } else if(i >= num){
            arr.push(--i)
        }
    }
    return arr.join();
}

console.log(diapazone(-2))
console.log(diapazone(2))
console.log(diapazone(10))


