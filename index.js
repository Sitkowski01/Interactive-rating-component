const numberOfElements = document.querySelectorAll(".circle").length;

const button = document.getElementById('button');
button.addEventListener('click', function() {
  const selectedCircle = document.querySelector('.circle.activate');
  
  if (selectedCircle) {
    const container = document.getElementById('container');
    container.style.display = 'none';
  
    const secondContainer = document.getElementById('second-container');
    secondContainer.style.display = 'flex';
  } else {
    alert('Please select a number before proceeding.');
  }
});

const circles = document.getElementsByClassName('circle');

for (let i = 0; i < circles.length; i++) {
  const circle = circles[i];
  circle.addEventListener('click', function() {
    const isActivated = circle.classList.contains('activate');
    
    for (let j = 0; j < circles.length; j++) {
      circles[j].classList.remove('activate');
    }
    
    if (!isActivated) {
      circle.classList.add('activate');
    }
    
    let numer = '';
    if (circle.classList.contains('activate')) {
      numer = circle.textContent;
    }

    let textDiv = document.querySelector('#title-second');
    textDiv.innerHTML = "You selected " + numer + " out of 5";

    if (i === circles.length - 1) {
      circle.classList.add('activate-four');
    } else {
      circle.classList.remove('activate-four');
    }

    for (let j = 0; j < circles.length; j++) {
      if (j !== i) {
        circles[j].classList.remove('activate-four');
      }
    }
  });
}