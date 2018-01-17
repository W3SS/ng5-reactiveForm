import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import {ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './share/footer/footer.component';
import { NavComponent } from './share/nav/nav.component';
import { HomeComponent } from './ram/home/home.component';
import { ContactComponent } from './ram/contact/contact.component';
import { PageNotFoundComponent } from './ram/page-not-found/page-not-found.component';
import { SignUpFormComponent } from './ram/sign-up-form/sign-up-form.component';
import { RegisterClientComponent } from './ram/register-client/register-client.component';
import { ProductListComponent } from './ram/product/product-list/product-list.component';
import { ProductDetailsComponent } from './ram/product/product-details/product-details.component';
import { ProductAddEditComponent } from './ram/product/product-add-edit/product-add-edit.component';


// Imports for loading & configuring the in-memory web api
 import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
 import { ProductDataInMemory }  from '../app/ram/product/product-data-in-memory';

import { ProductServiceService } from './ram/product/product-service.service';
import { SearchFilterPipe } from './share/custome/filter.pipe';
import { StarRatingComponent } from './share/star-rating-component/star-rating-component';
import { CapitalizePipe } from './share/custome/capitalizefirst.pipe';
import { ProductEditGuard } from './ram/product/product-guard.service';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ContactComponent,
    PageNotFoundComponent,
    SignUpFormComponent,
    RegisterClientComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductAddEditComponent,
    SearchFilterPipe,
    CapitalizePipe,
    StarRatingComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    HttpModule,
    InMemoryWebApiModule.forRoot(ProductDataInMemory),
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'product', component: ProductListComponent },
      { path: 'product/:id', component: ProductDetailsComponent },
      { path: 'product/:edit/:id',
        canDeactivate : [ProductEditGuard],
        component: ProductAddEditComponent },
      { path: 'sign-up', component: SignUpFormComponent },
      { path: 'client-register', component: RegisterClientComponent },
      { path: 'contact', component: ContactComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent, pathMatch: 'full' },
    ]),
    ReactiveFormsModule,
    TooltipModule.forRoot(),
    FormsModule
  ],
  providers: [
    ProductServiceService,
    ProductEditGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
