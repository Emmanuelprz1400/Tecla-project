class Cart {
    constructor(key) { //Declaración de clase
        this.key = key || "products";
        this.products = this.getProduct();
    }

    addProduct(product) {  //Función para añadir product
        if (!this.productExists(product.id)) {
            this.products.push(product);
            this.saveProduct();
        }
    }

    removeProduct(id) { //Función para eliminar product
        const index = this.products.findIndex(p => p.id === id);
        if (index != -1) {
            this.products.splice(index, 1);
            this.saveProduct();
        }
    }

    saveProduct() {  //Función para guardar product seleccionado
        localStorage.setItem(this.key, JSON.stringify(this.products));
    }

    getProduct() { //Función para obtener el product
        const codedProducts = localStorage.getItem(this.key);
        return JSON.parse(codedProducts) || [];

    }//Función para ver la existencia del product
    productExists(id) { 
        return this.products.find(product => product.id === id);
    }

    //Función para hacer conteo del product
    count() { 
        return this.products.length;
    }
     agregarcar (id, product, price, img) => {
      const car[i] = new Producto(id, product, price, img)
        i++;
    }
    //Calculate amount
    calculateTotal(){
        let Product;
        let total = 0, igv = 0, subtotal = 0;
        Product = this.obtenerProduct();
        for(let i = 0; i < Product.length; i++){
            let element = Number(Product[i].precio * Product[i].cantidad);
            total = total + element;
}
