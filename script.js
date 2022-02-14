let addToDoButton = document.getElementById('add');
let toDoContainer = document.getElementById('todo-container');
let inputField = document.getElementById('input-field');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    
    paragraph.addEventListener('click', function(){
        toDoContainer.removeChild(paragraph);
    })
})