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
        if (this.food = 0) {
            this.isHealthy = false
        } else {
            this.food -= 1
        }
    }
}

class Doctor extends Traveler {
    constructor(name, food, heal) {
        super(name, food)
        this.heal = heal
    }
    heal(traveler) {
        return traveler.isHealthy = true
    }


}

class Hunter extends Traveler {
    constructor(name, food, giveFood) {
        super(name, food)
        this.giveFood = 2
    }
    hunt() {
        this.food += 5
    }

    eat() {
        if (this.food <= 1) {
            this.Healthy = false
        } else {
            this.eat -= 2
        }
    }
    giveFood(traveler, numFoodUnits) {
        if (numFoodUnits >= this.food) {
            this.food -= numFoodUnits
            Traveler.food += numFoodUnits
        }

    }
}

class Wagon {
    constructor(capacity) {
        this.capacity = 4
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

