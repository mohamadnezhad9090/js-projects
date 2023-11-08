const monitor = document.getElementById("monitor");
const btn = document.querySelectorAll("span");
const equal = document.getElementById("equal");
let arr = [];
function sort(){    
    for(let a = 0; a <= arr.length - 2; a++){
        if(arr[a] != "+" & arr[a] != "-" & arr[a] != "*" & arr[a] != "/"){
            if(arr[a + 1] != "+" & arr[a + 1] != "-" & arr[a + 1] != "*" & arr[a + 1] != "/"){
                arr[a] = arr[a] + arr[a + 1];
                arr.splice(a + 1, 1);
                console.log(arr);
                
            }
            if(a >= 1 & arr[a - 1] != "+" & arr[a - 1] != "-" & arr[a - 1] != "*" & arr[a - 1] != "/"){
                arr[a - 1] = arr[a - 1] + arr[a];
                arr.splice(a, 1);
                console.log(arr);
            }
        }
    }
}
equal.addEventListener("click", sort);
function add(e){
    let para = document.createElement("p");
    let node = document.createTextNode(e);
    para.appendChild(node);
    monitor.append(para);
    arr.push(e);
}
btn.forEach(item => {
        item.addEventListener('click', () => {
            add(item.innerHTML);
        })
});
function print(){

    let len = arr.length;
    for (let a = 1 ; a <= len - 2; a += 2){
        if(arr[a] == "*"){
            let demo = arr[a-1] * arr[a+1];
            arr[a-1] = demo;
            arr.splice(a, 1);
            arr.splice(a, 1);
        }
        if(arr[a] == "/"){
            let demo = arr[a-1] / arr[a+1];
            arr[a-1] = demo;
            arr.splice(a, 1);
            arr.splice(a, 1);
        }
    }
    len = arr.length;
    for (let a = 1 ; a <= len - 2; a += 2){
        if(arr[a] == "+"){
            let demo = Number(arr[a-1]) + Number(arr[a+1]);
            arr[a-1] = demo;
            arr.splice(a, 1);
            arr.splice(a, 1);
        }
        if(arr[a] == "-"){
            let demo = arr[a-1] - arr[a+1];
            arr[a-1] = demo;
            arr.splice(a, 1);
            arr.splice(a, 1);
        }
    }
    let para = document.createElement("p");
    let node = document.createTextNode(arr[0]);
    para.appendChild(node);
    monitor.append(para);
}
equal.addEventListener("click", print);
