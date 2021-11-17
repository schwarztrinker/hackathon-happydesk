import { DeskService } from '../services/desk.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Desk } from '../classes/desk';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-desk-detail',
  templateUrl: './desk-detail.component.html',
  styleUrls: ['./desk-detail.component.css']
})
export class DeskDetailComponent implements OnInit {

  desk: Desk;
  id: number = 0;

  constructor(private route: ActivatedRoute, private deskService: DeskService, loginService:LoginService) {
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    this.desk = this.deskService.returnDeskbyID(this.id)
    
    loginService.login()
  }

  saveDeskToLocalStorage(){
    localStorage.setItem('deskID', this.id.toString());
  }



  ngOnInit(): void {
    
  }


}
