(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

exports.__esModule = true;
require("./patterns/Strategy/Client");
require("./patterns/Observer/Client");
require("./patterns/Decorator/Client");
require("./patterns/Command/Client");

},{"./patterns/Command/Client":2,"./patterns/Decorator/Client":9,"./patterns/Observer/Client":14,"./patterns/Strategy/Client":22}],2:[function(require,module,exports){
"use strict";

exports.__esModule = true;
var Comp_1 = require("./Comp");
var UserInvoker_1 = require("./Invoker/UserInvoker");
var StartCommand_1 = require("./Commands/StartCommand");
var StopCommand_1 = require("./Commands/StopCommand");
var ResetCommand_1 = require("./Commands/ResetCommand");
var c = new Comp_1.Comp();
var user = new UserInvoker_1.UserInvoker(new StartCommand_1.StartCommand(c), new StopCommand_1.StopCommand(c), new ResetCommand_1.ResetCommand(c));
user.startComputer();
user.stopComputer();
user.resetComputer();

},{"./Commands/ResetCommand":3,"./Commands/StartCommand":4,"./Commands/StopCommand":5,"./Comp":6,"./Invoker/UserInvoker":7}],3:[function(require,module,exports){
"use strict";

exports.__esModule = true;
var ResetCommand = /** @class */function () {
    function ResetCommand(comp) {
        this.comp = comp;
    }
    ResetCommand.prototype.execute = function () {
        this.comp.reset();
    };
    return ResetCommand;
}();
exports.ResetCommand = ResetCommand;

},{}],4:[function(require,module,exports){
"use strict";

exports.__esModule = true;
var StartCommand = /** @class */function () {
    function StartCommand(comp) {
        this.comp = comp;
    }
    StartCommand.prototype.execute = function () {
        this.comp.start();
    };
    return StartCommand;
}();
exports.StartCommand = StartCommand;

},{}],5:[function(require,module,exports){
"use strict";

exports.__esModule = true;
var StopCommand = /** @class */function () {
    function StopCommand(comp) {
        this.comp = comp;
    }
    StopCommand.prototype.execute = function () {
        this.comp.stop();
    };
    return StopCommand;
}();
exports.StopCommand = StopCommand;

},{}],6:[function(require,module,exports){
"use strict";

exports.__esModule = true;
var Comp = /** @class */function () {
    function Comp() {}
    Comp.prototype.start = function () {
        console.log('Start');
    };
    Comp.prototype.stop = function () {
        console.log('Stop');
    };
    Comp.prototype.reset = function () {
        console.log('Reset');
    };
    return Comp;
}();
exports.Comp = Comp;

},{}],7:[function(require,module,exports){
"use strict";

exports.__esModule = true;
var UserInvoker = /** @class */function () {
    function UserInvoker(start, stop, reset) {
        this.start = start;
        this.stop = stop;
        this.reset = reset;
    }
    UserInvoker.prototype.startComputer = function () {
        this.start.execute();
    };
    UserInvoker.prototype.stopComputer = function () {
        this.stop.execute();
    };
    UserInvoker.prototype.resetComputer = function () {
        this.reset.execute();
    };
    return UserInvoker;
}();
exports.UserInvoker = UserInvoker;

},{}],8:[function(require,module,exports){
"use strict";

exports.__esModule = true;
var Boverage = /** @class */function () {
    function Boverage() {
        this.description = 'Unknown description';
    }
    Boverage.prototype.getDescription = function () {
        return this.description;
    };
    return Boverage;
}();
exports.Boverage = Boverage;

},{}],9:[function(require,module,exports){
"use strict";

exports.__esModule = true;
var Expresso_1 = require("./drinks/Expresso");
var Soy_1 = require("./decorators/Soy");
var Whip_1 = require("./decorators/Whip");
var expresso = new Expresso_1.Expresso();
expresso = new Soy_1.Soy(expresso);
expresso = new Whip_1.Whip(expresso);
console.log(expresso.cost());

},{"./decorators/Soy":11,"./decorators/Whip":12,"./drinks/Expresso":13}],10:[function(require,module,exports){
"use strict";

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
exports.__esModule = true;
var Boverage_1 = require("./Boverage");
var CondimentDecorator = /** @class */function (_super) {
    __extends(CondimentDecorator, _super);
    function CondimentDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CondimentDecorator;
}(Boverage_1.Boverage);
exports.CondimentDecorator = CondimentDecorator;

},{"./Boverage":8}],11:[function(require,module,exports){
"use strict";

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
exports.__esModule = true;
var CondimentDecorato_1 = require("../CondimentDecorato");
var Soy = /** @class */function (_super) {
    __extends(Soy, _super);
    function Soy(beverage) {
        var _this = _super.call(this) || this;
        _this.beverage = beverage;
        return _this;
    }
    Soy.prototype.getDescription = function () {
        return this.beverage.getDescription() + ' , Soy';
    };
    Soy.prototype.cost = function () {
        return .15 + this.beverage.cost();
    };
    return Soy;
}(CondimentDecorato_1.CondimentDecorator);
exports.Soy = Soy;

},{"../CondimentDecorato":10}],12:[function(require,module,exports){
"use strict";

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
exports.__esModule = true;
var CondimentDecorato_1 = require("../CondimentDecorato");
var Whip = /** @class */function (_super) {
    __extends(Whip, _super);
    function Whip(beverage) {
        var _this = _super.call(this) || this;
        _this.beverage = beverage;
        return _this;
    }
    Whip.prototype.getDescription = function () {
        return this.beverage.getDescription() + ' , Whip';
    };
    Whip.prototype.cost = function () {
        return .10 + this.beverage.cost();
    };
    return Whip;
}(CondimentDecorato_1.CondimentDecorator);
exports.Whip = Whip;

},{"../CondimentDecorato":10}],13:[function(require,module,exports){
"use strict";

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
exports.__esModule = true;
var Boverage_1 = require("../Boverage");
var Expresso = /** @class */function (_super) {
    __extends(Expresso, _super);
    function Expresso() {
        var _this = _super.call(this) || this;
        _this.description = 'Espresso';
        return _this;
    }
    Expresso.prototype.cost = function () {
        return 1.99;
    };
    return Expresso;
}(Boverage_1.Boverage);
exports.Expresso = Expresso;

},{"../Boverage":8}],14:[function(require,module,exports){
"use strict";

exports.__esModule = true;
var WheaterData_1 = require("./Observable/WheaterData");
var AverageConditionsDisplay_1 = require("./Observers/AverageConditionsDisplay");
var CurrentConditionsDisplay_1 = require("./Observers/CurrentConditionsDisplay");
var wheatherData = new WheaterData_1.WheatherData();
var averageConditionsDisplay = new AverageConditionsDisplay_1.AverageConditionsDisplay(wheatherData);
var currentConditionsDisplay = new CurrentConditionsDisplay_1.CurrentConditionsDisplay(wheatherData);
wheatherData.setMesurements(100, 200, 300);
wheatherData.setMesurements(200, 400, 600);
wheatherData.setMesurements(300, 220, 900);

},{"./Observable/WheaterData":15,"./Observers/AverageConditionsDisplay":16,"./Observers/CurrentConditionsDisplay":17}],15:[function(require,module,exports){
"use strict";

exports.__esModule = true;
var WheatherData = /** @class */function () {
    function WheatherData() {
        this.observers = [];
    }
    WheatherData.prototype.registerObserver = function (o) {
        this.observers.push(o);
    };
    WheatherData.prototype.unregisterObserver = function (o) {
        var position = this.observers.indexOf(o);
        delete this.observers[position];
    };
    WheatherData.prototype.notifyObservers = function () {
        for (var i = 0; i < this.observers.length; i++) {
            this.observers[i].update(this.t, this.p, this.h);
        }
    };
    WheatherData.prototype.mesuarementsChanged = function () {
        this.notifyObservers();
    };
    WheatherData.prototype.setMesurements = function (t, p, h) {
        this.t = t;
        this.p = p;
        this.h = h;
        this.mesuarementsChanged();
    };
    return WheatherData;
}();
exports.WheatherData = WheatherData;

},{}],16:[function(require,module,exports){
"use strict";

exports.__esModule = true;
var AverageConditionsDisplay = /** @class */function () {
    function AverageConditionsDisplay(weatherObject) {
        this.averageT = 0;
        this.averageP = 0;
        this.averageH = 0;
        this.timesToTry = 0;
        this.wheatherObject = weatherObject;
        weatherObject.registerObserver(this);
    }
    AverageConditionsDisplay.prototype.update = function (t, p, h) {
        this.averageT += t;
        this.averageP += p;
        this.averageH += h;
        this.timesToTry++;
        if (this.timesToTry % 3 === 0) {
            this.display();
            this.averageT = 0;
            this.averageP = 0;
            this.averageH = 0;
        }
    };
    AverageConditionsDisplay.prototype.display = function () {
        var TIMES = 3;
        console.log('The current condition:');
        console.log('Average temperature:', this.averageT / TIMES);
        console.log('Average pressure:', this.averageP / TIMES);
        console.log('Average humidity:', this.averageH / TIMES);
    };
    return AverageConditionsDisplay;
}();
exports.AverageConditionsDisplay = AverageConditionsDisplay;

},{}],17:[function(require,module,exports){
"use strict";

exports.__esModule = true;
var CurrentConditionsDisplay = /** @class */function () {
    function CurrentConditionsDisplay(weatherObject) {
        this.wheatherObject = weatherObject;
        weatherObject.registerObserver(this);
    }
    CurrentConditionsDisplay.prototype.update = function (t, p, h) {
        this.t = t;
        this.p = p;
        this.h = h;
        this.display();
    };
    CurrentConditionsDisplay.prototype.display = function () {
        console.log('The current condition:');
        console.log('temperature:', this.t);
        console.log('pressure:', this.p);
        console.log('humidity:', this.h);
    };
    return CurrentConditionsDisplay;
}();
exports.CurrentConditionsDisplay = CurrentConditionsDisplay;

},{}],18:[function(require,module,exports){
"use strict";

exports.__esModule = true;
var MegaFlyBehavior = /** @class */function () {
    function MegaFlyBehavior() {}
    MegaFlyBehavior.prototype.fly = function () {
        console.log('This is realisation of MEGA Fly Behavior.');
    };
    return MegaFlyBehavior;
}();
exports.MegaFlyBehavior = MegaFlyBehavior;

},{}],19:[function(require,module,exports){
"use strict";

exports.__esModule = true;
var SimpleFlyBehavior = /** @class */function () {
    function SimpleFlyBehavior() {}
    SimpleFlyBehavior.prototype.fly = function () {
        console.log('This is simple realisation of fly behavior');
    };
    return SimpleFlyBehavior;
}();
exports.SimpleFlyBehavior = SimpleFlyBehavior;

},{}],20:[function(require,module,exports){
"use strict";

exports.__esModule = true;
var SimpleQuackBehavior = /** @class */function () {
    function SimpleQuackBehavior() {}
    SimpleQuackBehavior.prototype.quack = function () {
        console.log('This is simple realisation of quack behavior');
    };
    return SimpleQuackBehavior;
}();
exports.SimpleQuackBehavior = SimpleQuackBehavior;

},{}],21:[function(require,module,exports){
"use strict";

exports.__esModule = true;
var SimpleSwimBehavior = /** @class */function () {
    function SimpleSwimBehavior() {}
    SimpleSwimBehavior.prototype.swim = function () {
        console.log('this is simple realisation of simple swim behavior');
    };
    return SimpleSwimBehavior;
}();
exports.SimpleSwimBehavior = SimpleSwimBehavior;

},{}],22:[function(require,module,exports){
"use strict";

exports.__esModule = true;
var MallardDuck_1 = require("./../Strategy/MallardDuck");
var MegaFlyBehavior_1 = require("./Behaviors/Fly/MegaFlyBehavior");
var duck = new MallardDuck_1.MallardDuck();
duck.swim();
duck.quack();
duck.fly();
duck.setFlyBehavior(new MegaFlyBehavior_1.MegaFlyBehavior());
duck.fly();

},{"./../Strategy/MallardDuck":24,"./Behaviors/Fly/MegaFlyBehavior":18}],23:[function(require,module,exports){
"use strict";

exports.__esModule = true;
var Duck = /** @class */function () {
    function Duck() {}
    // constructor(_quackBehavior:IQuackBehavior, _swimBehavior:ISwimBegavior, _flyBehavior:IFlyBehavior){
    //     this.flyBehavior = _flyBehavior;
    //     this.swimBehavior = _swimBehavior;
    //     this.quackBehavior = _quackBehavior;
    // }
    Duck.prototype.swim = function (name) {
        this.swimBehavior.swim();
    };
    Duck.prototype.quack = function () {
        this.quackBehavior.quack();
    };
    Duck.prototype.fly = function () {
        this.flyBehavior.fly();
    };
    Duck.prototype.setSwimBehavior = function (_newSwimBehavior) {
        this.swimBehavior = _newSwimBehavior;
    };
    Duck.prototype.setQuackBehavior = function (_newQuakBehavior) {
        this.quackBehavior = _newQuakBehavior;
    };
    Duck.prototype.setFlyBehavior = function (_newFlyBehavior) {
        this.flyBehavior = _newFlyBehavior;
    };
    return Duck;
}();
exports.Duck = Duck;

},{}],24:[function(require,module,exports){
"use strict";

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
exports.__esModule = true;
var SimpleFlyBehavior_1 = require("./Behaviors/Fly/SimpleFlyBehavior");
var SimpleQuackBehavior_1 = require("./Behaviors/Quack/SimpleQuackBehavior");
var SimpleSwimBehavior_1 = require("./Behaviors/Swim/SimpleSwimBehavior");
var Duck_1 = require("./Duck");
var MallardDuck = /** @class */function (_super) {
    __extends(MallardDuck, _super);
    function MallardDuck() {
        var _this = _super.call(this) || this;
        _this.flyBehavior = new SimpleFlyBehavior_1.SimpleFlyBehavior();
        _this.quackBehavior = new SimpleQuackBehavior_1.SimpleQuackBehavior();
        _this.swimBehavior = new SimpleSwimBehavior_1.SimpleSwimBehavior();
        return _this;
    }
    MallardDuck.prototype.display = function () {
        console.log('Real Murrald duck display method');
    };
    return MallardDuck;
}(Duck_1.Duck);
exports.MallardDuck = MallardDuck;

},{"./Behaviors/Fly/SimpleFlyBehavior":19,"./Behaviors/Quack/SimpleQuackBehavior":20,"./Behaviors/Swim/SimpleSwimBehavior":21,"./Duck":23}]},{},[1])

//# sourceMappingURL=bundle.js.map
