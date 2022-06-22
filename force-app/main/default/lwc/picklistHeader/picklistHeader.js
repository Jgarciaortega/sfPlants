import { LightningElement , api } from 'lwc';

export default class PicklistHeader extends LightningElement {

    @api teams;

    teamSelected(ev){
        let evt = new CustomEvent('teamselected', {
            detail: ev.target.value
        })
        this.dispatchEvent(evt);
    }
   
}