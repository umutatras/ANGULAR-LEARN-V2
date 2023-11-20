import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

@Injectable()
export class TestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token=localStorage.getItem("token");
    let newRequest=request.clone({
      headers:request.headers.set("Authentication","Bearer"+token)
    });

    return next.handle(newRequest).pipe(
      catchError((err:HttpErrorResponse)=>{
        //errorhandler yazılır
        return of()
      })
    );
  }
}
