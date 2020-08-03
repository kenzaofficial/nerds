var range=document.querySelector(".range__input"); //range - это Input
var price=document.querySelector(".range__price"); // p - абзац

function fun1() { 
    price.innerHTML=range.value;
}