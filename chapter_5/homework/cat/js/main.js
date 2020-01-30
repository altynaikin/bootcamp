// p1p1sasa, [03.01.20 11:25]
// Создать класс Cat который принимает имя породу, и цвет 
// у каждого экземпляра должны быть свойства голода, 
// счастья и здоровья и усталости которые зависят друг от друга
// и методы Играть, Кормить, Лечить, Спать
// которые всячески влияют на свойства голода, здоровья и.т.д
// К примеру Играть увеличивает счастье но уменьшает усталость и голод

$(document).ready(function() {


class Cat {
    constructor(name, breed, color) {
        this.name = name,
        this.breed = breed,
        this.color = color;
    
    }
        
    happiness = 100;
    hungry = 100;
    tiredness = 0;
    
    play() {
        this.happiness += 10,
        this.hungry -= 10,
        this.tiredness -= 10
    }

    feed() {
        this.happiness += 20,
        this.hungry += 20,
        this.tiredness += 20
    }

    treat() {
        this.happiness += 20,
        this.tiredness += 20
    }

    sleep()  {
        this.happiness +=20,
        this.tiredness += 20,
        this.hungry -= 20
    }
    health = function() {
        return (this.hungry + this.happiness + this.tiredness)/2;
        
    }
}
    let kitten = new Cat ("Benjamin", "Scottish Fold", "grey");

    let play = $("#play");
    let feed = $("#feed");
    let treat = $("#treat");
    let sleep = $("#sleep")

    function render() {
        $(".health").css("width", kitten.health + "%")
        $(".hungry").css("width", kitten.hungry + "%")
        $(".happiness").css("width", kitten.happiness + "%")    
        $(".tiredness").css("width", kitten.tiredness + "%")        
    }

    play.on('click', () => {
        kitten.play()
        render()
    })

    feed.on('click', () => {
        kitten.feed()
        render()
    })

    treat.on('click', () => {
        kitten.treat()
        render()
    })

    sleep.on('click', () => {
        kitten.sleep()
        render()
    })



});



