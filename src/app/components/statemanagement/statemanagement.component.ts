import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-statemanagement',
  templateUrl: './statemanagement.component.html',
  styleUrls: ['./statemanagement.component.css']
})
export class StatemanagementComponent {
@Input() name:string="";
@Output() changeNameEvent=new EventEmitter<string>
changeName()
{
  this.changeNameEvent.emit(this.name);
}

}
