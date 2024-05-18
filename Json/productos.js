
// metodo para los onklic de los boton 1 - oculta o mustran las caras con cada producto//

function mostrarOcultarb1() {
    var cara1 = document.getElementById("cara1");
    var cara2 = document.getElementById("cara2");
    var cara3 = document.getElementById("cara3");
    if (cara3.style.display === "none" && cara1.style.display === "inline-block" ) {
        cara3.style.display = "inline-block";
        cara1.style.display = "none";
        cara2.style.display = "none";
        
  } 
   else if (cara2.style.display === "none" && cara3.style.display === "inline-block" ) {
       cara2.style.display = "inline-block";
       cara1.style.display = "none";
       cara3.style.display = "none";
    
   }   else {
        cara1.style.display = "inline-block";
        cara2.style.display = "none";
        cara3.style.display = "none";
    } 

}

// metodo para los onklic de los boton 2 - oculta o mustran las caras con cada producto//
function mostrarOcultarb2() {
    var cara1 = document.getElementById("cara1");
    var cara2 = document.getElementById("cara2");
    var cara3 = document.getElementById("cara3");
    if (cara2.style.display === "none" && cara1.style.display === "inline-block" ) {
        cara2.style.display = "inline-block";
        cara1.style.display = "none";
        cara3.style.display = "none";
        
  } 
   else if (cara3.style.display === "none" && cara2.style.display === "inline-block" ) {
       cara3.style.display = "inline-block";
       cara1.style.display = "none";
       cara2.style.display = "none";
    
   }   else {
        cara1.style.display = "inline-block";
        cara2.style.display = "none";
        cara3.style.display = "none";
    } 

}