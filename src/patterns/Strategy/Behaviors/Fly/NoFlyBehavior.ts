import {IFlyBehavior} from '../../Interfaces/IFlyBehavior';

export class NoFlyBehavior implements IFlyBehavior{
    fly(){
        console.log('This is realisation of NOFLY Behavior. SO your duck cant fly');
    }
}
