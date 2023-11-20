import { Component } from '@angular/core';

@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.component.html',
  styleUrls: ['./todoapp.component.css']
})
export class TodoappComponent {

  work:string="";
  todos:string[]=[];
  add(){
    this.todos.push(this.work);
    this.work="";
  }

}
