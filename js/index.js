import  { valkyries }  from './valkyries.js';

const btn = document.getElementById('valk-btn');
const valkImg = document.getElementById('valk_img');


// change the Valkyrie image when clicking the button
btn.addEventListener('click', () => {
  let valkId = Math.floor(Math.random() * (valkyries.length));
  let battlesuitId = Math.floor(Math.random() * (valkyries[valkId].battlesuits.length));
  valkImg.src = valkyries[valkId].battlesuits[battlesuitId].imgUrl;
});