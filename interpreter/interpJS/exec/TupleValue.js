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
var TupleValue = /** @class */ (function (_super) {
    __extends(TupleValue, _super);
    function TupleValue() {
        var vals = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            vals[_i] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.vals = vals;
        return _this;
    }
    TupleValue.prototype.toString = function () {
        return this.vals.reduce(function (p, v) { return p + ' (' + v.toString() + ') '; }, '{') + '}';
    };
    TupleValue.prototype.equal = function (other) {
        if (other instanceof TupleValue) {
            var otherTup = other;
            if (otherTup.vals.length !== this.vals.length) {
                return false;
            }
            else {
                for (var idx in this.vals) {
                    if (this.vals[idx].equal(otherTup.vals[idx]) === false) {
                        return false;
                    }
                    return true;
                }
            }
        }
        else {
            return false;
        }
    };
    return TupleValue;
}(Value_1.Value));
exports.TupleValue = TupleValue;
