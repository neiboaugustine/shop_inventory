 let formSelect = document.querySelector('.form-select');
 let salePrice = document.querySelector('.sale-price');
 let sellButton = document.querySelector('.btn');
 let options = "";

 
 JSON.parse(localStorage.details).forEach(product =>{
     options += "<option>" + product.name + "</option>";
});

formSelect.innerHTML = options;
