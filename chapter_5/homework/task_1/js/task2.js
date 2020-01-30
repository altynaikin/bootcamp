class Worker {
    constructor(name, surname, rate, days, salary) {
        this._name = name
        this._surname = surname
        this._rate = rate
        this._days = days
        this._salary = salary
    }

    get getName() {
        return this._name = 'Иван'
    }
    get getSurname() {
        return this._surname = 'Иванов'
    }
    get getRate() {
        return this._rate = 10
    }
    get getDays() {
        return this._days = 31
    }
    get getSalary() {
        return this._rate * this._days
    }
}

const worker = new Worker ('Иван', 'Иванов', 10, 31)

console.log(worker.getName)
console.log(worker.getSurname)
console.log(worker.getRate)
console.log(worker.getDays)
console.log(worker.getSalary)