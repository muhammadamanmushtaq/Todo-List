const toDo = []
let editedTaskIndex = -1
let addItem = () => {
   let inputValue = document.getElementById("input1").value
   if(inputValue !== ''){
      if(editedTaskIndex === -1){
         toDo.push({ text: inputValue, completed: false })
      }
      else{
         toDo[editedTaskIndex].text = inputValue
         editedTaskIndex = -1
      }
      displayTasks()
      document.getElementById("input1").value = ''
   }
   else{
      alert('Enter a task')
   }
}

let displayTasks = () => {
   let accessul = document.getElementById('ul1')
   accessul.innerHTML = ''

   toDo.forEach((task,index) => {
      let listItems = document.createElement('li')
      listItems.classList.add("list-group-item");

      listItems.innerHTML = `
      <span id='s1' class="${task.completed ? 'completed' : ''}">
      ${index === editedTaskIndex ? '<input class="form-control" type="text" id="editTask" value="' + task.text + '">' : task.text}
      </span>
      
      <button class="btn btn-primary" onclick="editItem(${index})">${index === editedTaskIndex ? 'Update' : 'Edit'}<span class="material-symbols-outlined">
      edit
      </span></button>
      <button class="btn btn-secondary" onclick="toggleTaskCompletion(${index})">${task.completed ? 'Undo' : 'Read'}<span class="material-symbols-outlined">
      check_box
      </span></button>
      
      <button class="btn btn-danger" onclick="deleteItem(${index})">Delete<span class="material-symbols-outlined">
      delete
      </span></button>
      `
      accessul.appendChild(listItems)
   } )
}

let editItem = (index) => {
   let inputField = document.getElementById('editTask')
   if(inputField){
      toDo[editedTaskIndex].text = inputField.value
      editedTaskIndex  = -1
   }
   else{
      editedTaskIndex = index
   }
   displayTasks()
}

let deleteItem = (index) => {
   let confirmation = confirm('Are you sure you want to delete this task?')
   if(confirmation){
      toDo.splice(index,1)
      displayTasks()
   }
}

let toggleTaskCompletion = (index) => {
   toDo[index].completed = !toDo[index].completed;
            displayTasks();
}

displayTasks()


 