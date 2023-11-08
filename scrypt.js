var tot = document.getElementById("tot");
var rate = document.getElementById("rate");
var month = document.getElementById("month");
const btn = document.getElementById("btn");
const output_payment = document.getElementById("output-payment");


var profit = 0 ;
var payment = 0 ;

function clear(){
    payment = 0;
    profit = 0;

}


btn.addEventListener('click',()=>{
   
    profit += (Number(tot.value) * Number(rate.value)*(Number(month.value) + 1)) / 2400;
    payment += (Number(tot.value) + profit ) / Number(month.value);
    output_payment.innerText = payment ;
    clear();


})




