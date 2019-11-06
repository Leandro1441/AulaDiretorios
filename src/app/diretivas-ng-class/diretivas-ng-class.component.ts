import { platformBrowser } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-diretivas-ng-class',
  templateUrl: './diretivas-ng-class.component.html',
  styleUrls: ['./diretivas-ng-class.component.scss']
})
export class DiretivasNgClassComponent implements OnInit {

  meuFavorito:boolean=false;
  meuFavorito1:boolean=false;

  atualizarEstrela1(){
    this.meuFavorito1=!this.meuFavorito1
  }

  atualizarEstrela(){
    this.meuFavorito=!this.meuFavorito;
  }
  constructor() { }

  ngOnInit() {
  }

}
