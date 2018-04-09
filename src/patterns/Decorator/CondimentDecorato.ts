import {Boverage} from './Boverage';
export abstract class CondimentDecorator extends Boverage {
    public abstract getDescription(): string;
}
