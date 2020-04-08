// Your code goes here
 var get = function get(selector){
     return document.querySelectorAll(selector);
 }

 var one = function one(selector){
     return document.querySelector(selector);
 }

 var button = get(".destination .btn")[0];

 button.addEventListener("dblclick", function () {
button.style.color = "red";
 })

 var button2 = get(".destination .btn")[1];
 button2.addEventListener("mouseover", function(){
     button2.style.backgroundColor = "purple";
 })
 button2.addEventListener("mouseout", function (){
     button2.style.backgroundColor = "#17A2B8";
 })
 
 var button3 = get(".destination .btn")[2];
 button3.addEventListener("click", function(){
     window.scrollTo(0, 0);
 })

 var nav = one(".logo-heading");
 nav.addEventListener("click", function (){
     alert("Leave Me Alone!");
 })

 var pic = one(".intro img");
let scale = 1;
pic.onwheel = size;

function size(event) {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    pic.style.transform = `scale(${scale})`;
  }

 