// let btn = document.querySelector('#btn');

// function clickFunc() {
    //     console.log("click!")
    // }
    
    // function inputFunc() {
        //     console.log(event.target.value);
        // }
        

// btn.addEventListener('click',(event)=>{
//     console.log(event)
// })

// btn.addEventListener('click',(event)=>{
//     console.log("hello")
// })


let btn = document.querySelector('#btn');
let inp = document.querySelector('#inp');
let container = document.querySelector('#tasks')

btn.addEventListener('click', () => {
    let value = inp.value;
    let elem = document.createElement('div');
    elem.innerText = value;

    container.appendChild(elem);
    inp.value = '';
})

btn.addEventListener('click', addElemToContainer);
inp.addEventListener('change', addElemToContainer)