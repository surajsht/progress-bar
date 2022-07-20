let progressBar = document.querySelector(".progress-bar")
let item = document.querySelectorAll(".item")
let prev = document.querySelector("#prev")
let next = document.querySelector("#next")

currentActive = 1

next.addEventListener("click", function () {
  currentActive++

  if (currentActive > item.length) {
    currentActive = item.length
  }

  update()
})

prev.addEventListener("click", function () {
  currentActive--

  if (currentActive < 1) {
    currentActive = 1
  }

  update()
})

function update() {
  item.forEach(function (items, index) {
    if (index < currentActive) {
      items.classList.add("active")
    } else {
      items.classList.remove("active")
    }
  })

  let actives = document.querySelectorAll(".active")

  progressBar.style.width =
    ((actives.length - 1) / (item.length - 1)) * 100 + "%"

  if (currentActive === 1) {
    prev.disabled = true
  } else if (currentActive === item.length) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}

update()
