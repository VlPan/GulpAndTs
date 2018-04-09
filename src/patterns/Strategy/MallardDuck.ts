import {IFlyBehavior} from './Interfaces/IFlyBehavior';
import {IQuackBehavior} from './Interfaces/IQuackBehavior';
import {ISwimBegavior} from './Interfaces/ISwimBegavior';
import {SimpleFlyBehavior} from './Behaviors/Fly/SimpleFlyBehavior';
import {SimpleQuackBehavior} from './Behaviors/Quack/SimpleQuackBehavior';
import {SimpleSwimBehavior} from './Behaviors/Swim/SimpleSwimBehavior';
import {Duck} from './Duck';

export class MallardDuck extends Duck{
    flyBehavior: IFlyBehavior;
    quackBehavior: IQuackBehavior;
    swimBehavior: ISwimBegavior;

    constructor(){
        super();
        this.flyBehavior = new SimpleFlyBehavior();
        this.quackBehavior = new SimpleQuackBehavior();
        this.swimBehavior = new SimpleSwimBehavior()
    }

    display(){
        console.log('Real Murrald duck display method');
    }


}