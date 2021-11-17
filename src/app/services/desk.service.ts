import { Desk } from '../classes/desk';
import { Injectable } from '@angular/core';


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
      {id: 0, name: "Arbeitsplatz M", moreThanTwoMonitors: false, ergonomicMouse: true,  dockingstation: true, window: true, singleOffice: true, available: true},  
      {id: 1, name: "Arbeitsplatz M", moreThanTwoMonitors: false, ergonomicMouse: false,  dockingstation: true, window: false, singleOffice: false, available: true},  
      {id: 2, name: "Arbeitsplatz S", moreThanTwoMonitors: false, ergonomicMouse: false,  dockingstation: false, window: false, singleOffice: true, available: true},    
      {id: 3, name: "Arbeitsplatz XL", moreThanTwoMonitors: true, ergonomicMouse: true,  dockingstation: true, window: false, singleOffice: false, available: true},  
      {id: 4, name: "Arbeitsplatz L", moreThanTwoMonitors: false, ergonomicMouse: true,  dockingstation: true, window: false, singleOffice: false, available: true},  
      {id: 5, name: "Arbeitsplatz S", moreThanTwoMonitors: true, ergonomicMouse: false,  dockingstation: true, window: false, singleOffice: false, available: true},  
      {id: 6, name: "Büro für Vorgesetzte", moreThanTwoMonitors: true, ergonomicMouse: false,  dockingstation: true, window: false, singleOffice: true, available: true},  
      {id: 7, name: "Arbeitsplatz XL", moreThanTwoMonitors: false, ergonomicMouse: false,  dockingstation: true, window: false, singleOffice: false, available: true},  
      {id: 8, name: "Arbeitsplatz M", moreThanTwoMonitors: true, ergonomicMouse: false,  dockingstation: true, window: true, singleOffice: false, available: false },  
      {id: 9, name: "Arbeitsplatz M", moreThanTwoMonitors: true, ergonomicMouse: false,  dockingstation: true, window: false, singleOffice: false, available: true},  
      {id: 10, name: "Arbeitsplatz M", moreThanTwoMonitors: false, ergonomicMouse: true,  dockingstation: true, window: true, singleOffice: true, available: true},  
      {id: 11, name: "Arbeitsplatz L", moreThanTwoMonitors: false, ergonomicMouse: false,  dockingstation: true, window: true, singleOffice: true, available: true},  
      {id: 12, name: "Arbeitsplatz S", moreThanTwoMonitors: false, ergonomicMouse: false,  dockingstation: false, window: false, singleOffice: true, available: true},    
      {id: 13, name: "Arbeitsplatz XL", moreThanTwoMonitors: true, ergonomicMouse: true,  dockingstation: true, window: false, singleOffice: false, available: false},  
      {id: 14, name: "Arbeitsplatz L", moreThanTwoMonitors: false, ergonomicMouse: true,  dockingstation: true, window: true, singleOffice: false, available: true},  
      {id: 15, name: "Arbeitsplatz S", moreThanTwoMonitors: true, ergonomicMouse: false,  dockingstation: false, window: false, singleOffice: false, available: true},  
      {id: 16, name: "Büro für Vorgesetzte", moreThanTwoMonitors: false, ergonomicMouse: false,  dockingstation: true, window: true, singleOffice: true, available: true},  
      {id: 17, name: "Arbeitsplatz XL", moreThanTwoMonitors: false, ergonomicMouse: true,  dockingstation: true, window: false, singleOffice: false, available: false},  
      {id: 18, name: "Arbeitsplatz M", moreThanTwoMonitors: true, ergonomicMouse: false,  dockingstation: true, window: false, singleOffice: false, available: true},  
      {id: 19, name: "Arbeitsplatz L", moreThanTwoMonitors: true, ergonomicMouse: false,  dockingstation: true, window: false, singleOffice: false, available: true},  
      {id: 20, name: "Arbeitsplatz M", moreThanTwoMonitors: false, ergonomicMouse: true,  dockingstation: false, window: true, singleOffice: true, available: true},  
      {id: 21, name: "Arbeitsplatz L", moreThanTwoMonitors: false, ergonomicMouse: true,  dockingstation: true, window: true, singleOffice: true, available: true},  
      {id: 22, name: "Arbeitsplatz S", moreThanTwoMonitors: false, ergonomicMouse: false,  dockingstation: false, window: false, singleOffice: true, available: false},    
      {id: 23, name: "Arbeitsplatz XL", moreThanTwoMonitors: true, ergonomicMouse: true,  dockingstation: true, window: false, singleOffice: false, available: true},  
      {id: 24, name: "Arbeitsplatz L", moreThanTwoMonitors: false, ergonomicMouse: true,  dockingstation: true, window: false, singleOffice: false, available: true},  
      {id: 25, name: "Arbeitsplatz S", moreThanTwoMonitors: true, ergonomicMouse: false,  dockingstation: true, window: false, singleOffice: false, available: true},  
      {id: 26, name: "Büro für Vorgesetzte", moreThanTwoMonitors: true, ergonomicMouse: true,  dockingstation: true, window: false, singleOffice: true, available: true},  
      {id: 27, name: "Arbeitsplatz XL", moreThanTwoMonitors: false, ergonomicMouse: true,  dockingstation: true, window: false, singleOffice: false, available: true},  
      {id: 28, name: "Arbeitsplatz M", moreThanTwoMonitors: true, ergonomicMouse: false,  dockingstation: true, window: false, singleOffice: false, available: true},  
      {id: 29, name: "Arbeitsplatz M", moreThanTwoMonitors: true, ergonomicMouse: false,  dockingstation: true, window: false, singleOffice: false, available: true},  
   ];  

    return arr;
  }

  returnDeskbyID(id: number): Desk {
    return this.desks.find(x => x.id == id)!;

  }


}



