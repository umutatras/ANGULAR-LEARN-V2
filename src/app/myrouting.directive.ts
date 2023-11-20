import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMyrouting]'
})
export class MyroutingDirective {

  @Input() appMyRouting:string="";
  constructor(private el:ElementRef<HTMLLinkElement>) { }
  @HostListener("click") click(){
    console.log(this.appMyRouting);
  }

}
