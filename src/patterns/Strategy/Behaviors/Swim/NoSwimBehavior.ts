import {ISwimBegavior} from '../../Interfaces/ISwimBegavior';

export class NoSwimBehavior implements ISwimBegavior{
    swim(){
        console.log('this is simple realisation of No swim behavior. Your duck can\'t swim');
    }
}
