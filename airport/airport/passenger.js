const Plane = require('./plane')
const Traveller = require('./traveller')

class Passenger {

    //Properties
    name;
    passportNumber; 
    seatNumber; 
    bags = [];

    constructor(name, passportNumber, seatNumber, bags) {
        this.name = name;
        this.passportNumber = passportNumber;
        this.seatNumber = seatNumber;
        this.bags = bags;

    }
    //method to add bag
    addBag(bag) {
        this.bags.push(bag)
    }
}

const Mandy = new Passenger("Mandy", "1234567890", "55A");

module.exports = Passenger;