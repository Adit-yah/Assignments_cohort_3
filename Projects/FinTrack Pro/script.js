let main = document.querySelector("main");
let loginFormContainer = document.querySelector(".login-form");
let loginForm = document.querySelector(".login-form form");
let loginUsername = document.querySelector(".login-username input");
let loginUserPass = document.querySelector(".login-user-password input");
let registerFormToggle = document.querySelector(
  ".login-form form .register-btn",
);
let loginFormToggle = document.querySelector(".register-form form .login-btn");

let registerFormContainer = document.querySelector(".register-form");
let registerForm = document.querySelector(".register-form form");
let registerUser = document.querySelector(".register-username input");
let registerUserPass = document.querySelector(".register-user-password input");

let logoutBtn = document.querySelector("#user-logout");
let themeToggle = document.querySelector(".toggle-btn");

let username = document.querySelector(".nav-part-1 h3");

let table = document.querySelector('table')
let transactionContainer = document.querySelector('#transaction-container')

let toggleTransactionForm = document.querySelector('#toggle-transaction-form')
let hideTransactionForm = document.querySelector('#close-transaction-form')
let transactionFormContainer = document.querySelector('.transaction-form')
let transactionForm = document.querySelector('.transaction-form form')

let transactionType = document.querySelector('#type')
let transactionDescription = document.querySelector('#description')
let transactionAmount = document.querySelector('#amount')
let transactionDate = document.querySelector('#date')
let transactionCategory = document.querySelector('#category')

let BalanceCard = document.querySelector('.card-one-dets p')
let IncomeCard = document.querySelector('.card-two-dets p')
let ExpenseCard = document.querySelector('.card-three-dets p')
let TransactionCard = document.querySelector('.card-four-dets p')

let editTransactionFormContainer = document.querySelector('.edit-transaction-form')
let editTransactionForm = document.querySelector('.edit-transaction-form form')
let hideEditTransactionForm = document.querySelector('#close-edit-transaction-form')

let editTransactionType = document.querySelector('#edit-type')
let editTransactionDescription = document.querySelector('#edit-description')
let editTransactionAmount = document.querySelector('#edit-amount')
let editTransactionDate = document.querySelector('#edit-date')
let editTransactionCategory = document.querySelector('#edit-category')

let transactionSelectType = document.querySelector('#select-types')
let transactionSearchInput = document.querySelector('#search-query-input')

let clearAllTask = document.querySelector('.task-clear-btn')

let xAxisContainer = document.querySelector('.x-axis')

let dashboardBtn = document.querySelector('.dashboard')
let settingsBtn = document.querySelector('.settings')
let sideBarNavigation = document.querySelector('.sidebar-navigate')
let settingContent = document.querySelector('.setting-content')
let contentMain = document.querySelector('.content-main')

let userName = document.querySelector('#user-name')
let selectCurrency = document.querySelector('#currency')
let saveUserChangesBtn = document.querySelector('.save-changes')

let theme = JSON.parse(localStorage.getItem("theme")) || "light";
let allTransactionsArr = JSON.parse(localStorage.getItem("transactions")) || [];
let userTransactionArr = [];
let filterArr = [];
let loginUser 
let timeoutId


