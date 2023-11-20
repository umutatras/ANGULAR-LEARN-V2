import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',

  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public translate:TranslateService){
    translate.addLangs(["en","tr"]);
    translate.setDefaultLang("tr");
    const browserLang=translate.getBrowserLang();
    translate.use(browserLang?.match(/en|tr/)?browserLang:"tr");

  }
  name:string="umut";

  changeName(event:any)
  {
    this.name=event;
  }

  // @ViewChild("taksitTutari1") taksitTutari1:ElementRef<HTMLSelectElement>;
  // this.taksitTutari1.nativeElement.value; bunlar da ayrı bir kullanım
// krediTutari:number=10000;
// taksitTutari:number=3;
// tutar:number=0;

// hesapla()
// {

//   let tutar=this.krediTutari/this.taksitTutari;
// }


}
