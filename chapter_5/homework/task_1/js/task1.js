class Worker {
    constructor(name, surname, rate, days, salary) {
        this.name = name
        this.surname = surname
        this.rate = rate
        this.days = days
        this.salary = salary
    }

        get getSalary() {
            return this.rate*this.days
        }

}

const worker = new Worker ('Иван', 'Иванов', 10, 31)


console.log(worker.name)
console.log(worker.surname)
console.log(worker.rate)
console.log(worker.days)
console.log(worker.getSalary)