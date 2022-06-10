const date = new Date()
const day = date.getDay()

export let user =
{
    name: 'Linda',
    image: '../img/linda.png',
    age: 30,
    location: 'Limpopo',
    enteredAmount: 0,
    totalLitres: 0,
    lastWeekTotalLitres: 0,
    lastWeekTotalAmount: 0,
    change: 0,
    fuel: '',
    fuelPrice: [0, 0, 0, 0, 0, 0, 0],
    weeklyData: [{
        'Monday': {
            'litres': 0,
            'previousWeekLitres': 0,
            "amount": 0,
            'previousWeek': 0,
        },
        'Tuesday': {
            'litres': 0,
            'previousWeekLitres': 0,
            "amount": 0,
            'previousWeek': 0,
        },
        'Wednesday': {
            'litres': 0,
            'previousWeekLitres': 0,
            "amount": 0,
            'previousWeek': 0,
        },
        'Thursday': {
            'litres': 0,
            'previousWeekLitres': 0,
            "amount": 0,
            'previousWeek': 0,
        },
        'Friday': {
            'litres': 1.23,
            'previousWeekLitres': 0,
            "amount": 0,
            'previousWeek': 0,
        },
        'Saturday': {
            'litres': 0,
            'previousWeekLitres': 0,
            "amount": 0,
            'previousWeek': 0,
        },
        'Sunday': {
            'litres': 0,
            'previousWeekLitres': 0,
            "amount": 0,
            'previousWeek': 0,
        }
    }],
}

user.fuelPrice[day - 1] = user.fuelPrice[day - 1] == 0 ? 19.25 : user.fuelPrice[day - 1]


const week = Object.keys(user.weeklyData[0]) ? Object.keys(user.weeklyData[0]) : []
// getting litres
const previousWeekLitres = () => Object.values(user.weeklyData[0]).map(elem => elem.previousWeekLitres)
const weeklyLitres = () => Object.values(user.weeklyData[0]).map(elem => elem.litres)
const getTotalLitres = () => Object.values(user.weeklyData[0]).map(elem => elem.litres).reduce((total, acc) => total + acc)
const previousWeekAmounts = () => Object.values(user.weeklyData[0]).map(elem => elem.previousWeek)
const weeklyAmounts = () => Object.values(user.weeklyData[0]).map(elem => elem.amount)
const getTotalAmount = () => Object.values(user.weeklyData[0]).map(elem => elem.amount).reduce((total, acc) => total + acc)
user.lastWeekTotalLitres = getTotalLitres()
user.lastWeekTotalAmount = getTotalAmount()
user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : localStorage.setItem('user', JSON.stringify(user))

// getting amount


// Monthly Chart
const litresFuel = {
    labels: week,
    datasets: [{
        label: 'last Week',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: previousWeekLitres()
    }, {
        label: 'Current Week',
        backgroundColor: 'green',
        data: weeklyLitres(),
    }

    ]
};

const monthlyConfig = {
    type: 'bar',
    data: litresFuel,
    options: {}
};

const myLitresChart = new Chart(
    document.getElementById('monthlyFuelChartForecast'),
    monthlyConfig
);

const data = {
    labels: week,
    datasets: [{
        label: 'last Week',
        backgroundColor: 'grey',
        borderColor: 'rgb(255, 99, 132)',
        data: previousWeekAmounts(),
    },
    {
        label: 'current Week',
        backgroundColor: 'green',
        borderColor: 'gray',
        data: weeklyAmounts(),

    }

    ]
};

const config = {
    type: 'bar',
    data: data,
    options: {}
};

const myChart = new Chart(
    document.getElementById('fuelChartForecast'),
    config
);

// Changes in Fuel

const fuelData = {
    labels: week,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: user.fuelPrice,
    }]
};

const fuelConfig = {
    type: 'bar',
    data: fuelData,
    options: {}
};

const fuelChart = new Chart(
    document.getElementById('changesInFuelForecast'),
    fuelConfig
);