window.addEventListener("DOMContentLoaded", () => {
  loginUser = JSON.parse(localStorage.getItem("loginUser"));

  if (theme === "dark") {
    document.body.classList.add("dark-theme");
    themeToggle.style.justifyContent = "end";
  }

  updateUserTransaction(loginUser.id , loginUser.currency);

  if (loginUser) {
    username.textContent = loginUser.username;
    main.style.display = "flex";
    loginFormContainer.style.display = "none";
  } else {
    main.style.display = "none";
    loginFormContainer.style.display = "flex";
  }
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!loginUsername.value.trim() || !loginUserPass.value.trim()) {
    alert("Invalid username and password");
    return;
  }

  loginUser = JSON.parse(localStorage.getItem("loginUser"));
  let registerUsers = JSON.parse(localStorage.getItem("registerUsers")) || [];

  if (loginUser) {
    if (
      loginUsername.value === loginUser?.username &&
      loginUserPass.value === loginUser?.password
    ) {
      updateUserTransaction(loginUser.id , loginUser.currency);
      username.textContent = loginUser.username;
      main.style.display = "block";
      loginFormContainer.style.display = "none";

      loginUsername.value = "";
      loginUserPass.value = "";
      return;
    } else {
      alert("Invalid username & password");
      return;
    }
  } else if (registerUsers.length) {
    registerUsers.forEach((user) => {
      if (
        loginUsername.value === user.username &&
        loginUserPass.value === user.password
      ) {
        localStorage.setItem("loginUser", JSON.stringify(user));
        loginUser = user
        updateUserTransaction(loginUser.id , loginUser.currency);
        username.textContent = user.username;
        main.style.display = "flex";
        loginFormContainer.style.display = "none";

        loginUsername.value = "";
        loginUserPass.value = "";
        return;
      } else return;
    });
  } else {
    alert("Invalid username & password");
    return;
  }
});

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!registerUser.value.trim() || !registerUserPass.value.trim()) {
    alert("Set Valid username and password");
    return;
  }

  let registerUsers = JSON.parse(localStorage.getItem("registerUsers")) || [];

  let isExists = registerUsers.find(
    (user) =>
      user.username === registerUser.value &&
      user.password === registerUserPass.value,
  );

  if (isExists) {
    alert("Username Already Exists");
    return;
  }

  registerUsers.push({
    id: Date.now(),
    username: registerUser.value,
    password: registerUserPass.value,
  });
  localStorage.setItem("registerUsers", JSON.stringify(registerUsers));

  registerFormContainer.style.display = "none";
  loginFormContainer.style.display = "flex";
});

registerFormToggle.addEventListener("click", () => {
  loginForm.reset();
  loginFormContainer.style.display = "none";
  registerFormContainer.style.display = "flex";
});

loginFormToggle.addEventListener("click", () => {
  registerForm.reset();
  registerFormContainer.style.display = "none";
  loginFormContainer.style.display = "flex";
});

logoutBtn.addEventListener("click", () => {
  localStorage.setItem("loginUser", null);
  main.style.display = "none";
  loginFormContainer.style.display = "flex";
});

themeToggle.addEventListener("click", () => {
  if (theme === "dark") {
    document.body.classList.remove("dark-theme");
    themeToggle.style.justifyContent = "start";
    theme = "light";
  } else {
    document.body.classList.add("dark-theme");
    themeToggle.style.justifyContent = "end";
    theme = "dark";
  }
  localStorage.setItem("theme", JSON.stringify(theme));
});

toggleTransactionForm.addEventListener('click' , ()=>{
  transactionFormContainer.style.display = 'flex'
})

hideTransactionForm.addEventListener('click' , ()=>{
  transactionDescription.value = ''
  transactionAmount.value = ''
  transactionDate.value = ''
  transactionCategory.selectedIndex = 0
  transactionType.selectedIndex = 0
  transactionFormContainer.style.display = 'none'
})

hideEditTransactionForm.addEventListener('click' , ()=>{
  editTransactionDescription.value = ''
  editTransactionAmount.value = ''
  editTransactionDate.value = ''
  editTransactionCategory.selectedIndex = 0
  editTransactionType.selectedIndex = 0
  editTransactionFormContainer.style.display = 'none'
})

transactionForm.addEventListener( 'submit' , (e)=>{
  e.preventDefault()
  let transaction = {
    userId : loginUser.id,
    id : Date.now(),
    type : transactionType.value,
    description : transactionDescription.value,
    amount : transactionAmount.value,
    date : transactionDate.value,
    category : transactionCategory.value
  }

  allTransactionsArr.push(transaction)
  localStorage.setItem('transactions' , JSON.stringify(allTransactionsArr))
 
  updateUserTransaction(loginUser.id , loginUser.currency)

  transactionDescription.value = ''
  transactionAmount.value =''
  transactionDate.value = ''
  transactionCategory.selectedIndex = 0
  transactionType.selectedIndex = 0
  
})

editTransactionForm.addEventListener( 'submit' , (e)=>{
  e.preventDefault()

  let transaction = {
    userId : loginUser.id,
    id : editTransactionType.getAttribute('transactionId'),
    type : editTransactionType.value,
    description : editTransactionDescription.value,
    amount : editTransactionAmount.value,
    date : editTransactionDate.value,
    category : editTransactionCategory.value
  }

  allTransactionsArr = allTransactionsArr.map(trans=>{
    if(trans.id == transaction.id){
      return transaction
    }else {
      return trans
    }
  })

  localStorage.setItem('transactions' , JSON.stringify(allTransactionsArr))
 
  updateUserTransaction(loginUser.id , loginUser.currency)

  editTransactionDescription.value = ''
  editTransactionAmount.value =''
  editTransactionDate.value = ''
  editTransactionCategory.selectedIndex = 0
  editTransactionType.selectedIndex = 0

  editTransactionFormContainer.style.display = 'none'
  
})

