// Навесьте на событие движения мыши обработчик, который будет
//  в консоль выводить координаты движения. Примечание: выводите
//   их как x и y. Событие надо «повесить» на document

document.addEventListener('DOMContentLoaded', () =>{
    document.addEventListener('mousemove', (e) =>{
        console.log(e.offsetX, e.offsetY)
    })
})