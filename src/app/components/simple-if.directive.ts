import { Directive, TemplateRef, ViewContainerRef,Input } from '@angular/core';

@Directive({
  selector: '[simpleIf]'
})
export class SimpleIfDirective {
  @Input() set simpleIf(result:boolean){
    if(result)
    {
      this.templateRef.createEmbeddedView(this.templateRef);
    }
    else
    {
      this.viewContainer.clear();
    }

  }

  constructor(private templateRef:TemplateRef<any>,private viewContainer:ViewContainerRef) { }

}
