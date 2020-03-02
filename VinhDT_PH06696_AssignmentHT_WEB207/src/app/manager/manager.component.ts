import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../Product'



@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  product: Product = new Product();
  products: Product[];
  constructor(
    private productService: ProductService,

  ) { }

  ngOnInit() {
    this.getProducts();
  }
  //get list product
  getProducts() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    })
  }
// Remove product
  removeProduct(product) {
    this.productService.deleteProduct(product.id).subscribe(data => {

      this.products = this.products.filter(item => item.id != data.id)
    });
  }

  // add Product
  addProduct(){
  this.productService.addProduct(this.product).subscribe(data =>{
    console.log('Add success');
    this.products.push(data);

  });
}

}
