import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-ngif',
  templateUrl: './diretivas-ngif.component.html',
  styleUrls: ['./diretivas-ngif.component.scss']
})
export class DiretivasNgifComponent implements OnInit {
  cursos:string[]=["Angular 2"];
  mostrarCursos:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  onMostrarCurso(){
    this.mostrarCursos=!this.mostrarCursos; 
  }
  onAdicionarCurso(){
    const nc=prompt();
    if(nc!=''){
      this.cursos.push(nc);
    }
  }

}
