const btn = document.getElementById("btn");
const printing = document.getElementById("printing");
//let num_1 = input.value;

let para = document.createElement("p");
let counter = 0;
let timerID = 0;

function print() {
    if (counter > 0) {
        let node = document.createTextNode(counter);
        para.appendChild(node);
        printing.appendChild(para);
        counter--;
    }
    else {
        clearInterval(timerID);
    }
};

function bbttnn() {
    const input = document.getElementById("input");
    counter = input.value;
    para.innerHTML = "";
    timerID = setInterval(print, 1000);

    // let a = Number(num_1);
    // while (a > 0) {
    //     setInterval(print(a), 1000);
    //     a--;
    // }    
}

btn.addEventListener("click", bbttnn);

