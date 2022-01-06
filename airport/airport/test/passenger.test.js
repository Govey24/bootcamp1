const Passenger = require('../passenger')

describe('defines a suite of tests for the Passenger class', function () { 

    test('have a name', function () {
        // given

        const Mandy = new Passenger("Mandy")

        // then
        expect(Mandy.name).toEqual("Mandy");
    });

});