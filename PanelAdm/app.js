function clearing(Node) {
    while(Node.firstChild) { 
        Node.removeChild(Node.firstChild); 
    } 
}

function Teksty() {
    // Variables
    let article = document.getElementById("masno");
    let label = document.createElement("label");
    let select = document.createElement("select");
    let options = {
        option1: document.createElement("option"),
        option2: document.createElement("option"),
        option3: document.createElement("option"),
        option4: document.createElement("option")
    };

    // select
    select.className = "main__article_item2_Teksty_select";
    select.name = "numbers";
    select.id = "numbers";
    
    // label
    label.className = "main__article_item2_Teksty_label";
    label.htmlFor = "numbers";
    label.textContent = "Numer tekstu:";
    label.style.fontSize = "1.6rem";

    // options
    options.option1.textContent = "1";
    options.option2.textContent = "2";
    options.option3.textContent = "3";
    options.option4.textContent = "4";

    // clearing function
    clearing(article);

    // Creating tags in HTML
    article.appendChild(label);
    article.appendChild(select);

    // Creating tags in HTML in select tag
    select.appendChild(options.option1);
    select.appendChild(options.option2);
    select.appendChild(options.option3);
    select.appendChild(options.option4);

}

function Produkty() {
    let article = document.getElementById("masno");
    let text = document.createElement("div");
    clearing(article);
    article.appendChild(text);
    text.className = "main__article_item2_Teksty";
    text.textContent = "Produkty takie o";
}
function Zdjecia() {
    let article = document.getElementById("masno");
    let text = document.createElement("div");
    clearing(article);
    article.appendChild(text);
    text.className = "main__article_item2_Teksty";
    text.textContent = "Zdjęcia takie o";
}
function Uzytkownicy() {
    let article = document.getElementById("masno");
    let text = document.createElement("div");
    clearing(article);
    article.appendChild(text);
    text.className = "main__article_item2_Teksty";
    text.textContent = "Użytkownicy tacy o";
}

function Posty() {

    // Creating variables 
    let text = {
        text1: document.createElement("div"),
        text2: document.createElement("div"),
        text3: document.createElement("div")
    };
    let input = {
       input1: document.createElement("input"),
       input2: document.createElement("input"),
       input3: document.createElement("input")
    };

    let textarea = document.createElement("textarea");
    let container = document.getElementById("masno");

    // Clearing function

    container.firstChild ? clearing(container): NULL;

    // Setting classes, ID and content

    // text
    text.text1.className = "main__article_item2_Posty_text";
    text.text1.textContent = "Tytuł";

    text.text2.className = "main__article_item2_Posty_text";
    text.text2.textContent = "Kontent";

    text.text3.className = "main__article_item2_Posty_text";
    text.text3.textContent = "Tagi";

    // input
    input.input1.className = "main__article_item2_Posty_input";
    input.input2.className = "main__article_item2_Posty_input";

    // submit input
    input.input3.type = "submit";
    input.input3.value = "Dodaj";
    input.input3.className = "main__article_item2_Posty_submit";

    // textarea
    textarea.className = "main__article_item2_Posty_textarea"

    /* CSS styling
     textarea max. characters = 2048 */

    // textarea       
    textarea.placeholder = "Maksymalnie 2048 znaków";
    textarea.style.resize = "none";
    textarea.style.width = "100%";
    textarea.style.height = "50%";
    textarea.style.padding = "1%";
    textarea.style.margin = "0 0 3% 0";

    // input.input3 
    input.input3.style.padding = "1.5% 3%";
    input.input3.style.alignSelf = "center";
    input.input3.style.justifySelf = "center";
    // View all divs etc. (appendChild)

    // Tytuł
    container.appendChild(text.text1);
    container.appendChild(input.input1);
    // Kontent
    container.appendChild(text.text2);
    container.appendChild(textarea);
    // Tagi
    container.appendChild(text.text3);
    container.appendChild(input.input2);
    // Przycisk 

    container.appendChild(input.input3);
}