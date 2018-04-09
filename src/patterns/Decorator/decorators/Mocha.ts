import {CondimentDecorator} from '../CondimentDecorato';
import {Boverage} from '../Boverage';

export class Mocha extends CondimentDecorator {
    beverage: Boverage;

    constructor(beverage: Boverage){
        super();
        this.beverage = beverage;
    }

    getDescription(){
        return this.beverage.getDescription() + ' , Mocha';
    }
    cost(){
        return .20 + this.beverage.cost();
    }
}
