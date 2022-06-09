import { FuelForcast } from "../mocha/fuelforecast.js";
const fuelforecast = FuelForcast()
import { user } from '../data/user.js'

console.log(user)
const enterFuelAmount = document.querySelector('.entered-fuel-amount')
const amountValue = document.querySelector('.input-amount')

const liter = document.querySelector('.liters')
const calculateButton = document.querySelector('.calc')
const save = document.querySelector('.save')
const calcLitres = document.querySelector('.calc-litres')
const calcAmount = document.querySelector('.calc-amount')
const litresAmount = document.querySelector('.litres-amount')

const estimatedListData = document.querySelector('.estimated-litres-data')
const estimatedAmountData = document.querySelector('.estimated-amount-data')

calcLitres.innerHTML = `Estimated Litres: <span class='lit'>${0.00}<span> `
calcAmount.innerHTML = `Estimated Amount: <span class='rand'>R ${0.00}<span> `


estimatedListData.innerHTML = `<div>
                        ${user.name}
                        <div>Weekly Estimated Cost</div>
                        ${user.estimatedLitres.map(lit => lit)}
                </div>`

estimatedAmountData.innerHTML = `<div>
                        <div>Weekly Estimated Amount</div>
                        ${user.estimatedAmount.map(lit => lit)}
                </div>`

const calculateFuel = () => {
    const amount = amountValue.value
    const enteredAmount = enterFuelAmount.value
    const enteredLitres = litresAmount.value

    fuelforecast.setFuelPrice(amount)
    fuelforecast.setPrice(enteredAmount)
    fuelforecast.fuelCosLitres(enteredLitres)



    calcLitres.innerHTML = `Estimated Litres: <span class='lit'>${fuelforecast.fuelCost()
        }<span> litres `
    calcAmount.innerHTML = `Estimated Amount: <span class='rand'> R ${fuelforecast.fuelCosLitres(enteredLitres)
        }<span>`


}

const saveData = () => {
    const enteredLitres = litresAmount.value
    const users = JSON.parse(localStorage.getItem('user'))
    users.estimatedLitres.push(parseFloat(fuelforecast.fuelCost()))
    users.estimatedAmount.push(parseFloat(fuelforecast.fuelCosLitres(enteredLitres)))
    console.log(users)
    localStorage.setItem('user', JSON.stringify(users))
}


calculateButton.addEventListener('click', calculateFuel)

save.addEventListener('click', saveData)