function loadJSON() {
    fetch("https://www.googleapis.com/books/v1/users/109475590769927821044/bookshelves/1004/volumes?q=php&maxResults=6")
        .then(function(response) {
            return response.json();
        }).then(function(response) {
            presentBooksAsCards(response);
        }).catch(function(error) {
            alert("Error: " + error);
        });
    fetch("https://www.googleapis.com/books/v1/users/109475590769927821044/bookshelves/1004/volumes?q=php&maxResults=6&startIndex=6")
        .then(function(response) {
            return response.json();
        }).then(function(response) {
            presentBooksAsCards2(response);
        }).catch(function(error) {
            alert("Error: " + error);
        });
    fetch("https://www.googleapis.com/books/v1/users/109475590769927821044/bookshelves/1003/volumes?q=php&maxResults=6")
        .then(function(response) {
            return response.json();
        }).then(function(response) {
            presentBooksAsCards3(response);
        }).catch(function(error) {
            alert("Error: " + error);
        });
}

function presentBooksAsCards(jsondata) {
    row = document.querySelector("#lista1");
    row.innerHTML = '';

    jsondata.items.forEach(function(bookItem) {
        let divCol = document.createElement("div");
        divCol.classList.add("col-lg-2");
        divCol.classList.add("col-md-3");
        divCol.classList.add("col-4", "mb-2");
        let divCard = document.createElement("div");
        divCard.classList.add("card");
        divCard.classList.add("h-100", "border-0");

        let img = document.createElement("img");
        img.classList.add("card-img-top");
        img.setAttribute("src", bookItem.volumeInfo.imageLinks.smallThumbnail);
        divCard.insertAdjacentElement("beforeend", img);

        let divCardBody = document.createElement("div");
        divCardBody.classList.add("card-body");
        divCardBody.classList.add("d-flex");
        divCardBody.classList.add("flex-column", "p-1");

        let h6 = document.createElement("h6");
        h6.classList.add("card-title", "my-1");
        let textH6 = document.createTextNode(bookItem.volumeInfo.title);
        h6.insertAdjacentText("beforeend", textH6.textContent);
        divCardBody.insertAdjacentElement("beforeend", h6);

        let p = document.createElement("p");
        p.classList.add("card-text", "mb-2");
        let pText = document.createTextNode(bookItem.volumeInfo.authors);
        p.insertAdjacentText("beforeend", pText.textContent);
        divCardBody.insertAdjacentElement("beforeend", p);

        let h5 = document.createElement("h5");
        h5.classList.add("text-danger", "mt-auto");
        let h5Text = document.createTextNode(bookItem.saleInfo.listPrice == undefined ? "N/A" : bookItem.saleInfo.listPrice.amount.toFixed(0) + " kr");
        h5.insertAdjacentText("beforeend", h5Text.textContent);
        divCardBody.insertAdjacentElement("beforeend", h5);

        let a = document.createElement("a");
        a.classList.add("btn", "btn-outline-info", "btn-sm", "btn-block", "stretched-link");
        let aText = document.createTextNode("Köp");
        a.insertAdjacentText("beforeend", aText.textContent);
        let aIcon = document.createElement("i");
        aIcon.classList.add("fas", "fa-shopping-cart", "ml-1");
        a.insertAdjacentElement("beforeend", aIcon);
        a.addEventListener("click", function() {
            window.location.href = "moreinfo.html?isbn=" + bookItem.volumeInfo.industryIdentifiers[0].identifier;
        });
        divCardBody.insertAdjacentElement("beforeend", a);

        divCard.insertAdjacentElement("beforeend", divCardBody);

        divCol.insertAdjacentElement("beforeend", divCard);

        row.insertAdjacentElement("beforeend", divCol);
    });
}

