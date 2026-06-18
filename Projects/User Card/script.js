let form = document.querySelector("form");
let inp1 = document.querySelector("#Name");
let inp2 = document.querySelector("#Occupation");
let inp3 = document.querySelector("#imageUrl");
let delBtn = document.querySelector(".del-btn");
let editBtn = document.querySelector(".edit-btn");
let formNavH1 = document.querySelector("#form-nav-h1");
let addCardBtn = document.querySelector("#addCardBtn");
let formWrapper = document.querySelector("#form-wrapper");
let formCrossBtn = document.querySelector(".cross");
let cardContainer = document.querySelector(".card-container");
let zeroUserAlert = document.querySelector("#zeroUserAlert");
let updateUserCard = document.querySelector("#updateUserCard");
let createUserCard = document.querySelector("#createUserCard");

let userCards = [];
let currentIndex = null;

function ui() {
  if (userCards.length === 0) {
      cardContainer.innerHTML = '<h1 id="zeroUserAlert">User Card Not Found.</h1>';
      return
  }
  cardContainer.innerHTML = "";

  userCards.forEach((user, idx) => {
    cardContainer.innerHTML += `
                <div key=${idx} class="card">
                    <div class='img'>
                    <img src="${user.imageUrl}">
                    </div>
                    <h3>name : ${user.name}</h3>
                    <h4>Occupation : ${user.occupation}</h4>
                    <div class="modification">
                     <button class="edit-btn" onclick="editUserCard(${idx})">Edit</button>
                     <button class="del-btn" onclick="delUserCard(${idx})">delete</button>
                   </div>
                </div>`;
  });
}

// toggle user form
addCardBtn.addEventListener("click", () => {
  inp1.value = "";
  inp2.value = "";
  inp3.value = "";
  formNavH1.textContent = `create user card`;
  createUserCard.style.display = "block";
  updateUserCard.style.display = "none";
  formWrapper.style.display = "flex";
});

// update the user card
updateUserCard.addEventListener("click", () => {
  if (currentIndex == null) return;

  let updatedUserData = {
    name: inp1.value,
    occupation: inp2.value,
    imageUrl: inp3.value,
  };

  userCards[currentIndex] = updatedUserData;
  currentIndex = null;
  formWrapper.style.display = "none";
  form.reset();
  ui();
});

// disable the user form
formCrossBtn.addEventListener("click", () => {
  formWrapper.style.display = "none";
});

// handle form submit
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let userData = {
    name: inp1.value,
    occupation: inp2.value,
    imageUrl: inp3.value,
  };

  userCards.push(userData);
  formWrapper.style.display = "none";
  form.reset();
  ui();
});

// handle user card update
function editUserCard(id) {
  currentIndex = Number(id);

  let userData = userCards[currentIndex];

  inp1.value = userData.name;
  inp2.value = userData.occupation;
  inp3.value = userData.imageUrl;

  formNavH1.textContent = `update user card`;
  createUserCard.style.display = "none";
  updateUserCard.style.display = "block";
  formWrapper.style.display = "flex";
}

// delete button handler

function delUserCard(id) {
  userCards.splice(Number(id), 1);
  ui();
}

// Event Accumulation happens when you accidentally attach the same event listener to an element multiple times.
