function addToCart(producto){
    let memory = JSON.parse(localStorage.getItem("components"));
    console.log(memory);

    if (!memory || memory.length === 0) {
        const newproduct = producto;
        newproduct.quantity = 1;
        localStorage.setItem("components", JSON.stringify([newproduct]));
     }  else {
        const indexProduct = memory.findIndex(component => component.id === producto.id);
        console.log(indexProduct);
        if (indexProduct === -1) {
            const newMemory = memory;
            newMemory.push();
        };
    };
};

function getNewProductForMemory(producto){
    const newproduct = producto;
    newproduct.quantity = 1;
    return newproduct 
}