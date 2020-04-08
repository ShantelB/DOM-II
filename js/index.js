// Your code goes here
 var get = function get(selector){
     return document.querySelectorAll(selector);
 }

 var one = function one(selector){
     return document.querySelector(selector);
 }

 var button = get(".destination .btn")[0];

 var colors = '#'+Math.floor(Math.random()*16777215).toString(16);
 

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

  var navBar = get(".nav .nav-link");
  for (i = 0; i < navBar.length; i++){
        navBar[i].style.color = "red";
  }

  var navBar2 = get(".nav .nav-link")[0];
   window.addEventListener('load', function(event){
        navBar[0].textContent = navBar[0].textContent + 'load\n';
    });

    var navBar3 = get(".nav .nav-link")[1];
    navBar3.addEventListener("dblclick", function () {
        navBar3.style.color = "purple";
         })

    var navBar4 = get(".nav .nav-link")[2];
   window.addEventListener("resize", function () {
        navBar4.style.color = colors;
      })
    
  

 var pic2 = one(".transition");
var text = get(".text-content p")[0];
 console.log(pic2)
//  for (i = 0; i < pic2.length; i++){
    pic2.addEventListener('transitionrun', function() {
        text.textContent = 'transitionrun fired';
      });
      
      pic2.addEventListener('transitionstart', function() {
        text.textContent = 'transitionstart fired';
      });
      
      pic2.addEventListener('transitionend', function() {
        text.textContent = 'transitionend fired';
      });
      pic2.style.transform = "rotate (90deg)"
//  }
 
//  var text = get(".text-content p");
//  for (i = 0; i < text.length; i++){
//     text[i].addEventListener('transitionrun', function() {
//         text[i].textContent = 'transitionrun fired';
//       });
      
//       text[i].addEventListener('transitionstart', function() {
//         text[i].textContent = 'transitionstart fired';
//       });
      
//       text[i].addEventListener('transitionend', function() {
//         text[i].textContent = 'transitionend fired';
//       });
      
//  }
//  console.log(text)