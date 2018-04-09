import {CondimentDecorator} from '../CondimentDecorato';
import {Boverage} from '../Boverage';

export class Soy extends CondimentDecorator {
    beverage: Boverage;

    constructor(beverage: Boverage){
        super();
        this.beverage = beverage;
    }

    getDescription(){
        return this.beverage.getDescription() + ' , Soy';
    }
    cost(){
        return .15 + this.beverage.cost();
    }
}
