import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorhandlerService } from './errorhandler.service';

@Injectable({
  providedIn: 'root'
})
export class GenerichttpserviceService {

  apiurl:string="https://jsonplaceholer.typicode.com/";
  constructor(private _htto:HttpClient,private _err:ErrorhandlerService ){

   }

   get(api:string,callBack:(res:any)=>void){
    this._htto.get(this.apiurl+api,{}).subscribe({
      next:(res)=>{
          callBack(res);
      },
      error:(err:HttpErrorResponse)=>{
          this._err.errorHandler(err);
      }
    });
   }
   post(api:string,model:any,callBack:(res:any)=>void){
    this._htto.post(this.apiurl+api,model,{}).subscribe({
      next:(res)=>{
        callBack(res);
      },
      error:(err:HttpErrorResponse)=>{
        this._err.errorHandler(err);
      }
    })
  }
}
