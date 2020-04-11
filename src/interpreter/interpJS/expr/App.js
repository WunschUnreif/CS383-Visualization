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
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(f, x) {
        var _this = _super.call(this) || this;
        _this.fun = f;
        _this.arg = x;
        return _this;
    }
    App.prototype.typeCheck = function (e) {
        var fTy = this.fun.typeCheck(e);
        var xTy = this.arg.typeCheck(e);
        if (fTy && xTy) {
            if (fTy instanceof ArrowType_1.ArrowType) {
                if (fTy.argT.toString() === xTy.toString()) {
                    return fTy.retT;
                }
            }
        }
        this.reportError("type error");
        return null;
    };
    App.prototype.eval = function (e) {
        var f = this.fun.eval(e);
        var x = this.arg.eval(e);
        return f.expr.eval(f.env.with(f.param, x));
    };
    App.prototype.oneStep = function (e, stack) {
        if (this.fun.evalFinish === false) {
            stack.pushFrame(this.fun, e);
            return;
        }
        if (this.arg.evalFinish === false) {
            stack.pushFrame(this.arg, e);
            return;
        }
        if (this.exec && this.exec.expr.evalFinish) {
            this.evalFinish = true;
            this.value = this.exec.expr.value;
            stack.popFrame();
            return;
        }
        this.exec = {
            expr: this.fun.value.expr.copy(),
            env: this.fun.value.env.with(this.fun.value.param, this.arg.value)
        };
        stack.pushFrame(this.exec.expr, this.exec.env);
    };
    App.prototype.toString = function () {
        if (this.evalFinish) {
            return this.value.toString();
        }
        return '(' + this.fun.toString() + ') (' + this.arg.toString() + ')';
    };
    App.prototype.copy = function () {
        return new App(this.fun.copy(), this.arg.copy());
    };
    return App;
}(Expr_1.Expr));
exports.App = App;
// var abs = new Abs("x", new IntType(), new Arith(
//     new Name("x"), new IntLiteral(1), Arith.OP_ADD, '+'
// ));
// var expr = new App(abs, new IntLiteral(10));
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
// expr = new App(abs, new IntLiteral(12));
// stack.pushFrame(expr, env);
// do {
//     stack.top().expr.oneStep(stack.top().env, stack);
//     console.log(stack.toWebPageStack());
// } while(stack.frames.length != 0);
