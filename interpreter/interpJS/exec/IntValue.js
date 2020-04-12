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
var IntValue = /** @class */ (function (_super) {
    __extends(IntValue, _super);
    function IntValue(n) {
        var _this = _super.call(this) || this;
        _this.n = n;
        return _this;
    }
    IntValue.prototype.toString = function () {
        return '' + this.n;
    };
    IntValue.prototype.equal = function (other) {
        if (other instanceof IntValue) {
            return this.n === other.n;
        }
        else {
            return false;
        }
    };
    return IntValue;
}(Value_1.Value));
exports.IntValue = IntValue;
