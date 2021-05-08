let divcontainer = document.querySelector("#recension");

for (let i = 0; i < kundrec.length; i++) {

    let divMediaObject = document.createElement("div");
    divMediaObject.classList.add("media", "border", "border-info", "p-3", "my-1");

    let divMediaBody = document.createElement("div");
    divMediaBody.classList.add("media-body");

    let h6 = document.createElement("h6");
    h6.innerHTML = kundrec[i].name + ", <small><i>" + kundrec[i].date + "</i></small>";
    divMediaBody.insertAdjacentElement("beforeend", h6);

    if (kundrec[i].betyg == 4) {
        let icon1 = document.createElement("i");
        icon1.classList.add("fas", "fa-star", "text-warning");
        divMediaBody.insertAdjacentElement("beforeend", icon1);
        let icon2 = document.createElement("i");
        icon2.classList.add("fas", "fa-star", "text-warning");
        divMediaBody.insertAdjacentElement("beforeend", icon2);
        let icon3 = document.createElement("i");
        icon3.classList.add("fas", "fa-star", "text-warning");
        divMediaBody.insertAdjacentElement("beforeend", icon3);
        let icon4 = document.createElement("i");
        icon4.classList.add("fas", "fa-star", "text-warning");
        divMediaBody.insertAdjacentElement("beforeend", icon4);
        let icon5 = document.createElement("i");
        icon5.classList.add("far", "fa-star", "text-warning");
        divMediaBody.insertAdjacentElement("beforeend", icon5);
    } else if (kundrec[i].betyg == 3) {
        let icon1 = document.createElement("i");
        icon1.classList.add("fas", "fa-star", "text-warning");
        divMediaBody.insertAdjacentElement("beforeend", icon1);
        let icon2 = document.createElement("i");
        icon2.classList.add("fas", "fa-star", "text-warning");
        divMediaBody.insertAdjacentElement("beforeend", icon2);
        let icon3 = document.createElement("i");
        icon3.classList.add("fas", "fa-star", "text-warning");
        divMediaBody.insertAdjacentElement("beforeend", icon3);
        let icon4 = document.createElement("i");
        icon4.classList.add("far", "fa-star", "text-warning");
        divMediaBody.insertAdjacentElement("beforeend", icon4);
        let icon5 = document.createElement("i");
        icon5.classList.add("far", "fa-star", "text-warning");
        divMediaBody.insertAdjacentElement("beforeend", icon5);
    }

    let p = document.createElement("p");
    let pText = document.createTextNode(kundrec[i].recension);
    p.insertAdjacentText("beforeend", pText.textContent); //get the textcontent from textnode
    divMediaBody.insertAdjacentElement("beforeend", p);
    divMediaObject.insertAdjacentElement("beforeend", divMediaBody);

    let img = document.createElement("img");
    img.src = "images/avatar.png";
    img.classList.add("mr-3", "mt-3", "round-circle");
    img.style.width = "60px";

    divMediaObject.insertAdjacentElement("afterbegin", img)
    divcontainer.insertAdjacentElement("beforeend", divMediaObject);

}