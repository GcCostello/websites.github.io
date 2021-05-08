var currentDate = new Date()
var day = currentDate.getDate()
var month = ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"];
var year = currentDate.getFullYear()

today = day + " " + month[currentDate.getMonth()] + " " + year;

let kundrec = [{
        "name": "Samuel",
        "betyg": "4",
        "recension": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "date": today
    },

    {
        "name": "Micke",
        "betyg": "3",
        "recension": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.",
        "date": today
    }
]

let pAntalRec = document.querySelector('#antalRec');
var antalRec = kundrec.length;
pAntalRec.innerHTML = antalRec;