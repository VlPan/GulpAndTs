import {ISwimBegavior} from '../../Interfaces/ISwimBegavior';

export class SimpleSwimBehavior implements ISwimBegavior{
    swim(){
        console.log('this is simple realisation of simple swim behavior');
    }
}