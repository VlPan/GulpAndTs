import { MallardDuck } from './../Strategy/MallardDuck';
import { MegaFlyBehavior } from './Behaviors/Fly/MegaFlyBehavior';
let duck = new MallardDuck();
duck.swim();
duck.quack();
duck.fly();

duck.setFlyBehavior(new MegaFlyBehavior());
duck.fly();