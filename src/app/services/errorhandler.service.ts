import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorhandlerService {

  constructor() { }

  errorHandler(err:HttpErrorResponse)
  {
    if(err.status===404)
    {
      console.log("api adresine ulaşılamıyor");
    }
  }
}
