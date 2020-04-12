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
var BoolValue_1 = require("../exec/BoolValue");
var Logic = /** @class */ (function (_super) {
    __extends(Logic, _super);
    function Logic(l, r, op, opname) {
        var _this = _super.call(this) || this;
        _this.lhs = l;
        _this.rhs = r;
        _this.op = op;
        _this.opString = opname;
        return _this;
    }
    Logic.prototype.typeCheck = function (e) {
        var lTy = this.lhs.typeCheck(e);
        var rTy = this.rhs.typeCheck(e);
        if (lTy && lTy instanceof Type_1.BoolType) {
            if (rTy && rTy instanceof Type_1.BoolType) {
                return new Type_1.BoolType();
            }
        }
        this.reportError("type error");
        return null;
    };
    Logic.prototype.eval = function (e) {
        var l = this.lhs.eval(e);
        var r = this.rhs.eval(e);
        return new BoolValue_1.BoolValue(this.op(l.b, r.b));
    };
    Logic.prototype.oneStep = function (e, stack) {
        if (this.lhs.evalFinish == false) {
            stack.pushFrame(this.lhs, e);
            return;
        }
        if (this.rhs.evalFinish == false) {
            stack.pushFrame(this.rhs, e);
            return;
        }
        this.evalFinish = true;
        var l = this.lhs.eval(e);
        var r = this.rhs.eval(e);
        this.value = new BoolValue_1.BoolValue(this.op(l.b, r.b));
        stack.popFrame();
    };
    Logic.prototype.toString = function () {
        return this.evalFinish ? this.value.toString() : ('(' + this.lhs.toString() + ') ' + this.opString + ' (' + this.rhs.toString() + ')');
    };
    Logic.prototype.copy = function () {
        return new Logic(this.lhs.copy(), this.rhs.copy(), this.op, this.opString);
    };
    Logic.OP_OR = function (a, b) { return a || b; };
    Logic.OP_AND = function (a, b) { return a && b; };
    return Logic;
}(Expr_1.Expr));
exports.Logic = Logic;
