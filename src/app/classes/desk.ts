import { single } from 'rxjs';
import { ThrowStmt } from "@angular/compiler";

export class Desk {
    id: number;
    name: string;

    moreThanTwoMonitors: boolean;
    ergonomicMouse: boolean; 
    dockingstation: boolean; 
    window: boolean; 
    singleOffice: boolean; 

    available: boolean;




    constructor(id: number, name: string, moreThanTwoMonitors: boolean, ergonomicMouse: boolean, dockingstation: boolean, window: boolean, singleOffice: boolean, available: boolean) {
        this.id = id;
        this.name = name;
        this.moreThanTwoMonitors= moreThanTwoMonitors;
        this.ergonomicMouse = ergonomicMouse;
        this.dockingstation = dockingstation;
        this.window = window; 
        this.singleOffice = singleOffice; 
        this.available = available;

    }

}
