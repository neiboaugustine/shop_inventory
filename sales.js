 let form = document.getElementsByTagName('form');
 let formSelect = document.querySelector('.form-select');
 let salePrice = document.querySelector('.sale-price');
 let quantity = document.querySelector('.quantity').value;
 let sellButton = document.querySelector('.btn');
 let options = "";
 
JSON.parse(localStorage.details).forEach(product =>{
    options += "<option>" + product.name + "</option>";
});

formSelect.innerHTML = options;

sellButton.addEventListener('click', ()=>{
    let options = "";
 
    JSON.parse(localStorage.details).forEach(product =>{
        options += "<option>" + product.name + "</option>";
    });
    // putting quantity in localStorage
    let quantity = document.querySelector('.quantity').value;
    localStorage.setItem("quantity",JSON.stringify(quantity));

    let product = formSelect.value;

    let itemTotal = {
        product,
        quantity
    }

    salePrice.innerHTML = product + ': ' + quantity;
});


    
