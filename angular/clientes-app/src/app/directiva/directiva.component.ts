import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent {
  
  listaCurso: string[] = ['Typescript', 'Javascipt', 'Java', 'C#', 'PHP'];

  habilitar: boolean = true;

  setHabilitar():void {
    this.habilitar = this.habilitar == true? false: true;
  }
  setMostrarOrOcultar():string {
    const showdata = this.habilitar == true ? 'Ocultar' : 'Mostrar';
    return showdata
  }


}
