import { Command } from './../Interfaces/Command';
import { Comp } from '../Comp';

export class StartCommand implements Command{

    comp: Comp

    constructor(comp: Comp){
        this.comp = comp;
    }

    execute(){
        this.comp.start();
    }
}