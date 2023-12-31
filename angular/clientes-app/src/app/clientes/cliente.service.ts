import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private urlEndpoint:string = "http://localhost:8090/api/clientes";

  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    //return of(CLIENTES); caso clientes estaticos
    return this.http.get<Cliente[]>(this.urlEndpoint) //forma de casteo 1
   /* return this.http.get(this.urlEndpoint).pipe(
      map(response =>  response as Cliente[]) 
    );*/
  }

  createClientes(cliente:Cliente):Observable<Cliente>{
  
    return this.http.post<Cliente>(this.urlEndpoint, cliente, {headers : this.httpHeaders})
  } 

  getCliente(id):Observable<Cliente> {
    return this.http.get<Cliente>( `${this.urlEndpoint}/${id}`)
  }

  update(cliente:Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`${this.urlEndpoint}/${cliente.id}`, cliente, {headers: this.httpHeaders} )
  }

  delete(cliente:Cliente): Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.urlEndpoint}/${cliente.id}`, {headers: this.httpHeaders})


  }
}
