export abstract class Boverage {
    description: string = 'Unknown description';

    public getDescription(){
        return this.description;
    }

    public abstract cost(): number;
}


