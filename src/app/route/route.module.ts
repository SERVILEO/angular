import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { ProductoComponent } from '../components/producto/producto.component';
import { DetalleProductoComponent } from '../components/detalle-producto/detalle-producto.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactoComponent } from '../components/contacto/contacto.component';
import { NosotrosComponent } from '../components/nosotros/nosotros.component';


const routes: Routes=[
{ path:'home', component:HomeComponent },
{ path:'productos', component: ProductoComponent },
{ path:'productos/detalle', component: DetalleProductoComponent },
{ path:'about', component:AboutComponent },
{ path:'contacto', component:ContactoComponent },
{ path:'nosotros', component:NosotrosComponent },

{ path:'**', pathMatch:'full', redirectTo:'home' }

];

@NgModule({
  
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class RouteModule { }
