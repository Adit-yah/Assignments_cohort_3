const weatherInput = document.querySelector("#weather-query") 
const weatherInputBtn = document.querySelector("#weather-query-btn") 
const weatherWidget = document.querySelector(".weather-widget") 
const weatherContent = document.querySelector("#weather-content") 
const searchSuggestions = document.querySelector("#search-suggestions") 
const darkToggleBtn = document.querySelector("#toggle-btn") 
const locationName = document.querySelector("#location-name") 
const chanceOfRain = document.querySelector("#chance-of-rain") 
const currentIcon = document.querySelector("#current-icon") 
const currentTemp = document.querySelector("#current-temp") 
const currentPrecip = document.querySelector("#current-precip") 
const currentHumidity = document.querySelector("#current-humidity") 
const currentWind = document.querySelector("#current-wind") 
const currentDateTime = document.querySelector("#current-date-time") 
const currentCondition = document.querySelector("#current-condition") 
const hourlyContainer = document.querySelector("#hourly-container") 
const dailyContainer = document.querySelector("#daily-container") 
const searchAlert = document.querySelector("#search-alert") 
const localDateTime = document.querySelector("#local-date-time") 
const appNavigationBar = document.querySelector("#app-navigation-bar") 
const appCard = document.querySelectorAll(".app-card") 
const mainBackground = document.querySelector("main") 

const loginFormContainer = document.querySelector("#login-form-container") 
const loginForm = document.querySelector("#login-form") 
const loginToggle = document.querySelector("#toggle-login") 
const loginUsername = document.querySelector("#login-username") 
const loginPass = document.querySelector("#login-user-pass") 

const registerFormContainer = document.querySelector(
  "#register-form-container",
) 
const registerForm = document.querySelector("#register-form") 
const registerToggle = document.querySelector("#toggle-register") 
const registerUsername = document.querySelector("#register-username") 
const registerPass = document.querySelector("#register-user-pass") 
const registerConfirmPass = document.querySelector(
  "#register-user-confirm-pass",
) 
const registerCity = document.querySelector("#register-user-city") 
const registerCountry = document.querySelector("#register-user-country") 

const appContent = document.querySelector("#app-content") 

const addTaskForm = document.querySelector("#addtask-container form") 
const toggleAddTaskForm = document.querySelector("#toggle-add-task-form") 
const addTaskContainer = document.querySelector("#addtask-container") 
const cancelAddTaskForm = document.querySelector("#cancel-add-task-form") 
const addTaskTitle = document.querySelector("#addtask-title") 
const addTaskDescription = document.querySelector("#addtask-description") 
const addTaskDate = document.querySelector("#addtask-date") 
const addTaskCategory = document.querySelector("#addtask-category") 

const editTaskForm = document.querySelector("#edit-task-form-container form") 
const editTaskContainer = document.querySelector("#edit-task-form-container") 
const cancelEditTaskForm = document.querySelector("#cancel-edit-task-form") 
const editTaskTitle = document.querySelector("#edittask-title") 
const editTaskDescription = document.querySelector("#edittask-description") 
const editTaskDate = document.querySelector("#edittask-date") 
const editTaskCategory = document.querySelector("#edittask-category") 

//  Daily Planner
const addDailyPlainBtn = document.querySelector("#adddaily-plan-btn") 
const resetDailyPlainBtn = document.querySelector("#reset-daily-plain-btn") 
const plannerContainer = document.querySelector("#planner-container") 

const addPlannerContainer = document.querySelector("#addplanner-container") 
const addPlannerForm = document.querySelector("#addplanner-container form") 
const addPlannerTitle = document.querySelector("#addplanner-title") 
const addPlannerDescription = document.querySelector("#addplanner-description") 
const addPlannerTime = document.querySelector("#addplanner-time") 
const cancelAddPlannerForm = document.querySelector("#cancel-add-planner-form") 

const editPlannerContainer = document.querySelector("#editplanner-container") 
const editPlannerForm = document.querySelector("#editplanner-form") 
const editPlannerTitle = document.querySelector("#editplanner-title") 
const editPlannerDescription = document.querySelector(
  "#editplanner-description",
) 
const editPlannerTime = document.querySelector("#editplanner-time") 
const cancelEditPlannerForm = document.querySelector(
  "#cancel-edit-planner-form",
) 

// timer
const pomodoroTime = document.querySelector("#pomodoro-time")  
const pomodoroStatus = document.querySelector("#pomodoro-status")  

const startBtn = document.querySelector("#pomodoro-start-btn")  
const pauseBtn = document.querySelector("#pomodoro-pause-btn")  
const resetBtn = document.querySelector("#pomodoro-reset-btn")  
const skipBtn = document.querySelector("#pomodoro-skip-btn")  

const focusModeBtn = document.querySelector("#focus-mode")  
const shortBreakBtn = document.querySelector("#short-break-mode")  
const longBreakBtn = document.querySelector("#long-break-mode")  


const quoteText = document.querySelector("#quote-text")  
const quoteAuthor = document.querySelector("#quote-author")  

const newQuoteBtn = document.querySelector("#new-quote-btn")  
const copyQuoteBtn = document.querySelector("#copy-quote-btn")  

