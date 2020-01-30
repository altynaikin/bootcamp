// function createObj(name, age) {
//     // return {
//     //     name: name,
//     //     age: age
//     // }



//     return{ name , age }
// }


// console.log(createObj("emir", 16));


// function ConstructorObj(name, age) {
//     this.age = age;
//     this.name = name;
// }
// ConstructorObj.prototype.sayHi = function() {
//     console.log(`Hi, im ${this.name}`);
// }

// let emir = new ConstructorObj("emir", 16);
// let fais = new ConstructorObj("Fais", 20);

// console.log( emir );



// class Animal {
//     constructor(name, color, voice) {
//         this.name = name, 
//         this.color = color;
//         this.voice = voice
//     }
//     isLive = true;
//     eat() {
//         console.log(this.name + ": ням ням")
//     }
//     say() {
//         console.log(this.word)
//     }
// }

// class Cat extends Animal {
//     constructor(name, color, voice) {
//         super(name, color, voice)
//     }
//     sleep() {
//         console.log("муррррррр-муррррррр")
//     }
// }

// let koshka = new Cat ("Koshka", "belyi", "Myau!")

class Person {
    constructor(name, lastName, age) {
        this.name = name
        this.lastName = lastName
        this.age = age
    }
    sayName() {
        console.log('Hello, my name is ' + this.name)
    }
    sayLastName() {
        console.log('Hello, my lastname is ' + this.lastName)
    }
    sayAge() {
        console.log("Hello, my age is " + this.age)
    }
    getInfo() {
        console.log(this.name, this.lastName, this.age)
    }
}

const nick = new Person('Nick', 'Lotovsky', 45);
// const emir = new Person('Emir', 'Taalaibekov', 16);
const aibek = new Person('Aibek', 'Sapashov', 28);

// nick.sayName()
// emir.sayName()
// aibek.sayName()

class Worker extends Person {
    constructor(workerName, workerLastNAme, workerAge, position, salary) {
        super(workerName, workerLastNAme, workerAge)
        this.position = position
        this._salary = salary
    }
    work() {
        console.log('Я выполняю работу: ' + this.position)
        // console.log(this)
    }
    get salary() {
        return this._salary-500
    }
    set salary(val) {
        this._salary = val-200
        console.log(val)
    }
}

const dastan = new Worker('Dastan', 'Alymbekov', 22,'Ментор', 2500);
const emir = new Worker('Emir', 'Taalaibekov', 16, 'Mentor', 2000)

console.log(dastan.salary)
console.log(emir.salary)

// dastan.work()
// dastan.getInfo()
// dastan.sayName()
// dastan.sayLastName()
// console.log(dastan.age)

// emir.work()
// emir.getInfo()
// emir.sayName()
// emir.sayLastName()
// console.log(emir.age)


 