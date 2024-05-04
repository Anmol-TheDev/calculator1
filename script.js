//diclaration
const button =document.getElementsByClassName('num');
const clear = document.getElementById('C');
let display = document.getElementById('display');
const temp = document.getElementById('=');
const body= document.querySelector("body");
const toggle = document.getElementById('check');
const toggleBox =document.getElementById('toggle')
let bool =true;


//function for toggle
toggle.addEventListener("click",()=>{
    if(bool==false){
        bool=true;
        body.style.backgroundColor="rgba(0, 0, 0, 0.749)";
        toggleBox.style.backgroundColor="black";
        
    }
    else{
        body.style.backgroundColor="beige";
        toggleBox.style.backgroundColor="lightgray";
        bool=false;
        
    }
})

temp.addEventListener("click",sum);
let element = "";




//function for numaric button 
function mydoc(el){
    
    display.value += el.srcElement.innerHTML;
    
}

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
    button[i].addEventListener("touch",print);

}

clear.addEventListener("click",clr);
function clr(){
    display.value="";
}

