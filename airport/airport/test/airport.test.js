const Airport = require('../airport')

describe('defines a suite of tests for the Airport class', function () { 

    test('Airport has name', function () {
        // given
        const londonHeathrowToJFK = new Airport("londonHeathrow", "jfkAirport");

        // then
        expect(Airport.origin).toEqual("londonHeathrow");
    });

});