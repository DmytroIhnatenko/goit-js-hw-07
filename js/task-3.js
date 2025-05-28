const input = document.getElementById("name-input");
console.log(input);
const output = document.getElementById("name-output");
console.log(output);

input.addEventListener("input", (event) => {
  const value = event.currentTarget.value.trim();
  console.log(value);
  output.textContent = value === "" ? "Anonymous" : value;
});
