
const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');


inputRef.addEventListener ('input', onFontSizeChange);

function onFontSizeChange (event) {

    const valueChange = `${event.currentTarget.value}px`;

    spanRef.style.fontSize = valueChange;
  
}