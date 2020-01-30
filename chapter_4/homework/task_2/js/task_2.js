$('#calculate').on("click", function(e){
    let first = $('#first').val(); 
    let second = $('#second').val();
    alert(first.split(second).length - 1);
})