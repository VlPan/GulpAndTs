import {IQuackBehavior} from './Interfaces/IQuackBehavior';
import {ISwimBegavior} from './Interfaces/ISwimBegavior';
import {IFlyBehavior} from './Interfaces/IFlyBehavior';

export abstract class Duck implements IQuackBehavior, ISwimBegavior, IFlyBehavior{
    quackBehavior: IQuackBehavior;
    swimBehavior: ISwimBegavior;
    flyBehavior: IFlyBehavior;

    // constructor(_quackBehavior:IQuackBehavior, _swimBehavior:ISwimBegavior, _flyBehavior:IFlyBehavior){
    //     this.flyBehavior = _flyBehavior;
    //     this.swimBehavior = _swimBehavior;
    //     this.quackBehavior = _quackBehavior;
    // }



    public swim(name?:string): void{
       this.swimBehavior.swim();
    }

    public quack() : void{
        this.quackBehavior.quack();
    }

    public fly(): void{
        this.flyBehavior.fly();
    }

    setSwimBehavior(_newSwimBehavior: ISwimBegavior){
        this.swimBehavior = _newSwimBehavior;
    }

    setQuackBehavior(_newQuakBehavior: IQuackBehavior){
        this.quackBehavior = _newQuakBehavior;
    }

    setFlyBehavior(_newFlyBehavior: IFlyBehavior){
        this.flyBehavior = _newFlyBehavior;
    }

    abstract display(): void;




}


