const products = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1500, stock: 10 },
    { id: 2, name: 'Smartphone', category: 'Electronics', price: 800, stock: 20 },
    { id: 3, name: 'Headphones', category: 'Electronics', price: 100, stock: 30 },
    { id: 4, name: 'T-shirt', category: 'Clothing', price: 20, stock: 50 },
    { id: 5, name: 'Jeans', category: 'Clothing', price: 50, stock: 40 },
    { id: 6, name: 'Sneakers', category: 'Clothing', price: 80, stock: 30 },
    { id: 7, name: 'Backpack', category: 'Accessories', price: 40, stock: 25 },
    { id: 8, name: 'Watch', category: 'Accessories', price: 60, stock: 20 },
    { id: 9, name: 'Sunglasses', category: 'Accessories', price: 30, stock: 35 }
];


const botonCargarProducto = document.getElementById("getProducts");
botonCargarProducto.addEventListener("click",(e) => {
    displayProducts(products);
})

const displayProducts = (products) => {
    try{
    const productList = document.getElementById("productList");
    productList.innerHTML = "";
    products.forEach(product => {
        const listItem = document.createElement("li");
        listItem.textContent = `${product.name} / ${product.category} / ${product.price}`;
        productList.appendChild(listItem);
        
    });

    //Calcular el precio total usando el método reduce
    const initialValue = 0;
    document.getElementById("totalPrice").innerHTML = `El precio total de los productos de la tienda es: ${products.reduce(
        (accumulator, currentValue) => accumulator + currentValue.price,
        initialValue,
    )}`;
    }catch (error){
        console.error('Se produjo un error', error);
    }
};

//Filtrar productos por categoría usando el método filter
const inputProductCategory = document.getElementById("filteredCategory");
const botonProductCategory = document.getElementById("getProductCategory");

botonProductCategory.addEventListener("click",(e) => {
    displayFilteredProducts(inputProductCategory.value);
});

const displayFilteredProducts = (category) => {
    try{
    const filteredProducts = products.filter(product => product.category === category);
    const productList = document.getElementById("filteredProductList");
    productList.innerHTML = "";
    filteredProducts.forEach(product => {
        const listItem = document.createElement("li");
        listItem.textContent = `${product.name} / ${product.category} / ${product.price}`;
        productList.appendChild(listItem);
    });
    }catch (error){
        console.error('Se produjo un error', error);
    }
};

//Filtrar productos por nombre usando el método find
const inputProductName = document.getElementById("filteredName");
const botonProductName = document.getElementById("getProductName");

botonProductName.addEventListener("click",(e) => {
    displaySingleProduct(inputProductName.value);
});

const displaySingleProduct = (name) => {
    try{
    const filteredProduct = products.find(product => product.name === name);
    const productList = document.getElementById("singleProductList"); 
    productList.innerHTML = "";
    const listItem = document.createElement("li");
    listItem.textContent = `${filteredProduct.name} / ${filteredProduct.category} / ${filteredProduct.price}`;
    productList.appendChild(listItem);
    }catch (error){
        console.error('Se produjo un error', error);
    }
};

//Verificar disponibilidad de Productos usando el método every

const botonAvailableProducts = document.getElementById("availableProducts");
botonAvailableProducts.addEventListener("click",(e) => {
    displayAvailableProduct();
});

const displayAvailableProduct = () => {
    try{
        const productAvailableList = document.getElementById("availableProductsList");
        productAvailableList.innerHTML = "";
        const listItem = document.createElement("li");
        const productStock = products.map(product => product.stock);
        const result = productStock.every(stock => stock > 0);
        if(result){
            listItem.textContent = "Todos los productos se encuentran disponibles";
            productAvailableList.appendChild(listItem);
        }else{
            listItem.textContent = "Uno o más productos no se encuentran disponibles";
            productAvailableList.appendChild(listItem);
        }
    }catch (error){
        console.error('Se produjo un error', error);
    }
}

//Mostrar lista de productos por nombre usando map
const botonMostrarProductos = document.getElementById("getNames");
botonMostrarProductos.addEventListener("click", (e) => {
    displayProductName();
})

const displayProductName = () => {
    try{
        const productNameList = document.getElementById("productsNameList");
        productNameList.innerHTML = "";
        const productsName = products.map(product => product.name);
        productsName.forEach(product => {
            const listItem = document.createElement("li");
            listItem.textContent = `${product}`;
            productNameList.appendChild(listItem);
        });
    }catch (error){
        console.error('Se produjo un error', error);
    }
}






