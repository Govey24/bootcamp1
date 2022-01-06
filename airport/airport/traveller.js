
class Traveller {

bag = [];

//constructor

constructor(bag) {
    this.bag = bag;
}
    //Method to add a bag
    addBag(bag) {
        if (!bag.isOverLimit()) {
            this.bag.push(bag);
            return true;
        } else {
            return false;
        }
        }
}
module.exports = Traveller; //export