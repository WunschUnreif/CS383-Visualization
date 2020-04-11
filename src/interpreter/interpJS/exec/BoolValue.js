"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Value_1 = require("./Value");
var BoolValue = /** @class */ (function (_super) {
    __extends(BoolValue, _super);
    function BoolValue(b) {
        var _this = _super.call(this) || this;
        _this.b = b;
        return _this;
    }
    BoolValue.prototype.toString = function () {
        return '' + this.b;
    };
    BoolValue.prototype.equal = function (other) {
        if (other instanceof BoolValue) {
            return this.b === other.b;
        }
        else {
            return false;
        }
    };
    return BoolValue;
}(Value_1.Value));
exports.BoolValue = BoolValue;
