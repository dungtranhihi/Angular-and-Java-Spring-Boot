import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { product } from './product'
 

@Injectable({
  providedIn: 'root'
})
export class BodyService {
  private API='http://5dd23aeb15bbc2001448d7d4.mockapi.io/mockapi/v1/Product';

  constructor(
    private http: HttpClient
  ) { }
  getProduct(): Observable<product[]>{
    return this.http.get<product[]>(this.API);
  }
  deleteProduct(id): Observable<product>{
    return this.http.delete<product>(`${this.API}/${id}`);
  }
}
 