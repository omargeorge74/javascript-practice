const link = document.querySelector("a");
link.textContent = "More Hoes";
link.href = "https://developer.mozilla.org";

const sect = document.querySelector("section");
const para = document.createElement("p");
para.textContent = "het fuckec hoe";
para.setAttribute("class", "highlight");

sect.appendChild(para);

const text = document.createTextNode(" - the premier hoe");

const linkPara = document.querySelector("p");
linkPara.appendChild(text);

// para.style.color = "white";
// para.style.backgroundColor = "black";
// para.style.padding = "10px";
// para.style.width = "250px";
// para.style.textAlign = "center";
