import { Directive,HostListener,/*ElementRef,Renderer,*/HostBinding } from '@angular/core';

@Directive({
  selector: '[HighligthMouse]'
})


export class HighligthMouseDirective {
  @HostListener('mouseenter') onMouseOver(){
  /*  this._renderer.setElementStyle(
      this._elementRef.nativeElement,'background-color','red'
    );*/
    this.backgroundColor="red";
  }

  @HostListener('window:load') windowLoad(){
    /*
    this._renderer.setElementStyle(
      this._elementRef.nativeElement,'background-color','white'
    );*/
    this.backgroundColor="blue";
  }
  @HostListener('mouseleave') onMouseLeave(){
    /*
    this._renderer.setElementStyle(
      this._elementRef.nativeElement,'background-color','white'
    );*/
    this.backgroundColor="white";
  }
  
  @HostBinding('style.backgroundColor') backgroundColor:string;

  constructor(
   // private _elementRef:ElementRef,
   // private _renderer:Renderer,
    ) { }

}