transactionContainer.addEventListener('click' , (e)=>{

  if(e.target.localName !== 'button'){
    return
  }

  let transactionRow = e.target.closest('.transaction-details')
  let transactionId = transactionRow.getAttribute('key')
  
  if(e.target.classList.contains('del-btn')){
    deleteTransaction(transactionId)
  }
  if(e.target.classList.contains('edit-btn')){
    toggleEditForm(transactionId)
  }
})

transactionSelectType.addEventListener('change' , (e)=>{
  if(e.target.value === 'all'){
    filterArrType('all')
    return
  }
  if(e.target.value === 'expense'){
    filterArrType('expense')
    return
  }
  if(e.target.value === 'income'){
    filterArrType('income')
    return
  }
})

transactionSearchInput.addEventListener('input' , (e)=>{
  clearTimeout(timeoutId)
  timeoutId = setTimeout(()=>{   
    searchTransaction(e.target.value)
  } , 300)
})

clearAllTask.addEventListener('click' , ()=>{
  allTransactionsArr = allTransactionsArr.filter(trans => trans.userId != loginUser.id)
  localStorage.setItem('transactions' , JSON.stringify(allTransactionsArr))
  updateUserTransaction(loginUser.id , loginUser.currency)
})

sideBarNavigation.addEventListener('click' ,(e)=>{
  if(e.target.localName !== 'button'){
    return
  }

  if(e.target.classList.contains('dashboard')){
    settingsBtn.style.backgroundColor = 'transparent'
    settingContent.style.display = 'none'
    dashboardBtn.style.backgroundColor = 'var(--primary-blue)'
    contentMain.style.display = 'flex'
    
  }
  if(e.target.classList.contains('settings')){

    let currencyIndex 

    for(let [idx,child] of Array.from(selectCurrency.options).entries()){
      if(child.value == loginUser.currency){
        currencyIndex = idx
        break;
      }
    }
    console.log(currencyIndex);
    
    userName.value = loginUser.username
    selectCurrency.selectedIndex = currencyIndex
    dashboardBtn.style.backgroundColor = 'transparent' 
    contentMain.style.display = 'none'
    settingsBtn.style.backgroundColor = 'var(--primary-blue)'
    settingContent.style.display = 'flex'
  }
})

saveUserChangesBtn.addEventListener('click' ,()=>{
  if(userName.value === loginUser.username && selectCurrency.value === loginUser.currency){
    return
  }
  let updatedUserData = {
    ...loginUser ,
    username : userName.value,
    currency : selectCurrency.value
  }
  loginUser = updatedUserData
  localStorage.setItem('loginUser' , JSON.stringify(updatedUserData))
  alert('user data UPDATED')
  updateUserTransaction(loginUser.id , loginUser.currency)
  
})

function updateUserTransaction(userId , currency) {
  if(allTransactionsArr.length === 0){
    transactionContainer.innerHTML = '' 
    return
  }
  
    userTransactionArr = allTransactionsArr.filter((transaction) => transaction.userId === userId)
    filterArr = JSON.parse(JSON.stringify(userTransactionArr));
    renderTransaction(filterArr , currency)
}

function renderTransaction(array , currency) {
  if(array.length === 0){
  updateTransactionCards(0 , 0 ,0 , 0 , currency)
  handleChart( 0 , 0 , currency)
    transactionContainer.innerHTML = '' 
    return
  }
  let tr = "";
  let currentBalance = 0
  let currentIncome = 0
  let currentExpense = 0
  let totalTransaction = array.length
  array.forEach((transaction, idx) => {
    transaction.type === 'expense' ? currentExpense += Number(transaction.amount) : currentIncome += Number(transaction.amount)
    tr += ` <tr class="transaction-details" key="${transaction.id}">
                          <td class="date">${transaction.date}</td>
                          <td class="description"><h1>${transaction.description}</h1></td>
                          <td class="category"><h3>${transaction.category}</h3></td>
                          <td class="amount ${transaction.type === 'expense' ? 'expense' : 'income'}">${transaction.type === 'expense' ? '-' : '+'} ${currency+transaction.amount}</td>
                          <td class="actions">
                            <div class="action-button">
                              <button  class="edit-btn">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 20h9" />
                                  <path
                                    d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"
                                  />
                                </svg>
                              </button>
                              <button class="del-btn">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  viewBox="0 0 24 24"
                                >
                                  <polyline points="3 6 5 6 21 6" />
                                  <path d="M19 6l-1 14H6L5 6" />
                                  <path d="M10 11v6" />
                                  <path d="M14 11v6" />
                                  <path d="M9 6V4h6v2" />
                                </svg>
                              </button>
                            </div>
                          </td>
                        </tr>`;
  })
  currentBalance = currentIncome - currentExpense
  transactionContainer.innerHTML = tr
  updateTransactionCards(currentBalance , currentIncome ,currentExpense , totalTransaction , currency)
  handleChart( currentIncome ,currentExpense , currency)
}

