import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-customizadas',
  templateUrl: './diretivas-customizadas.component.html',
  styleUrls: ['./diretivas-customizadas.component.scss']
})
export class DiretivasCustomizadasComponent implements OnInit {
 cursos=['Java','Angular']
  mostrarCursos:boolean=false;

  onMostrarCurso(){
    this.mostrarCursos=!this.mostrarCursos; 
  }
  constructor() { }
 

  ngOnInit() {
  }

}
