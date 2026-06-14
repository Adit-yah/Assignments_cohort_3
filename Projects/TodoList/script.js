let input = document.querySelector("#new-task-div input");
let addBtn = document.querySelector("#new-task-btn");
let todoList = document.querySelector(".todo-list");

let task = [];

function addTask() {
  todoList.innerHTML = ''
  if (task.length == 0) return
  task.forEach((elem, idx) => {
    todoList.innerHTML += `<div class="li " id="${idx+ 1}">
          <input id="input_${idx}" class="input-field li-input" type="text" placeholder="Edit task" />
          <div id="update_${idx}" class="update-div">
              <button class="btn edit-btn" onclick="updateTask(${idx})" >OK</button>
              <button class="btn del-btn" onclick="cancelUpdate(${idx})">X</button>
          </div>
          
          <h3 id="h3_${idx}">${elem.task}</h3>
          <div id="options_${idx}" class='options' >
            <button class="btn edit-btn" onclick="editTask(${idx})">edit</button>
            <button class="btn del-btn" onclick="deleteTask(${idx})">
              delete
            </button>
          </div>
        </div>`;
  });
}

// addTask();

addBtn.addEventListener("click", (details) => {
  if (!input.value.trim()) return;
  let newTask = {
    task: input.value,
  };
  task.push(newTask);
  input.value = "";
  addTask();
  console.log(task);
  
});

function deleteTask(id){
  task.splice(id, 1)
  addTask()
}

function editTask(id ){
  let liInput = document.querySelector(`#input_${id}`)
  let updateInput = document.querySelector(`#update_${id}`)
  let h3 = document.querySelector(`#h3_${id}`)
  let options = document.querySelector(`#options_${id}`)
  
  liInput.value = h3.textContent
  h3.style.display = 'none'
  options.style.display = 'none'
  liInput.style.display = 'block'
  updateInput.style.display = 'flex'

}


function cancelUpdate ( id){

  let liInput = document.querySelector(`#input_${id}`)
  let updateInput = document.querySelector(`#update_${id}`)
  let h3 = document.querySelector(`#h3_${id}`)
  let options = document.querySelector(`#options_${id}`)

  liInput.style.display = 'none'
  updateInput.style.display = 'none'
  h3.style.display = 'block'
  options.style.display = 'flex'
}

function updateTask(id){
  let liInput = document.querySelector(`#input_${id}`)
  let updateInput = document.querySelector(`#update_${id}`)
  let h3 = document.querySelector(`#h3_${id}`)
  let options = document.querySelector(`#options_${id}`)
  
  h3.textContent = liInput.value
  liInput.style.display = 'none'
  updateInput.style.display = 'none'
  h3.style.display = 'block'
  options.style.display = 'flex'

  task = task.map( ( elem , idx ) =>{
    if(idx === id) {
      return { task : liInput.value}
    }else return elem
  })
}