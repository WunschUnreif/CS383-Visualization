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
var Arith = /** @class */ (function (_super) {
    __extends(Arith, _super);
    function Arith(l, r, op, opname) {
        var _this = _super.call(this) || this;
        _this.lhs = l;
        _this.rhs = r;
        _this.op = op;
        _this.opString = opname;
        return _this;
    }
    Arith.prototype.typeCheck = function (e) {
        var lTy = this.lhs.typeCheck(e);
        var rTy = this.rhs.typeCheck(e);
        if (lTy && lTy instanceof Type_1.IntType) {
            if (rTy && rTy instanceof Type_1.IntType) {
                return new Type_1.IntType();
            }
        }
        this.reportError("type error");
        return null;
    };
    Arith.prototype.eval = function (e) {
        var l = this.lhs.eval(e);
        var r = this.rhs.eval(e);
        return new IntValue_1.IntValue(this.op(l.n, r.n));
    };
    Arith.prototype.oneStep = function (e, stack) {
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
        this.value = new IntValue_1.IntValue(this.op(l.n, r.n));
        stack.popFrame();
    };
    Arith.prototype.toString = function () {
        return this.evalFinish ? this.value.toString() : ('(' + this.lhs.toString() + ') ' + this.opString + ' (' + this.rhs.toString() + ')');
    };
    Arith.prototype.copy = function () {
        return new Arith(this.lhs.copy(), this.rhs.copy(), this.op, this.opString);
    };
    Arith.OP_ADD = function (a, b) { return a + b; };
    Arith.OP_SUB = function (a, b) { return a - b; };
    Arith.OP_MUL = function (a, b) { return a * b; };
    Arith.OP_DIV = function (a, b) { return parseInt(a / b + ''); };
    Arith.OP_REM = function (a, b) { return a % b; };
    return Arith;
}(Expr_1.Expr));
exports.Arith = Arith;
// var expr = new Arith(
//     new Arith(new IntLiteral(2), new IntLiteral(3), Arith.OP_MUL, '*'),
//     new IntLiteral(5),
//     Arith.OP_SUB,
//     '-'
// );
// console.log(expr.toString());
// console.log(expr.typeCheck(new TypeEnv()).toString());
// console.log(expr.eval(new Env()).toString());
