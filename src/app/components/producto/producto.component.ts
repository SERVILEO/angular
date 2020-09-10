import { Component, OnInit } from '@angular/core';
import { Producto } from '../../producto'
import { ProductoService } from '../../producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  data: Producto[];
  current_prod: Producto;
  query:string='';
  crud_operation={is_new:false, is_visible:false}
  constructor(private service:ProductoService) {
    this.data=[];
   }

  ngOnInit() {
    this.service.read(this.query).subscribe(res =>{
      this.data = res.json();
      this.current_prod = new Producto();
    });
  }
  new(){
    this.current_prod = new Producto();
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = true;
  }
  save(){
    if(this.crud_operation.is_new){
    this.service.insert(this.current_prod).subscribe(res =>{
    this.current_prod = new Producto();
    this.crud_operation.is_visible = false;
    this.ngOnInit();
  });
return;
}
this.service.update(this.current_prod).subscribe(res=>{
  this.current_prod = new Producto();
  this.crud_operation.is_visible = false;
  this.ngOnInit();
});
  }
  edit(row){
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = false;
    this.current_prod=row;
    }
    delete(id){
      this.service.delete(id).subscribe(res=>{
        this.crud_operation.is_new = false;
        this.ngOnInit();
      });
    }

}
