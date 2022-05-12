

    //declaration of variables
    let form = document.getElementById('enter-product');
    let productDetail = document.getElementById('product');

    let nameInput = form['name']
    let brandInput = form['brand']
    let quantityInput = form['quantity']
    let unitPrice = form['price']
    let descriptionInput = form['description']

   
    // an array to hold details for each product
    let details = JSON.parse(localStorage.getItem("details")) || [];

    let detailForm = (name, brand, quantity, price, description) => {
        details.push({
            name,
            brand,
            quantity,
            price,
            description
        });

        // localStorage
        localStorage.setItem("details", JSON.stringify(details));

        return{name, brand, quantity, price, description};
    };


    let createProductElement = ({name, brand, quantity, price, description}) => {

        // create Elements
        let products = document.createElement('div');
        products.classList.add('list-container');
        let productName = document.createElement('h2');
        let productBrand = document.createElement('p');
        let productQuantity = document.createElement('p');
        let productPrice = document.createElement('p');
        let productDescription = document.createElement('p');

        // Fill the content
        productName.innerText = 'Product name: ' + name;
        productBrand.innerText = 'Product brand: ' + brand;
        productQuantity.innerText = 'Product quantity: ' + quantity;
        productPrice.innerText = 'Product price: ' + price;
        productDescription.innerText = 'Product description: ' + description;

        let removeProduct = document.createElement('button');
        removeProduct.innerHTML = "Delete";
        removeProduct.classList.add('removeProduct');


        let editProduct = document.createElement('button');
        editProduct.innerHTML = "Edit";
        editProduct.classList.add('editProduct');
        // Add to DOM
        products.append(productName, productBrand, productQuantity, productPrice, productDescription, removeProduct, editProduct)
        productDetail.appendChild(products);

        // remove item from the array
        removeProduct.addEventListener('click', ()=>{
            let itemToDelete = details.filter(item => item.name == name)[0];
            details.splice(details.indexOf(itemToDelete), 1);
            localStorage.setItem("details", JSON.stringify(details));
            // productDetail.removeChild(products);
            // document.querySelector('.list-container').remove();
            document.querySelectorAll('.list-container').forEach(divEl => divEl.remove())
            details.forEach(createProductElement);
        })
    }

    details.forEach(createProductElement);

    form.onsubmit = (e) => {
        e.preventDefault();

        let newProduct = detailForm(
            nameInput.value,
            brandInput.value,
            quantityInput.value,
            unitPrice.value,
            descriptionInput.value
        );

        createProductElement(newProduct);

            nameInput.value ="";
            brandInput.value ="";
            quantityInput.value ="";
            unitPrice.value ="";
            descriptionInput.value ="";
    };
   
