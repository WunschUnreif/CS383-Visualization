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
var ListType = /** @class */ (function (_super) {
    __extends(ListType, _super);
    function ListType(e) {
        var _this = _super.call(this) || this;
        _this.elemT = e;
        return _this;
    }
    ListType.prototype.toString = function () {
        return '[' + this.elemT.toString() + ']';
    };
    ListType.prototype.canTestEquality = function () {
        return this.elemT.canTestEquality();
    };
    return ListType;
}(Type_1.Type));
exports.ListType = ListType;
