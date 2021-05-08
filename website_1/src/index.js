let myChart = document.getElementById("myChart").getContext("2d");

let filmerChart = new Chart(myChart, {

    type: "line",
    data: {
        labels: ["Avatar", "Avengers: Endgame", "Titanic", "Star Wars: Episode VII", "Avengers: Infinity War"],
        datasets: [{
                label: 'Inkomst',
                data: [2844, 2797, 2201, 2068, 2048],
                backgroundColor: '#85bb65',
                borderColor: '#72ae4d'
            },
            {
                label: "Utgifter",
                data: [237, 356, 200, 245, 321],
                backgroundColor: 'red',
                borderColor: '#b00000'
            }
        ]
    },
    options: {
        borderWidth: 4,
        pointStyle: 'circle',
        radius: 5,
        pointHoverRadius: 20,
        tension: 0.3,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        plugins: {
            legend: {
                display: true,
                position: 'left',
                align: 'start'
            },
            title: {
                display: true,
                text: 'Top 5 filmer efter inkomst',
                font: {
                    size: 24,
                    style: 'bold'
                },
                color: '#141414'
            }
        },
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'Summa',
                    color: '#141414',
                    font: {
                        size: 20
                    }
                },
                ticks: {
                    callback: function(value, index, values) {
                        return value + 'm $';
                    },
                    color: '#85bb65',
                    font: {
                        size: 16,
                        style: 'bold'
                    }
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Filmtitel',
                    color: '#141414',
                    font: {
                        size: 20
                    }
                },
                ticks: {
                    color: '#141414',
                    font: {
                        size: 16,
                        style: 'bold'
                    }
                }
            }

        },
    }
});