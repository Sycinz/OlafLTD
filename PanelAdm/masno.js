function clearing(Node) {
    while(Node.firstChild) { 
        Node.removeChild(Node.firstChild); 
    } 
}

function Posty() {

    let array = [
        text = document.createElement("div"),
        text1 = document.createElement("div"),
        text2 = document.createElement("div"),
        input = document.createElement("input"),
        input1 = document.createElement("textarea"),
        input2 = document.createElement("input"),
        article = document.getElementById("niemasno"), 
        container = document.getElementById("masnogeng"),
        masno = document.getElementById("masno"), 
        masnogeng = document.createElement("div")];

        // 10 array objects
    
    array[0].className = "main__article_item2_text";
    array[1].className = "main__article_item2_text";
    array[2].className = "main__article_item2_text";
    array[0].id = "text";
    array[1].id = "text";
    array[2].id = "text";
    
    array[9].id = "masnogeng";
    array[9].className = "main__article_item2_container";
    array[3].type = "text";
    array[5].type = "text";
    array[3].className = "main__article_item2_input";
    array[4].className = "main__article_item2_textarea";
    array[5].className = "main__article_item2_input";

    array[6].style.background = "white";
    array[6].style.width = "90%";
    array[6].style.height = "100%";
    
    array[0].textContent = "Temat:";
    array[1].textContent = "Kontent:";
    array[2].textContent = "Tagi:";

    clearing(array[6]);

    array[6].appendChild(array[0]);
    array[6].appendChild(array[3]);
    array[6].appendChild(array[1]);
    array[6].appendChild(array[4]);
    array[6].appendChild(array[2]);
    array[6].appendChild(array[5]);
    array[8].appendChild(array[9]);
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