import {Boverage} from '../Boverage';


export class HouseBlend extends Boverage{
    description: string;
    constructor(){
        super();
        this.description = 'House Blend Coffe';
    }

    public cost(): number{
        return .89;
    }
}
