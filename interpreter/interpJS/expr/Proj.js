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
var TupleType_1 = require("../typing/TupleType");
var Proj = /** @class */ (function (_super) {
    __extends(Proj, _super);
    function Proj(e, n) {
        var _this = _super.call(this) || this;
        _this.tup = e;
        _this.n = n;
        return _this;
    }
    Proj.prototype.copy = function () {
        return new Proj(this.tup.copy(), this.n);
    };
    Proj.prototype.typeCheck = function (e) {
        var tTy = this.tup.typeCheck(e);
        if (tTy && tTy instanceof TupleType_1.TupleType) {
            var t = tTy;
            if (this.n <= t.compTs.length) {
                return t.compTs[this.n - 1];
            }
        }
        this.reportError('type error');
        return null;
    };
    Proj.prototype.eval = function (e) {
        var t = this.tup.eval(e);
        return t.vals[this.n - 1];
    };
    Proj.prototype.oneStep = function (e, stack) {
        if (this.tup.evalFinish === false) {
            stack.pushFrame(this.tup, e);
            return;
        }
        this.evalFinish = true;
        var t = this.tup.value;
        this.value = t.vals[this.n - 1];
        stack.popFrame();
    };
    Proj.prototype.toString = function () {
        if (this.evalFinish) {
            return this.value.toString();
        }
        return '(' + this.tup.toString() + ').' + this.n;
    };
    return Proj;
}(Expr_1.Expr));
exports.Proj = Proj;
