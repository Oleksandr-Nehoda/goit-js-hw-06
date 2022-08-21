
const categoriesRef = document.querySelector('#categories');

const numberChildrenCategories = categoriesRef.children.length;

console.log(`Number of categories:${numberChildrenCategories}`);


const itemsRef = document.querySelectorAll('.item');

for (let i = 0; i < itemsRef.length; i += 1) {

    const nameCategory = itemsRef[i].firstElementChild.textContent

    console.log(`Category: ${nameCategory}`);

    const numberItemsInCategory = itemsRef[i].lastElementChild.children.length;

    console.log(`Elements: ${numberItemsInCategory}` );

}

