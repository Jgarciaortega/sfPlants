import { LightningElement, wire } from 'lwc';
import getAllSpecies from "@salesforce/apex/SpeciesService.getAllSpecies";

export default class SpeciesList extends LightningElement {
    
   @wire(getAllSpecies)
    species;

    /*species = [
        {
            Name: "Jazmin",
            Description__c: "Olorosa...",
            Image_URL__c: "https://www.farmaceuticonline.com/wp-content/uploads/2019/03/aloevera-1024x768.jpg",
            Location__c: "Indoors, Outdoors"
        }
    ];*/

}