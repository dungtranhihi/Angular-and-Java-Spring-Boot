import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { account} from '../login-page/account'

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  private API='http://5dd23aeb15bbc2001448d7d4.mockapi.io/mockapi/v1/Account'

  constructor(
    private http:HttpClient
  ) { }
  
  getAccount(): Observable<account[]>{
    return this.http.get<account[]>(this.API);
  }
}
