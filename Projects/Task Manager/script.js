let addTaskBtn = document.querySelector(".task-add-btn");
let formCancelBtn = document.querySelector(".form-cancel-btn");

let formContainer = document.querySelector(".form-container");
let formCategory = document.querySelector(".form-category");
let formCategoryList = document.querySelector(".form-category-list");

let form = document.querySelector("#new-task-form");
let formInput = document.querySelector(".form-input input");
let formDescription = document.querySelector(".task-description");
let formCategoryValue = document.querySelector(".form-category h4");
let formHeading = document.querySelector(".form-heading");
let formSubmitButton = document.querySelector(".form-submit-btn");

let taskContainer = document.querySelector(".task-container");
let myTaskContainerNav = document.querySelector(".my-task-container-nav");

let filterStatusBtn = document.querySelector(".filter-status");
let statusList = document.querySelector(".status-list");

let filterCategoryBtn = document.querySelector(".filter-category");
let categoryList = document.querySelector(".category-list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentEditIndex = null;

addTaskBtn.addEventListener("click", () => {
  formContainer.style.display = "flex";
});

formCancelBtn.addEventListener("click", () => {
  form.reset();
  if (!(formSubmitButton.textContent === "Add task")) {
    currentEditIndex = null;
    formCategoryValue.textContent = "Normal";
    formHeading.textContent = "Create New Task";
    formSubmitButton.textContent = "Add task";
    formContainer.style.display = "none";
    return;
  }
  formContainer.style.display = "none";
});

formCategory.addEventListener("click", () => {
  formCategoryList.style.display = "block";
});

formCategoryList.addEventListener("click", (dets) => {
  if (dets.target.localName === "h3") {
    formCategoryValue.textContent = dets.target.textContent;
    formCategoryList.style.display = "none";
  }
});

function renderTask() {
  // 1. Fast clear: faster than innerHTML = ''
  while (taskContainer.firstChild) {
    taskContainer.removeChild(taskContainer.firstChild);
  }

  if (tasks.length === 0) return;

  // 2. Create the fast memory fragment
  const fragment = document.createDocumentFragment();
  tasks.forEach((elem, idx) => {
    // 3. Create elements directly as objects (bypasses string parsing)
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";
    taskDiv.setAttribute("key", idx);

    // Use the dataset API we discussed!
    taskDiv.dataset.id = elem.id;
    taskDiv.dataset.status = elem.status;
    taskDiv.dataset.category = elem.category;

    // 4. Construct the inner structure using elements
    const taskNav = document.createElement("div");
    taskNav.className = "task-nav";

    const title = document.createElement("h1");
    title.className = "task-title";
    title.textContent = elem.title; // Secure and fast

    const optionsDiv = document.createElement("div");
    optionsDiv.className = "task-options";

    // Create buttons
    const editBtn = document.createElement("button");
    editBtn.className = "task-edit";
    editBtn.textContent = "edit";

    const completeBtn = document.createElement("button");
    completeBtn.className = "task-completed";
    completeBtn.textContent = "complete";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "task-delete";
    deleteBtn.textContent = "delete";

    // Completed task indicator
    const taskCompleted = document.createElement("button");
    taskCompleted.className = "task-completed-mark";
    taskCompleted.textContent = "Completed";

    // Assemble navigation
    optionsDiv.append(editBtn, completeBtn, deleteBtn);
    taskNav.append(title, taskCompleted, optionsDiv);

    optionsDiv.style.display = elem.status === "completed" ? "none" : "flex";
    taskCompleted.style.display =
      elem.status === "completed" ? "block" : "none";

    // Description block
    const descDiv = document.createElement("div");
    descDiv.className = "task-description";
    const descP = document.createElement("p");
    descP.textContent = elem.description;
    descDiv.append(descP);

    // Assemble the main task card
    taskDiv.append(taskNav, descDiv);

    // 5. Push to the offscreen fragment
    fragment.appendChild(taskDiv);
  });

  // 6. Push everything to the screen in ONE single frame paint
  taskContainer.appendChild(fragment);
}

renderTask();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (currentEditIndex !== null) {
    tasks[currentEditIndex] = {
      ...tasks[currentEditIndex],
      title: formInput.value,
      description: formDescription.value,
      category: formCategoryValue.textContent,
    };
    localStorage.setItem("tasks", JSON.stringify(tasks));

    renderTask();
    form.reset();
    formContainer.style.display = "none";
    formHeading.textContent = "Create New Task";
    formSubmitButton.textContent = "Add task";
    currentEditIndex = null;
    return;
  }
  let newTask = {
    id: tasks.length,
    title: formInput.value,
    description: formDescription.value,
    category: formCategoryValue.textContent,
    status: "pending",
  };
  tasks.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  form.reset();
  renderTask();
});

