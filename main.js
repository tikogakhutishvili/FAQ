const btn = document.querySelectorAll('.header')
const h2 = document.querySelectorAll('h2')
const p = document.querySelectorAll("p")
const arrow = document.querySelectorAll(".arrow")
console.log(btn)
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
      p[i].classList.toggle('show')
      arrow[i].classList.toggle('up')
      h2[i].classList.toggle('bold')
    })
}
