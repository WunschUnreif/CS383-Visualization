"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TypeEnv = /** @class */ (function () {
    function TypeEnv() {
        this.prevEnv = null;
        this.name = "";
        this.type = null;
    }
    TypeEnv.prototype.get = function (name) {
        if (name === this.name) {
            return this.type;
        }
        else {
            return this.prevEnv ? this.prevEnv.get(name) : null;
        }
    };
    TypeEnv.prototype.with = function (name, type) {
        var newEnv = new TypeEnv();
        newEnv.name = name;
        newEnv.type = type;
        newEnv.prevEnv = this;
        return newEnv;
    };
    return TypeEnv;
}());
exports.TypeEnv = TypeEnv;
