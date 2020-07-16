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
        if (this.food <= 0) {
            this.isHealthy = false
        } else {
            this.food -= 1
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
        if (this.passengers.length <= this.capacity) {
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

