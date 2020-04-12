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
        return e.get(this.name);
    };
    Name.prototype.oneStep = function (e, stack) {
        this.value = e.get(this.name);
        this.evalFinish = true;
        if (this.value === null) {
            this.reportError("name undefined : " + this.name);
        }
        stack.popFrame();
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
