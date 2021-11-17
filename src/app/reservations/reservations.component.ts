import { DeskService } from '../services/desk.service';
import { Component, OnInit } from '@angular/core';
import { Desk } from '../classes/desk';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  deskID: number;
  desk: Desk; 

  constructor(deskService: DeskService) {
    this.deskID = Number(localStorage.getItem('deskID'))
    this.desk = deskService.returnDeskbyID(this.deskID)
   }

  ngOnInit(): void {
    
  }

}
