import {IQuackBehavior} from '../../Interfaces/IQuackBehavior';

export class SimpleQuackBehavior implements IQuackBehavior{
    quack(){
        console.log('This is simple realisation of quack behavior');
    }
}