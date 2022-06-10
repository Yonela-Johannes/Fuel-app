import { FuelForcast } from "../mocha/fuelforecast.js";
const fuelforecast = FuelForcast()

const date = new Date()
const day = date.getDay()

let user = JSON.parse(localStorage.getItem('user'))
const enterFuelAmount = document.querySelector('.entered-fuel-amount')
const amountValue = document.querySelector('.input-amount')

const fuelPriceElem = document.querySelector('.fuel-price')
const calculateButton = document.querySelector('.calc')
const save = document.querySelector('.save')
const currentFuelPrice = document.querySelector('.current-fuel-price')
const calcLitres = document.querySelector('.calc-litres')
const calcAmount = document.querySelector('.calc-amount')
const litresAmount = document.querySelector('.litres-amount')
const calcChange = document.querySelector('.calc-change')
const storedData = document.querySelector('.stored-data')
const weeklyData = document.querySelector('.weekly-data')

const defaultAmount = 0
console.log(user)
storedData.innerHTML = `
    <div class='name'>Name: ${user.name}</div>
    <div class='age'>age: ${user.age}</div>
    <div class='location'>From: ${user.location}</div>
    <div class='calc-details'>
    ${user.lastWeekTotalAmount.toFixed(2)}
    </div>
    `
weeklyData.innerHTML = `

    <div class='location'>Last Week Total Amount</div>
    <div class='rand'>R ${user.lastWeekTotalAmount.toFixed(2)}</div>
    <div class='location'>Last Week Total litres</div>
    <div class='rand'>${user.lastWeekTotalLitres.toFixed(2)} litres</div>

    `   

currentFuelPrice.innerHTML = `Current price: <span class='lit'>R ${user.fuelPrice[day - 1].toFixed(2)}<span> `
fuelPriceElem.innerHTML = `Entered Amount: <span class='lit'>R ${user.enteredAmount.toFixed(2)}<span> `
calcLitres.innerHTML = `Estimated Litres: <span class='lit'>${defaultAmount.toFixed(1)} litres<span> `
calcAmount.innerHTML = `
    <div class='cost-title'>Cost of litres</div>
 <div class='lit-container'>Amount: <span class='rand'>R ${user.totalLitres}<span></div> `
calcChange.innerHTML = `change: <span class='lit'>R ${user.change.toFixed(2)}<span> `

const calculateFuel = () => {
    const amount = amountValue.value ? amountValue.value : user.fuelPrice[day - 1].toFixed(2)
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
    const amount = amountValue.value
    const enteredAmount = enterFuelAmount.value
    const enteredLitres = litresAmount.value

    fuelforecast.setPrice(enteredAmount)
    const users = JSON.parse(localStorage.getItem('user'))
    users.fuelPrice[day] = fuelforecast.getFuelPrice()
    Object.values(users.weeklyData[0])[day - 1].litres = fuelforecast.fuelCost()

    user.fuelPrice[day - 1] = fuelforecast.getFuelPrice()
    localStorage.setItem('user', JSON.stringify(users))
}


calculateButton.addEventListener('click', calculateFuel)

save.addEventListener('click', saveData)