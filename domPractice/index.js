const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const p = document.createElement("p");
p.textContent = "Hey I'm red!";
p.style.color = "red";

const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";

const pinkBackground = document.createElement("div");
pinkBackground.style.cssText =
  "border-color: black; border-size: 2px; border: solid; background-color: pink;";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";

const pinkP = document.createElement("p");
pinkP.textContent = "ME TOO!";

pinkBackground.appendChild(h1);
pinkBackground.appendChild(pinkP);

container.appendChild(content);
container.appendChild(p);
container.appendChild(h3);
container.appendChild(pinkBackground);

const btn2 = document.querySelector("#btn2");
btn2.onclick = () => alert("Hello worlds From js!");

// the JavaScript file
const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", (e) => {
  console.log(e);
  alert("Hello World from event listener");
});
