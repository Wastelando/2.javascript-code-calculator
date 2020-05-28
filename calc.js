// diverse funksjoner

/*
function sihei (){
    alert ("hei");
};
*/

// call the funktion
//sihei();






var Gangeknapp = document.getElementById("gangeKnapp");
var deleKnapp = document.getElementById ("deleKnapp");
var resultat = document.getElementById("resultat");
var addereKnapp = document.getElementById("addereKnapp");
var dividereKnapp = document.getElementById("dividereKnapp");

var løsning = tall1 + tall2;


Gangeknapp.addEventListener("click", function(){
    var tall1 = document.getElementById("tall1").value;
    var tall2 = document.getElementById("tall2").value;
    var gangeresultat = tall1 * tall2;
    resultat.textContent = "Resultatet er " + gangeresultat;
});



deleKnapp.addEventListener("click", function(){
    
  var tall1 = document.getElementById("tall1").value;
  var tall2 = document.getElementById("tall2").value;
  var deleresultat = tall1 / tall2;
  resultat.textContent = "Resultatet er " + deleresultat;
});

addereKnapp.addEventListener("click", function(){
    
    var tall1 = parseInt(document.getElementById("tall1").value);
    var tall2 = parseInt(document.getElementById("tall2").value);
    
    var løsning = tall1 + tall2;
    resultat.textContent = "Resultatet er " + løsning;
  });

  dividereKnapp.addEventListener("click", function(){
    
    var tall1 = document.getElementById("tall1").value;
    var tall2 = document.getElementById("tall2").value;
    var dividereresultat = tall1 - tall2;
    resultat.textContent = "Resultatet er " + dividereresultat;
  });