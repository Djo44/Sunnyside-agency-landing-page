let hamburger = document.querySelector('.fa-bars')
let ul = document.querySelector('.navbar-ul')

hamburger.addEventListener("click", function () {
  ul.classList.toggle("d-flex")
})