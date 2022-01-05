const Passenger = require('./passenger')
const CrewMember = require('./crewMember')

class plane {

    type;

    constructor(type) {
        this.type = type;
        this.passenger = [];
    }

    board(Passenger) {
        this.passenger.push('Liam');
    }
}

module.exports = Plane;

const plane = new plane("747")
console.log(plane.type);
console.log(plane.Passenger);