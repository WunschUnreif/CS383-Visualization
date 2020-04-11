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
var Expr_1 = require("./Expr");
var Type_1 = require("../typing/Type");
var IntValue_1 = require("../exec/IntValue");
var Neg = /** @class */ (function (_super) {
    __extends(Neg, _super);
    function Neg(e) {
        var _this = _super.call(this) || this;
        _this.rhs = e;
        return _this;
    }
    Neg.prototype.typeCheck = function (e) {
        var rhsTy = this.rhs.typeCheck(e);
        if (rhsTy && rhsTy instanceof Type_1.IntType) {
            return new Type_1.IntType();
        }
        this.reportError("type error");
        return null;
    };
    Neg.prototype.eval = function (e) {
        var val = this.rhs.eval(e);
        return new IntValue_1.IntValue(-val.n);
    };
    Neg.prototype.oneStep = function (e, stack) {
        if (this.rhs.evalFinish) {
            this.evalFinish = true;
            this.value = new IntValue_1.IntValue(-this.rhs.value.n);
            stack.popFrame();
        }
        else {
            stack.pushFrame(this.rhs, e);
        }
    };
    Neg.prototype.toString = function () {
        return this.evalFinish ? this.value.toString() : ('~(' + this.rhs.toString() + ')');
    };
    Neg.prototype.copy = function () {
        return new Neg(this.rhs.copy());
    };
    return Neg;
}(Expr_1.Expr));
exports.Neg = Neg;
