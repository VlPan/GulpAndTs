import { WheatherData } from './Observable/WheaterData';
import { AverageConditionsDisplay } from './Observers/AverageConditionsDisplay';
import { CurrentConditionsDisplay } from './Observers/CurrentConditionsDisplay';

let wheatherData = new WheatherData();
let averageConditionsDisplay = new AverageConditionsDisplay(wheatherData);
let currentConditionsDisplay = new CurrentConditionsDisplay(wheatherData);

wheatherData.setMesurements(100,200,300);
wheatherData.setMesurements(200,400,600);
wheatherData.setMesurements(300,220,900);


