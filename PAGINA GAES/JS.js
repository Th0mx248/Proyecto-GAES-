document.getElementById("logo").onclick = function () {
  location.reload();
};
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault()
  const nombre = document.getElementById("nombre").value.trim()
  const email = document.getElementById("email").value.trim()
  const mensaje = document.getElementById("mensaje").value.trim()

  if (!nombre || !email || !mensaje) {
    alert("Por favor completa todos los campos")
    return
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Por favor ingresa un correo válido")
    return
  }

  alert("Mensaje enviado correctamente")
  this.reset()
})

document.querySelectorAll("a[href^='#']").forEach(enlace => {
  enlace.addEventListener("click", function (e) {
    e.preventDefault()
    const destino = document.querySelector(this.getAttribute("href"))
    if (destino) {
      window.scrollTo({
        top: destino.offsetTop - 60,
        behavior: "smooth"
      })
    }
    menu.classList.remove("active")
  })
})

window.addEventListener("scroll", function () {
  const header = document.querySelector("header")
  if (window.scrollY > 50) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }
})

const typedTextSpan = document.querySelector(".typed-text")
const cursorSpan = document.querySelector(".cursor")
const textArray = ["Bienvenido a TYM", "Desarrollo Web Innovador", "Impulsamos tu Negocio"]
const typingDelay = 120
const erasingDelay = 80
const newTextDelay = 2200
let textArrayIndex = 0
let charIndex = 0

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing")
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex)
    charIndex++
    setTimeout(type, typingDelay)
  } else {
    cursorSpan.classList.remove("typing")
    setTimeout(erase, newTextDelay)
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing")
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1)
    charIndex--
    setTimeout(erase, erasingDelay)
  } else {
    cursorSpan.classList.remove("typing")
    textArrayIndex++
    if (textArrayIndex >= textArray.length) textArrayIndex = 0
    setTimeout(type, typingDelay + 800)
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (textArray.length) setTimeout(type, newTextDelay + 250)
})

const menuToggle = document.getElementById("menu-toggle")
const menu = document.getElementById("menu")

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active")
})