const Passenger = require('./passenger')
const crewMember = require('./crewMember')

class Bag {

    // properties
    weight;
    
    constructor(weight) {
        // set the weight that is passed 
        //in to be the weight of "this" new instance 
        //we are constructing
        this.weight = weight;
    }

    isOverLimit() {
        if(this.weight > 23) {
            return true;
        } else {
            return false;
        }

        const mandysBag = new Bag(13)

    }
}

const mandysBag = new Bag(13);

module.exports = Bag; //export