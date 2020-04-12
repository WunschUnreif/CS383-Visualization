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
var FixValue = /** @class */ (function (_super) {
    __extends(FixValue, _super);
    function FixValue(e, env) {
        var _this = _super.call(this) || this;
        _this.env = env;
        _this.expr = e;
        return _this;
    }
    FixValue.prototype.toString = function () {
        return 'fix(' + this.expr.toString() + ')';
    };
    FixValue.prototype.equal = function (x) {
        return false;
    };
    return FixValue;
}(Value_1.Value));
exports.FixValue = FixValue;
