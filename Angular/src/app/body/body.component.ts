import { Component, OnInit } from '@angular/core';
import { DataProduct } from './data';
import {product} from './product';
import {ProductService} from '../Sevices/product.service';
import {BodyService} from './body.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  title: string = 'IMG';
  products: product[];
  productadd:product;
  // product: product = {
  //   name: "San pham 5",
  //   price: 5000,
  //   quanlity: 10,
  //   img: "..",
  //   status: true

  // };

  // arrPro=[
  //   {name: "Product 1", price: 5000, quanlity:10, status: true},
  //   {name: "Product 2", price: 6000, quanlity:7, status: false},
  //   {name: "Product 3", price: 7000, quanlity:50, status: true},
  //   {name: "Product 4", price: 8000, quanlity:30, status: false},
  // ];


  view = event => {
    this.title = "Chi tiet sp"
  }
  TurnBack = event1 => {
    this.title = "IMG"
  }
  ChangeText(event) {
    console.log(event);
    this.title = event.target.value;

  }
  Remove(id) {
    this.products = this.productSevices.DeleteProduct(id);
  }

  SelectedDetail ;
  Detail(product) {
    console.log(product);
    this.SelectedDetail = product;
  }

  isShow: boolean = false;

  constructor(
    private productSevices: ProductService,
    private bodyServices: BodyService

  ) {

   }

  setClass() {
    return {
      'border': this.isShow,
      'shadow': this.isShow
    }
  }
  addClass() {
    this.isShow = true;
  }

  ngOnInit() {
    this.getProductAPI();
    console.log(this.products)
  }
  getProduct(){
    this.products = this.productSevices.getproduct();
  }

  getProductAPI(){
    this.bodyServices.getProduct().subscribe(data => {
      console.log(data);
      this.products = data
    })
  }
  DeleteProductAPI(id) {
    console.log(id)
    this.bodyServices.deleteProduct(id).subscribe(data =>{
      this.products = this.products.filter(item => item.id != data.id)
    })
  }
  AddProductAPI(productadd){
    console.log(productadd);
  }

}
