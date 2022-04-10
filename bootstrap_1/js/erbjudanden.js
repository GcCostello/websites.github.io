let divCaro = document.getElementById("caro");
let divCarouselInner = document.querySelector(".carousel-inner");

function loadJSON() {
    fetch("https://www.googleapis.com/books/v1/users/109475590769927821044/bookshelves/1003/volumes?q=php&maxResults=40")
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            presentInCarousel(json);
        }).catch(function(error) {
            alert("Error: " + error);
        });
}

function presentInCarousel(jsondata) {
    let books = jsondata.items;
    for (let i = 0; i < books.length; i++) {

        let liIndicators = document.createElement("li");
        liIndicators.setAttribute("data-target", "#caro");
        liIndicators.setAttribute("data-slide-to", i);

        if (i == 0) {
            liIndicators.classList.add("active");
        }

        let divCarouselItem = document.createElement("div");
        divCarouselItem.classList.add("carousel-item");
        if (i == 0) {
            divCarouselItem.classList.add("active");
        }
        let img = document.createElement("img");
        img.src = books[i].volumeInfo.imageLinks.smallThumbnail;
        img.classList.add("mh-100", "mx-auto");
        divCarouselItem.appendChild(img);
        divCarouselInner.appendChild(divCarouselItem);
    }

}