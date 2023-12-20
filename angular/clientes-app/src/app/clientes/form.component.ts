import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service'; 
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
public cliente = new Cliente();
public titulo = "Crear Cliente";
constructor(private clienteSevice:ClienteService, 
  private router:Router,
  private activateRoute: ActivatedRoute ) {}
ngOnInit(): void {

  this.cargarCliente();
    
}



cargarCliente():void {
  this.activateRoute.params.subscribe(
    params => {
      let id = params['id'];
      if(id) {
        this.clienteSevice.getCliente(id).subscribe((cliente) => 
        this.cliente=cliente
        )
      }
    }

  )
}

create(): void {
  console.log("Clicked!");
  console.log(this.cliente);
  this.clienteSevice.createClientes(this.cliente).subscribe(
    cliente => { 
      this.router.navigate(['/clientes']);
      swal.fire('Nuevo Cliente', `Cliente ${cliente.nombre} creado con éxito!`, 'success' );

    }
  )
  
}

update():void {
  this.clienteSevice.update(this.cliente).subscribe(cliente => {
    this.router.navigate(['/clientes']);
    swal.fire('Cliente Actualizado', `Cliente ${cliente.nombre} actualizado con éxito!`, 'success' );

    
  })
}


}
