export let user =
{
    name: 'Linda',
    image: '../img/linda.png',
    age: 30,
    location: 'Limpopo',
    weeklyData: [{
        'Monday': {
            'litres': 10.23,
            "amount": 100.25,
            'previousWeek': 50.10,
        },
        'Tuesday': {
            'litres': 15.23,
            "amount": 190.25,
            'previousWeek': 50.10,
        },
        'Wednesday': {
            'litres': 5,
            "amount": 50,
            'previousWeek': 100.10,
        },
        'Thursday': {
            'litres': 7,
            "amount": 400,
            'previousWeek': 200.10,
        },
        'Friday': {
            'litres': 1.23,
            "amount": 10.25,
            'previousWeek': 100.50,
        },
        'Saturday': {
            'litres': 3.5,
            "amount": 36.25,
            'previousWeek': 50.50,
        },
        'Sunday': {
            'litres': 10.23,
            "amount": 136.25,
            'previousWeek': 0,
        }
    }],
}

user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : localStorage.setItem('user', JSON.stringify(user))


const week = Object.keys(user.weeklyData[0])
// getting litres

const weeklyLitres = () => Object.values(user.weeklyData[0]).map(elem => elem.litres)
// console.log(weeklyLitres())
const getTotalLitres = () => Object.values(user.weeklyData[0]).map(elem => elem.litres).reduce((total, acc) => total + acc)
// console.log(getTotalLitres())
const previousWeekAmounts = () => Object.values(user.weeklyData[0]).map(elem => elem.previousWeek)
const weeklyAmounts = () => Object.values(user.weeklyData[0]).map(elem => elem.amount)
// console.log(weeklyAmounts())
const getTotalAmount = () => Object.values(user.weeklyData[0]).map(elem => elem.amount).reduce((total, acc) => total + acc)
// console.log(getTotalAmount())



// getting amount


// Monthly Chart
const litersFuel = {
    labels: week,
    datasets: [{
        label: 'last Week',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: weeklyLitres(),
    }]
};

const monthlyConfig = {
    type: 'line',
    data: litersFuel,
    options: {}
};

const myMonthlyChart = new Chart(
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
// const fuelLabels = [
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday',
//     'Sunday',
// ];

// const fuelData = {
//     labels: fuelLabels,
//     datasets: [{
//         label: 'My First dataset',
//         backgroundColor: 'rgb(255, 99, 132)',
//         borderColor: 'rgb(255, 99, 132)',
//         data: [0, 10, 5, 2, 20, 30, 45],
//     }]
// };

// const fuelConfig = {
//     type: 'bar',
//     data: fuelData,
//     options: {}
// };

// const fuelChart = new Chart(
//     document.getElementById('changesInFuelForecast'),
//     config
// );