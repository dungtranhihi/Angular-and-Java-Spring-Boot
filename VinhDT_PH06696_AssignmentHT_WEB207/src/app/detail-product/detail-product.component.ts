import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
product:Product;
  constructor(
    private productService :ProductService,
    private routers: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getProduct();
  }
  getProduct(){
    this.routers.params.subscribe(param =>{
      this.productService.getProduct(param.id).subscribe(data=>{
        this.product=data;
      })
    })
   
  }

}
