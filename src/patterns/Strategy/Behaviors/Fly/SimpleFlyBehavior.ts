import {IFlyBehavior} from '../../Interfaces/IFlyBehavior';

export class SimpleFlyBehavior implements IFlyBehavior{
    fly(){
        console.log('This is simple realisation of fly behavior');
    }
}