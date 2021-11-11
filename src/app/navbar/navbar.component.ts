import { LoginService } from '../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(public loginService:LoginService) {
    this.isLoggedIn= this.loginService.getLogin();
   }

  ngOnInit(): void {
  }


}
