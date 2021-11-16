import { Desk } from '../classes/desk';
import { Injectable } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { DSAKeyPairKeyObjectOptions } from 'crypto';

@Injectable({
  providedIn: 'root'
})
export class DeskService {
  public desks: Desk[];

  constructor() {
    this.desks = this.generateDesks()
  }

  generateDesks(){
    let arr: Desk[] = [  
      {name: "Arbeitsplatz 1", moreThanTwoMonitors: false, ergonomicMouse: true,  dockingstation: true, window: true, singleOffice: true},  
      {name: "Arbeitsplatz 2", moreThanTwoMonitors: false, ergonomicMouse: false,  dockingstation: false, window: false, singleOffice: true},    
      {name: "Arbeitsplatz XXL", moreThanTwoMonitors: true, ergonomicMouse: true,  dockingstation: true, window: false, singleOffice: false},  
   ];  


    return arr;
  }
}
