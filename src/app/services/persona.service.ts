import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PersonaService {
url='http://127.0.0.1:8000/productos'
  constructor(
    private http:HttpClient
  ) {
    console.log('Hola Servicio Persona') 
   }

   getPersonas() {
     let header = new HttpHeaders()
      .set('Type-content','aplication/json')
        return this.http.get(this.url, {
         headers: header });
   }
}
