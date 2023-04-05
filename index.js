// Get buttons
const scheme1Button = document.getElementById('scheme1');
const scheme2Button = document.getElementById('scheme2');
const scheme3Button = document.getElementById('scheme3');

console.log(scheme1Button);

// Add click event listeners to buttons
scheme1Button.addEventListener('click', changeScheme1);
scheme2Button.addEventListener('click', changeScheme2);
scheme3Button.addEventListener('click', changeScheme3);

// Function to change to colour scheme 1
function changeScheme1() {
  document.body.style.backgroundColor = '#fff';
  document.body.style.color = '#000';
  document.getElementsByTagName('h1')[0].style.color = '#fff';
}

// Function to change to colour scheme 2
function changeScheme2() {
  document.body.style.backgroundColor = '#000';
  document.body.style.color = '#000';
  document.getElementsByTagName('h1')[0].style.color = '#fff';
}
function changeScheme3() {
  document.body.style.backgroundColor = '#FB5848';
  document.body.style.color = 'FB5848';
  document.getElementsByTagName('h1')[0].style.color = '#fff';
}