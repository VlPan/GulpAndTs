import { Command } from './../Interfaces/Command';
import { Comp } from '../Comp';

export class StopCommand implements Command{

    comp: Comp

    constructor(comp: Comp){
        this.comp = comp;
    }

    execute(){
        this.comp.stop();
    }
}