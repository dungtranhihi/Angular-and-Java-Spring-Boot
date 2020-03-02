import { Component, OnInit, Input } from '@angular/core';
import {product} from '../body/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor() { }

  @Input('data')productDT: product;

  ngOnInit() {
  }

}
