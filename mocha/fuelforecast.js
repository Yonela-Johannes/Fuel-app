export const FuelForcast = () => {
    let fuelPrice = 0
    let price = 0
    var currentPetrolPrice = 0;
    var currentDieselPrice = 0;
    // this is the calculations from fuel litres to the cost 

    //petrol
    const setFuelPrice = (fuel) => {
        fuelPrice = fuel
    }
    const getFuelPrice = () => fuelPrice

    const setPrice = (fuelprice) => {
        price = fuelprice
    }
    const getPrice = () => price

    const fuelCost = () => {
        const total = price / fuelPrice
        return total.toFixed(2)
    }

    const fuelCosLitres = (litres) => {
        const total = fuelPrice * litres
        return total.toFixed(2)
    }
    // calculations
    function petrolToCost(price) {
        currentPetrolPrice = price;
    };
    function getpetrolToCost(litres) {
        return (currentPetrolPrice * litres).toFixed(2);
    }

    //diesel
    function dieselToCost(price) {

        currentDieselPrice = price;

    }
    function getdieselToCost(litres) {
        return (currentDieselPrice * litres).toFixed(2);

    }

    //this is the calculations from fuel cost to litres
    // petrol
    function costToPetrol(price) {

        currentPetrolPrice = price;
    }
    function getcostToPetrol(amount) {

        return (amount / currentPetrolPrice).toFixed(2);

    }

    //diesel
    function costToDiesel(price) {
        currentDieselPrice = price;

    }
    function getcostToDiesel(amount) {
        return (amount / currentDieselPrice).toFixed(2);

    }



    return {
        setFuelPrice,
        getFuelPrice,
        setPrice,
        getPrice,
        fuelCost,
        fuelCosLitres,
        petrolToCost,
        getpetrolToCost,
        dieselToCost,
        getdieselToCost,
        costToPetrol,
        getcostToPetrol,
        costToDiesel,
        getcostToDiesel
    }

}