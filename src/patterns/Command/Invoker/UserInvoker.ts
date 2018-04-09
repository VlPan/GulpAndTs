import { Command } from './../Interfaces/Command';
export class UserInvoker {

    start: Command;
    stop: Command;
    reset: Command;

    constructor(start: Command, stop: Command, reset: Command) {
        this.start = start;
        this.stop = stop;
        this.reset = reset;
    }

    startComputer(): any{
        this.start.execute()
    }

    stopComputer(): any{
        this.stop.execute();
    }

    resetComputer(): any{
        this.reset.execute();
    }

}