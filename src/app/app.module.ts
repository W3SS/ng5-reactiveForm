import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import {ReactiveFormsModule } from '@angular/forms';

import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './share/footer/footer.component';
import { NavComponent } from './share/nav/nav.component';
import { HomeComponent } from './ram/home/home.component';
import { ProductComponent } from './ram/product/product.component';
import { ContactComponent } from './ram/contact/contact.component';
import { PageNotFoundComponent } from './ram/page-not-found/page-not-found.component';
import { SignUpFormComponent } from './ram/sign-up-form/sign-up-form.component';
import { RegisterClientComponent } from './ram/register-client/register-client.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductComponent,
    ContactComponent,
    PageNotFoundComponent,
    SignUpFormComponent,
    RegisterClientComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'product', component: ProductComponent },
      { path: 'sign-up', component: SignUpFormComponent },
      { path: 'client-register', component: RegisterClientComponent },
      { path: 'contact', component: ContactComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent, pathMatch: 'full' },
    ]),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
