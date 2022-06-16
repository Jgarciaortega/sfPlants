import { LightningElement } from 'lwc';


export default class Header extends LightningElement {

   nameTeam;

    nextHandler(evt){
        this.nameTeam = evt.detail.value;
    }
    

}