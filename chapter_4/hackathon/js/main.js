document.addEventListener('DOMContentLoaded', () => {


    let modal = document.getElementById("myModal");
    let btn = document.getElementById("btn");
    let modalBck = document.querySelector(".modal");
    let modalCloseBtn = document.querySelector(".close")
    let hoursInput = $('#hours');
    let minutesInput = $('#minutes');



    btn.onclick = function () {
        modal.style.display = "block";
    }

    modalCloseBtn.addEventListener("click", function () {
        modal.style.display = "none";
    })


    modalBck.addEventListener("click", function(event) {
        modal.style.display = "none"
    })


function timeToSleep() {

    let hour = +hoursInput.val();
    let min = +minutesInput.val();
    let time = hour * 60 + min;
    toTime = (i) => {
        let newTime = time-(i*1.5*60);
        if(newTime<0){
            newTime= (24*60)+newTime
        }
        let min = newTime%60;
        let hour = (newTime-min)/60;
        return `${hour} : ${min}`
    }
    let timesToSleep = [];
    for(let i = 6; i > 0; i--){
        timesToSleep.push(toTime(i))
    }
    return timesToSleep
}
console.log(timeToSleep())


})
