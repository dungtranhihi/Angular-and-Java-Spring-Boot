import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ContactComponent} from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ManagerComponent } from './manager/manager.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path :'', redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'products',component:ProductsComponent},
  {path:'manager',component:ManagerComponent},
  {path :'products/:id', component: DetailProductComponent},
  {path :'products/edit/:id', component: EditProductComponent},
  {path :'**', component: NotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
