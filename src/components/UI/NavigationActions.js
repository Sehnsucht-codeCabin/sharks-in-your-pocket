export const openNav = () => {
  const myElement = document.getElementById("nav-bar__hamburguer-btn-span")
  myElement.classList.toggle("transparent")
  myElement.classList.toggle("rotate-first-span")
  myElement.classList.toggle("rotate-last-span")
  document.querySelector("nav").classList.toggle("move-menu")
}
