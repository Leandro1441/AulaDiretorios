import { Directive,ElementRef,Renderer } from '@angular/core';


@Directive({
  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective { 
 cor:string='yellow'
  constructor(private _elementRef:ElementRef,private _renderer:Renderer) { 
    //this._elementRef.nativeElement.style.backgroundColor=this.cor;
    this._renderer.setElementStyle(this._elementRef.nativeElement,
      'background-color',this.cor)
  }

}
