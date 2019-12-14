let elevator = {
    floor: 1,
    minFloor:1,
    maxFloor:16,

    printFloor() {
        console.log('Лифт на ' + this.floor + ' этаже')
    },

    upOneFloor() {
        if(this.floor < this.maxFloor) {
            this.floor++
            console.log("⇑⇑⇑⇑⇑⇑⇑⇑⇑")
            this.printFloor()
        } else {
            console.log('error')
            return 
        }
    },

    downOneFloor() {
        if(this.floor > this.minFloor) {
            this.floor--
            console.log("⇓⇓⇓⇓⇓⇓⇓⇓⇓")
            this.printFloor() 
        }else {
            console.log('error')
            return 
        }
    },


    toFloor(goToFloor) {
        while(goToFloor != this.floor){
            if(goToFloor<this.floor && goToFloor > this.minFloor){
                this.downOneFloor()
            } else if(goToFloor>this.floor && goToFloor < this.maxFloor){
                this.upOneFloor() 
            } else{
                console.log("ERR::404 --Этаж--" + goToFloor + "--нe--найден--")
                return;
            }
        }
    }
}


// elevator.toFloor(16);
elevator.toFloor(15);
// elevator.downOneFloor()
// elevator.downOneFloor()
// elevator.downOneFloor()
// elevator.downOneFloor()
// elevator.downOneFloor()
// elevator.downOneFloor()
elevator.upOneFloor()
elevator.upOneFloor()
elevator.upOneFloor()
elevator.downOneFloor()
elevator.downOneFloor()
elevator.downOneFloor()
elevator.toFloor(5)


