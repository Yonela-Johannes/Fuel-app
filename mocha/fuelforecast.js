export const FuelForcast = () => {

var currentPetrolPrice = 0;
var currentDieselPrice = 0;
// this is the calculations from fuel litres to the cost 

//petrol
    function petrolToCost(price){

        currentPetrolPrice = price;
    };
    function getpetrolToCost(litres){

        return (currentPetrolPrice*litres).toFixed(2);
    }

    //diesel
    function dieselToCost(price){

        currentDieselPrice = price;

    }
    function getdieselToCost(litres){
        return (currentDieselPrice*litres).toFixed(2);

    }

    //this is the calculations from fuel cost to litres
    // petrol
    function costToPetrol(price){

        currentPetrolPrice = price;
    }
    function getcostToPetrol(amount){

        return (amount/currentPetrolPrice).toFixed(2);

    }

    //diesel
    function costToDiesel(price){
        currentDieselPrice = price;

    }
    function getcostToDiesel(amount){
        return (amount/currentDieselPrice).toFixed(2);

    }



    return{
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