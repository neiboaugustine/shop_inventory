 let form = document.getElementsByTagName('form');
 let formSelect = document.querySelector('.form-select');
 let salePrice = document.querySelector('.sale-price');
 let quantity = document.querySelector('.quantity').value;
 let sellButton = document.querySelector('.btn');
 let options = "";
 let unitPrice;
 
JSON.parse(localStorage.details).forEach(product =>{
    options += "<option>" + product.name + "</option>";
});
 let itemArray = [];
formSelect.innerHTML = options;

sellButton.addEventListener('click', ()=>{

    let options = "";

    // JSON.parse(localStorage.details).forEach(product =>{
    //     options += "<option>" + product.name + "</option>";
    // });
    // putting quantity in localStorage
    let quantity = document.querySelector('.quantity').value;
    localStorage.setItem("quantity",JSON.stringify(quantity));
    let product = formSelect.value;

    let itemTotal = {
        product,
        quantity
    }
    itemArray.push(itemTotal);
    itemArray.forEach(item =>
        {
        // salePrice.innerHTML = item.product +" : "+ item.quantity + "<br/>";
    })

    // JSON.parse(localStorage.details).forEach(product=>{
    //     console.log(product.price, quantity);
    //     console.log(product)
    //     totalPrice = product.price*quantity;
    //     salePrice.innerHTML=totalPrice;
    // })

    let trueProduct = JSON.parse(localStorage.details).filter(prd => {
        return prd.name == product
    })

    trueProduct = trueProduct[0];

    totalPrice = trueProduct.price*quantity;
    salePrice.innerHTML="₦"+totalPrice;

    let productLeft = JSON.parse(localStorage.details).filter(qty=>{
        return qty.quantity == quantity;
    })
    productLeft = productLeft[0];
    
    qtyLeft = productLeft-quantity;
    alert(qtyLeft);
});


    
