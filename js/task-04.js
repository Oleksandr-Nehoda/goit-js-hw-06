
const btnDecrRef = document.querySelector('button[data-action="decrement"]');
const btnIncrRef = document.querySelector('button[data-action="increment"]');
const valueRef = document.querySelector('#value');

let counterValue = 0


btnDecrRef.addEventListener( 'click', () => {

    counterValue -=1;
    
    valueRef.textContent = counterValue;

});

btnIncrRef.addEventListener( 'click', () => {

    counterValue += 1
    
    valueRef.textContent = counterValue;
   
});