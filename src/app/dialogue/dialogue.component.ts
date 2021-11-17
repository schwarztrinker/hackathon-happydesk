import { DeskService } from '../services/desk.service';
import { LoginService } from '../services/login.service';
import { Component, Input, OnInit } from '@angular/core';
import { Desk } from '../classes/desk';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})
export class DialogueComponent {
  deskService: DeskService;

  public filter = { moreThanTwoMonitors: false, ergonomicMouse: false,  dockingstation: false, window: false, singleOffice: false, available: false };


  filteredDesks: Desk[] = [];

  constructor(loginService: LoginService) { 
    this.deskService = new DeskService
    this.filteredDesks = this.deskService.desks
    loginService.login()
  }


  filterChange() {
    this.filteredDesks = this.deskService.desks

    if(this.filter.moreThanTwoMonitors){
      this.filteredDesks = this.filteredDesks.filter(desk => {return desk.moreThanTwoMonitors})
    }
    if(this.filter.ergonomicMouse){
      this.filteredDesks = this.filteredDesks.filter(desk => {return desk.ergonomicMouse})
    }
    if(this.filter.dockingstation){
      this.filteredDesks = this.filteredDesks.filter(desk => {return desk.dockingstation})
    }
    if(this.filter.window){
      this.filteredDesks = this.filteredDesks.filter(desk => {return desk.window})
    }
    if(this.filter.singleOffice){
      this.filteredDesks = this.filteredDesks.filter(desk => {return desk.singleOffice})
    }
    if(this.filter.available){
      this.filteredDesks = this.filteredDesks.filter(desk => {return desk.available})
    }
  }




  // Predictions for Filtering 

  predictMoreThanTwoMonitors(){
    return this.filteredDesks.filter(desk => {return desk.moreThanTwoMonitors}).length
  }

  predictErgonomicMouse(){
    return this.filteredDesks.filter(desk => {return desk.ergonomicMouse}).length
  }

  predictDockingStation(){
    return this.filteredDesks.filter(desk => {return desk.dockingstation}).length
  }

  predictWindow(){
    return this.filteredDesks.filter(desk => {return desk.window}).length
  }

  predictSingleOffice(){
    return this.filteredDesks.filter(desk => {return desk.singleOffice}).length
  }




  

}
