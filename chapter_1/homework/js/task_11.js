for (var i = 1; i <= 100; ++i) {
    if(i % 5 === 0 && i % 3 === 0){
        console.log('FIZZ_BUZZ', i)
    } else if (i % 3 === 0 ) {
        console.log('FIZZ', i);
    } else if(i % 5 === 0){
        console.log('BUZZ', i)
    } else{
        console.log(i)
    }
}


