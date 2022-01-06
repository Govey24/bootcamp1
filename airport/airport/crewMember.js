const Bag = require('./bag')
const Traveller = require('./traveller')

class crewMember extends Traveller {

    name; position; staffNumber;

    constructor(name, position, staffNumber) {
    this.name = name;
    this.position = position;
    this.staffNumber = staffNumber;
    }
}

module.exports = crewMember;