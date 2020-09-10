import { Injectable } from '@angular/core';
import { Producto } from './producto';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  data:Producto[];
  constructor(private http:Http) { }
  read(query=''){
    return this.http.get('http://127.0.0.1:8000/productos',{params: {buscar: query}});
  }
  insert(data: Producto){
    return this.http.post('http://127.0.0.1:8000/productos',data);
  }
  update(data:Producto){
    return this.http.put('http://127.0.0.1:8000/productos/' + data.id, data);
  }
  delete(id){
    return this.http.delete('http://127.0.0.1:8000/productos/' + id);
  }
}
