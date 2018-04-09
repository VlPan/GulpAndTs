import { Command } from './../Interfaces/Command';
import { Comp } from '../Comp';

export class ResetCommand implements Command{

    comp: Comp

    constructor(comp: Comp){
        this.comp = comp;
    }

    execute(){
        this.comp.reset();
    }
}