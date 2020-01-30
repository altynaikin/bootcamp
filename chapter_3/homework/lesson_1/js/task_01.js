// Выберите при помощи селекторов DOM
// — все HTML-элементы strong и окрасьте их в зеленый цвет
// — найдите все HTML-элементы em и добавьте им класс .selected
// — Найдите все элементы mark, которые находятся в div с классом row и задайте им класс .selected
// — Найдите все гиперссылки и удалите у них подчеркивания
// — Найдите все HTML-элементы, который содержат слово «Задания» и находятся в элементе с классом .container
// — Переключите элементы strong с классом some в состояние без этого класса, а тем элементам (strong), у которых небыло этого класса — добавьте.
// — среди набора элементов с классом .row удалите класс у второго элемента
// — прочитайте CSS-свойство color у второй гиперсылки в тексте


document.querySelectorAll('strong').forEach(item => {
    item.style.color = 'green'
});

document.querySelectorAll('em').forEach(item => {
    item.classList.add("selected")
});

document.querySelectorAll('.row mark').forEach(item => {
    item.classList.add("selected")
});

document.querySelectorAll('a').forEach(item => {
    item.style.textDecoration = "none";
});


document.querySelectorAll('strong').forEach(item => {
    item.classList.toggle("some")
})


document.querySelectorAll("strong").forEach(item =>{
    if(item.classList.length === 0) {
    } else {
        item.classList.remove("some")
    }
});

// console.log(document);

let elems = document.getElementsByClassName('row');
elems[1].classList.remove('row');

// console.log(document.getElementsByTagName('a')[1]);

let elem = document.getElementsByTagName('a');
console.log(getComputedStyle(elem[1]).color);









