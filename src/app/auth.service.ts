import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }
  checkIsAuth(){
    if(localStorage.getItem("token"))
    return true;
    else
    this.router.navigateByUrl("/login");
  ;  return false;
  }
}
