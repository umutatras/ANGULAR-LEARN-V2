import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit{
//   addform=new FormGroup({
//     email:new FormControl("",Validators.required),
//     password:new FormControl("",[Validators.required,Validators.minLength(2)])
//   });

// add(){
//   if(this.addform.valid)
//   {
//     console.log(this.addform);
//     this.addform.reset();

//   }

// }
constructor(private _date:DatePipe)
{

}
  ngOnInit(): void {
    this.createAddForm();
  }
  employess:Employess[]=[];
addForm:FormGroup=new FormGroup({});

createAddForm()
{
  this.addForm=new FormGroup({
    name:new FormControl("",Validators.required),
    startingDate:new FormControl(this._date.transform(new Date(),'yyyy-MM-dd')),
    profession:new FormControl("",Validators.required)
  })
}

save(){
  if(this.addForm.valid)
    this.employess.push(this.addForm.value);
}

login(form:NgForm){
console.log(form);
}

}

class Employess{
  name:string="";
  profession:string="";
  startingDate:string="";
}
