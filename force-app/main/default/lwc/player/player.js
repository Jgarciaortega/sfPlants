import { LightningElement, api} from 'lwc';

export default class Player extends LightningElement {

    @api player;
    showDetails(){       
        console.log('show details')
    }

}



