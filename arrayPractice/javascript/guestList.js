const people = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil", //bitch
  "Lola", //bitch
  "Sam",
  "Kay",
  "Bruce",
];

const admitted = document.querySelector(".admitted");
const refused = document.querySelector(".refused");
admitted.textContent = "Admit: ";
refused.textContent = "Refuse: ";

people.map((person) => {
  if (person === "Phil" || person === "Lola") {
    refused.textContent += `${person}, `;
  } else {
    admitted.textContent += `${person}, `;
  }
});

refused.textContent = refused.textContent.slice(0, -2).concat(".");
admitted.textContent = admitted.textContent.slice(0, -2).concat(".");
console.log(refused.textContent);
