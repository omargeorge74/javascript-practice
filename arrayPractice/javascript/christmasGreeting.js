// const list = document.querySelector(".output ul");
// list.textContent = "";
// const greetings = [
//   "Happy Birthday!",
//   "Merry Christmas my love",
//   "A happy Christmas to all the family",
//   "You're all I want for Christmas",
//   "Get well soon",
// ];

// for (const greeting of greetings) {
//   // Your conditional test needs to go inside the parentheses
//   // in the line below, replacing what's currently there
//   if (greeting) {
//     if (greeting.toLocaleLowerCase().includes("christmas")) {
//       const listItem = document.createElement("li");
//       listItem.textContent = greeting;
//       list.appendChild(listItem);
//     }
//   }
// }
const list = document.querySelector(".output ul");
list.textContent = "";
const cities = ["lonDon", "ManCHESTer", "BiRmiNGHAM", "liVERpoOL"];

for (const city of cities) {
  // write your code just below here
  console.log(typeof city);
  let lowerCase = city.toLocaleLowerCase();
  let uperLetter = lowerCase.charAt(0).toLocaleUpperCase() + lowerCase.slice(1);
  const result = uperLetter;
  const listItem = document.createElement("li");
  listItem.textContent = result;
  list.appendChild(listItem);
}
