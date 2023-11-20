import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ErrorhandlerService } from 'src/app/services/errorhandler.service';
import { GenerichttpserviceService } from 'src/app/services/generichttpservice.service';
@Component({
  selector: 'app-apiistekleri',
  templateUrl: './apiistekleri.component.html',
  styleUrls: ['./apiistekleri.component.css']
})
export class ApiistekleriComponent {
  model:{
    id:number,
    title:string,
    completed:boolean,
    userId:number
  }={
    id:0,
    title:"",
    completed:false,
    userId:1
  }
  constructor(private httpClient:HttpClient,private _err:ErrorhandlerService,private serviceGeneric:GenerichttpserviceService){
      this.httpClient.get("https://jsonplaceholder.typicode.com/todos/1").subscribe({
        next:(res:any)=>
        {
          console.log(res);
        },
        error:(err:HttpErrorResponse)=>{
          this._err.errorHandler(err);
        },
        complete:()=>{
          console.log("...");
        }
  });

  this.httpClient.post("https://jsonplaceholder.typicode.com/todos/",{userId:1,id:0,title:"deneme",completed:false}).subscribe({
    next:(res:any)=>{
      console.log(res);
    },
    error:(err:HttpErrorResponse)=>{
      console.log(err);
    }
  });

  let headers={
    headers:{
      "authorization":"deger"
    }
  }
  this.httpClient.get("https://jsonplaceholder.typicode.com/todos/1",headers).subscribe(res=>{
    console.log(res);
  })

  this.httpClient.get("https://jsonplaceholder.typicode.com/todos/1",{headers:{"authorization":"deger"}}).subscribe(res=>{
    console.log(res);
  })

  }

  save()
  {
    this.httpClient.post("https://jsonplaceholder.typicode.com/todos/",this.model).subscribe(res=>{
      console.log(res);
    });
  }


  get(callBack:(res:any)=>void){
    this.serviceGeneric.get("todos",res=>callBack(res));

}
add(model:any,callBack:(res:any)=>void)
{
  this.serviceGeneric.post("todos",model,res=>callBack(res));
}


}