function presentBooksAsCards2(jsondata) {
    row = document.querySelector("#topplista");
    row.innerHTML = '';

    jsondata.items.forEach(function(bookItem) {
        let divCol = document.createElement("div");
        divCol.classList.add("col-lg-2");
        divCol.classList.add("col-md-3");
        divCol.classList.add("col-4", "mb-2");
        let divCard = document.createElement("div");
        divCard.classList.add("card");
        divCard.classList.add("h-100", "border-0");

        let img = document.createElement("img");
        img.classList.add("card-img-top");
        img.setAttribute("src", bookItem.volumeInfo.imageLinks.smallThumbnail);
        divCard.insertAdjacentElement("beforeend", img);

        let divCardBody = document.createElement("div");
        divCardBody.classList.add("card-body");
        divCardBody.classList.add("d-flex");
        divCardBody.classList.add("flex-column", "p-1");

        let h6 = document.createElement("h6");
        h6.classList.add("card-title", "my-1");
        let textH6 = document.createTextNode(bookItem.volumeInfo.title);
        h6.insertAdjacentText("beforeend", textH6.textContent);
        divCardBody.insertAdjacentElement("beforeend", h6);

        let p = document.createElement("p");
        p.classList.add("card-text", "mb-2");
        let pText = document.createTextNode(bookItem.volumeInfo.authors);
        p.insertAdjacentText("beforeend", pText.textContent);
        divCardBody.insertAdjacentElement("beforeend", p);

        let h5 = document.createElement("h5");
        h5.classList.add("text-danger", "mt-auto");
        let h5Text = document.createTextNode(bookItem.saleInfo.listPrice == undefined ? "N/A" : bookItem.saleInfo.listPrice.amount.toFixed(0) + " kr");
        h5.insertAdjacentText("beforeend", h5Text.textContent);
        divCardBody.insertAdjacentElement("beforeend", h5);

        let a = document.createElement("a");
        a.classList.add("btn", "btn-outline-info", "btn-sm", "btn-block", "stretched-link");
        let aText = document.createTextNode("Köp");
        a.insertAdjacentText("beforeend", aText.textContent);
        let aIcon = document.createElement("i");
        aIcon.classList.add("fas", "fa-shopping-cart", "ml-1");
        a.insertAdjacentElement("beforeend", aIcon);
        a.addEventListener("click", function() {
            window.location.href = "moreinfo.html?isbn=" + bookItem.volumeInfo.industryIdentifiers[0].identifier;
        });
        divCardBody.insertAdjacentElement("beforeend", a);

        divCard.insertAdjacentElement("beforeend", divCardBody);

        divCol.insertAdjacentElement("beforeend", divCard);

        row.insertAdjacentElement("beforeend", divCol);
    });
}

function presentBooksAsCards3(jsondata) {
    row = document.querySelector("#lista2");
    row.innerHTML = '';

    jsondata.items.forEach(function(bookItem) {
        let divCol = document.createElement("div");
        divCol.classList.add("col-lg-2");
        divCol.classList.add("col-md-3");
        divCol.classList.add("col-4", "mb-2");
        let divCard = document.createElement("div");
        divCard.classList.add("card");
        divCard.classList.add("h-100", "border-0");

        let img = document.createElement("img");
        img.classList.add("card-img-top");
        img.setAttribute("src", bookItem.volumeInfo.imageLinks.smallThumbnail);
        divCard.insertAdjacentElement("beforeend", img);

        let divCardBody = document.createElement("div");
        divCardBody.classList.add("card-body");
        divCardBody.classList.add("d-flex");
        divCardBody.classList.add("flex-column", "p-1");

        let h6 = document.createElement("h6");
        h6.classList.add("card-title", "my-1");
        let textH6 = document.createTextNode(bookItem.volumeInfo.title);
        h6.insertAdjacentText("beforeend", textH6.textContent);
        divCardBody.insertAdjacentElement("beforeend", h6);

        let p = document.createElement("p");
        p.classList.add("card-text", "mb-2");
        let pText = document.createTextNode(bookItem.volumeInfo.authors);
        p.insertAdjacentText("beforeend", pText.textContent);
        divCardBody.insertAdjacentElement("beforeend", p);

        let h5 = document.createElement("h5");
        h5.classList.add("text-danger", "mt-auto");
        let h5Text = document.createTextNode(bookItem.saleInfo.listPrice == undefined ? "N/A" : bookItem.saleInfo.listPrice.amount.toFixed(0) + " kr");
        h5.insertAdjacentText("beforeend", h5Text.textContent);
        divCardBody.insertAdjacentElement("beforeend", h5);

        let a = document.createElement("a");
        a.classList.add("btn", "btn-outline-info", "btn-sm", "btn-block", "stretched-link");
        let aText = document.createTextNode("Köp");
        a.insertAdjacentText("beforeend", aText.textContent);
        let aIcon = document.createElement("i");
        aIcon.classList.add("fas", "fa-shopping-cart", "ml-1");
        a.insertAdjacentElement("beforeend", aIcon);
        a.addEventListener("click", function() {
            window.location.href = "moreinfo.html?isbn=" + bookItem.volumeInfo.industryIdentifiers[0].identifier;
        });
        divCardBody.insertAdjacentElement("beforeend", a);

        divCard.insertAdjacentElement("beforeend", divCardBody);

        divCol.insertAdjacentElement("beforeend", divCard);

        row.insertAdjacentElement("beforeend", divCol);
    });
}






