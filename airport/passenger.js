const Bag = require('./bags')
const Plane = require('./plane')


class Passenger {
    //Properties
    name; passportNumber; seatNumber; bags;

    constructor(name, passportNumber, seatNumber) {
        this.name = name;
        this.passportNumber = passportNumber;
        this.seatNumber = seatNumber;
        this.bags = [];
    }
    //Method to add a bag
addBag(bag) {
this.bags.push(bag)
}
}

module.exports = Passenger;

const liam = new passenger("Liam", "1234567", "55A");
const liamHandLuggage = new Bag(5);
const liamSuitcase = new Bag(24);
liam.addBag(liamHandLuggage);
liam.addBag(liamSuitcase);
console.log(liam.bags);