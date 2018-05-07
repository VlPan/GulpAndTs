import { State } from "../Interfaces/State";
import { Context } from '../Context';
import { StateDisabled } from './StateDisabled';

export class StateEnabled implements State{
    constructor (
        public context: Context
    ) {

    }

    render(hover: boolean) : void {
        console.log('State Enabled rendered ' + hover);
        this.context.state = new StateDisabled(this.context);
    }

    click(): void {  
          this.context.onclick(true); 
     }
}