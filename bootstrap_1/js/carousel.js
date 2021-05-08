let carousel =[
    {"pic": "images/carousel_1.jpg"},
    {"pic": "images/carousel_2.jpg"},
    {"pic": "images/carousel_3.jpg"}
];

let divCaro = document.getElementById("main");
let ulIndicators = document.querySelector(".carousel-indicators");
let divCarouselInner = document.querySelector(".carousel-inner");

for (let i = 0; i < carousel.length; i++) {

    let liIndicators = document.createElement("li");
    liIndicators.setAttribute("data-target", "#main");
    liIndicators.setAttribute("data-slide-to", i);

    if (i == 0) {
        liIndicators.classList.add("active");
    }
    ulIndicators.appendChild(liIndicators);

    let divCarouselItem = document.createElement("div");
    divCarouselItem.classList.add("carousel-item");

    if (i == 0) {
        divCarouselItem.classList.add("active");
    }
    let img = document.createElement("img");
    img.src = carousel[i].pic;
    img.classList.add("d-block", "mw-100", "mx-auto");
    divCarouselItem.appendChild(img);
    divCarouselInner.appendChild(divCarouselItem);
}