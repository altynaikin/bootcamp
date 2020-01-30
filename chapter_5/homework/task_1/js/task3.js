class Worker {
    constructor(name, surname, rate, days, salary) {
        this.name = name
        this.surname = surname
        this._rate = rate
        this._days = days
        this.salary = salary
    }
    get rate() {
        return this._rate+"$"
    }
    set rate(val) {
        this._rate = val
    }
    get days() {
        return this._days 
    }
    set days(val) {
        this._days = val
    }
    get getSalary() {
        return this._rate * this.days
    }
}

const worker = new Worker ('Иван', 'Иванов', 10, 31)


worker.rate = 10
console.log(worker.rate) 


worker.days = 20
console.log(worker.days)
console.log(worker.getSalary)