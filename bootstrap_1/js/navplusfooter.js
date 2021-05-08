let divNavbar = document.querySelector("#navbar");

let navbar = `
<a class="navbar-brand text-info" href="index.html">Bok-Xpress</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
          
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
                
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-th mr-2"></i>Våra böcker
                </a>
            <div class="dropdown-menu" style="width:300px" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="deckare.html">Deckare</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="natur.html">Natur</a>
            </div>
            </li>
                
            <li class="nav-item">
                <a class="nav-link" href="erbjudanden.html">Erbjudanden</a>
            </li>
        </ul>
            
        <form class="form-inline">
            <input class="form-control mx-0 bg-white border-info" type="search" placeholder="Sök efter böcker" aria-label="Search" style="border-radius: 5px 0px 0px 5px;">
            <a class="btn btn-info mx-0" href="#" style="border-radius: 0px 5px 5px 0px;">
                <i class="fas fa-search"></i>
            </a>
        </form>
    
        <div class="btn-group">
            <a class="btn btn-info ml-lg-2 my-2" href="#" style="border-radius: 5px 0px 0px 5px;">
                <i class="fas fa-shopping-cart mr-2"></i>Varukorg<span class="badge badge-danger ml-1">2</span>
            </a>
            <a class="btn btn-info my-2" href="#" style="border-radius: 0px 5px 5px 0px;">
                Mina sidor<i class="fas fa-shopping-cart ml-2"></i>
            </a>
        </div>
    </div>
`;

divNavbar.innerHTML = navbar;


let divFooter = document.querySelector("#footer");

let footer = `
<div class="jumbotron jumbotron-fluid bg-info mb-0 mt-auto">
    <div class="container text-white">
        <div class="row">
            <div class="col">
                <h6 class="mb-3">Bok-Xpress</h6>
                <a href="#" class="text-white"><p class="my-1">Om Bok-Xpress</p></a>
                <a href="#" class="text-white"><p class="my-1">Jobba hos oss</p></a>
                <a href="#" class="text-white"><p class="my-1">Pressrum</p></a>
            </div>
            <div class="col">
                <h6 class="mb-3">Kundservice</h6>      
                <a href="#" class="text-white"><p class="my-1">Vanliga frågor & svar</p></a>
                <a href="#" class="text-white"><p class="my-1">Frakt & leverans</p></a>
                <a href="#" class="text-white"><p class="my-1">Kontakta oss</p></a>
                <a href="#" class="text-white"><p class="my-1">Villkor</p></a>
            </div>
            <div class="col">
                <h6 class="mb-3">Mitt konto</h6>      
                <a href="#" class="text-white"><p class="my-1">Logga in</p></a>
                <a href="#" class="text-white"><p class="my-1">Mina beställningar</p></a>
                <a href="#" class="text-white"><p class="my-1">Önskelistor</p></a>
            </div>
            <div class="col">
                <h6 class="mb-3">Personuppgifter</h6>      
                <a href="#" class="text-white"><p class="my-1">Kunduppgifter</p></a>
                <a href="#" class="text-white"><p class="my-1">Hantering av cookies</p></a>
            </div>
        </div>
    </div>
</div>
<footer class="bg-info text-white d-flex justify-content-center pb-3">
    <h6>Bok-Xtra Copyright © 2020</h6>
</footer>


`;

divFooter.innerHTML = footer;