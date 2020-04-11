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
var Type = /** @class */ (function () {
    function Type() {
    }
    Type.prototype.toString = function () { return ''; };
    Type.prototype.canTestEquality = function () { return false; };
    return Type;
}());
exports.Type = Type;
var IntType = /** @class */ (function (_super) {
    __extends(IntType, _super);
    function IntType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IntType.prototype.toString = function () {
        return 'Int';
    };
    IntType.prototype.canTestEquality = function () {
        return true;
    };
    return IntType;
}(Type));
exports.IntType = IntType;
var BoolType = /** @class */ (function (_super) {
    __extends(BoolType, _super);
    function BoolType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoolType.prototype.toString = function () {
        return 'Bool';
    };
    BoolType.prototype.canTestEquality = function () {
        return true;
    };
    return BoolType;
}(Type));
exports.BoolType = BoolType;
