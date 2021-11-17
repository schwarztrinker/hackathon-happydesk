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

  public filter = { moreThanTwoMonitors: false, ergonomicMouse: false, dockingstation: false, window: false, singleOffice: false, available: false };


  filteredDesks: Desk[] = [];

  constructor(loginService: LoginService) {
    this.deskService = new DeskService
    this.filteredDesks = this.deskService.desks
    loginService.login()
  }


  filterChange() {
    this.filteredDesks = this.deskService.desks

    if (this.filter.moreThanTwoMonitors) {
      this.filteredDesks = this.filteredDesks.filter(desk => { return desk.moreThanTwoMonitors })
    }
    if (this.filter.ergonomicMouse) {
      this.filteredDesks = this.filteredDesks.filter(desk => { return desk.ergonomicMouse })
    }
    if (this.filter.dockingstation) {
      this.filteredDesks = this.filteredDesks.filter(desk => { return desk.dockingstation })
    }
    if (this.filter.window) {
      this.filteredDesks = this.filteredDesks.filter(desk => { return desk.window })
    }
    if (this.filter.singleOffice) {
      this.filteredDesks = this.filteredDesks.filter(desk => { return desk.singleOffice })
    }
    if (this.filter.available) {
      this.filteredDesks = this.filteredDesks.filter(desk => { return desk.available })
    }
  }




  // Predictions for Filtering 

  predictMoreThanTwoMonitors() {
    return this.filteredDesks.filter(desk => { return desk.moreThanTwoMonitors }).length
  }

  predictErgonomicMouse() {
    return this.filteredDesks.filter(desk => { return desk.ergonomicMouse }).length
  }

  predictDockingStation() {
    return this.filteredDesks.filter(desk => { return desk.dockingstation }).length
  }

  predictWindow() {
    return this.filteredDesks.filter(desk => { return desk.window }).length
  }

  predictSingleOffice() {
    return this.filteredDesks.filter(desk => { return desk.singleOffice }).length
  }


  selectedStates = 0;
  selectedCities = 0;
   
  cities:any = [];
  buildings:any = [];
   
   
  onSelectState(state_id: number) {
  this.selectedStates = state_id;
  this.selectedCities = 0;
  this.buildings = [];
  this.cities = this.getCities().filter((item) => {
  return item.state_id === Number(state_id)
  });
  }
   
  onSelectCities(city_id: number) {
  this.selectedCities = city_id;
  this.buildings = this.getBuildings().filter((item) => {
  return item.city_id === Number(city_id)
  });
  }
   
  getCountries() {
  return [
  { id: 1, name: 'Bayern' },
  { id: 2, name: 'Hessen' },
  { id: 3, name: 'NRW' }
  ];
  }
   
  getCities() {
  return [
  { id: 1, state_id: 1, name: 'Augsburg' },
  { id: 2, state_id: 1, name: 'München' },
  { id: 3, state_id: 1, name: 'Nürnberg' },
  { id: 4, state_id: 1, name: 'Regensburg' },
  { id: 5, state_id: 1, name: 'Würzburg' },
  { id: 6, state_id: 2, name: 'Frankfurt' },
  { id: 7, state_id: 2, name: 'Giessen' },
{ id: 8, state_id: 3, name: 'Bielefeld' },
 { id: 9, state_id: 3, name: 'Dortmund' },
{ id: 10, state_id: 3, name: 'Düsseldort' },
{ id: 11, state_id: 3, name: 'Köln' },

]
}
 
getBuildings() {
return [
{ id: 1, city_id: 1, name: 'Filiale' },
{ id: 2, city_id: 2, name: 'Filiale' },
{ id: 3, city_id: 2, name: 'HV' },
{ id: 4, city_id: 3, name: 'Filiale' },
{ id: 5, city_id: 4, name: 'Filiale' },
{ id: 6, city_id: 5, name: 'Filiale' },
{ id: 9, city_id: 6, name: 'FBC' },
{ id: 10, city_id: 6, name: 'Skyper' },
{ id: 11, city_id: 6, name: 'Skyper Villa' },
{ id: 12, city_id: 6, name: 'Trianon' },
{ id: 13, city_id: 6, name: 'Ginnheim' },
{ id: 14, city_id: 7, name: 'Filiale' },
{ id: 15, city_id: 8, name: 'Filiale' },
{ id: 16, city_id: 9, name: 'Filiale' },
{ id: 17, city_id: 10, name: 'HV' },
{ id: 18, city_id: 11, name: 'Filiale' },
]
}



}