//
const taskList = document.querySelector("#task-list") 
const deleteAllTask = document.querySelector("#delete-all-task-btn") 
const todoWidget = taskList.closest(".flex.hidden.flex-col.gap-2")
const plannerWidget = document.querySelector("#planner-container").closest(".flex.hidden.flex-col.gap-2")
const timerWidget = document.querySelector("#pomodoro-time").closest(".flex.hidden.flex-col.gap-3")
const quoteWidget = document.querySelector("#quote-text").closest(".flex.hidden.flex-col.gap-3")

const logoutBtn = document.querySelector("#logout-btn") 

let allUserPlains = [] 
let activeUserPlain = [] 
let registerUsers 
let activeUser 
let activeUserTasks 
let allUserTasks 
let theme = localStorage.getItem("theme") || "light" 

const pomodoroModes = {
  focus: 25 * 60,
  short: 5 * 60,
  long: 15 * 60,
}

let pomodoroState = {
  mode: "focus",
  timeLeft: pomodoroModes.focus,
  isRunning: false,
  timerId: null,
  times: {
    focus: 25 * 60,
    short: 5 * 60,
    long: 15 * 60,
  },
}



function updateBackgroundImage() {
  const currentHour = new Date().getHours() 

  let backgroundImage = "assets/Night.png"

  if (currentHour >= 6 && currentHour < 10) {
    backgroundImage = "assets/Morning.png"
  } else if (currentHour >= 10 && currentHour < 16) {
    backgroundImage = "assets/Day.png"
  } else if (currentHour >= 16 && currentHour < 19) {
    backgroundImage = "assets/Evening.png"
  }

  mainBackground.style.backgroundImage = `url("${backgroundImage}")`
}

//  Local time
setInterval(() => {
  let dateTime = new Date().toLocaleString([], {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: "true",
  }) 

  localDateTime.innerHTML = dateTime 
  updateBackgroundImage() 
}, 1000) 

window.addEventListener("DOMContentLoaded", () => {
  activeUser = JSON.parse(localStorage.getItem("activeUser")) 
  registerUsers = JSON.parse(localStorage.getItem("registerUsers")) || [] 
  allUserTasks = JSON.parse(localStorage.getItem("allUserTasks")) || [] 
  allUserPlains = JSON.parse(localStorage.getItem("allUserPlains")) || [] 
  updateBackgroundImage() 

  if (theme == "dark") {
    document.documentElement.classList.add("dark") 
    document.querySelector(".ri-moon-fill").classList.add("hidden") 
    document.querySelector(".ri-sun-fill").classList.remove("hidden") 
  } else {
    document.documentElement.classList.remove("dark") 
    document.querySelector(".ri-moon-fill").classList.remove("hidden") 
    document.querySelector(".ri-sun-fill").classList.add("hidden") 
  }

  if (activeUser) {
    loginFormContainer.classList.add("hidden") 
    registerFormContainer.classList.add("hidden") 
    appContent.classList.remove("hidden") 
    toggleWidget("weather")
    let weatherQuery = `${activeUser.city + "," + activeUser.country}` 
    updateUserTaskData(allUserTasks, activeUser.userId) 
    updateUserPlainData(allUserPlains, activeUser.userId) 
    searchWeather(weatherQuery) 
  } else {
    loginFormContainer.classList.remove("hidden") 
    registerFormContainer.classList.add("hidden") 
    appContent.classList.add("hidden") 
  }
}) 

// Dark Mode Toggle
darkToggleBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark") 
  document.querySelector(".ri-moon-fill").classList.toggle("hidden") 
  document.querySelector(".ri-sun-fill").classList.toggle("hidden") 
  theme = theme == "light" ? "dark" : "light" 
  localStorage.setItem("theme", theme) 
}) 

// log-out btn handle
logoutBtn.addEventListener("click", () => {
  activeUser = null 
  activeUserTasks = [] 
  activeUserPlain = [] 
  taskList.innerHTML = "" 
  plannerContainer.innerHTML = "" 
  localStorage.setItem("activeUser", null) 
  loginFormContainer.classList.remove("hidden") 
  registerFormContainer.classList.add("hidden") 
  appContent.classList.add("hidden") 
}) 

// login form toggle
loginToggle.addEventListener("click", () => {
  registerForm.reset() 
  registerFormContainer.classList.add("hidden") 
  loginFormContainer.classList.remove("hidden") 
}) 
// register form toggle
registerToggle.addEventListener("click", () => {
  loginForm.reset() 
  loginFormContainer.classList.add("hidden") 
  registerFormContainer.classList.remove("hidden") 
}) 

// handle register form

registerForm.addEventListener("submit", (e) => {
  e.preventDefault() 

  if (
    !(
      registerPass.value.trim() &&
      registerConfirmPass.value.trim() &&
      registerUsername.value.trim() &&
      registerCity.value.trim() &&
      registerCountry.value.trim()
    )
  ) {
    return alert("Empty string and spaces are not allowed") 
  }

  if (registerPass.value !== registerConfirmPass.value) {
    return alert("Pass Dose not match") 
  }

  let newUser = {
    userId: Date.now(),
    username: registerUsername.value,
    city: registerCity.value,
    country: registerCountry.value,
    password: registerPass.value,
  } 

  registerUsers.push(newUser) 
  localStorage.setItem("registerUsers", JSON.stringify(registerUsers)) 

  activeUser = newUser 
  localStorage.setItem("activeUser", JSON.stringify(newUser)) 
  alert("User Register Successfully , Please Login To Continue") 

  registerForm.reset() 
  registerFormContainer.classList.add("hidden") 
  loginFormContainer.classList.remove("hidden") 
}) 

