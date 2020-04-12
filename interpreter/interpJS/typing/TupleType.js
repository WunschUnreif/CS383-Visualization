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
var TupleType = /** @class */ (function (_super) {
    __extends(TupleType, _super);
    function TupleType(e) {
        var _this = _super.call(this) || this;
        _this.compTs = e;
        return _this;
    }
    TupleType.prototype.toString = function () {
        var result = '';
        var first = true;
        for (var idx in this.compTs) {
            if (!first) {
                result += ' * ';
            }
            result += '(' + this.compTs[idx] + ')';
            first = false;
        }
        return result;
    };
    TupleType.prototype.canTestEquality = function () {
        return this.compTs.reduce(function (p, cT) { return p && cT.canTestEquality(); }, true);
    };
    return TupleType;
}(Type_1.Type));
exports.TupleType = TupleType;
