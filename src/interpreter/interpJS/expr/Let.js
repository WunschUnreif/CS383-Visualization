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
var Let = /** @class */ (function (_super) {
    __extends(Let, _super);
    function Let(x, e1, e2) {
        var _this = _super.call(this) || this;
        _this.name = x;
        _this.bindto = e1;
        _this.inside = e2;
        return _this;
    }
    Let.prototype.copy = function () {
        return new Let(this.name, this.bindto.copy(), this.inside.copy());
    };
    Let.prototype.typeCheck = function (e) {
        var bTy = this.bindto.typeCheck(e);
        if (bTy) {
            var iTy = this.inside.typeCheck(e.with(this.name, bTy));
            if (iTy) {
                return iTy;
            }
        }
        this.reportError("type error");
        return null;
    };
    Let.prototype.eval = function (e) {
        var bindtoval = this.bindto.eval(e);
        return this.inside.eval(e.with(this.name, bindtoval));
    };
    Let.prototype.oneStep = function (e, stack) {
        if (this.bindto.evalFinish === false) {
            stack.pushFrame(this.bindto, e);
            return;
        }
        if (this.exec) {
            if (this.exec.expr.evalFinish) {
                this.evalFinish = true;
                this.value = this.exec.expr.value;
                stack.popFrame();
                return;
            }
        }
        this.exec = {
            expr: this.inside.copy(),
            env: e.with(this.name, this.bindto.value)
        };
        stack.pushFrame(this.exec.expr, this.exec.env);
    };
    Let.prototype.toString = function () {
        if (this.evalFinish) {
            return this.value.toString();
        }
        return 'let ' + this.name + '=(' + this.bindto.toString() + ') in (' + this.inside.toString() + ')';
    };
    return Let;
}(Expr_1.Expr));
exports.Let = Let;
// var expr = new Let("x", new IntLiteral(10), new Arith(
//     new Name('x'), new IntLiteral(5), Arith.OP_ADD, '+'
// ))
// console.log(expr.toString());
// console.log(expr.typeCheck(new TypeEnv()).toString());
// console.log(expr.eval(new Env()).toString());
// var stack = new CallStack();
// var env = new Env();
// stack.pushFrame(expr, env);
// do {
//     stack.top().expr.oneStep(stack.top().env, stack);
//     console.log(stack.toWebPageStack());
// } while(stack.frames.length != 0);
