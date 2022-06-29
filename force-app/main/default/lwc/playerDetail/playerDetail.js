import { LightningElement, api } from 'lwc';

export default class PlayerDetail extends LightningElement {

    @api player;

    get birthDate() {
        //let fecha = new Date(this.player.bithDate);
        let fecha = this.player.bithDate.split('T');
        return fecha[0];
    }

    get salary() {

        let salary = this.player.salary;

        if(salary != null){
            salary = salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            salary = '$' + salary;
        }else{
            salary = 'unknown';
        }
        
        return salary;
    }


}