/*let divcontainer = document.querySelector("#lista1");
for (let i = 0; i < bookscussler.length; i++) {
    let divCol = document.createElement("div");
    divCol.classList.add("col-lg-2");
    divCol.classList.add("col-md-3");
    divCol.classList.add("col-4", "mb-2");
    let divCard = document.createElement("div");
    divCard.classList.add("card");
    divCard.classList.add("h-100", "border-0");

    let img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = bookscussler[i].picture;
    divCard.insertAdjacentElement("beforeend", img);

    let divCardBody = document.createElement("div");
    divCardBody.classList.add("card-body");
    divCardBody.classList.add("d-flex");
    divCardBody.classList.add("flex-column", "p-1");

    let h6 = document.createElement("h6");
    h6.classList.add("card-title", "my-1");
    let textH6 = document.createTextNode(bookscussler[i].title);
    h6.insertAdjacentText("beforeend", textH6.textContent);
    divCardBody.insertAdjacentElement("beforeend", h6);

    let p = document.createElement("p");
    p.classList.add("card-text", "mb-2");
    pText = document.createTextNode(bookscussler[i].author);
    p.insertAdjacentText("beforeend", pText.textContent);
    divCardBody.insertAdjacentElement("beforeend", p);

    let h5 = document.createElement("h5");
    h5.classList.add("text-danger", "mt-auto");
    let h5Text = document.createTextNode(bookscussler[i].price + " kr");
    h5.insertAdjacentText("beforeend", h5Text.textContent);
    divCardBody.insertAdjacentElement("beforeend", h5);

    let a = document.createElement("a");
    a.classList.add("btn", "btn-outline-info", "btn-sm", "btn-block", "stretched-link"); //mt_auto to push button to bottom of card
    let aText = document.createTextNode("Köp");
    a.insertAdjacentText("beforeend", aText.textContent);
    let aIcon = document.createElement("i");
    aIcon.classList.add("fas", "fa-shopping-cart", "ml-1");
    a.insertAdjacentElement("beforeend", aIcon);
    a.addEventListener("click", function() {
        window.location.href = "merinfo.html?title=" + bookscussler[i].title;
    });

    divCardBody.insertAdjacentElement("beforeend", a);

    divCard.insertAdjacentElement("beforeend", divCardBody);

    divCol.insertAdjacentElement("beforeend", divCard);

    divcontainer.insertAdjacentElement("beforeend", divCol);

}

let divcontainer2 = document.querySelector('#topplista');
for (let i = 0; i < bookstopp.length; i++) {
    let divCol = document.createElement("div");
    divCol.classList.add("col-lg-2");
    divCol.classList.add("col-md-3");
    divCol.classList.add("col-4", "mb-2");
    let divCard = document.createElement("div");
    divCard.classList.add("card");
    divCard.classList.add("h-100", "border-0");

    let img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = bookstopp[i].picture;
    divCard.insertAdjacentElement("beforeend", img);

    let divCardBody = document.createElement("div");
    divCardBody.classList.add("card-body");
    divCardBody.classList.add("d-flex");
    divCardBody.classList.add("flex-column", "p-1");

    let h6 = document.createElement("h6");
    h6.classList.add("card-title", "my-1");
    let textH6 = document.createTextNode(bookstopp[i].title);
    h6.insertAdjacentText("beforeend", textH6.textContent);
    divCardBody.insertAdjacentElement("beforeend", h6);

    let p = document.createElement("p");
    p.classList.add("card-text", "mb-2");
    pText = document.createTextNode(bookstopp[i].author);
    p.insertAdjacentText("beforeend", pText.textContent);
    divCardBody.insertAdjacentElement("beforeend", p);

    let h5 = document.createElement("h5");
    h5.classList.add("text-danger", "mt-auto");
    let h5Text = document.createTextNode(bookstopp[i].price + " kr");
    h5.insertAdjacentText("beforeend", h5Text.textContent);
    divCardBody.insertAdjacentElement("beforeend", h5);

    let a = document.createElement("a");
    a.classList.add("btn", "btn-outline-info", "btn-sm", "btn-block", "stretched-link"); //mt_auto to push button to bottom of card
    let aText = document.createTextNode("Köp");
    a.insertAdjacentText("beforeend", aText.textContent);
    let aIcon = document.createElement("i");
    aIcon.classList.add("fas", "fa-shopping-cart", "ml-1");
    a.insertAdjacentElement("beforeend", aIcon);
    a.addEventListener("click", function() {
        window.location.href = "merinfo.html?title=" + bookstopp[i].title;
    });

    divCardBody.insertAdjacentElement("beforeend", a);

    divCard.insertAdjacentElement("beforeend", divCardBody);

    divCol.insertAdjacentElement("beforeend", divCard);

    divcontainer2.insertAdjacentElement("beforeend", divCol);

}

let divcontainer3 = document.querySelector('#lista2');
for (let i = 0; i < bookslista2.length; i++) {
    let divCol = document.createElement("div");
    divCol.classList.add("col-lg-2");
    divCol.classList.add("col-md-3");
    divCol.classList.add("col-4", "mb-2");
    let divCard = document.createElement("div");
    divCard.classList.add("card");
    divCard.classList.add("h-100", "border-0");

    let img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = bookslista2[i].picture;
    divCard.insertAdjacentElement("beforeend", img);

    let divCardBody = document.createElement("div");
    divCardBody.classList.add("card-body");
    divCardBody.classList.add("d-flex");
    divCardBody.classList.add("flex-column", "p-1");

    let h6 = document.createElement("h6");
    h6.classList.add("card-title", "my-1");
    let textH6 = document.createTextNode(bookslista2[i].title);
    h6.insertAdjacentText("beforeend", textH6.textContent);
    divCardBody.insertAdjacentElement("beforeend", h6);

    let p = document.createElement("p");
    p.classList.add("card-text", "mb-2");
    pText = document.createTextNode(bookslista2[i].author);
    p.insertAdjacentText("beforeend", pText.textContent);
    divCardBody.insertAdjacentElement("beforeend", p);

    let h5 = document.createElement("h5");
    h5.classList.add("text-danger", "mt-auto");
    let h5Text = document.createTextNode(bookslista2[i].price + " kr");
    h5.insertAdjacentText("beforeend", h5Text.textContent);
    divCardBody.insertAdjacentElement("beforeend", h5);

    let a = document.createElement("a");
    a.classList.add("btn", "btn-outline-info", "btn-sm", "btn-block", "stretched-link"); //mt_auto to push button to bottom of card
    let aText = document.createTextNode("Köp");
    a.insertAdjacentText("beforeend", aText.textContent);
    let aIcon = document.createElement("i");
    aIcon.classList.add("fas", "fa-shopping-cart", "ml-1");
    a.insertAdjacentElement("beforeend", aIcon);
    a.addEventListener("click", function() {
        window.location.href = "merinfo.html?title=" + bookslista2[i].title;
    });

    divCardBody.insertAdjacentElement("beforeend", a);

    divCard.insertAdjacentElement("beforeend", divCardBody);

    divCol.insertAdjacentElement("beforeend", divCard);

    divcontainer3.insertAdjacentElement("beforeend", divCol);

}*/