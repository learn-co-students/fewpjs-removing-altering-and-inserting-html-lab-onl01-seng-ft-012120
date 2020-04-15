document.body.removeChild(document.querySelector('main'));

let newHeader = document.createElement('h1');
newHeader.id = "victory";
newHeader.innerHTML = "Patrick is the champion";
document.body.appendChild(newHeader);