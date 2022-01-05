const Passenger = require('./passenger')
const CrewMember = require('./crewMember')

class Bag {

    // properties
    weight;
    
    /**
     * Constructs a new instance of the Bag class
     * @param {Number} weight 
     */
    constructor(weight) {
        // set the weight that is passed in to be the weight of "this" new instance we are constructing
        this.weight = weight;
    }

    isOverLimit() {
        if(this.weight > 23) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = Bag;

const liamBag = new Bag(24);
console.log(liamBag.isOverLimit());