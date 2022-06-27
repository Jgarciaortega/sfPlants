import { LightningElement , api } from 'lwc';

export default class ListPlayers extends LightningElement {

    @api players;
    @api team;

    handlePlayerClick(ev){
        const event = new CustomEvent('handleplayerclick', {
            // detail contains only primitives
            detail: ev.detail
        });
        // Fire the event from c-tile
        this.dispatchEvent(event);
    }

}