// using single listener to attach func on task buttons
taskContainer.addEventListener("click", (e) => {
  console.log(e.target);
  if (!(e.target.localName === "button")) return;

  let task = e.target.closest(".task");
  let taskIndex = Number(task.getAttribute("key"));

  if (e.target.classList.contains("task-edit")) {
    mountToggleForm(taskIndex);
  } else if (e.target.classList.contains("task-completed")) {
    completeTask(taskIndex);
  } else if (e.target.classList.contains("task-delete")) {
    deleteTask(taskIndex);
  } else if (e.target.classList.contains("task-completed-mark")) {
    undoCompleteTask(taskIndex);
  } else if (e.target.classList.contains("filter-status")) {
  } else {
    return;
  }
});

myTaskContainerNav.addEventListener("click", (e) => {
  if (e.target.localName !== "button") {
    return;
  }
  if (e.target.classList.contains("filter-status")) {
    let toggle = Boolean(filterStatusBtn.dataset.toggle);
    statusList.style.display = toggle ? "block" : "none";
    filterStatusBtn.dataset.toggle = toggle ? "" : "true";
    if (toggle) {
      statusList.addEventListener("click", (e) => {
        if (e.target.localName == "h3") {
          filterStatusBtn.children[0].textContent = e.target.textContent;
          filterTasks(
            filterStatusBtn.children[0].textContent,
            filterCategoryBtn.children[0].textContent,
          );
          statusList.style.display = "none";
          filterStatusBtn.dataset.toggle = "true";
        } else return;
      });
    }
  } else if (e.target.classList.contains("filter-category")) {
    let toggle = Boolean(filterCategoryBtn.dataset.toggle);
    categoryList.style.display = toggle ? "block" : "none";
    filterCategoryBtn.dataset.toggle = toggle ? "" : "true";

    if (toggle) {
      categoryList.addEventListener("click", (e) => {
        if (e.target.localName == "h3") {
          filterCategoryBtn.children[0].textContent = e.target.textContent;
          filterTasks(
            filterStatusBtn.children[0].textContent,
            filterCategoryBtn.children[0].textContent,
          );
          categoryList.style.display = "none";
          filterCategoryBtn.dataset.toggle = "true";
        } else return;
      });
    }
  } else {
    return;
  }
});

function mountToggleForm(taskIndex) {
  let originalTask = tasks[taskIndex];
  formInput.value = originalTask.title;
  formDescription.value = originalTask.description;
  formCategoryValue.textContent = originalTask.category;
  formHeading.textContent = "update task";
  formSubmitButton.textContent = "Update task";
  formContainer.style.display = "flex";
  currentEditIndex = taskIndex;
}

function deleteTask(taskIndex) {
  tasks.splice(taskIndex, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTask();
}

function completeTask(taskIndex) {
  tasks = tasks.map((elem) => {
    if (elem.id === taskIndex) {
      return {
        ...elem,
        status: "completed",
      };
    } else {
      return elem;
    }
  });

  renderTask();
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function undoCompleteTask(taskIndex) {
  tasks = tasks.map((elem) => {
    if (elem.id === taskIndex) {
      return {
        ...elem,
        status: "pending",
      };
    } else {
      return elem;
    }
  });

  renderTask();
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function filterTasks(status, category) {

 let tasks = document.querySelectorAll('.task')
 tasks.forEach((elem)=>{
  
  if(elem.dataset.status === status && elem.dataset.category === category){
    elem.style.display = 'block'
  }
  else if ( status === 'All' && 'Normal' === category){
    elem.style.display = 'block'
  }
  else{
    elem.style.display = 'none'
  }
 })
}

