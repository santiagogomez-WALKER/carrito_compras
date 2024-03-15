const cardContainer = document.getElementById("products-container");

function createCardsProductsMain(productos) {
    productos.forEach(producto => {
        const newComponent = document.createElement("div");
        newComponent.classList = "product-card";
        newComponent.innerHTML =  `
        <img src=./img/products/${producto.id}.jpg>
        <h3>${producto.name}</h3>
        <p>$${producto.price}</p>
        <button>agregar al carrito</button>
        `
        cardContainer.appendChild(newComponent);
        newComponent.getElementsByTagName("button")[0].addEventListener("click", () => addToCart(producto));

    });
} 

createCardsProductsMain(components);