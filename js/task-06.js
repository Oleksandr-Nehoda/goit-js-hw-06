
const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputValid);

function onInputValid (event) {

    const inputLength = Number(event.currentTarget.value.length);
    const dataLeng = Number(inputRef.dataset.length);

    if (inputLength === dataLeng) {
        
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');
        
    } else {
       
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid');
    }
   
}