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
var BoolValue_1 = require("../exec/BoolValue");
var Not = /** @class */ (function (_super) {
    __extends(Not, _super);
    function Not(e) {
        var _this = _super.call(this) || this;
        _this.rhs = e;
        return _this;
    }
    Not.prototype.typeCheck = function (e) {
        var rhsTy = this.rhs.typeCheck(e);
        if (rhsTy && rhsTy instanceof Type_1.BoolType) {
            return new Type_1.BoolType();
        }
        this.reportError("type error");
        return null;
    };
    Not.prototype.eval = function (e) {
        var val = this.rhs.eval(e);
        return new BoolValue_1.BoolValue(!val.b);
    };
    Not.prototype.oneStep = function (e, stack) {
        if (this.rhs.evalFinish) {
            this.evalFinish = true;
            this.value = new BoolValue_1.BoolValue(!this.rhs.value.b);
            stack.popFrame();
        }
        else {
            stack.pushFrame(this.rhs, e);
        }
    };
    Not.prototype.toString = function () {
        return this.evalFinish ? this.value.toString() : ('not (' + this.rhs.toString() + ')');
    };
    Not.prototype.copy = function () {
        return new Not(this.rhs.copy());
    };
    return Not;
}(Expr_1.Expr));
exports.Not = Not;
