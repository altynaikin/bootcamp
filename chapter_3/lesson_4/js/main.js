// document.addEventListener('DOMContentLoaded', () => {
//     let elem = document.querySelector('div');
//     let btn = document.querySelector('.default-btn')

    // elem.addEventListener('click', (e) => {
    // alert('Div clicked');
    // console.log(e.target);
    // // console.log(this, 'this');
    // })

    // btn.addEventListener('click', (e) => {
    //     e.stopPropagation()
    // alert('Btn clicked');
    // console.log(e.target);
    // // console.log(this, 'this');
    

//     elem.addEventListener('click', function(e) {
//         if(e.target !== this) return

//         console.log('div clicked')()
//     })

//     btn.addEventListener('click', function(e) {
//         console.log(this)
//     })
// })

$(document).ready(function(){

    // $('.default-btn').on('click', (e) => {
    //     console.log(e);
    // })

    // $(document).on('mousemove', (e) =>{
    //     console.log(e.offsetX, e.offsetY);
    // })

    $('.default-btn').on('click', function(){
        $('.tasks').append('<button class="delete">Delete</button>');
    })  

    // $('.delete').on('click', function(){
    //     console.log('DELETE BUTTON CLICKED')
    // })

    $('.tasks').on('click', '.delete', function(){
        console.log('DELETE BUTTON CLICKED')
    })
    

})