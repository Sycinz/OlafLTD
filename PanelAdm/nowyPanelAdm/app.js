var trueornot = true;

function clearing(Node) {
    while(Node.firstChild) {
        Node.removeChild(Node.firstChild);
    }
}

function nesting() {
    if (trueornot == false) {
        nestid.firstChild ? clearing(nestid): NULL;
    }
    if (trueornot == true) {
        var nestid = document.getElementById("nest");
        let list = {
            list1: document.createElement("li"),
            list2: document.createElement("li"),
            list3: document.createElement("li"),
            list4: document.createElement("li"),
            list5: document.createElement("li"),
        };
        let nest = { 
            nest1: document.createElement("li"),
            nest2: document.createElement("li"),
            nest3: document.createElement("li"),
        };

        nestid.style.maxHeight = "15%";
        nestid.textContent = "Drzewko";

        list.list1.style.padding = "0 0 1% 16%";
        list.list2.style.padding = "0 0 1% 16%";
        list.list3.style.padding = "0 0 1% 16%";
        nest.nest1.style.padding = "0 0 1% 16%";

        list.list1.textContent = "Owocki";
        list.list2.textContent = "Banany";
        list.list3.textContent = "Kasztany";
        nest.nest1.textContent = "Warzywa";

        nest.nest1.id = "nest";
        nest.nest1.classList.add("nest");

        nestid.appendChild(list.list1);
        nestid.appendChild(list.list2);
        nestid.appendChild(list.list3);
        nestid.appendChild(nest.nest1);

        trueornot = false;
    }
}