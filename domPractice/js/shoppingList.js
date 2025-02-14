const ul = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", (e) => {
  input.textContent = input.value;
  input.value = "";
  input.focus();
  const li = document.createElement("li");
  const span = document.createElement("span");
  const btn = document.createElement("button");

  li.appendChild(span);
  li.appendChild(btn);

  span.textContent = input.textContent;
  btn.textContent = "DELETE";
  ul.appendChild(li);

  //   console.log(input.textContent);
  btn.addEventListener("click", () => {
    li.remove();
  });
});
