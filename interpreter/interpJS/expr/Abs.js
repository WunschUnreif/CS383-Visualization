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
var ArrowType_1 = require("../typing/ArrowType");
var FunValue_1 = require("../exec/FunValue");
var Abs = /** @class */ (function (_super) {
    __extends(Abs, _super);
    function Abs(x, t, e) {
        var _this = _super.call(this) || this;
        _this.param = x;
        _this.expr = e;
        _this.paramTy = t;
        return _this;
    }
    Abs.prototype.typeCheck = function (e) {
        var retTy = this.expr.typeCheck(e.with(this.param, this.paramTy));
        if (retTy) {
            return new ArrowType_1.ArrowType(this.paramTy, retTy);
        }
        this.reportError("type error");
        return null;
    };
    Abs.prototype.eval = function (e) {
        return new FunValue_1.FunValue(e, this.param, this.expr);
    };
    Abs.prototype.oneStep = function (e, stack) {
        this.evalFinish = true;
        this.value = new FunValue_1.FunValue(e, this.param, this.expr);
        stack.popFrame();
    };
    Abs.prototype.toString = function () {
        if (this.evalFinish) {
            return this.value.toString();
        }
        return '\\' + this.param + ':' + this.paramTy.toString() + '.' + this.expr.toString();
    };
    Abs.prototype.copy = function () {
        return new Abs(this.param, this.paramTy, this.expr.copy());
    };
    return Abs;
}(Expr_1.Expr));
exports.Abs = Abs;
// var expr = new Abs("x", new IntType(), new Arith(
//     new Name("x"), new IntLiteral(1), Arith.OP_ADD, '+'
// ));
// console.log(expr.toString());
// console.log(expr.typeCheck(new TypeEnv()).toString());
// console.log(expr.eval(new Env()).toString());
