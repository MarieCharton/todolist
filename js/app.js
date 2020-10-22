/**
 * Todolist
 */
var app = {
  init: function() {

  // je recupere l'endroit du DOM ou je veux creer mon input 
  container = document.getElementById("todo"); 

  //Le input
 //on crée l'élément (la balise) input
  input = document.createElement("input");
  
  //J'ajoute le placeholder
  input.placeholder = "Ajouter une tâche";

  //on définit l'attribut id du input
  input.id = 'input'; 

  //j'ajoute l'input au DOM 
  container.appendChild(input);

  // LE TEXTE 
  //Creation du paragraphe
  texte = document.createElement ("p");
  //Ajout du texte 
  texte.textContent = "tâches en cours";
  //on définit l'attribut id du texte
  texte.id = 'taches'; 
  //J'ajoute le texte au DOM
  container.appendChild(texte);

  //La LIGNE

  //Creation du paragraphe
  ligne = document.createElement ("div");
  //on définit l'attribut id de la ligne
  ligne.id = 'ligne'; 
  //J'ajoute le texte au DOM
  container.appendChild(ligne);


  //La liste des tâches
  //Creation du paragraphe
  taskBox = document.createElement ("div");
  //Création du texte 
  task =document.createElement ("p");
 
  //on définit l'attribut id de la boite de taches et du texte
  taskBox.id = 'task-box'; 
  task.id = 'task'; 


  //J'ajoute la boite au DOM et le texte a la boite
  container.appendChild(taskBox);
  taskBox.appendChild(task);

  
},
};


// Chargement du DOM
document.addEventListener('DOMContentLoaded', app.init);







