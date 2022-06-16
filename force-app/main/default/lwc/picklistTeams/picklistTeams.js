import { LightningElement, track , wire} from 'lwc';
import getAllTeams from "@salesforce/apex/DataNbaApi.GetTeams";

export default class PicklistTeams extends LightningElement {

    @track teams;

    @wire(getAllTeams)
    wiredTeams({ error, data}){
        if (data) {
            this.teams = data.map((cls) => Object.assign({}, { label: cls.Name, value:cls.Name , img: cls.WikipediaLogoUrl}));
        } else if (error) {
            this.error = error;
            console.error('error => ', error); // error handling
        }
    }

    handleChange(ev){
       
        const event = new CustomEvent('handleChange', {
            // detail contains only primitives
            detail: ev.target.value

        });
        console.log(ev.target.value)
        // Fire the event from c-tile
        this.dispatchEvent(event);
    }

}