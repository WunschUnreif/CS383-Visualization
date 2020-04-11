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
var IntValue_1 = require("../exec/IntValue");
var BoolValue_1 = require("../exec/BoolValue");
var ConsValue_1 = require("../exec/ConsValue");
var Type_1 = require("../typing/Type");
var ListType_1 = require("../typing/ListType");
var IntLiteral = /** @class */ (function (_super) {
    __extends(IntLiteral, _super);
    function IntLiteral(n) {
        var _this = _super.call(this) || this;
        _this.value = new IntValue_1.IntValue(n);
        _this.evalFinish = true;
        return _this;
    }
    IntLiteral.prototype.eval = function (e) {
        return this.value;
    };
    IntLiteral.prototype.oneStep = function (e, stack) {
        this.reportError("Can't happen: IntLiteral.oneStep()");
    };
    IntLiteral.prototype.typeCheck = function (e) {
        return new Type_1.IntType();
    };
    IntLiteral.prototype.toString = function () {
        return this.value.toString();
    };
    IntLiteral.prototype.copy = function () {
        return this;
    };
    return IntLiteral;
}(Expr_1.Expr));
exports.IntLiteral = IntLiteral;
var BoolLiteral = /** @class */ (function (_super) {
    __extends(BoolLiteral, _super);
    function BoolLiteral(b) {
        var _this = _super.call(this) || this;
        _this.value = new BoolValue_1.BoolValue(b);
        _this.evalFinish = true;
        return _this;
    }
    BoolLiteral.prototype.eval = function (e) {
        return this.value;
    };
    BoolLiteral.prototype.oneStep = function (e, stack) {
        this.reportError("Can't happen: BoolLiteral.oneStep()");
    };
    BoolLiteral.prototype.typeCheck = function (e) {
        return new Type_1.BoolType();
    };
    BoolLiteral.prototype.toString = function () {
        return this.value.toString();
    };
    BoolLiteral.prototype.copy = function () {
        return this;
    };
    return BoolLiteral;
}(Expr_1.Expr));
exports.BoolLiteral = BoolLiteral;
var NilLiteral = /** @class */ (function (_super) {
    __extends(NilLiteral, _super);
    function NilLiteral(t) {
        var _this = _super.call(this) || this;
        _this.value = new ConsValue_1.NilValue();
        _this.evalFinish = true;
        _this.type = t;
        return _this;
    }
    NilLiteral.prototype.eval = function (e) {
        return this.value;
    };
    NilLiteral.prototype.oneStep = function (e, stack) {
        this.reportError("Can't happen: BoolLiteral.oneStep()");
    };
    NilLiteral.prototype.typeCheck = function (e) {
        return new ListType_1.ListType(this.type);
    };
    NilLiteral.prototype.toString = function () {
        return this.value.toString();
    };
    NilLiteral.prototype.copy = function () {
        return this;
    };
    return NilLiteral;
}(Expr_1.Expr));
exports.NilLiteral = NilLiteral;
