import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


const routes: Routes = [
  { path : "", redirectTo:"/home", pathMatch:'full'},
  {path: "home", component: HomeComponent } ,
  {path: "body" , component: BodyComponent },
  {path: "products/id", component: ProductDetailComponent},
  {path: "**", component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
