document.querySelector("#mobile-navbar-open-btn").addEventListener('click', () => {
  var overlay = document.querySelector("#mobile-navbar-overlay")
  overlay.classList.remove("hidden")
  overlay.classList.add("show")
})

document.querySelector("#mobile-navbar-close-btn").addEventListener('click', () => {
  var overlay = document.querySelector("#mobile-navbar-overlay")
  overlay.classList.remove("show")
  overlay.classList.add("hidden")
})
