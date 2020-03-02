import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProductComponent} from './product/product.component'
import { CartComponent} from './cart/cart.component'
import { NotfoundComponent } from './notfound/notfound.component';
import { ManageComponent} from './manage/manage.component'
import {EditProductComponent} from './edit-product/edit-product.component'




const routes: Routes = [
  {path : "", redirectTo:"/home", pathMatch:'full'},
  {path: 'home', component:HomeComponent},
  {path: 'login', component:LoginPageComponent},
  {path: 'product', component:ProductComponent},
  {path: 'cart', component:CartComponent},
  {path: 'manage', component:ManageComponent},
  {path: "product/edit/:id", component: EditProductComponent},
  {path: "**", component: NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
