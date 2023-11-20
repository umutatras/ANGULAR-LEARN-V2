import { Component } from '@angular/core';

@Component({
  selector: 'app-ifornek',
  templateUrl: './ifornek.component.html',
  styleUrls: ['./ifornek.component.css']
})
export class IfornekComponent {
  meyve:string="";

  isActive:boolean=true;
  meyveler:string[]=["elma","armut","nar","üzüm"];
  changeActiveStatus(){
    this.isActive=!this.isActive;
  }

  addMeyve(){
    this.meyveler.push(this.meyve);
    this.meyve="";
  }

}
