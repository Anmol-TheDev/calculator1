
const button =document.getElementsByClassName('num');
const clear = document.getElementById ('C');
let display = document.getElementById('display');
const temp = document.getElementById('=');
temp.addEventListener("click",sum);
let element = "";
//function for numaric button 


function mydoc(el){
    
    display.value += el.srcElement.innerHTML;
    
}
console.log();
//function for symbol button
function print(el){
    display.value += el.srcElement.innerHTML;
    element = el.target;
    
}


//fuction for equal button
function sum(){
    let el = document.getElementById('display').value;
    display.value=eval(el);
}

for(let i=0; i<button.length;i++){

    button[i].addEventListener("click",print);


}

clear.addEventListener("click",clr);
function clr(){
    display.value="";
}

