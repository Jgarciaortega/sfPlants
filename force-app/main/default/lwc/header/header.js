import { LightningElement , api } from 'lwc';
import NBA_LOGO from '@salesforce/resourceUrl/nba_logo';

export default class Header extends LightningElement {

   @api teams;
   @api team;
   nba_logo = NBA_LOGO;


   teamSelected(ev){

      let evt = new CustomEvent('teamselected', {
         detail: ev.detail
     })

     this.dispatchEvent(evt);
   }

   get primaryColor(){
      return `background-color:#${this.team.primary_color}`
  }

   get secondaryColor(){
      return `background-color:#${this.team.secondary_color}`
   }

   get fontSecondaryColor(){
      return `color:#${this.team.secondary_color}`
   }

   get fontTerciayColor(){
      return `color:#${this.team.terciary_color}`
  }

}