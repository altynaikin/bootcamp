/*
    У вас есть 6 функций, каждая функция отвечает за важную часть игры,
    Ваша задача дописать функции по указаниям

            Aргументы начинающиеся с $-это Jquery элементыю
            Имена и аргументы функций не менять!
            Писать только внутри тела определённой функции

*/

function func6($mouse){///// это метод hide()
    /*
        Спрятать мышь
            (добавить класс "active-char")
    */
    $mouse.removeClass("active-char")
}

function func1(mouse, $mouse, Game){
    /*  
        по нажатию на $mouse (элемент мыши), 
        спрятать его (у обьекта mouse вызвать метод .hide() ) ,
        и увеличить счёт игры

            /// Game.score - счёт игры
    */
    $mouse.click(function() {
        mouse.hide();
        Game.score ++
    })
}

function func2(allMouses){
    /* 
        Вернуть рандомный элемент из массива

            /// Math.random() - рандомное число от 0 до 1;
            /// Math.random()*99 - рандомное число от 0 до 99;
            /// Math.floor() - округляет
    */
   return allMouses[Math.floor(Math.random()*allMouses.length)]
}

function func3($scoreBoard, score){
    /*
        вывести счёт на элементе $scoreBoard
    */
   $scoreBoard.html(score)
}

function func4(allMouses){
    /*
        спрятать всех мышей в массиве ( опять метод .hide() )
    */
   allMouses.map(item => {
       item.hide()
   })
}

function func5($mouse){
    /*
        Показать мышь
            (добавить класс "active-char")
    */
   $mouse.addClass("active-char")
}

