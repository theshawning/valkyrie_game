import  { valkyries }  from './valkyries.js';

const btn = document.getElementById('valk-btn');
const valkImg = document.getElementById('valk_img');

let x = Math.floor(Math.random() * (valkyries.length));

function rollValkyrie() {
  
}

// change the Valkyrie image when clicking the button
btn.addEventListener('click', () => {
  valkImg.src = valkyries[x].battlesuits[0].imgUrl;
});