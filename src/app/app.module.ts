import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {OrganizationChartModule} from 'primeng/organizationchart';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import {TabMenuModule} from 'primeng/tabmenu';
@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrganizationChartModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TabMenuModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
