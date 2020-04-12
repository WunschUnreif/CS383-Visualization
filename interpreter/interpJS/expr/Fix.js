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
var FixValue_1 = require("../exec/FixValue");
var Fix = /** @class */ (function (_super) {
    __extends(Fix, _super);
    function Fix(f) {
        var _this = _super.call(this) || this;
        _this.func = f.copy();
        return _this;
    }
    Fix.prototype.copy = function () {
        return new Fix(this.func.copy());
    };
    Fix.prototype.typeCheck = function (e) {
        var fTy = this.func.typeCheck(e);
        console.log("f->", fTy.toString());
        if (fTy && fTy instanceof ArrowType_1.ArrowType) {
            var arrow = fTy;
            if (arrow.argT.toString() === arrow.retT.toString()) {
                return arrow.argT;
            }
        }
        this.reportError("type error");
        return null;
    };
    Fix.prototype.eval = function (e) {
        var funval = this.func.eval(e);
        return funval.expr.eval(funval.env.with(funval.param, new FixValue_1.FixValue(this.func.copy(), e)));
    };
    Fix.prototype.oneStep = function (e, stack) {
        if (this.func.evalFinish === false) {
            stack.pushFrame(this.func, e);
            return;
        }
        if (this.exec) {
            this.evalFinish = true;
            this.value = this.exec.expr.value;
            stack.popFrame();
            return;
        }
        var funval = this.func.value;
        this.exec = {
            expr: funval.expr.copy(),
            env: funval.env.with(funval.param, new FixValue_1.FixValue(this.func.copy(), e))
        };
        stack.pushFrame(this.exec.expr, this.exec.env);
    };
    Fix.prototype.toString = function () {
        return 'fix ' + this.func.toString();
    };
    return Fix;
}(Expr_1.Expr));
exports.Fix = Fix;
