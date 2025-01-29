const output = document.querySelector(".output");

for (let i = 10; i < 0; i--) {
  const para = document.createElement("p");
  output.appendChild(para);
}

console.log(output);
