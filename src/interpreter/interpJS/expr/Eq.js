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
var Eq = /** @class */ (function (_super) {
    __extends(Eq, _super);
    function Eq(l, r) {
        var _this = _super.call(this) || this;
        _this.lhs = l;
        _this.rhs = r;
        return _this;
    }
    Eq.prototype.typeCheck = function (e) {
        var lTy = this.lhs.typeCheck(e);
        var rTy = this.rhs.typeCheck(e);
        if (lTy && lTy.canTestEquality()) {
            if (rTy && rTy.canTestEquality()) {
                return new Type_1.BoolType();
            }
        }
        this.reportError("type error");
        return null;
    };
    Eq.prototype.eval = function (e) {
        var l = this.lhs.eval(e);
        var r = this.rhs.eval(e);
        return new BoolValue_1.BoolValue(l.equal(r));
    };
    Eq.prototype.oneStep = function (e, stack) {
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
        this.value = new BoolValue_1.BoolValue(l.equal(r));
        stack.popFrame();
    };
    Eq.prototype.toString = function () {
        return this.evalFinish ? this.value.toString() : ('(' + this.lhs.toString() + ') = (' + this.rhs.toString() + ')');
    };
    Eq.prototype.copy = function () {
        return new Eq(this.lhs.copy(), this.rhs.copy());
    };
    return Eq;
}(Expr_1.Expr));
exports.Eq = Eq;
// var lhs = new Arith(
//     new Arith(new IntLiteral(2), new IntLiteral(3), Arith.OP_MUL, '*'),
//     new IntLiteral(5),
//     Arith.OP_SUB,
//     '-'
// );
// var rhs = new IntLiteral(2);
// var expr = new Eq(lhs, rhs);
// console.log(expr.toString());
// console.log(expr.typeCheck(new TypeEnv()).toString());
// console.log(expr.eval(new Env()).toString());