function updateTransactionCards(currentBalance , currentIncome ,currentExpense , totalTransaction , currency){
  BalanceCard.textContent = currency + currentBalance
  IncomeCard.textContent = currency + currentIncome
  ExpenseCard.textContent = currency + currentExpense
  TransactionCard.textContent = totalTransaction
}

function deleteTransaction(transactionId){
  allTransactionsArr = allTransactionsArr.filter(trans => trans.id != transactionId)
  localStorage.setItem('transactions' , JSON.stringify(allTransactionsArr))
  updateUserTransaction(loginUser.id , loginUser.currency)
}

function toggleEditForm(transactionId){
  let transaction = filterArr.find(trans => trans.id == transactionId)
  let categoryIndex 
  for(let [idx , child] of Array.from(editTransactionCategory.options).entries()){
    if(child.value == transaction.category){
      categoryIndex = idx
      break
    }
  }
  editTransactionType.setAttribute('transactionId' , transaction.id)
  editTransactionType.selectedIndex = transaction.type == 'expense' ? 0 : 1 
  editTransactionDescription.value = transaction.description
  editTransactionAmount.value = transaction.amount
  editTransactionDate.value = transaction.date
  editTransactionCategory.selectedIndex = categoryIndex
  editTransactionFormContainer.style.display = 'flex'
}

function filterArrType(type){
  transactionSearchInput.value = ''
  if(type == 'all'){
    updateUserTransaction(loginUser.id , loginUser.currency)
    return
  }
  if(type == 'income'){
    filterArr = userTransactionArr.filter((trans)=> trans.type === type)
    renderTransaction(filterArr , loginUser.currency)
    return
  }
  if(type == 'expense'){
    filterArr = userTransactionArr.filter((trans)=> trans.type === type)
    renderTransaction(filterArr , loginUser.currency)
    return
  }
}

function searchTransaction(query){
  let searchArr = filterArr.filter((trans)=>{
    return trans.description.trim().replace(/\s+g/ , ' ').toLowerCase().includes(query.trim().replace(/\s+g/ , ' ').toLowerCase())
  })
  renderTransaction(searchArr , loginUser.currency)
}

function handleChart(currentIncome , currentExpense ,currency){
  if(!xAxisContainer){
    return
  }

  requestAnimationFrame(()=>{
    let rect = xAxisContainer.getBoundingClientRect()
    let height = (rect.height || parseFloat(getComputedStyle(xAxisContainer).height) || 250) - 18

    let totalAmount = (Math.abs(currentIncome) + Math.abs(currentExpense)) === 0 ? 10 : Math.abs(currentIncome) + Math.abs(currentExpense)
    let stepSize = totalAmount >= 100000 ? 10 : 5
    let oneStep = totalAmount / stepSize

    let a = `<div class="bars">
                <div class="income-bar"></div>
                <div class="expense-bar"></div>
              </div>`

    for(let i = stepSize ; i >= 0 ; i--){
      a += `<div class="x-axis-labels">
               <h4>${currency + Number((i*oneStep).toFixed(2))}</h4>
               <div class="x-axis-line"></div>
            </div>`
    }

    xAxisContainer.innerHTML = a

    let incomeBar = document.querySelector('.income-bar')
    let expenseBar = document.querySelector('.expense-bar')

    let onePx =  height / totalAmount

    incomeBar.style.height = onePx * Math.abs(currentIncome) + 'px'
    expenseBar.style.height = onePx * Math.abs(currentExpense) + 'px'

  })
}
