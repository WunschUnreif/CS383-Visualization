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
var FunValue = /** @class */ (function (_super) {
    __extends(FunValue, _super);
    function FunValue(e, x, ex) {
        var _this = _super.call(this) || this;
        _this.env = e;
        _this.param = x;
        _this.expr = ex;
        return _this;
    }
    FunValue.prototype.toString = function () {
        return 'fun(\\' + this.param + '.' + this.expr.toString() + ')';
    };
    FunValue.prototype.equal = function (other) {
        return false;
    };
    return FunValue;
}(Value_1.Value));
exports.FunValue = FunValue;
