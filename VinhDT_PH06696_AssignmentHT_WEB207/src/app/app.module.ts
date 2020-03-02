import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SlideAnhComponent } from './slide-anh/slide-anh.component';
import { FooterComponent } from './footer/footer.component';
import { BodyViewComponent } from './body-view/body-view.component';
import { BodyIntroduceComponent } from './body-introduce/body-introduce.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ManagerComponent } from './manager/manager.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SlideAnhComponent,
    FooterComponent,
    BodyViewComponent,
    BodyIntroduceComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ManagerComponent,

    EditProductComponent,
    DetailProductComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
