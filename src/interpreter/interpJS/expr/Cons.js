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
var ListType_1 = require("../typing/ListType");
var ConsValue_1 = require("../exec/ConsValue");
var Cons = /** @class */ (function (_super) {
    __extends(Cons, _super);
    function Cons(l, r) {
        var _this = _super.call(this) || this;
        _this.lhs = l;
        _this.rhs = r;
        return _this;
    }
    Cons.prototype.typeCheck = function (e) {
        var lTy = this.lhs.typeCheck(e);
        var rTy = this.rhs.typeCheck(e);
        if (lTy && rTy) {
            if (rTy instanceof ListType_1.ListType && lTy.toString() === rTy.elemT.toString()) {
                return new ListType_1.ListType(rTy.elemT);
            }
        }
        this.reportError("type error");
        return null;
    };
    Cons.prototype.eval = function (e) {
        var l = this.lhs.eval(e);
        var r = this.rhs.eval(e);
        return new ConsValue_1.ConsValue(l, r);
    };
    Cons.prototype.oneStep = function (e, stack) {
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
        this.value = new ConsValue_1.ConsValue(l, r);
        stack.popFrame();
    };
    Cons.prototype.toString = function () {
        return this.evalFinish ? this.value.toString() : ('(' + this.lhs.toString() + ')::(' + this.rhs.toString() + ')');
    };
    Cons.prototype.copy = function () {
        return new Cons(this.lhs.copy(), this.rhs.copy());
    };
    return Cons;
}(Expr_1.Expr));
exports.Cons = Cons;
// var expr = new Cons(
//     new IntLiteral(2),
//     new Cons(new IntLiteral(3), new NilLiteral(new IntType))
// )
// console.log(expr.toString());
// console.log(expr.typeCheck(new TypeEnv()).toString());
// console.log(expr.eval(new Env()).toString());
