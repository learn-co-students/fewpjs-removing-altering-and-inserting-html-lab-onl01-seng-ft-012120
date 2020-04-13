// Write your code here!
const main = document.querySelector("main")
main.parentNode.removeChild(main);


let body = document.querySelector("body");
const newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory");
newHeader.innerHTML = "OLIVER FEHER is the champion";
body.appendChild(newHeader)