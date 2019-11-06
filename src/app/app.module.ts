import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiretivasNgifComponent } from './diretivas-ngif/diretivas-ngif.component';
import { DiretivasNgForComponent } from './diretivas-ng-for/diretivas-ng-for.component';
import { DiretivasNgSwitchComponent } from './diretivas-ng-switch/diretivas-ng-switch.component';
import { DiretivasNgClassComponent } from './diretivas-ng-class/diretivas-ng-class.component';
import { DiretivasNgStyleComponent } from './diretivas-ng-style/diretivas-ng-style.component';
import { OperadorElvisComponent } from './operador-elvis/operador-elvis.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';
import { DiretivasCustomizadasComponent } from './diretivas-customizadas/diretivas-customizadas.component';

@NgModule({
  declarations: [
    AppComponent,
    DiretivasNgifComponent,
    DiretivasNgForComponent,
    DiretivasNgSwitchComponent,
    DiretivasNgClassComponent,
    DiretivasNgStyleComponent,
    OperadorElvisComponent,
    NgContentComponent,
    FundoAmareloDirective,
    DiretivasCustomizadasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
