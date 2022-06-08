import { FuelForcast } from '../fuelforecast.js'
const fuelforecast = FuelForcast()
// importing mocha
mocha.setup('bdd');
let assert = chai.assert;
mocha.checkLeaks();
mocha.run();

// I was just setting up mocha
describe("Fuel Forecast Function", () => {
    it('should get the selected fuel from the user', () => {
        assert.equal('yes', 'yes')
    })
})