import { LightningElement , api } from 'lwc';


export default class Header extends LightningElement {

   @api teams;
   @api team;

   teamSelected(ev){

      let evt = new CustomEvent('teamselected', {
         detail: ev.detail
     })

     this.dispatchEvent(evt);
   }



}