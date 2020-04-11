"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Expr = /** @class */ (function () {
    function Expr() {
        this.evalFinish = false;
        this.value = null;
    }
    Expr.prototype.typeCheck = function (env) {
        return null;
    };
    Expr.prototype.oneStep = function (env, stack) {
    };
    Expr.prototype.eval = function (env) {
        return null;
    };
    Expr.prototype.toString = function () {
        return '';
    };
    Expr.prototype.copy = function () {
        return new Expr();
    };
    Expr.prototype.reportError = function (msg) {
        Expr.errormsg += msg + ' \n';
    };
    Expr.prototype.clearError = function () {
        Expr.errormsg = '';
    };
    Expr.errormsg = "";
    return Expr;
}());
exports.Expr = Expr;
