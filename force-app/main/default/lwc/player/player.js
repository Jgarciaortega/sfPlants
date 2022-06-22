import { LightningElement , api} from 'lwc';

export default class Player extends LightningElement {

    @api player;

    playerClick(){
        const event = new CustomEvent('playerclick', {
            // detail contains only primitives
            detail: this.player.id
        });
        // Fire the event from c-tile
        this.dispatchEvent(event);
    }
}