

export let user =
{
    name: 'Linda',
    image: '../img/linda.png',
    age: 30,
    location: 'Limpopo',
    estimatedLitres: [10.23, 15, 60, 25, 30.48, 70, 80.12],
    estimatedAmount: [100.23, 105.23, 60.25, 205.85, 340.48, 700.50, 100.54],
}

user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : localStorage.setItem('user', JSON.stringify(user))