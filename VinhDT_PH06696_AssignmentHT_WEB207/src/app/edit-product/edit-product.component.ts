import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../Product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
product:Product;
  constructor(
    private productService:ProductService,
    private router:Router,
    private routers:ActivatedRoute
  ) { }

  ngOnInit() {
    this.getProduct();
  }
  saveProduct(){
    this.productService.saveProduct(this.product).subscribe(data=>{
      this.router.navigateByUrl("/manager")
    })
    
  }
  getProduct(){
    this.routers.params.subscribe(param =>{
      this.productService.getProduct(param.id).subscribe(data=>{
        this.product=data;
      })
    })
   
  }
}
