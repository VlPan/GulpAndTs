import {CondimentDecorator} from '../CondimentDecorato';
import {Boverage} from '../Boverage';

export class Whip extends CondimentDecorator {
    beverage: Boverage;

    constructor(beverage: Boverage){
        super();
        this.beverage = beverage;
    }

    getDescription(){
        return this.beverage.getDescription() + ' , Whip';
    }
    cost(){
        return .10 + this.beverage.cost();
    }
}
