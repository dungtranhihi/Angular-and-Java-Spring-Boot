import { Component, OnInit, Input } from '@angular/core';
import { DataProduct } from '../body/data';
import {product} from '../body/product';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  products = DataProduct;
  constructor() { }


  
  Remove(id) {
    console.log(id);
    this.products = this.products.filter(product => product.id != id);
  }

  SelectedDetail ;
  Detail(product) {
    console.log(product);
    this.SelectedDetail = product;
  }
  ngOnInit() {
  }

}
