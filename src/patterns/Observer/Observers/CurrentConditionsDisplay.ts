import {IObserver} from '../Interfaces/IObserver';
import {IDisplayElement} from '../Interfaces/IDisplayElement';
import {WheatherData} from '../Observable/WheaterData';

export class CurrentConditionsDisplay implements IObserver, IDisplayElement{
    t: number;
    p: number;
    h: number;
    private wheatherObject: WheatherData;
    constructor(weatherObject: WheatherData){
        this.wheatherObject = weatherObject;
        weatherObject.registerObserver(this);
    }

    update(t:number, p:number, h:number){
        this.t = t;
        this.p = p;
        this.h = h;
        this.display();
    }

    display(){
        console.log('The current condition:');
        console.log('temperature:', this.t);
        console.log('pressure:', this.p);
        console.log('humidity:', this.h);
    }
}
