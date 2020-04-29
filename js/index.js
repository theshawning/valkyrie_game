import  { valkyries }  from './valkyries.js';

const rollBtn = document.getElementById('valk-btn');
const valkImg = document.getElementById('valk_img');
const money = document.getElementById('money').textContent;

// change the Valkyrie image when clicking the button
rollBtn.addEventListener('click', () => {  
  let valkId = Math.floor(Math.random() * (valkyries.length));
  let battlesuitId = Math.floor(Math.random() * (valkyries[valkId].battlesuits.length));
  valkImg.src = valkyries[valkId].battlesuits[battlesuitId].imgUrl;
});


