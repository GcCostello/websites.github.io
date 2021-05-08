let urlParams = new URLSearchParams(window.location.search);

let isbn = urlParams.get('isbn');

function loadJSONOnIsbn(isbn) {
    fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            presentMoreInfo(json);
        }).catch(function(error) {
            alert("Error: " + error);
        });

}

function presentMoreInfo(jsondata) {
    //let divrow = document.querySelector(".row");
    let book = jsondata.items[0];

    let prodpic = document.querySelector("#prodbild");
    let img = document.createElement("img");
    img.src = book.volumeInfo.imageLinks.smallThumbnail;
    img.classList.add("mw-100");
    prodpic.insertAdjacentElement("beforeend", img);

    let info = document.querySelector("#maininfo");
    let h1 = document.createElement("h1");
    let h1Text = document.createTextNode(book.volumeInfo.title);
    h1.insertAdjacentText("beforeend", h1Text.textContent);
    info.insertAdjacentElement("afterbegin", h1);

    let h6 = document.createElement("h6");
    let h6Text = document.createTextNode(book.volumeInfo.authors);
    h6.insertAdjacentText("beforeend", h6Text.textContent);
    h1.insertAdjacentElement("beforeend", h6);

    let descrip = document.querySelector("#beskrivning");
    let p = document.createElement("p");
    let pText = document.createTextNode(book.volumeInfo.description);
    p.insertAdjacentText("beforeend", pText.textContent);
    descrip.insertAdjacentElement("beforeend", p);

    let prodInfoIsbn = document.querySelector("#prodinfoisbn");
    let p2 = document.createElement("p");
    let pText2 = document.createTextNode(book.volumeInfo.industryIdentifiers[0].identifier);
    p2.insertAdjacentText("beforeend", pText2.textContent);
    prodInfoIsbn.insertAdjacentElement("afterend", p2);

    let publishDate = document.querySelector("#publishdate");
    let p3 = document.createElement("p");
    let pText3 = document.createTextNode(book.volumeInfo.publishedDate == undefined ? "N/A" : book.volumeInfo.publishedDate);
    p3.insertAdjacentText("beforeend", pText3.textContent);
    publishDate.insertAdjacentElement("afterend", p3);

    let bookLang = document.querySelector("#booklang");
    let p4 = document.createElement("p");
    if (book.volumeInfo.language == "en") {
        pText4 = document.createTextNode("Engelska");
    } else if (book.volumeInfo.language == "sv") {
        pText4 = document.createTextNode("Svenska");
    } else {
        pText4 = document.createTextNode("N/A");
    }
    p4.insertAdjacentText("beforeend", pText4.textContent);
    bookLang.insertAdjacentElement("afterend", p4);

    let publisher = document.querySelector("#publisher");
    let p5 = document.createElement("p");
    let pText5 = document.createTextNode(book.volumeInfo.publisher == undefined ? "N/A" : book.volumeInfo.publisher);
    p5.insertAdjacentText("beforeend", pText5.textContent);
    publisher.insertAdjacentElement("afterend", p5);

    let pagecount = document.querySelector("#pagecount");
    let p6 = document.createElement("p");
    let pText6 = document.createTextNode(book.volumeInfo.pageCount == undefined ? "N/A" : book.volumeInfo.pageCount);
    p6.insertAdjacentText("beforeend", pText6.textContent);
    pagecount.insertAdjacentElement("afterend", p6);

    let getPrice = document.querySelector('#getPrice');
    var price = book.saleInfo.listPrice == undefined ? "N/A" : book.saleInfo.listPrice.amount.toFixed(0) + " kr";
    getPrice.innerHTML = price;
}