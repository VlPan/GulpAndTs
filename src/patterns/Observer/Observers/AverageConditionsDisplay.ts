import {IObserver} from '../Interfaces/IObserver';
import {IDisplayElement} from '../Interfaces/IDisplayElement';
import {WheatherData} from '../Observable/WheaterData';

export class AverageConditionsDisplay implements IObserver, IDisplayElement{
    averageT: number = 0;
    averageP: number = 0;
    averageH: number = 0;
    timesToTry: number = 0;

    private wheatherObject: WheatherData;
    constructor(weatherObject: WheatherData){
        this.wheatherObject = weatherObject;
        weatherObject.registerObserver(this);
    }

    update(t:number, p:number, h:number){
        this.averageT += t;
        this.averageP += p;
        this.averageH += h;
        this.timesToTry++;
        if(this.timesToTry % 3 === 0){
            this.display();
            this.averageT = 0;
            this.averageP = 0;
            this.averageH = 0;
        }

    }

    display(){
        let TIMES = 3;
        console.log('The current condition:');
        console.log('Average temperature:', this.averageT / TIMES);
        console.log('Average pressure:', this.averageP / TIMES);
        console.log('Average humidity:', this.averageH / TIMES);
    }
}
