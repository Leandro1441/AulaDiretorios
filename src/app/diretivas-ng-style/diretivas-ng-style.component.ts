import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-ng-style',
  templateUrl: './diretivas-ng-style.component.html',
  styleUrls: ['./diretivas-ng-style.component.scss']
})
export class DiretivasNgStyleComponent implements OnInit {
  ativo:boolean=false;
  tamanhoFonte:number=10;
  trocaFonte:number=10;

  MtrocaFonte(){
    this.tamanhoFonte=this.trocaFonte;
  }
  mudarAtivo(){
    this.ativo=!this.ativo;
  }
  constructor() { }

  ngOnInit() {
  }

}
