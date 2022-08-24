function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputRef = document.querySelector('[ type="number"]');
const btnCreateRef = document.querySelector('[ data-create]');
const btnDestroyRef = document.querySelector('[ data-destroy]');
const boxesRef = document.querySelector('#boxes');

console.log(btnCreateRef);


btnCreateRef.addEventListener('click', onAddDivClick );

function onAddDivClick()  {
  const inputValue = inputRef.value;
  createBoxes(inputValue);
} 


function createBoxes(amount) {
  for (let i = 0; i < amount ; i += 1 ) {

    const newDivRef = document.createElement('div');
    let sizeDiv = 30 + i*10;

    newDivRef.style.width = `${sizeDiv}px`;
    newDivRef.style.height = `${sizeDiv}px`;
    newDivRef.style.backgroundColor = getRandomHexColor();

    boxesRef.appendChild(newDivRef);
  }
}

btnDestroyRef.addEventListener('click', destroyBoxes );

function destroyBoxes() {

  boxesRef.innerHTML = " ";

}