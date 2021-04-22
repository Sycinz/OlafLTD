function clearing(Node) {
    while(Node.firstChild) { 
        Node.removeChild(Node.firstChild); 
    } 
}

function Teksty() {
    let article = document.getElementById("masno");
    let text = document.createElement("div");
    clearing(article);
    article.appendChild(text);
    text.innerHTML = "Teksty takie o";
}

function Produkty() {
    let article = document.getElementById("masno");
    let text = document.createElement("div");
    clearing(article);
    article.appendChild(text);
    text.innerHTML = "Produkty takie o";
}
function Zdjecia() {
    let article = document.getElementById("masno");
    let text = document.createElement("div");
    clearing(article);
    article.appendChild(text);
    text.innerHTML = "Zdjęcia takie o";
}
function Uzytkownicy() {
    let article = document.getElementById("masno");
    let text = document.createElement("div");
    clearing(article);
    article.appendChild(text);
    text.textContent = "Użytkownicy tacy o";
}

function Posty() {
    let text = {
        1: document.createElement("div"),
        2: document.createElement("div"),
        3: document.createElement("div")
    };
    let input = {
       1: document.createElement("input"),
       2: document.createElement("input")
    };

    let textarea = document.createElement("textarea");
    let masno = document.getElementById("niemasno"); 
    let masnogeng = document.getElementById("masnogeng");
    let masno = document.getElementById("masno"); 

    clearing();

    text.className = "main__article_item2_text";
    text.id = "";

}

