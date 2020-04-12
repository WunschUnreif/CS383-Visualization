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
var Type_1 = require("./Type");
var ArrowType = /** @class */ (function (_super) {
    __extends(ArrowType, _super);
    function ArrowType(a, r) {
        var _this = _super.call(this) || this;
        _this.argT = a;
        _this.retT = r;
        return _this;
    }
    ArrowType.prototype.toString = function () {
        return '(' + this.argT.toString() + ') -> (' + this.retT.toString() + ')';
    };
    ArrowType.prototype.canTestEquality = function () {
        return false;
    };
    return ArrowType;
}(Type_1.Type));
exports.ArrowType = ArrowType;
