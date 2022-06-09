// Monthly Chart

const monthlyLabels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const monthlyData = {
    labels: monthlyLabels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45, 5, 10, 0, 0, 0],
    }]
};

const monthlyConfig = {
    type: 'line',
    data: monthlyData,
    options: {}
};

const myMonthlyChart = new Chart(
    document.getElementById('monthlyFuelChartForecast'),
    monthlyConfig
);

// Weekly Chart
const labels = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
];

const data = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
    }]
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
const fuelLabels = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
];

const fuelData = {
    labels: fuelLabels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
    }]
};

const fuelConfig = {
    type: 'bar',
    data: fuelData,
    options: {}
};

const fuelChart = new Chart(
    document.getElementById('changesInFuelForecast'),
    config
);