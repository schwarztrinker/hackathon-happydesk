import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn: boolean;

  constructor() {
    this.isLoggedIn = false;
   }

  getLogin(){
    return this.isLoggedIn;
  }
  
  login(){
    this.isLoggedIn = true;
  }

  
}
