import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-ng-switch',
  templateUrl: './diretivas-ng-switch.component.html',
  styleUrls: ['./diretivas-ng-switch.component.scss']
})
export class DiretivasNgSwitchComponent implements OnInit {

  aba:string="home";
  constructor() { }

  ngOnInit() {
  }

}