// handle login form
loginForm.addEventListener("submit", (e) => {
  e.preventDefault() 

  if (!(loginPass.value.trim() && loginUsername.value.trim())) {
    return alert("Empty string and spaces are not allowed") 
  }

  if (registerUsers.length) {
    registerUsers.forEach((user) => {
      if (
        loginPass.value === user.password &&
        loginUsername.value === user.username
      ) {
        alert("User Login Successfully") 
        activeUser = user 
        activeUserTasks = [] 
        activeUserPlain = [] 
        taskList.innerHTML = "" 
        plannerContainer.innerHTML = "" 
        localStorage.setItem("activeUser", JSON.stringify(user)) 
        loginForm.reset() 
        loginFormContainer.classList.add("hidden") 
        registerFormContainer.classList.add("hidden") 

        appContent.classList.remove("hidden") 
        let weatherQuery = `${user.city + "," + user.country}` 
        updateUserTaskData(allUserTasks, activeUser.userId) 
        updateUserPlainData(allUserPlains, activeUser.userId) 
        searchWeather(weatherQuery) 
      }
    }) 
  } else {
    return alert("Invalid username or password") 
  }
}) 

// toggle edit task form
toggleAddTaskForm.addEventListener("click", () => {
  addTaskContainer.classList.remove("hidden") 
}) 

cancelAddTaskForm.addEventListener("click", () => {
  addTaskForm.reset() 
  addTaskContainer.classList.add("hidden") 
}) 

// add task
addTaskForm.addEventListener("submit", (e) => {
  e.preventDefault() 

  if (!(addTaskTitle.value.trim() && addTaskDescription.value.trim())) {
    return alert("Space and Empty String not allowed") 
  }

  let newTask = {
    time: new Date().toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }),
    userId: activeUser.userId,
    taskId: Date.now(),
    title: addTaskTitle.value,
    description: addTaskDescription.value,
    date: addTaskDate.value,
    isCompleted: false,
    category: addTaskCategory.options[addTaskCategory.selectedIndex].value,
  } 

  alert("task added successfully") 
  allUserTasks.push(newTask) 
  activeUserTasks.push(newTask) 
  localStorage.setItem("allUserTasks", JSON.stringify(allUserTasks)) 
  addTaskForm.reset() 
  addTaskContainer.classList.add("hidden") 
  renderUserTask(activeUserTasks) 
}) 

// task actions handler
taskList.addEventListener("click", (e) => {
  const button = e.target.closest("button") 

  if (!button) {
    return 
  }

  let task = button.closest(".task") 
  let taskId = task.getAttribute("key") 
  let title = button.getAttribute("title") 

  if (title == "Edit") {
    toggleEditTaskForm(taskId) 
  }
  if (title == "Complete") {
    markAsComplete(taskId) 
  }
  if (title == "Delete") {
    deleteTask(taskId) 
  }
}) 

// delete all active user tasks
deleteAllTask.addEventListener("click", () => {
  activeUserTasks.length = 0 
  renderUserTask(activeUserTasks) 

  allUserTasks = allUserTasks.filter(
    (task) => task.userId != activeUser.userId,
  ) 
  localStorage.setItem("allUserTasks", JSON.stringify(allUserTasks)) 
}) 

// Search query
let SearchQueryArray = [] 
let SearchInputDebounce = null 

weatherInput.addEventListener("input", (e) => {
  clearTimeout(SearchInputDebounce) 

  SearchInputDebounce = setTimeout(async () => {
    try {
      if (weatherInput.value.trim()) {
        let search = await fetch(
          `https://api.weatherapi.com/v1/search.json?key=238627eb91a54e85adf104216260607&q=${weatherInput.value}`,
        ) 
        if (!search.ok) {
          throw new Error(`API returned status code: ${search.status}`) 
        }

        SearchQueryArray = await search.json() 

        renderSearchQuery(SearchQueryArray) 
      } else {
        SearchQueryArray.length = 0 
        renderSearchQuery(SearchQueryArray) 
      }
    } catch (error) {
      console.log(error) 
    }
  }) 
}) 

// Render Search Query
searchSuggestions.addEventListener("click", (e) => {
  if (e.target.localName !== "button") {
    return 
  }
  let query = e.target.getAttribute("name") 

  searchWeather(query) 
}) 

weatherInputBtn.addEventListener("click", () => {
  searchWeather(weatherInput.value) 
}) 

