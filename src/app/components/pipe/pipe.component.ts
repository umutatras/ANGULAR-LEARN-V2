import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
  constructor(private _date:DatePipe){
    this.inputdate=this._date.transform(new Date(),'yyyy-MM-dd')

  }
  money:number=0;
  dateString:Date=new Date();
  inputdate:string="2023-11-07";
  searc:string="";
names:string[]=[
  "Ahmet",
  "Mehmet",
  "Umut",
  "Barış"
];

users:{
  name:String,
  age:number
}[]=[
{
  name:"umut",
  age:12
}
];
}
