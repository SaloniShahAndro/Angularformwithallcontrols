import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AccordionModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';
import { CalendarModule } from 'primeng/calendar';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';

import { AppComponent } from './app.component';
import {CheckboxModule} from 'primeng/checkbox';
import {PasswordModule} from 'primeng/password';
import {InputMaskModule} from 'primeng/inputmask';
import {KeyFilterModule} from 'primeng/keyfilter';

import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service
import {DataService} from './data.service';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'



@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    CalendarModule,
    CheckboxModule,
    PasswordModule,
    ReactiveFormsModule,
    InputMaskModule,
    KeyFilterModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
