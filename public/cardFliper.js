// Fun open
window.onload = function() {
  card.showModal();
  transition = setTimeout(function() {
      card.classList.add('dialog-scale');
  }, 500);
}

let card = document.querySelector('.card');
let close = document.querySelector('.close');
let params = "lorem=foo";


function updateCard() {
  let request = new XMLHttpRequest();
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      let newCard = JSON.parse(request.responseText);
      card.querySelector('.element-name span').textContent = newCard.name;
      card.querySelector('.description p').textContent = newCard.description;
    } else {
      console.log('Error ' + request.status + ' text: ' + request.responseText);
    }
  }
  request.open('POST', '/viewed', true);
  request.send(params);
}

close.addEventListener('click', function() {
  updateCard();
});
