//Kodları çalıştırmak için node app.js demeyi unutma

import { Product } from "./Product";
import { ProductService } from "./ProductService";

let _productService = new ProductService();

let result;
let idSearchResult;

result = _productService.getProducts();
idSearchResult = _productService.getById(3);

let newProduct_1 = new Product();

newProduct_1.setName("newProduct_1");
newProduct_1.setCategory("category_3");
newProduct_1.setPrice(5);

_productService.saveProduct(newProduct_1);
console.log(result);
console.log("----------");
console.log(idSearchResult);

// lets edit new product
//newProduct_1.setId(11);
newProduct_1.setName("editedProduct_1");
newProduct_1.setCategory("edited_category_1");
newProduct_1.setPrice(3817);
_productService.saveProduct(newProduct_1);
console.log(result);

//lets delete it
_productService.deleteProduct(newProduct_1);
console.log(result);

//Kodları çalıştırmak için node app.js demeyi unutma
