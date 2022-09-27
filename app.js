const form = document.querySelector('form');
const list = document.querySelector('#list'); 

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const product = this.elements.product;
    const qty = this.elements.qty;
    addProduct(product.value, qty.value); 
    product.value = ""; 
    qty.value = ""; 
}); 

const addProduct = (product, qty) => {
    const newGroceryItem = document.createElement('li');
    newGroceryItem.append(qty);  
    newGroceryItem.append(` ${product}`); 
    list.append(newGroceryItem); 
}