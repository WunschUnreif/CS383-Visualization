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
var FixValue_1 = require("../exec/FixValue");
var Fix_1 = require("./Fix");
var Name = /** @class */ (function (_super) {
    __extends(Name, _super);
    function Name(x) {
        var _this = _super.call(this) || this;
        _this.name = x;
        return _this;
    }
    Name.prototype.toString = function () {
        return this.evalFinish ? this.value.toString() : this.name;
    };
    Name.prototype.eval = function (e) {
        var val = e.get(this.name);
        if (val instanceof FixValue_1.FixValue) {
            var fixval = val;
            return (new Fix_1.Fix(fixval.expr.copy())).eval(fixval.env);
        }
        return val;
    };
    Name.prototype.oneStep = function (e, stack) {
        if (this.exec) {
            this.value = this.exec.expr.value;
            this.evalFinish = true;
            stack.popFrame();
            return;
        }
        var val = e.get(this.name);
        if (!(val instanceof FixValue_1.FixValue)) {
            this.evalFinish = true;
            this.value = val;
            stack.popFrame();
            return;
        }
        this.exec = {
            expr: new Fix_1.Fix(val.expr),
            env: val.env
        };
        stack.pushFrame(this.exec.expr, this.exec.env);
    };
    Name.prototype.typeCheck = function (e) {
        return e.get(this.name);
    };
    Name.prototype.copy = function () {
        return new Name(this.name);
    };
    return Name;
}(Expr_1.Expr));
exports.Name = Name;
