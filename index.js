getData();
doChart();

async function doChart() {
    const data = await getData();
    let befolkningChart = document.getElementById('myChart').getContext('2d');
    let befolkningsChart = new Chart(myChart, {
        type: 'line',
        data: {
            labels: data.year,
            datasets: [{
                    label: 'Antal födda män Dalarna',
                    data: data.menF,
                },
                {
                    label: 'Antal födda kvinnor i Dalarna',
                    data: data.womenF,
                },
                {
                    label: 'Antal döda män i Dalarna',
                    data: data.menD,
                },
                {
                    label: 'Antal döda kvinnor i Dalarna',
                    data: data.womenD,
                }
            ]
        },
        options: {
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        color: '#000'
                    }
                },
                title: {
                    display: true,
                    text: 'Avlidna och födda i Dalarna mellan 2005–2019',
                    color: '#000',
                    font: {
                        size: 24,
                    }
                }
            },
            interaction: {
                mode: 'index',
                intersect: false,
            },
            layout: {
                padding: {
                    left: 30,
                    right: 30,
                    top: 20,
                    bottom: 20
                }
            }
        }
    })
};

async function getData() {
    const responsF = await fetch('fodda_komma.csv');
    const responsD = await fetch('doda_komma.csv');

    const dataF = await responsF.text();
    const dataD = await responsD.text();

    const partsF = dataF.split("\n");
    const partsD = dataD.split("\n");

    const reg = /[^a-z0-9+\.]+/gi;
    const parseData = (data) => {
        return parseFloat(data.replace(reg, ""), 10);
    };

    let yearsF = partsF[0].split(",");
    let menF = partsF[1].split(",");
    let womenF = partsF[2].split(",");

    let yearsD = partsD[0].split(",");
    let menD = partsD[1].split(",");
    let womenD = partsD[2].split(",");

    let kf = [];
    let mf = [];
    let yf = [];

    for (let j = 2; j < yearsF.length; j++) {
        mf.push(parseData(menF[j]));
        kf.push(parseData(womenF[j]));
        yf.push(parseData(yearsF[j]));
    }

    let kd = [];
    let md = [];

    for (let j = 2; j < yearsD.length; j++) {
        kd.push(parseData(womenD[j]));
        md.push(parseData(menD[j]));
    }

    return { year: yf, menF: mf, womenF: kf, menD: md, womenD: kd };
};



// let myChart = document.getElementById("myChart").getContext("2d");

// let filmerChart = new Chart(myChart, {

//     type: "line",
//     data: {
//         labels: ["Avatar", "Avengers: Endgame", "Titanic", "Star Wars: Episode VII - The Force Awakens", "Avengers: Infinity War"],
//         datasets: [{
//                 label: 'Inkomst',
//                 data: [2844, 2797, 2201, 2068, 2048],
//                 backgroundColor: 'green',
//                 borderColor: 'lightgreen'
//             },
//             {
//                 label: "Utgifter",
//                 data: [237, 356, 200, 245, 321],
//                 backgroundColor: 'red',
//                 borderColor: 'pink'
//             }
//         ]
//     },
//     options: {
//         interaction: {
//             mode: 'index',
//             intersect: false,
//         },
//         plugins: {
//             title: {
//                 display: true,
//                 text: 'Top 5 filmer efter inkomst'
//             }
//         },
//         scales: {
//             y: {
//                 ticks: {
//                     callback: function(value, index, values) {
//                         return value + 'm $';
//                     },
//                     color: '#800'
//                 },
//             }
//         }
//     }
// });