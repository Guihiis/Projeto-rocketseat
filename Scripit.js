function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/fotoclaro.png")
  } else {
    img.setAttribute("src", "./assets/foto.avatar.png")
  }
}
