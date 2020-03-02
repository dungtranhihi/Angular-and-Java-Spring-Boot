import { Injectable } from '@angular/core';
import { Product } from '../Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // Khai bao link API
  private API: string = "http://5d44c523d823c300147719c8.mockapi.io";
  constructor(
    private http: HttpClient
  ) { }
  getProducts(): Observable<Product[]> {

    return this.http.get<Product[]>(this.API+'/product');
  }

  getProduct(id): Observable<Product>{
return this.http.get<Product>(this.API+'/product/'+id);
  }

  addProduct(product): Observable<Product> {
    return this.http.post<Product>(this.API+'/product', product);
 
  }

  deleteProduct(id):Observable<Product>{
return this.http.delete<Product>(this.API+'/product/'+id);
  }
  
  saveProduct(product): Observable<Product>{
    return this.http.put<Product>(this.API+'/product/'+product.id, product);
  }
}
