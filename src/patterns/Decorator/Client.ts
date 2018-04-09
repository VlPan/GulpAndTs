import { Expresso } from './drinks/Expresso';
import { Soy } from './decorators/Soy';
import { Whip } from './decorators/Whip';
let expresso = new Expresso();
expresso = new Soy(expresso);
expresso = new Whip(expresso);
console.log(expresso.cost());

