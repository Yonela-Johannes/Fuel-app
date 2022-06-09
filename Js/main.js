import { FuelForcast } from "../mocha/fuelforecast.js";
const fuelforecast = FuelForcast()

const date = new Date()
const day = date.getDay()

let user = JSON.parse(localStorage.getItem('user'))
console.log(day)
console.log(user)
const enterFuelAmount = document.querySelector('.entered-fuel-amount')
const amountValue = document.querySelector('.input-amount')

const fuelPriceElem = document.querySelector('.fuel-price')
const calculateButton = document.querySelector('.calc')
const save = document.querySelector('.save')
const calcLitres = document.querySelector('.calc-litres')
const calcAmount = document.querySelector('.calc-amount')
const litresAmount = document.querySelector('.litres-amount')
const calcChange = document.querySelector('.calc-change')

const defaultAmount = 0
fuelPriceElem.innerHTML = `Entered Amount: <span class='lit'>R ${defaultAmount.toFixed(2)}<span> `
calcLitres.innerHTML = `Estimated Litres: <span class='lit'>${defaultAmount} litres<span> `
calcAmount.innerHTML = `
    <div class='cost-title'>Cost of litres</div>
 <div class='lit-container'>Amount: <span class='rand'>R ${defaultAmount.toFixed(2)}<span></div> `
calcChange.innerHTML = `change: <span class='lit'>R ${defaultAmount.toFixed(2)}<span> `

const calculateFuel = () => {
    const amount = amountValue.value
    const enteredAmount = enterFuelAmount.value
    const enteredLitres = litresAmount.value

    fuelforecast.setFuelPrice(amount)
    fuelforecast.setPrice(enteredAmount)
    fuelforecast.fuelCosLitres(enteredLitres)


    fuelPriceElem.innerHTML = `Entered Amount: <span class='lit'>R ${fuelforecast.getPrice()}<span> `
    calcLitres.innerHTML = `Estimated Litres: <span class='lit'>${fuelforecast.fuelCost()
        }<span> litres`
    calcAmount.innerHTML = `
        <div class='cost-title'>Cost of ${enteredLitres} litres</div>
    <div class='lit-container'>Amount: <span class='rand'> R ${fuelforecast.fuelCosLitres(enteredLitres)
        }<span></div>`
    calcChange.innerHTML = `change: <span class='lit'>R ${fuelforecast.change(fuelforecast.fuelCosLitres(enteredLitres))}<span> `

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