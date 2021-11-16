import { single } from 'rxjs';
import { ThrowStmt } from "@angular/compiler";

export class Desk {
    name: string;
    moreThanTwoMonitors: boolean;
    ergonomicMouse: boolean; 
    dockingstation: boolean; 
    window: boolean; 
    singleOffice: boolean; 




    constructor(name: string, moreThanTwoMonitors: boolean, ergonomicMouse: boolean, dockingstation: boolean, window: boolean, singleOffice: boolean) {
        this.name = name;
        this.moreThanTwoMonitors= moreThanTwoMonitors;
        this.ergonomicMouse = ergonomicMouse;
        this.dockingstation = dockingstation;
        this.window = window; 
        this.singleOffice = singleOffice; 

    }

}
