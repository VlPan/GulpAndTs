import { State } from "../Interfaces/State";
import { Context } from '../Context';
import { StateEnabled } from './StateEnabled';

export class StateDisabled implements State{
    constructor(    public context: Context  ) { }
    render(hover: boolean): void {    
        console.log('State Disabled Rendered ' + hover);
        this.context.state = new StateEnabled(this.context);
    }
    click(): void {    }
}