var text=document.getElementById('banner');
var str= text.innerHTML;

text.innerHTML='';

var speed=100;
var cont = 0;

function typeWriter(){
if(cont < str.length){
    text.innerHTML += str.charAt(cont);
    cont++;
    setTimeout( typeWriter ,speed);
}

}

setTimeout(typeWriter,speed);