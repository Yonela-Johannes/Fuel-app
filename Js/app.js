const dropdownButton = document.querySelector('.dropdown-btn')
const dropdownContent = document.querySelector('.dropdown-content')
const dropdownItem = document.querySelectorAll('.dropdown-item')
// init dropdown selection menu

const petrolButton = document.querySelector('.petrol')
const dieselButton = document.querySelector('.diesel')

const fuelCostContainer = document.querySelector('.amount')
const userAmountContainer = document.querySelector('.user-amount')
const count = document.querySelector('.count')

count.innerHTML = 0


const toggleMenu = () => {
    dropdownContent.classList.toggle('hide')
}
const displayInputContainer = (container, message, inputName, disabled) => (
    container.innerHTML = `<div class='input-container'>
                                <label class='label' name="Amount">${message}</label>           
                                <input class='amount' type="number" name=${inputName} disabled/>
                            </div>`
)
displayInputContainer(fuelCostContainer, 'Enter fuel cost', 'amount')
displayInputContainer(userAmountContainer, 'Enter your amount', 'amount')

const petrol = () => {
    fuelCostContainer.innerHTML = `<div class='input-container'>
                                <label class='label' name="Amount">Enter petrol Price per Liter</label>           
                                <input class='fuel-input' type="number" name="Amount"/>
                            </div>`

    userAmountContainer.innerHTML = `<div class='input-container'>
                                <label class='label' name="Amount">Enter Your amount</label>           
                                <input class='fuel-input' type="number" name="Amount"/>
                            </div>`
    dropdownContent.classList.toggle('hide')
}

const diesel = () => {
    console.log('diesel')
    fuelCostContainer.innerHTML = `<div class='input-container'>
                                <label class='label' name="Amount">Enter diesel Price per Liter</label>           
                                <input class='fuel-input' type="number" name="Amount"/>
                            </div>`
    dropdownContent.classList.toggle('hide')
}


dropdownButton.addEventListener('click', toggleMenu)
petrolButton.addEventListener('click', petrol)
dieselButton.addEventListener('click', diesel)