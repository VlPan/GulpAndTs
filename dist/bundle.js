(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

exports.__esModule = true;
// import './patterns/Strategy/Client';
// import './patterns/Observer/Client';
// import './patterns/Decorator/Client';
// import './patterns/Command/Client';
require("./patterns/State/Client");

},{"./patterns/State/Client":2}],2:[function(require,module,exports){
"use strict";

exports.__esModule = true;
var Context_1 = require("./Context");
var context = new Context_1.Context();
context.onclick(false);
context.onclick(true);

},{"./Context":3}],3:[function(require,module,exports){
"use strict";

exports.__esModule = true;
var StateEnabled_1 = require("./States/StateEnabled");
var StateDisabled_1 = require("./States/StateDisabled");
var Context = /** @class */function () {
    function Context() {
        this.stateEnabled = new StateEnabled_1.StateEnabled(this);
        this.stateDisabled = new StateDisabled_1.StateDisabled(this);
        this.state = this.stateEnabled;
    }
    ;
    Context.prototype.render = function (hover) {
        this.state.render(hover);
    };
    Context.prototype.click = function () {
        this.state.click();
    };
    Context.prototype.onclick = function (hover) {
        this.render(hover);
        console.log('I am clciked');
    };
    return Context;
}();
exports.Context = Context;

},{"./States/StateDisabled":4,"./States/StateEnabled":5}],4:[function(require,module,exports){
"use strict";

exports.__esModule = true;
var StateEnabled_1 = require("./StateEnabled");
var StateDisabled = /** @class */function () {
    function StateDisabled(context) {
        this.context = context;
    }
    StateDisabled.prototype.render = function (hover) {
        console.log('State Disabled Rendered ' + hover);
        this.context.state = new StateEnabled_1.StateEnabled(this.context);
    };
    StateDisabled.prototype.click = function () {};
    return StateDisabled;
}();
exports.StateDisabled = StateDisabled;

},{"./StateEnabled":5}],5:[function(require,module,exports){
"use strict";

exports.__esModule = true;
var StateDisabled_1 = require("./StateDisabled");
var StateEnabled = /** @class */function () {
    function StateEnabled(context) {
        this.context = context;
    }
    StateEnabled.prototype.render = function (hover) {
        console.log('State Enabled rendered ' + hover);
        this.context.state = new StateDisabled_1.StateDisabled(this.context);
    };
    StateEnabled.prototype.click = function () {
        this.context.onclick(true);
    };
    return StateEnabled;
}();
exports.StateEnabled = StateEnabled;

},{"./StateDisabled":4}]},{},[1])

//# sourceMappingURL=bundle.js.map
