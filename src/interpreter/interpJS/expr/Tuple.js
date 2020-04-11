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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Expr_1 = require("./Expr");
var TupleType_1 = require("../typing/TupleType");
var TupleValue_1 = require("../exec/TupleValue");
var Tuple = /** @class */ (function (_super) {
    __extends(Tuple, _super);
    function Tuple(comps) {
        var _this = _super.call(this) || this;
        _this.components = comps;
        return _this;
    }
    Tuple.prototype.typeCheck = function (e) {
        var tys = [];
        for (var idx in this.components) {
            var ty = this.components[idx].typeCheck(e);
            if (ty === null) {
                this.reportError("type error");
                return null;
            }
            tys.push(ty);
        }
        return new TupleType_1.TupleType(tys);
    };
    Tuple.prototype.eval = function (e) {
        var vals = [];
        for (var idx in this.components) {
            var val = this.components[idx].eval(e);
            if (val === null) {
                this.reportError("eval to null");
                return null;
            }
            vals.push(val);
        }
        return new (TupleValue_1.TupleValue.bind.apply(TupleValue_1.TupleValue, __spreadArrays([void 0], vals)))();
    };
    Tuple.prototype.oneStep = function (e, stack) {
        for (var idx in this.components) {
            if (this.components[idx].evalFinish === false) {
                stack.pushFrame(this.components[idx], e);
                return;
            }
        }
        this.evalFinish = true;
        var vals = [];
        for (var idx in this.components) {
            vals.push(this.components[idx].value);
        }
        this.value = new (TupleValue_1.TupleValue.bind.apply(TupleValue_1.TupleValue, __spreadArrays([void 0], vals)))();
        stack.popFrame();
    };
    Tuple.prototype.toString = function () {
        if (this.evalFinish) {
            return this.value.toString();
        }
        return this.components.reduce(function (p, c) { return p + '(' + c.toString() + ') '; }, '{') + '}';
    };
    Tuple.prototype.copy = function () {
        return new Tuple(this.components.map(function (v) { return v.copy(); }));
    };
    return Tuple;
}(Expr_1.Expr));
exports.Tuple = Tuple;
// var tupexpr = new Tuple([
//     new IntLiteral(3), 
//     new IntLiteral(4),
//     new BoolLiteral(false)
// ]);
// console.log(tupexpr.toString());
// console.log(tupexpr.typeCheck(new TypeEnv()).toString());
// console.log(tupexpr.eval(new Env()).toString());
