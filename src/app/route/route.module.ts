import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { ProductoComponent } from '../components/producto/producto.component';

const routes: Routes=[
{ path: 'home', component: HomeComponent },
{ path: 'productos', component: ProductoComponent }

];

@NgModule({
  
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class RouteModule { }
