import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector:"[appRenklendir]"
})
export class RenklendirDirective{
  @Input() appRenklendir:string="";
  constructor(private el:ElementRef){
    this.el.nativeElement.style.backgroundColor="Yellow";
    this.el.nativeElement.className="form-control";

  }

  @HostListener("mouseenter") method(){
    console.log("mouse üzerine geldi");
    this.el.nativeElement.style.backgroundColor="Red";
  }
  @HostListener("mouseleave") method2(){
    this.el.nativeElement.style.backgroundColor="white";
  }
}
