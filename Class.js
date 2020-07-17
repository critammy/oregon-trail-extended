class Traveler {
    constructor(name) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }
    hunt() {
        this.food += 2
    }
    eat() {
        if (this.food === 0) {
            this.isHealthy = false
        } else {
            this.food -= 1
        }
    }
}

class Doctor extends Traveler {
    constructor(name, food, isHealthy) {
        super(name, food, isHealthy)
    }
    heal(traveler) {
        return traveler.isHealthy = true
    }

}

class Hunter extends Traveler {
    constructor(name, food = 2, isHealthy) {
        super(name, isHealthy)
        this.food = food
    }
    hunt() {
        return this.food += 5
    }

    eat() {
        if (this.food < 2) {
            this.food = 0
            this.isHealthy = false
        } else {
            this.food -= 2
        }
        return this.food
    }
    giveFood(traveler, numFoodUnits) {
        if (this.food - numFoodUnits > 0) {
            this.food -= numFoodUnits
            traveler.food += numFoodUnits
        } else {
           return 'Not enough food'
        }

    }
}

class Wagon {
    constructor(capacity) {
        this.capacity = capacity
        this.passengers = []
    }
    getAvailableSeatCount() {
        return this.capacity - this.passengers.length

    }
    join(traveler) {
        if (this.passengers.length < this.capacity) {
            this.passengers.push(traveler)
        }

    }
    shouldQuarantine() {
        return this.passengers.some(traveler => traveler.isHealthy === false)

    }

    totalFood() {
        let allFood = 0
        for (let index = 0; index < this.passengers.length; index += 1) {
            let currentPassenger = this.passengers[index]
            allFood += currentPassenger.food
        }
        return allFood
    }
}

console.log(Traveler)
console.log(Wagon)

