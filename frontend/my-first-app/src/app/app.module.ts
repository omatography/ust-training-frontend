import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './course.list/card.component';
import { navbarComponent } from './navbar.component';
import { RandomActivityComponent } from './random.activity/random.activity.component';
import {HttpClientModule} from '@angular/common/http';
import {  ListComponent } from './course.list/course.list.component';

@NgModule({
  declarations: [
    AppComponent, CardComponent, navbarComponent, RandomActivityComponent, ListComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
