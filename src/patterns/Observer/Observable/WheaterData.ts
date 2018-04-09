import {IObserver} from '../Interfaces/IObserver';
import {IObservable} from '../Interfaces/IObservable';

export class WheatherData implements IObservable{
    private observers: IObserver[];
    private t: number;
    private p: number;
    private h: number;

    constructor(){
        this.observers = [];
    }

    registerObserver(o: IObserver){
        this.observers.push(o);
    }

    unregisterObserver(o: IObserver){
        let position: number = this.observers.indexOf(o);
        delete this.observers[position];
    }

    notifyObservers(){
        for(let i = 0; i < this.observers.length; i++ ){
            this.observers[i].update(this.t, this.p, this.h);
        }
    }
    
    mesuarementsChanged(){
        this.notifyObservers();
    }
    
    setMesurements(t: number, p: number, h: number){
        this.t = t;
        this.p = p;
        this.h = h;
        this.mesuarementsChanged();
    }




}
