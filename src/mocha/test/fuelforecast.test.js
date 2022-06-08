import { FuelForcast } from '../fuelforecast.js'
const fuelforecast = FuelForcast()
// importing mocha
mocha.setup('bdd');
let assert = chai.assert;
mocha.checkLeaks();
mocha.run();

// I was just setting up mocha
describe("Fuel Forecast Function", () => {

    it('should be able to calculate the how much 10 litres of petrol costs if the petrol price is R15.35 per liter', () => {
   
        fuelforecast.petrolToCost(15.35);
        assert.equal(153.50, fuelforecast.getpetrolToCost(10));
    });

    it('should be able to calculate the how much 5.698 litres of petrol costs if the petrol price is R17.59 per liter', () => {
   
        fuelforecast.petrolToCost(17.59);
        assert.equal(100.23, fuelforecast.getpetrolToCost(5.698));
    });

    it('should be able to calculate the how much 15 litres of diesel costs if the diesel price is R23.89 per liter', () => {
   
        fuelforecast.dieselToCost(23.89);
        assert.equal(358.35, fuelforecast.getdieselToCost(15));
    });

    it('should be able to calculate the how much 10.69 litres of diesel costs if the diesel price is R25.69 per liter', () => {
   
        fuelforecast.dieselToCost(26.69);
        assert.equal(285.32, fuelforecast.getdieselToCost(10.69));
    });

    it('should be able to calculate the how many litres of petrol will get from R500 if petrol price is R17.83 per liter', () => {
   
        fuelforecast.costToPetrol(17.83);
        assert.equal(28.04, fuelforecast.getcostToPetrol(500));
    });
    it('should be able to calculate the how many litres of petrol will get from R1362.89 if petrol price is R22.53 per liter', () => {
   
        fuelforecast.costToPetrol(22.53);
        assert.equal(60.49, fuelforecast.getcostToPetrol(1362.89));
    });

    it('should be able to calculate the how many litres of diesel will get from R1621.89 if diesel price is R27.70 per liter', () => {
   
        fuelforecast.costToDiesel(27.70);
        assert.equal(58.55, fuelforecast.getcostToDiesel(1621.89));
    });
});