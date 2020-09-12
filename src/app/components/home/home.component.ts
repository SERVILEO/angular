import { Component, OnInit } from '@angular/core';
import { Producto } from '../../producto';
import { ProductoService } from '../../producto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: Producto[];
  current_prod: Producto;
  query:string = '';
  constructor(private service:ProductoService) {
  this.data=[];
   }
  

   ngOnInit() {
    this.service.read(this.query).subscribe(res =>{
      this.data = res.json();
      this.current_prod = new Producto();
    });
  }

}
