import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent }  from './app.component';

import { ROUTES } from './app.routes';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {HomeComponent} from "./components/routing_components/home/home.component";


@NgModule({
    bootstrap: [
      AppComponent
    ],
    declarations: [
      AppComponent,
      HomeComponent
    ],
    imports: [
      HttpModule,
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot(ROUTES, { useHash: false })
    ],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA
    ],
    exports: [

    ],
    providers: [

    ]
})
export class AppModule { }
