import { LightningElement , api} from 'lwc';

export default class Stadium extends LightningElement {
    @api team;
    @api stadium;
    @api mapmarkers;
    zoomLevel = 15;
}