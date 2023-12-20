import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];

  constructor(
    private clienteService:ClienteService,
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.clienteService.getClientes().subscribe(
      // Nuestro observador
      clientes => this.clientes = clientes
    );
  }

  delete(cliente:Cliente): void {

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "¿Está seguro?",
      text: `¿Seguro desea eliminar ${cliente.nombre} ${cliente.apellido}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, Eliminar",
      cancelButtonText: "No, Cancelar",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.clienteService.delete(cliente).subscribe(
          response => {
            this.clientes = this.clientes.filter( cli => cli !== cliente);
            swalWithBootstrapButtons.fire({
              title: "Eliminado",
              text: `Cliente ${cliente.nombre} ${cliente.apellido} eliminado con éxito`,
              icon: "success"
            });
          }
        )
        
      } 
    });
    
  }

}
