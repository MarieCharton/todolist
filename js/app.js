/**
 * Todolist
 */
const app = {

  //Je stocke le compteur ici : 
  count:0, // on part de zéro


  init: function() {

    //Target du DOM 
    app.todo = document.getElementById("todo"); 
    
    //La génération du form
    app.createFrom();
    //La génération du counter
    app.createCounter();
    //La génération de la liste 
    app.createList();

    
  },


  addTask: function(evt){
    evt.preventDefault();

    //Récupération de la valeur du champ

    //Solution 1
    // const value = evt.target.elements.inputValue.value;

    // Solution2
    const formInput = document.querySelector("#todo-input");
    const value = formInput.value;

    //Ajout de la valeur du champ a la liste
    app.generateTask({
      label : value,
      done : false,
    });

    //On vide le champ
    evt.target.elements.inputValue.value = "";

    //Ajouter 1 au compteur 
    app.count++;
    app.updateCounter();
  },
  createFrom: function(){
    console.log ("app :createForm");

  //on crée l'élément un form
  const form = document.createElement("form");
  //on définit l'attribut id du form
  form.id = 'todo-form'; 

  form.addEventListener ("submit",app.addTask);

  //Ajout d'un input text et l'ajouter au form
  const input = document.createElement("input");
  input.type = "text";
  input.id = "todo-input";
  input.autocomplete = "off";
  input.name = "inputValue";
  input.placeholder = "Ajouter une tâche";


  //j'ajoute le form a l'input et le form au DOM 
  form.appendChild(input);
  app.todo.appendChild(form);

  },

  //Mettre a jour le DOM avec la valeur du compteur 
  updateCounter: function(){
    const counter = document.getElementById ("todo-counter");
    counter.textContent = `${app.count} tâches en cours`;
  },
  createCounter: function(){
    console.log ("app :createCounter");

    //Ajout d'une div 
    const counter = document.createElement ("div");
    counter.id = "todo-counter";
    //Préparer le contenu 
    counter.textContent = `${app.count} tâches en cours`;

    //Ajout du compteur au DOM
    app.todo.appendChild ( counter);

  },
  createList: function(){
    console.log ("app :createList");

    // Création de la liste
    const list = document.createElement ("ul");
    list.id = "task-list";

    //Je stocke dans app pour y accèder partout
    app.list = list;


  
    // Ajout dans le DOM
    app.todo.appendChild (list);
  },
  generateTask : function (data){
    //Ajouter une li 
    const task = document.createElement("li");
    task.className = "task";

    if(data.done){
      task.classList.add ( "task-label--done");
    }

    //Ajout de la checkbox
    const checkbox = document.createElement ("input");
    checkbox.type = "checkbox";
    checkbox.checked = data.done;

    //Ajout du label span
    const label = document.createElement("span");
    label.textContent = data.label;
    label.className = "task-label";

    //Ajout du checkbox et span a la li 
    task.appendChild(checkbox);
    task.appendChild(label);

    //Ajout du li a la liste de tâches
    app.list.appendChild(task);
  },

};


// Chargement du DOM
document.addEventListener('DOMContentLoaded', app.init);
    










