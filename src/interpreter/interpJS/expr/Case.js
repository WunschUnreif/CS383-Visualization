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
var Case = /** @class */ (function (_super) {
    __extends(Case, _super);
    function Case(e, e1, x, y, e2) {
        var _this = _super.call(this) || this;
        _this.lst = e;
        _this.onNil = e1;
        _this.hdName = x;
        _this.tlName = y;
        _this.onCons = e2;
        return _this;
    }
    Case.prototype.copy = function () {
        return new Case(this.lst, this.onNil, this.hdName, this.tlName, this.onCons);
    };
    Case.prototype.typeCheck = function (e) {
        var lTy = this.lst.typeCheck(e);
        if (lTy && lTy instanceof ListType_1.ListType) {
            var nTy = this.onNil.typeCheck(e);
            var cTy = this.onCons.typeCheck(e.with(this.hdName, lTy.elemT).with(this.tlName, lTy));
            if (nTy && cTy) {
                if (nTy.toString() == cTy.toString()) {
                    return nTy;
                }
            }
        }
        this.reportError("type error");
        return null;
    };
    Case.prototype.eval = function (e) {
        var lstval = this.lst.eval(e);
        if (lstval instanceof ConsValue_1.NilValue) {
            return this.onNil.eval(e);
        }
        else {
            var l = lstval;
            return this.onCons.eval(e.with(this.hdName, l.head).with(this.tlName, l.tail));
        }
    };
    Case.prototype.oneStep = function (e, stack) {
        if (this.lst.evalFinish === false) {
            stack.pushFrame(this.lst, e);
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
        var lstval = this.lst.value;
        if (lstval instanceof ConsValue_1.NilValue) {
            this.exec.expr = this.onNil.copy();
            this.exec.env = e;
            stack.pushFrame(this.exec.expr, this.exec.env);
        }
        else {
            var l = lstval;
            this.exec = {
                expr: this.onCons.copy(),
                env: e.with(this.hdName, l.head).with(this.tlName, l.tail)
            };
            stack.pushFrame(this.exec.expr, this.exec.env);
        }
    };
    Case.prototype.toString = function () {
        if (this.evalFinish) {
            return this.value.toString();
        }
        return 'case (' + this.lst.toString() + ') of nil => (' + this.onNil.toString() +
            ') | ' + this.hdName + '::' + this.tlName + ' => (' + this.onCons.toString() + ')';
    };
    return Case;
}(Expr_1.Expr));
exports.Case = Case;
