import { Component, OnInit } from '@angular/core';
import { account} from './account';
import { LoginserviceService } from '../Services/loginservice.service'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

    Account: account[];
    AccountAPI: account[];
  constructor(
    private LoginSV: LoginserviceService
  ) { }

  ngOnInit() {
    this.getLogin();
  }
  getLogin(){
    this.LoginSV.getAccount().subscribe(data => {
      console.log(data)
      console.log(this.Account)
    })
  }
}
