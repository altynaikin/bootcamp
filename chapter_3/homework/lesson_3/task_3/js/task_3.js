// Создайте обработчик события на нажатие кнопок направлений
//  (влево, вправо) так, чтобы HTML-элемент при однократном
//   нажатии на кнопку анимированно сдвигался влево или вправо
//    на 100px

let square = document.getElementById('square');

let sqLeft = 0;
let sqTop = 0;

document.onkeydown = function(event) {
    if(event.key == "ArrowUp" || event.key == "w") {
        sqTop-=100;
        square.style.top = sqTop+"px"
    } else if(event.key == "ArrowDown" || event.key == "s") {
        sqTop+=100;
        square.style.top = sqTop+"px"
    } else if(event.key == "ArrowLeft" || event.key == "a") {
        sqLeft-=100;
        square.style.left = sqLeft+"px"
    } else if(event.key == "ArrowRight" || event.key == "d") {
        sqLeft+=100;
        square.style.left = sqLeft+"px"
    }
}


 