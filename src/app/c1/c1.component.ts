import { Component } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.scss']
})
export class C1Component {

  heads:string[]=[
    "#",
    "alan 1 ",
    "alan 2 ",
    "alan 3 ",

  ]
 list=[
  {
    id:"1",
    name:"umut",
    lastName:"atraş"
  }
 ]
}
