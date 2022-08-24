function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnRef = document.querySelector('.change-color');
const spanRef = document.querySelector('.color');
const bodyRef = document.querySelector('body');


btnRef.addEventListener('click', onChangeColorClick);


function onChangeColorClick() {

  const bodyColor = bodyRef.style.backgroundColor=getRandomHexColor() ;
  
  console.log( bodyColor);

  spanRef.textContent = bodyColor;
}