import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { routing } from './app.routing';
import { RouteModule } from './route/route.module'


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductoComponent } from './components/producto/producto.component';

import { ProductoService } from './producto.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';

 


@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouteModule,
    HttpModule,
    FormsModule,

  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
