const input = document.getElementById("input");
const btn = document.getElementById("btn");
const printing = document.getElementById("printing");
let num_1 = input.value;
function print(e){
    let para = document.createElement("p");
    let node = document.createTextNode(e);
    para.appendChild(node);
    printing.appendChild(para);
};
function bbttnn() {
    let a = Number(num_1);
    while (a > 0) {
        setInterval(print(a), 1000);
        a--;
    }    
}
btn.addEventListener("click", bbttnn);