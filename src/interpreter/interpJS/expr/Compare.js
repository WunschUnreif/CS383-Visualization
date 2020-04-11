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
var Compare = /** @class */ (function (_super) {
    __extends(Compare, _super);
    function Compare(l, r, op, opname) {
        var _this = _super.call(this) || this;
        _this.lhs = l;
        _this.rhs = r;
        _this.op = op;
        _this.opString = opname;
        return _this;
    }
    Compare.prototype.typeCheck = function (e) {
        var lTy = this.lhs.typeCheck(e);
        var rTy = this.rhs.typeCheck(e);
        if (lTy && lTy instanceof Type_1.IntType) {
            if (rTy && rTy instanceof Type_1.IntType) {
                return new Type_1.BoolType();
            }
        }
        this.reportError("type error");
        return null;
    };
    Compare.prototype.eval = function (e) {
        var l = this.lhs.eval(e);
        var r = this.rhs.eval(e);
        return new BoolValue_1.BoolValue(this.op(l.n, r.n));
    };
    Compare.prototype.oneStep = function (e, stack) {
        if (this.lhs.evalFinish == false) {
            stack.pushFrame(this.lhs, e);
            return;
        }
        if (this.rhs.evalFinish == false) {
            stack.pushFrame(this.rhs, e);
            return;
        }
        this.evalFinish = true;
        var l = this.lhs.value;
        var r = this.rhs.value;
        this.value = new BoolValue_1.BoolValue(this.op(l.n, r.n));
        stack.popFrame();
    };
    Compare.prototype.toString = function () {
        return this.evalFinish ? this.value.toString() : ('(' + this.lhs.toString() + ') ' + this.opString + ' (' + this.rhs.toString() + ')');
    };
    Compare.prototype.copy = function () {
        return new Compare(this.lhs.copy(), this.rhs.copy(), this.op, this.opString);
    };
    Compare.OP_LT = function (a, b) { return a < b; };
    Compare.OP_LTE = function (a, b) { return a <= b; };
    Compare.OP_GT = function (a, b) { return a > b; };
    Compare.OP_GTE = function (a, b) { return a >= b; };
    return Compare;
}(Expr_1.Expr));
exports.Compare = Compare;
