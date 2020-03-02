import { Component, OnInit } from '@angular/core';
import {product} from './product'
import {ProductserviceService} from '../Services/productservice.service'


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

products: product[];

  constructor(
    private ProductSV:ProductserviceService
  ) { }

  ngOnInit() {
    this.getProductAPI()
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
}
