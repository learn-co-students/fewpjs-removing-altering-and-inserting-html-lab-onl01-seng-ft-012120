// Write your code here!
document.getElementById("main").remove();

let newHeader = document.createElement('h1');
newHeader.id = 'victory';

document.body.appendChild(newHeader)

let victory = document.getElementById('victory');
victory.innerHTML = 'Andrew is the champion';