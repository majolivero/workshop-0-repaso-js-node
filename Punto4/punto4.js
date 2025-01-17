const botonCargarProductos = document.querySelector("#fetch-products");
const InputBuscarProducto = document.querySelector("#searchProduct");
const botonFiltrarProductos = document.querySelector("#filtered-products");

botonCargarProductos.addEventListener("click",(e) => {
    fetchProducts();
});

botonFiltrarProductos.addEventListener("click",(e) => {
    filteredProducts();
})


//Consumo de API de Platzi Fake Store API para mostrar productos
const fetchProducts = () => {
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => {
        if(!response.ok){
            throw new Error('Network response was not ok' + response.statusText);
        }
        return response.json();
    })
    .then(products => {
        displayProducts(products);
    })
    .catch(error => {
        displayError(error);
    });
};

//Consumo de API de Platzi Fake Store API para filtrar por titulo
const filteredProducts = () => {
    fetch(`https://api.escuelajs.co/api/v1/products/?title=${InputBuscarProducto.value}`)
    .then(response => {
        if(!response.ok){
            throw new Error('Network response was not ok' + response.statusText);
        }
        return response.json();
    })
    .then(products => {
        displayProducts(products);
    })
    .catch(error => {
        displayError(error);
    });
};

const displayProducts = (products) => {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
    products.forEach(product => {
        const listItem = document.createElement("li");
        listItem.textContent = `Title: ${product.title}`;
        productList.appendChild(listItem);
    });
};

const displayError = (error) => {
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = `Error: ${error.message}`;
};

