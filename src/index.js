const htmlElement = document.querySelector('html')
const toggleButton = document.querySelector("#toggle")
const toggleButtonsmall = document.querySelector("#togglesmall")

toggleButton.addEventListener("click", () => toggleDarkMode())
toggleButtonsmall.addEventListener("click", () => toggleDarkMode())

const toggleDarkMode = () => {
  htmlElement.classList.contains("dark")?
  htmlElement.classList.remove("dark"):
  htmlElement.classList.add("dark")
}