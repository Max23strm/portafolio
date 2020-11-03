//variables
var menu=document.getElementsByClassName ("menu");
var page=document.getElementById("page");
var landing=document.getElementById("landing");
var lenguajes= document.getElementById("lenguajes");
var stand =document.getElementsByClassName("stand");
var phone =document.getElementsByClassName("phone");
var ejemplo= document.getElementsByClassName ("ejemplo")
var cerrar= document.getElementsByClassName("close")
var fondo= document.getElementById("fondo-imagen")
var x=window.matchMedia("(orientation:landscape)")
var mostrador= document.getElementById("mostrador");
var mostrado= document.getElementsByClassName("mostrado");


//------------------script

menu[0].onclick=function(){
    if (landing.style.display 
        == "none") {
            landing.style.display = "flex";
          } else {
            landing.style.display = 
          "none";
          }   
        if (page.style.display=="flex"){
            page.style.display="none"
        }   
        if (lenguajes.style.display=="flex"){
            lenguajes.style.display="none"
        }   
}



menu[1].onclick=function(){
    if (page.style.display 
        == "none") {
            page.style.display = "flex";
          } else {
            page.style.display = 
          "none";
          }
        if (lenguajes.style.display=="flex"){
            lenguajes.style.display="none"
        }   
        if (landing.style.display=="flex"){
            landing.style.display="none"
        }      
}

menu[2].onclick=function(){
    if (lenguajes.style.display 
        == "none") {
            lenguajes.style.display = "flex";
          } else {
            lenguajes.style.display = 
          "none";
          }
    if (page.style.display=="flex"){
        page.style.display="none"
    }   
    if (landing.style.display=="flex"){
        landing.style.display="none"
    }   
}






//---------------LANDING-------------------------------//


ejemplo[0].onclick= function() {
    
        mostrado[0].style.display="block"
        mostrado[1].style.display="none"
        mostrado[2].style.display="none"
        mostrado[3].style.display="none"
        mostrado[4].style.display="none"
        mostrado[5].style.display="none"
        mostrado[6].style.display="none"
        mostrador.style.display="block"
        cerrar[0].style.display="block"
    }
        
cerrar[0].onclick=function(){
    mostrado[0].style.display="none"
    mostrador.style.display="none"
    cerrar[0].style.display="none"
}


ejemplo[1].onclick= function() {

        mostrado[0].style.display="none"
        mostrado[1].style.display="block"
        mostrado[2].style.display="none"
        mostrado[3].style.display="none"
        mostrado[4].style.display="none"
        mostrado[5].style.display="none"
        mostrado[6].style.display="none"
        mostrador.style.display="block"
        cerrar[1].style.display="block"
    }

cerrar[1].onclick=function(){
    mostrado[1].style.display="none"
    mostrador.style.display="none"
    cerrar[1].style.display="none"
}

//-------------------WEBPAGES----------------------//

stand[0].onclick= function() {

        mostrado[0].style.display="none"
        mostrado[1].style.display="none"
        mostrado[2].style.display="block"
        mostrado[3].style.display="none"
        mostrado[4].style.display="none"
        mostrado[5].style.display="none"
        mostrado[6].style.display="none"
        mostrador.style.display="block"
        cerrar[2].style.display="block"
    }
cerrar[2].onclick=function(){
    mostrado[2].style.display="none"
    mostrador.style.display="none"
    cerrar[2].style.display="none"
}

stand[1].onclick= function() {

        mostrado[0].style.display="none"
        mostrado[1].style.display="none"
        mostrado[2].style.display="none"
        mostrado[3].style.display="block"
        mostrado[4].style.display="none"
        mostrado[5].style.display="none"
        mostrado[6].style.display="none"
        mostrador.style.display="block"
        cerrar[3].style.display="block"
    }
cerrar[3].onclick=function(){
    mostrado[3].style.display="none"
    mostrador.style.display="none"
    cerrar[3].style.display="none"
}

stand[2].onclick= function() {

        mostrado[0].style.display="none"
        mostrado[1].style.display="none"
        mostrado[2].style.display="none"
        mostrado[3].style.display="none"
        mostrado[4].style.display="block"
        mostrado[5].style.display="none"
        mostrado[6].style.display="none"
        mostrador.style.display="block"
        cerrar[4].style.display="block"
    }
cerrar[4].onclick=function(){
    mostrado[4].style.display="none"
    mostrador.style.display="none"
    cerrar[4].style.display="none"
}

stand[3].onclick= function() {

        mostrado[0].style.display="none"
        mostrado[1].style.display="none"
        mostrado[2].style.display="none"
        mostrado[3].style.display="none"
        mostrado[4].style.display="none"
        mostrado[5].style.display="block"
        mostrado[6].style.display="none"
        mostrador.style.display="block"
        cerrar[5].style.display="block"
    }
cerrar[5].onclick=function(){
    mostrado[5].style.display="none"
    mostrador.style.display="none"
    cerrar[5].style.display="none"
}

stand[4].onclick= function() {

        mostrado[0].style.display="none"
        mostrado[1].style.display="none"
        mostrado[2].style.display="none"
        mostrado[3].style.display="none"
        mostrado[4].style.display="none"
        mostrado[5].style.display="none"
        mostrado[6].style.display="block"
        mostrador.style.display="block"
        cerrar[6].style.display="block"
    }
cerrar[6].onclick=function(){
    mostrado[6].style.display="none"
    mostrador.style.display="none"
    cerrar[6].style.display="none"
}

//-----------------pantalla---------------
var w= screen.width;
var h= screen.height;
var hero= document.getElementById("hero")
var ww=window.innerWidth;
var wh=window.innerHeight;
var aspect= ww/wh;
//var ori=screen.orientation.type;
//if(ori=="landscape-primary" && aspect<1.4){
//    hero.style.left="50%";
//}
//