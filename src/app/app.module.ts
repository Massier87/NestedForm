import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AddressComponent} from "./components/customer/address.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CustomerComponent} from "./components/customer/customer.component";
import {TelephoneComponent} from "./components/phonebook/telephone.component";
import {EmailComponent} from "./components/phonebook/email.component";


@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,
    CustomerComponent,
    TelephoneComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
