import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appValid]'
})
export class ValidDirective {

  @Input() appValid:boolean=false;
  constructor(private el:ElementRef) { }
@HostListener("keyup") keyup(){
  if(this.appValid)
  {
    this.el.nativeElement.className="form-control is-valid";
  }
  else
  {
    this.el.nativeElement.className="form-control is-invalid";
  }
}
@HostListener("keypress") keyPress(){
  if(this.appValid)
  {
    this.el.nativeElement.className="form-control is-valid";
  }
  else
  {
    this.el.nativeElement.className="form-control is-invalid";
  }
}
}
