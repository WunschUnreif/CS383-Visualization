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
var ConsValue = /** @class */ (function (_super) {
    __extends(ConsValue, _super);
    function ConsValue(hd, tl) {
        var _this = _super.call(this) || this;
        _this.head = hd;
        _this.tail = tl;
        return _this;
    }
    ConsValue.prototype.toString = function () {
        return '(' + this.head.toString() + ')::' + this.tail.toString();
    };
    ConsValue.prototype.equal = function (other) {
        if (other instanceof ConsValue) {
            var cons = other;
            return this.head.equal(cons.head) && this.tail.equal(cons.tail);
        }
        else {
            return false;
        }
    };
    return ConsValue;
}(Value_1.Value));
exports.ConsValue = ConsValue;
var NilValue = /** @class */ (function (_super) {
    __extends(NilValue, _super);
    function NilValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NilValue.prototype.toString = function () {
        return 'nil';
    };
    NilValue.prototype.equal = function (other) {
        if (other instanceof NilValue) {
            return true;
        }
        else {
            return false;
        }
    };
    return NilValue;
}(Value_1.Value));
exports.NilValue = NilValue;
