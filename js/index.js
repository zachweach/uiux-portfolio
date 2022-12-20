const ham = document.getElementById("hamburger-menu")
const nav = document.getElementsByTagName("nav")[0]

function hamToggle() {
  ham.classList.toggle("active")
  nav.classList.toggle("active")
}

ham.addEventListener("click", hamToggle)


const titles = ['undefined', 'NaN', 'a designer', 'a scientist', 'a neuroscientist', 'a computer (beep boop)', 'a website', 'a performer', 'becoming self-aware', 'uhhhhhhh...', 'a musician', 'an oversharer', 'a niche internet microcelebrity', 'an author', 'zach! but you knew that...']
let currId;
const rotater = document.getElementById("rotater")
const title = document.getElementById("rotating-title")

function chooseRandom() {
  let chosen = titles[Math.floor(Math.random() * titles.length)]
  while (titles.indexOf(chosen) === currId) {
    chosen = titles[Math.floor(Math.random() * titles.length)]
  }
  currId = titles.indexOf(chosen)
  return chosen
}

function chooseTitle() {
  title.innerHTML = chooseRandom()
}

rotater.addEventListener("click", chooseTitle)
