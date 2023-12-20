import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clientes-app';
  curso: string = 'Angular y Spring';
  estudiante: string = 'Edda Camila Rodriguez Mojica'
  profesor = 'Andres Guzman'

}