function toggleWidget(widgetName) {
  const widgetMap = {
    weather: weatherWidget,
    todo: todoWidget,
    planner: plannerWidget,
    timer: timerWidget,
    quote: quoteWidget,
  }

  Object.values(widgetMap).forEach((widget) => {
    if (widget) {
      widget.classList.add("hidden")
    }
  })

  if (widgetMap[widgetName]) {
    widgetMap[widgetName].classList.remove("hidden")
  }

  appCard.forEach((card) => {
    card.classList.remove("bg-white/60", "dark:bg-black/40", "bg-white/30", "dark:bg-gray-400/30")
    card.classList.add("bg-white/30", "dark:bg-gray-400/30")

    if (card.dataset.widget === widgetName) {
      card.classList.remove("bg-white/30", "dark:bg-gray-400/30")
      card.classList.add("bg-white/60", "dark:bg-black/40")
    }
  })
}

appCard.forEach((card) => {
  const video = card.querySelector("video") 

  card.addEventListener("mouseenter", () => {
    video.play() 
  }) 

  card.addEventListener("mouseleave", () => {
    video.pause() 
    video.currentTime = 0 
  }) 

  card.addEventListener("click", () => {
    toggleWidget(card.dataset.widget)
  })
}) 


async function searchWeather(query) {
  weatherInput.value = "" 
  searchSuggestions.classList.add("hidden") 
  let city = query.trim().toLowerCase() 

  if (!city) {
    return 
  }

  try {
    let weatherData = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=238627eb91a54e85adf104216260607&q=${encodeURIComponent(city)}&days=6&aqi=yes&alerts=no`,
    ) 

    if (!weatherData.ok) {
      throw new Error(`API returned status code: ${search.status}`) 
    }

    let res = await weatherData.json() 
    renderWeather(res) 
  } catch (error) {
    console.log(error) 
  }
}

function renderWeather(weatherData) {
  if (!weatherData.current) return 

  locationName.textContent = `${weatherData.location.name}, ${weatherData.location.country}` 

  chanceOfRain.textContent = `Chance of rain ${weatherData.forecast.forecastday[0].day.daily_chance_of_rain}%` 

  currentIcon.src = "https:" + weatherData.current.condition.icon 
  currentIcon.alt = weatherData.current.condition.text 

  currentTemp.textContent = Math.round(weatherData.current.temp_c) 

  currentPrecip.textContent = `Precipitation : ${weatherData.current.precip_mm} mm` 

  currentHumidity.textContent = `Humidity : ${weatherData.current.humidity}%` 

  currentWind.textContent = `Wind : ${weatherData.current.wind_kph} km/h` 

  currentDateTime.textContent = new Date(
    weatherData.location.localtime,
  ).toLocaleString("en-US", {
    weekday: "long",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }) 

  currentCondition.textContent = weatherData.current.condition.text 

  //  hourly forecast

  hourlyContainer.innerHTML = "" 

  const hourlyFragment = document.createDocumentFragment() 

  const currentHour = new Date(weatherData.location.localtime).getHours() 

  weatherData.forecast.forecastday[0].hour
    .slice(currentHour + 1, currentHour + 7)
    .forEach((hour) => {
      const card = document.createElement("div") 

      card.className = "flex flex-col gap-4 items-center justify-center" 

      card.innerHTML = `
      <h3 class="text-[12px] font-bold text-gray-700 dark:text-gray-300 text-shadow-sm">
                    ${new Date(hour.time).toLocaleTimeString([], {
                      hour: "numeric",
                      hour12: true,
                    })}
                </h3>

                <div class="flex items-center justify-center relative aspect-square w-8">
                <img
                class="absolute w-16"
                src="https:${hour.condition.icon}"
                    >
                    </div>
                    
                    <h3 class="text-[16px] font-semibold text-gray-900 dark:text-gray-200">
                    ${Math.round(hour.temp_c)}°C
                    </h3>
                    ` 

      hourlyFragment.appendChild(card) 
    }) 

  hourlyContainer.appendChild(hourlyFragment) 

  //  7 days forecast

  dailyContainer.innerHTML = "" 

  const dailyFragment = document.createDocumentFragment() 

  weatherData.forecast.forecastday.forEach((day, index) => {
    const row = document.createElement("div") 

    const dayName =
      index === 0
        ? "Today"
        : new Date(day.date).toLocaleDateString("en-US", {
            weekday: "short",
          }) 

    row.className = "flex items-center justify-between py-3" 

    row.innerHTML = `
            <h2 class="w-12 text-xs font-semibold uppercase text-gray-700 dark:text-gray-200">
            ${dayName}
            </h2>
            
            <div class="flex items-center gap-2 flex-1 justify-center">
            <img
            class="w-8 h-8"
                    src="https:${day.day.condition.icon}"
                    >

                    <span class="text-sm font-medium text-gray-800 dark:text-gray-200">
                    ${day.day.condition.text}
                </span>
            </div>
            
            <h3 class="text-sm font-semibold text-gray-900 dark:text-gray-200">
                ${Math.round(day.day.maxtemp_c)}°
                /
                <span class="text-gray-600 dark:text-gray-400">
                    ${Math.round(day.day.mintemp_c)}°
                </span>
            </h3>
        ` 

    dailyFragment.appendChild(row) 
  }) 

  dailyContainer.appendChild(dailyFragment) 

  weatherContent.classList.remove("hidden") 
  searchAlert.classList.add("hidden") 
}

// Render Search Query Array
function renderSearchQuery(array) {
  if (!array.length) {
    searchSuggestions.classList.toggle("hidden") 
    return 
  }

  searchSuggestions.classList.remove("hidden") 

  let fragment = document.createDocumentFragment() 

  let a = document.createElement("div") 
  array.forEach((data) => {
    a.innerHTML += `<button key='${data.id}'
                        name='${data.name}'
                        class="w-full px-4 py-3 cursor-pointer flex items-center justify-between hover:bg-white/40 dark:hover:bg-white/10 transition border-b border-black/10 dark:border-white/10"
                      >
                        <div class="flex items-center gap-3 pointer-events-none">
                          <div
                            class="w-9 h-9 rounded-full bg-blue-500/15 dark:bg-blue-400/20 flex items-center justify-center"
                          >
                            <i
                              class="ri-map-pin-line text-blue-600 dark:text-blue-300"
                            ></i>
                          </div>
  
                          <div class="text-left">
                            <h3
                              class="text-sm font-semibold text-gray-800 dark:text-white"
                            >
                              ${data.name}
                            </h3>
                            <p class="text-xs text-gray-600 dark:text-gray-400">
                              ${data.region + ", " + data.country}
                            </p>
                          </div>
                        </div>
  
                        <i
                          class="ri-arrow-right-up-line text-gray-500 dark:text-gray-400 pointer-events-none"
                        ></i>
                      </button>` 
    fragment.appendChild(a.firstChild) 
  }) 
  searchSuggestions.innerHTML = "" 
  searchSuggestions.appendChild(fragment) 
}

//  update user task data
function updateUserTaskData(array, activeUserId) {
  activeUserTasks = array.filter((elem) => elem.userId == activeUserId) 
  renderUserTask(activeUserTasks) 
}

// renderUserTask
function renderUserTask(array) {
  if (!array.length) {
    taskList.innerHTML = "" 
    return 
  }

  let fragment = document.createDocumentFragment() 
  let div = document.createElement("div") 

  array.forEach((task) => {
    div.innerHTML = `<div
                  key='${task.taskId}'
                  class="task group rounded-lg border border-white/30 dark:border-white/10 bg-white/60 dark:bg-black/20 backdrop-blur-sm p-4 hover:bg-white/80 dark:hover:bg-black/30 transition-all duration-300 shadow-sm"
                >
                  <!-- Header -->
                  <div class="flex items-start justify-between gap-3">
                    <!-- Left -->
                    <div class="flex-1 min-w-0">
                      <div class="flex items-center gap-2 flex-wrap">
                        <h2
                          class="truncate text-base font-semibold text-gray-800 dark:text-gray-100"
                        >
                         ${task.title}
                        </h2>

                        <span
                          class=" ${task.category === "important" ? "flex" : "hidden"}  items-center gap-1 rounded-full bg-yellow-400/20 px-2 py-0.5 text-[10px] font-medium text-yellow-600 dark:text-yellow-300"
                        >
                          <i class="ri-star-fill text-[9px]"></i>
                          Important
                        </span>
                        <span
                          class=" ${task.isCompleted ? "inline-flex" : "hidden"} items-center gap-1 rounded-full bg-green-500/15 border border-green-500/20 px-2 py-0.5 text-[10px] font-medium text-green-700 dark:text-green-300"
                        >
                          <i class="ri-check-double-line text-[10px]"></i>
                          Completed
                        </span>
                      </div>

                      <div
                        class="mt-1 flex flex-wrap items-center gap-4 text-xs text-gray-500 dark:text-gray-400"
                      >
                        <span class="flex items-center gap-1">
                          <i class="ri-calendar-line"></i>
                          ${task.date}
                        </span>

                        <span class="flex items-center gap-1">
                          <i class="ri-time-line"></i>
                          ${task.time}
                        </span>
                      </div>
                    </div>

                    <!-- Actions -->

                    <div class="flex items-center gap-1">
                      <button
                        class="${task.isCompleted ? "hidden" : "grid"} h-8 w-8 cursor-pointer place-items-center rounded-md hover:bg-green-500/20 hover:text-green-500 transition"
                        title="Complete"
                      >
                        <i class="ri-check-line pointer-events-none"></i>
                      </button>

                      <button
                        class="${task.isCompleted ? "hidden" : "grid"} h-8 w-8 cursor-pointer place-items-center rounded-md hover:bg-sky-500/20 hover:text-sky-500 transition"
                        title="Edit"
                      >
                        <i class="ri-edit-line  pointer-events-none"></i>
                      </button>

                      <button
                        class="grid h-8 w-8 cursor-pointer place-items-center rounded-md hover:bg-red-500/20 hover:text-red-500 transition"
                        title="Delete"
                      >
                        <i class="ri-delete-bin-6-line  pointer-events-none"></i>
                      </button>
                    </div>
                  </div>

                  <!-- Description -->

                  <div
                    class="mt-3 max-h-20 overflow-y-auto [&::-webkit-scrollbar]:hidden"
                  >
                    <p
                      class="text-sm leading-6 text-gray-700 dark:text-gray-300 break-words"
                    >
                      ${task.description}
                    </p>
                  </div>
                </div>` 
    fragment.appendChild(div.firstElementChild) 
  }) 

  taskList.innerHTML = "" 
  taskList.appendChild(fragment) 
}

// toggle Edit task form
function toggleEditTaskForm(taskId) {
  let editTask = activeUserTasks.filter((task) => task.taskId == taskId)[0] 

  editTaskForm.setAttribute("taskno", editTask.taskId) 
  editTaskTitle.value = editTask.title 
  editTaskDescription.value = editTask.description 
  editTaskDate.value = editTask.date 
  editTaskCategory.selectedIndex = editTask.category == "important" ? 1 : 0 
  editTaskContainer.classList.remove("hidden") 
}

// cancel edit task
cancelEditTaskForm.addEventListener("click", () => {
  editTaskTitle.value = "" 
  editTaskDescription.value = "" 
  editTaskDate.value = "" 
  editTaskCategory.selectedIndex = 0 
  editTaskContainer.classList.add("hidden") 
}) 

//  update task handler
editTaskForm.addEventListener("submit", (e) => {
  e.preventDefault() 

  let editTask = {
    title: editTaskTitle.value,
    description: editTaskDescription.value,
    data: editTaskDate.value,
    category: editTaskCategory.options[editTaskCategory.selectedIndex].value,
  } 

  let taskno = e.target.getAttribute("taskno") 

  activeUserTasks = activeUserTasks.map((task) => {
    if (task.taskId == taskno) {
      return {
        ...task,
        ...editTask,
      } 
    } else {
      return task 
    }
  }) 

  renderUserTask(activeUserTasks) 

  allUserTasks = allUserTasks.map((task) => {
    if (task.taskId == taskno) {
      return {
        ...task,
        ...editTask,
      } 
    } else {
      return task 
    }
  }) 

  localStorage.setItem("allUserTasks", JSON.stringify(allUserTasks)) 

  editTaskTitle.value = "" 
  editTaskDescription.value = "" 
  editTaskDate.value = "" 
  editTaskCategory.selectedIndex = 0 
  editTaskContainer.classList.add("hidden") 
}) 

function markAsComplete(taskId) {
  activeUserTasks = activeUserTasks.map((task) => {
    if (task.taskId == taskId) {
      return {
        ...task,
        isCompleted: true,
      } 
    } else {
      return task 
    }
  }) 

  renderUserTask(activeUserTasks) 

  allUserTasks = allUserTasks.map((task) => {
    if (task.taskId == taskId) {
      return {
        ...task,
        isCompleted: true,
      } 
    } else {
      return task 
    }
  }) 

  localStorage.setItem("allUserTasks", JSON.stringify(allUserTasks)) 
}

function deleteTask(taskId) {
  let deleteIdx = activeUserTasks.findIndex((task) => task.taskId == taskId) 

  activeUserTasks.splice(deleteIdx, 1) 

  renderUserTask(activeUserTasks) 

  let deleteIdxx = allUserTasks.findIndex((task) => task.taskId == taskId) 
  allUserTasks.splice(deleteIdxx, 1) 
  localStorage.setItem("allUserTasks", JSON.stringify(allUserTasks)) 
}

// Daily Planner

plannerContainer.addEventListener("click", (e) => {
  const button = e.target.closest("button") 

  if (!button) {
    return 
  }

  let plain = button.closest(".plain") 
  let planId = plain.getAttribute("key") 
  let title = button.getAttribute("title") 

  if (title == "Edit") {
    toggleEditPlannerForm(planId) 
  }
  if (title == "Complete") {
    markPlanAsComplete(planId) 
  }
  if (title == "Delete") {
    deletePlan(planId) 
  }
}) 

// toggle add plan
addDailyPlainBtn.addEventListener("click", () => {
  addPlannerContainer.classList.remove("hidden") 
}) 

// cancel plan
cancelAddPlannerForm.addEventListener("click", () => {
  addPlannerForm.reset() 
  addPlannerContainer.classList.add("hidden") 
}) 

//  add plan
addPlannerForm.addEventListener("submit", (e) => {
  e.preventDefault() 

  if (!(addPlannerTitle.value.trim() && addPlannerDescription.value.trim())) {
    return alert("Space and Empty String not allowed") 
  }

  let newPlain = {
    userId: activeUser.userId,
    title: addPlannerTitle.value,
    description: addPlannerDescription.value,
    time: addPlannerTime.value,
    planId: Date.now(),
    isCompleted: false,
  } 

  activeUserPlain.push(newPlain) 
  allUserPlains.push(newPlain) 
  localStorage.setItem("allUserPlains", JSON.stringify(allUserPlains)) 
  addPlannerForm.reset() 
  addPlannerContainer.classList.add("hidden") 

  renderUserPlain(activeUserPlain) 
}) 

// reset daily plain button
resetDailyPlainBtn.addEventListener("click", () => {
  activeUserPlain.length = 0 
  renderUserPlain(activeUserPlain) 
  allUserPlains = allUserPlains.filter((plain) => plain.userId != activeUser.userId) 

  localStorage.setItem("allUserPlains", JSON.stringify(allUserPlains)) 
}) 

function updateUserPlainData(allUserPlains, activeUserId) {
  activeUserPlain = allUserPlains.filter((plain) => plain.userId == activeUserId) 
  renderUserPlain(activeUserPlain) 
}

function toggleEditPlannerForm(planId) {
  let editPlain = activeUserPlain.filter((plain) => plain.planId == planId)[0] 

  editPlannerForm.setAttribute("planid", editPlain.planId) 
  editPlannerTitle.value = editPlain.title 
  editPlannerDescription.value = editPlain.description 
  editPlannerTime.value = editPlain.time 
  editPlannerContainer.classList.remove("hidden") 
}

cancelEditPlannerForm.addEventListener("click", () => {
  editPlannerTitle.value = "" 
  editPlannerDescription.value = "" 
  editPlannerTime.value = "" 
  editPlannerContainer.classList.add("hidden") 
}) 

editPlannerForm.addEventListener("submit", (e) => {
  e.preventDefault() 

  let editPlain = {
    title: editPlannerTitle.value,
    description: editPlannerDescription.value,
    time: editPlannerTime.value,
  } 

  let planId = e.target.getAttribute("planid") 

  activeUserPlain = activeUserPlain.map((plain) => {
    if (plain.planId == planId) {
      return {
        ...plain,
        ...editPlain,
      } 
    } else {
      return plain 
    }
  }) 

  renderUserPlain(activeUserPlain) 

  allUserPlains = allUserPlains.map((plain) => {
    if (plain.planId == planId) {
      return {
        ...plain,
        ...editPlain,
      } 
    } else {
      return plain 
    }
  }) 

  localStorage.setItem("allUserPlains", JSON.stringify(allUserPlains)) 

  editPlannerTitle.value = "" 
  editPlannerDescription.value = "" 
  editPlannerTime.value = "" 
  editPlannerContainer.classList.add("hidden") 
}) 

function markPlanAsComplete(planId) {
  activeUserPlain = activeUserPlain.map((plain) => {
    if (plain.planId == planId) {
      return {
        ...plain,
        isCompleted: true,
      } 
    } else {
      return plain 
    }
  }) 

  renderUserPlain(activeUserPlain) 

  allUserPlains = allUserPlains.map((plain) => {
    if (plain.planId == planId) {
      return {
        ...plain,
        isCompleted: true,
      } 
    } else {
      return plain 
    }
  }) 

  localStorage.setItem("allUserPlains", JSON.stringify(allUserPlains)) 
}

function deletePlan(planId) {
  let deleteIdx = activeUserPlain.findIndex((plain) => plain.planId == planId) 
  if (deleteIdx !== -1) {
    activeUserPlain.splice(deleteIdx, 1) 
  }

  renderUserPlain(activeUserPlain) 

  let deleteIdxx = allUserPlains.findIndex((plain) => plain.planId == planId) 
  if (deleteIdxx !== -1) {
    allUserPlains.splice(deleteIdxx, 1) 
  }
  localStorage.setItem("allUserPlains", JSON.stringify(allUserPlains)) 
}

function renderUserPlain(array) {
  if (!array.length) {
    plannerContainer.innerHTML = "" 
    return 
  }

  let fragment = document.createDocumentFragment() 
  let div = document.createElement("div") 

  array.forEach((plain) => {
    div.innerHTML = `<div
                     key="${plain.planId}"
                     class="plain group rounded-lg border backdrop-blur-sm p-3 transition ${
                      plain.isCompleted
                        ? "border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] opacity-75"
                        : "border-white/30 dark:border-white/10 bg-white/60 dark:bg-black/20 hover:bg-white/80 dark:hover:bg-black/30"
                    }"
                    >
                  <div class="flex justify-between gap-3">
                    <div class="flex-1">
                      <div class="flex items-center gap-2">
                  <span
                    class="rounded-md px-2 py-1 text-xs font-semibold transition ${
                      plain.isCompleted
                        ? "bg-transparent text-gray-400 dark:text-gray-500"
                        : "bg-white dark:bg-white/10 text-gray-700 dark:text-gray-200"
                    }"
                  >
                    ${plain.time}
                  </span>

                        <h2
                          class="font-semibold text-gray-800 dark:text-gray-100"
                        >
                          ${plain.title}
                        </h2>
                      </div>

                      <p
                        class="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-2"
                      >
                        ${plain.description}
                      </p>
                    </div>

                    <div
                      class="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition"
                    >
                    <button
                      class="grid h-8 w-8 place-items-center rounded-md transition ${
                        plain.isCompleted
                          ? "bg-gray-200 dark:bg-white/10 text-gray-500 dark:text-gray-300"
                          : "hover:bg-green-500/20 hover:text-green-500"
                      }"
                      title="Complete"
                    >
                      <i class="${
                        plain.isCompleted ? "ri-check-double-line" : "ri-check-line"
                      }"></i>
                    </button>

                      <button
                      title='Edit'
                      class="${plain.isCompleted ? "hidden" : "grid"} h-8 w-8 place-items-center rounded-md hover:bg-sky-500/20 hover:text-sky-500 transition"
                      >
                        <i class="ri-edit-line"></i>
                      </button>

                      <button
                      title='Delete'
                        class="grid h-8 w-8 place-items-center rounded-md hover:bg-red-500/20 hover:text-red-500 transition"
                      >
                        <i class="ri-delete-bin-6-line"></i>
                      </button>
                    </div>
                  </div>
                </div>` 

    fragment.appendChild(div.firstElementChild) 
  }) 
  plannerContainer.innerHTML = "" 
  plannerContainer.appendChild(fragment) 
}

// timer

function formatPomodoroTime(seconds) {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0")
  const remainingSeconds = String(seconds % 60).padStart(2, "0")

  return `${minutes}:${remainingSeconds}`
}

function updatePomodoroDisplay() {
  pomodoroTime.textContent = formatPomodoroTime(pomodoroState.timeLeft)

  if (pomodoroState.mode === "focus") {
    pomodoroStatus.textContent = pomodoroState.isRunning
      ? "Focus in progress"
      : "Ready to focus"
  }

  if (pomodoroState.mode === "short") {
    pomodoroStatus.textContent = pomodoroState.isRunning
      ? "Short break in progress"
      : "Short break ready"
  }

  if (pomodoroState.mode === "long") {
    pomodoroStatus.textContent = pomodoroState.isRunning
      ? "Long break in progress"
      : "Long break ready"
  }
}

function setPomodoroMode(mode) {
  clearInterval(pomodoroState.timerId)
  pomodoroState.timerId = null
  pomodoroState.mode = mode
  pomodoroState.timeLeft = pomodoroState.times[mode]
  pomodoroState.isRunning = false

  focusModeBtn.className = "px-4 py-2 rounded-lg border border-white/20 dark:border-white/10 text-sm"
  shortBreakBtn.className = "px-4 py-2 rounded-lg border border-white/20 dark:border-white/10 text-sm"
  longBreakBtn.className = "px-4 py-2 rounded-lg border border-white/20 dark:border-white/10 text-sm"

  if (mode === "focus") {
    focusModeBtn.classList.add("bg-white", "dark:bg-white/10", "font-medium")
  }

  if (mode === "short") {
    shortBreakBtn.classList.add("bg-white", "dark:bg-white/10", "font-medium")
  }

  if (mode === "long") {
    longBreakBtn.classList.add("bg-white", "dark:bg-white/10", "font-medium")
  }

  updatePomodoroDisplay()
}

function stopPomodoroTimer() {
  clearInterval(pomodoroState.timerId)
  pomodoroState.timerId = null
  pomodoroState.isRunning = false
}

function handlePomodoroComplete() {
  stopPomodoroTimer()

  if (pomodoroState.mode === "focus") {
    setPomodoroMode("short")
    pomodoroStatus.textContent = "Short break started"
    return
  }

  setPomodoroMode("focus")
  pomodoroStatus.textContent = "Focus mode started"
}

focusModeBtn.addEventListener("click", () => setPomodoroMode("focus"))
shortBreakBtn.addEventListener("click", () => setPomodoroMode("short"))
longBreakBtn.addEventListener("click", () => setPomodoroMode("long"))

startBtn.addEventListener("click", () => {
  if (pomodoroState.isRunning) {
    return
  }

  pomodoroState.isRunning = true
  pomodoroState.timerId = setInterval(() => {
    pomodoroState.timeLeft -= 1
    pomodoroState.times[pomodoroState.mode] = pomodoroState.timeLeft

    if (pomodoroState.timeLeft <= 0) {
      handlePomodoroComplete()
      return
    }

    updatePomodoroDisplay()
  }, 1000)

  updatePomodoroDisplay()
})

pauseBtn.addEventListener("click", () => {
  stopPomodoroTimer()
  updatePomodoroDisplay()
})

resetBtn.addEventListener("click", () => {
  stopPomodoroTimer()
  pomodoroState.timeLeft = pomodoroModes[pomodoroState.mode]
  pomodoroState.times[pomodoroState.mode] = pomodoroModes[pomodoroState.mode]
  updatePomodoroDisplay()
})

skipBtn.addEventListener("click", () => {
  stopPomodoroTimer()

  if (pomodoroState.mode === "focus") {
    setPomodoroMode("short")
    return
  }

  if (pomodoroState.mode === "short") {
    setPomodoroMode("long")
    return
  }

  setPomodoroMode("focus")
})

setPomodoroMode("focus")


async function getQuote() {
  try {
    newQuoteBtn.disabled = true  
    quoteText.textContent = "Loading..."  
    quoteAuthor.textContent = ""  

    const randomId = Math.floor(Math.random() * 145) + 1  

    const response = await fetch(
      `https://dummyjson.com/quotes/${randomId}`
    )  

    const data = await response.json()  

    quoteText.textContent = `"${data.quote}"`  
    quoteAuthor.textContent = `— ${data.author}`  
  } catch (err) {
    quoteText.textContent = "Failed to load quote."  
    quoteAuthor.textContent = ""  
    console.error(err)  
  } finally {
    newQuoteBtn.disabled = false  
  }
}

// by AI
newQuoteBtn.addEventListener("click", getQuote)  

copyQuoteBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(
      `${quoteText.textContent}\n${quoteAuthor.textContent}`
    )  

    const old = copyQuoteBtn.innerHTML  
    copyQuoteBtn.innerHTML =
      '<i class="ri-check-line mr-1"></i>Copied'  

    setTimeout(() => {
      copyQuoteBtn.innerHTML = old  
    }, 1500)  
  } catch (err) {
    console.error(err)  
  }
})  

getQuote()  