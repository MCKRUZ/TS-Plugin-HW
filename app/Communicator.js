"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
//import * as _ from "lodash";
//import * as communicatorModularUMD from "communicatorModularUMD";
//import {otherFunctions}  from "communicatorModularUMD";
var communicatorModularAMD = __importStar(require("communicatorModularAMD"));
//import * as communicatorModularCJS from "communicatorModularCJS";
var Communicator = /** @class */ (function () {
    function Communicator() {
    }
    Communicator.prototype.greet = function (message) {
        //return "<h1>" + _.toUpper(message) + "</h1>";
        //return communicatorGlobal(message);
        //return communicatorGlobal.greet(message);        
        // let _settings = new communicatorGlobal.Settings(message);
        // communicatorGlobal.settings = _settings;
        // return communicatorGlobal.greet();
        //return communicatorModularUMD.greet(message);
        //return otherFunctions.goodbye();
        //return communicatorModularUMD.otherFunctions.goodbye();
        //return communicatorModularAMD.greet(message);
        //return communicatorModularCJS.greet(message);
        return communicatorModularAMD.goodbye();
    };
    return Communicator;
}());
;
var communicator = new Communicator();
document.body.innerHTML = communicator.greet("Hello, world");
