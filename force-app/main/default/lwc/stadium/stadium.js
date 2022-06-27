import { LightningElement , api} from 'lwc';

export default class Stadium extends LightningElement {
    @api team;
    @api stadium;
    @api mapmarkers;
    zoomLevel = 17;


    get primaryColor() {
        return `background-color:#${this.team.primary_color}`
    }

    get secondaryColor() {
        return `background-color:#${this.team.secondary_color}`
    }

    get terciayColor() {
        return `background-color:#${this.team.terciary_color}`
    }

    get fontPrimaryColor(){
        return `color:#${this.team.primary_color}`
     }

    get fontSecondaryColor(){
        return `color:#${this.team.secondary_color}`
     }
  
     get fontTerciayColor(){
        return `color:#${this.team.terciary_color}`
    }
}