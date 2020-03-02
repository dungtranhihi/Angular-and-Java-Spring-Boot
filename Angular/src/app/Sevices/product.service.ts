import { Injectable } from '@angular/core';
import { DataProduct } from '../body/data';
import {product} from '../body/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  private  ProductData = DataProduct;
  getproduct(): product[]{
    return this.ProductData;
  }
  DeleteProduct(id): product[]{
    return this.ProductData.filter(product => product.id != id)
  }
}
