const crewMember = require('./crewMember')

class Plane {

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