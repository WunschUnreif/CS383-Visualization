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
var Cond = /** @class */ (function (_super) {
    __extends(Cond, _super);
    function Cond(c, t, e) {
        var _this = _super.call(this) || this;
        _this.cond = c;
        _this.then = t;
        _this.else = e;
        return _this;
    }
    Cond.prototype.copy = function () {
        return new Cond(this.cond.copy(), this.then.copy(), this.else.copy());
    };
    Cond.prototype.typeCheck = function (e) {
        var cTy = this.cond.typeCheck(e);
        var tTy = this.then.typeCheck(e);
        var eTy = this.else.typeCheck(e);
        if (cTy && tTy && eTy) {
            if (cTy instanceof Type_1.BoolType) {
                if (tTy.toString() === eTy.toString()) {
                    return tTy;
                }
            }
        }
        this.reportError('type error');
        return null;
    };
    Cond.prototype.eval = function (e) {
        var cond = this.cond.eval(e);
        if (cond.b) {
            return this.then.eval(e);
        }
        else {
            return this.else.eval(e);
        }
    };
    Cond.prototype.oneStep = function (e, stack) {
        if (this.cond.evalFinish === false) {
            stack.pushFrame(this.cond, e);
            return;
        }
        var cond = this.cond.value;
        if (cond.b) {
            if (this.then.evalFinish === false) {
                stack.pushFrame(this.then, e);
                return;
            }
            else {
                this.evalFinish = true;
                this.value = this.then.value;
                stack.popFrame();
                return;
            }
        }
        else {
            if (this.else.evalFinish === false) {
                stack.pushFrame(this.else, e);
                return;
            }
            else {
                this.evalFinish = true;
                this.value = this.else.value;
                stack.popFrame();
                return;
            }
        }
    };
    Cond.prototype.toString = function () {
        if (this.evalFinish) {
            return this.value.toString();
        }
        else {
            return 'if (' + this.cond.toString() + ') then (' + this.then.toString() + ') else (' + this.else.toString() + ')';
        }
    };
    return Cond;
}(Expr_1.Expr));
exports.Cond = Cond;
// var expr = new Cond(
//     new Compare(new IntLiteral(3), new IntLiteral(2), Compare.OP_LT, '<'),
//     new Not(new BoolLiteral(false)),
//     new BoolLiteral(false)
// );
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
