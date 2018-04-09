import {IObserver} from './IObserver';

export interface IObservable {
    registerObserver(o: IObserver):void;
    unregisterObserver(o: IObserver):void;
    notifyObservers():void;
}