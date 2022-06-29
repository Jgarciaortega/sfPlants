import { LightningElement, api } from 'lwc';

export default class Player extends LightningElement {

    @api player;
    @api team;

    playerClick() {
        const event = new CustomEvent('playerclick', {
            // detail contains only primitives
            detail: this.player.id
        });
        // Fire the event from c-tile
        this.dispatchEvent(event);
    }


    get primaryColor() {
        return `background-color:#${this.team.primary_color}`
    }

    get secondaryColor() {
        return `background-color:#${this.team.secondary_color}`
    }

    get terciayColor() {
        return `background-color:#${this.team.terciary_color}`
    }

}