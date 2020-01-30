$('#btn').on('click', function (e){
    let first = parseInt($('#first').val());
    let second = parseInt($('#second').val());
    let third = parseInt($('#third').val());
    let count = [];
       for(i = first; i <= second; i++){
           let ost = i % third; 
           if(ost === 0){
               count.push(i)
           }
       }
       console.log(count);
})