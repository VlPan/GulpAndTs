import {IQuackBehavior} from '../../Interfaces/IQuackBehavior';

export class MegaQuackBehavior implements IQuackBehavior{
    quack(){
        console.log('This is realisation of MEGA Quack Behavior.');
    }
}