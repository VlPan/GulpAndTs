import {IQuackBehavior} from '../../Interfaces/IQuackBehavior';

export class NoQuackBehavior implements IQuackBehavior{
    quack(){
        console.log('This is realisation of NoQuack Behavior. SO your duck cant quak');
    }
}
