// window.addEventListener('load', ()=>{

    //declaration of variables
    let form = document.getElementById('enter-product');
    let productDetail = document.getElementById('product');

    let nameInput = form['name']
    let brandInput = form['brand']
    let quantityInput = form['quantity']
    let unitPrice = form['price']
    let descriptionInput = form['description']

       
    // let submit = document.getElementById('product-submit');

   
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
        let producName = document.createElement('h2');
        let productBrand = document.createElement('p');
        let productQuantity = document.createElement('p');
        let productPrice = document.createElement('p');
        let productDescription = document.createElement('p');

        // Fill the content
        producName.innerText = 'Product name: ' + name;
        productBrand.innerText = 'Product brand: ' + brand;
        productQuantity.innerText = 'Product quantity: ' + quantity;
        productPrice.innerText = 'Product price: ' + price;
        productDescription = 'Product description: ' + description;

        // Add to DOM
        products.append(producName, productBrand, productQuantity, productPrice, productDescription)
        productDetail.appendChild(products);
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
   
    
//     let detailForm = (e)=> {
//         e.preventDefault();
//         let addItem = ()=>{
//             if(!name || !brand || !quantity || unitPrice || !description){
//                 alert("enter all fields");
//                 return;
//             }
    
//             // array for details collected
//             let detail = {
//                 nName: name,
//                 bBrand:brand,
//                 qQuantity:quantity,
//                 uUnitPrice:unitPrice,
//                 dDescription:description
//             }
//             details.push(detail); //to add to the array of details
//             document.querySelector('form').reset() //to clear the form for new entry   
    
//             console.warn('added', {details});
//             let item = document.querySelector('#product p');
//             item.textContent = '\n' + JSON.stringify(details, '\t',2);  
//         }
//         document.addEventListener('DOMContentLoaded', ()=>{
//             submit.addEventListener('click', addItem);
//         })
    
//     }

// });