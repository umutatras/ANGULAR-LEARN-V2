import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-interceptor',
  templateUrl: './interceptor.component.html',
  styleUrls: ['./interceptor.component.css']
})
export class InterceptorComponent {

  constructor(private _http:HttpClient){

  }
  getApi(){
    this._http.get("https://jsonplaceholder.typicode.com/todos").subscribe(res=>{
console.log(res);
    });
  }
}
