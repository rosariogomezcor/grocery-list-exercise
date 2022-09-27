const form = document.querySelector('form');
const list = document.querySelector('#list'); 

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const product = this.elements.product.value;
    const qty = this.elements.qty.value;
    console.log(product, qty);

    const newGroceryItem = document.createElement('li');
    newGroceryItem.append(qty);  
    newGroceryItem.append(` ${product}`); 
    list.append(newGroceryItem); 
}); 