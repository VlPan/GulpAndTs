import { State } from "./Interfaces/State";
import { StateEnabled } from './States/StateEnabled';
import { StateDisabled } from './States/StateDisabled';

export class Context {
    $element: any;

    private stateEnabled = new StateEnabled(this); 
    private stateDisabled = new StateDisabled(this);

    state: State = this.stateEnabled;;

  
    private render(hover: boolean): void { 
        this.state.render(hover);
    }

    private click(): void{
        this.state.click();
    }

    onclick(hover: boolean):void{
        this.render(hover);
        console.log('I am clciked');
    }
}