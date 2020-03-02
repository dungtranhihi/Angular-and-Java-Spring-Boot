import { Component, OnInit } from '@angular/core';
import {product} from '../product/product';
import {ProductserviceService} from '../Services/productservice.service'

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  product: product = new product();
  products: product[];

  constructor(
    private ProductSV: ProductserviceService,
  ) { }

 
  ngOnInit() {
    this.getProductAPI()
    console.log(this.product)
  }

  getProductAPI(){
    this.ProductSV.getProduct().subscribe(data => {
      console.log(data);
      this.products = data
    })
  }
  DeleteProductAPI(id) {
    console.log(id)
    this.ProductSV.deleteProduct(id).subscribe(data =>{
      this.products = this.products.filter(item => item.id != data.id)
    })
}
addProductAPI(){
  console.log(this.product)
  this.ProductSV.addProduct(this.product).subscribe(data =>{
    console.log('Add success');

    this.products.push(data);

  });
}
}
