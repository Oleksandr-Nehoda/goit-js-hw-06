const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');
console.log(ingredientsRef);

const makeArrayItemIngredients = array => {
  return array.map(element => {
    const itemRef = document.createElement('li');
    itemRef.textContent = element;
    itemRef.classList.add('item')
    return itemRef;
  })
}

const items = makeArrayItemIngredients(ingredients);

ingredientsRef.append(...items);