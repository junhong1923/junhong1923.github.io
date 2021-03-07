// Request 1: click to change text
const changeText = document.querySelector('header div.welcome');

changeText.addEventListener('click', () => {
  changeText.textContent = `Have a Good Time!`;
})

// Request 2: click to show more content Boxes
const actionButton = document.querySelector('button.action');
const hiddenBox = document.querySelector('aside content');
actionButton.addEventListener('click', () => {
  if (hiddenBox.style.display == '') {
    actionButton.textContent = 'Hide below boxes';
    hiddenBox.style.display = 'flex';
  } else {
    hiddenBox.style.display = '';
    actionButton.textContent = 'Call to Action';
  }
})
