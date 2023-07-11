class ProductManager {
    constructor(){
        this.products = []
    }
    getProducts(){
        return console.log(this.products)
    }
  
    addProduct(title,description,price,thumbnail,code,stock){
        if(this.products.some(p => p.code === code)){
         console.log('El producto ya esta cargado')
        } else{ 
        const id = this.products.length === 0 ? 1 : this.products[this.products.length - 1].id +1
        const newProduct = {
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        this.products.push(newProduct)
      }    
    }
    getProductById(id){
        const product = this.products.find(e=>e.id===id)
        if(!product){
            console.log('Not found')
        } else {
            console.log(`${product.title} coinside con el id: ${product.id}`)
        }
    }
}

const manager1 = new ProductManager()
manager1.getProducts();
manager1.addProduct( "producto prueba","Este es un producto prueba",200,"Sin imagen","abc123",25);
manager1.getProducts();
manager1.addProduct( "producto prueba","Este es un producto prueba",200,"Sin imagen","abc123",25);
manager1.getProductById(1);


