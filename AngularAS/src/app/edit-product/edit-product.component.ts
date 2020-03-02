import { Component, OnInit } from '@angular/core';
import {product} from "../product/product";
import { Router, ActivatedRoute } from '@angular/router';
import { ProductserviceService} from '../Services/productservice.service'

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product: product;

  constructor(
private ProductSV:ProductserviceService,
private router:Router,
private AcRouter:ActivatedRoute

  ) { }

  ngOnInit() {
    this.getProduct();
    console.log(product)
  }
editProduct(){
  this.ProductSV.editProductSV(this.product).subscribe( data =>{
    this.router.navigateByUrl("/manage")
  })
}

getProduct(){
  this.AcRouter.params.subscribe(param =>{
    this.ProductSV.getProductEdit(param.id).subscribe(data=>{
      this.product=data;
    })
  })
 
}
}
