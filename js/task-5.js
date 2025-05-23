function getRandomColor() {
  return "#" + Math.random().toString(16).slice(2, 8).padEnd(6, "0");
}

const changeColorBtn = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

changeColorBtn.addEventListener("click", () => {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});
