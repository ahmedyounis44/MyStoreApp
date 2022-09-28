import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './Component/product-list/product-list.component';
import { ProductDetailComponent } from './Component/product-detail/product-detail.component';
import { CartComponent } from './Component/cart/cart.component';
import { ProductItemComponent } from './Component/product-item/product-item.component';
import { HeaderComponent } from './layout/header/header.component';
import { UserFormComponent } from './Component/user-form/user-form.component';
import { ConfirmationComponent } from './Component/confirmation/confirmation.component';
import { NgPipesModule } from 'ngx-pipes';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    CartComponent,
    ProductItemComponent,
    HeaderComponent,
    UserFormComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgPipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
