const lamp = document.getElementById("lamp");
const boyimg = document.getElementById("boy-img");
const on = document.getElementById("on");
const off = document.getElementById("off");
let a = 0;
function offl(){
    if(a == 0){
        alert("light is off");
    }
    lamp.style.display = "none"
    boyimg.src = "./PinClipart.com_sad-man-clip-art_414089700.png"
    a = 0
}
function onl(){
    if(a == 1){
        alert("light is on");
    }
    lamp.style.display = "block"
    boyimg.src = "./PinClipart.com_happy-boy-clip-art_733168.png"
    a = 1;
}



on.addEventListener("click", onl)
off.addEventListener("click", offl)