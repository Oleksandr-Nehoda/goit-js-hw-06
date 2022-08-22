
const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('input', onInputValid);

function onInputValid (event) {
    console.log(event.currentTarget.value.length)
    console.log(event.currentTarget.dataset.length )
    const dataLeng = inputRef.dataset.length;
    let inputLength = event.currentTarget.value.length;

    inputRef.addEventListener('blur', () => {
        if (inputLength = dataLeng) {
            inputRef.classList.add('valid')
        } else {
            inputRef.classList.add('invalid')
        }
    })
   
}