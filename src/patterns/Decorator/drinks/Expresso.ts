import {Boverage} from '../Boverage';

export class Expresso extends Boverage{
    
    constructor(){
        super();
        this.description = 'Espresso';
    }

    public cost(): number{
        return 1.99;
    }
}
