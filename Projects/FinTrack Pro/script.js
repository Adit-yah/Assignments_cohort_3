let main = document.querySelector('main')

window.addEventListener('DOMContentLoaded' , ()=>{
    let loginUser = JSON.parse(localStorage.getItem('loginUser'))

    if(loginUser){
       main.style.display = '' 
    }
})