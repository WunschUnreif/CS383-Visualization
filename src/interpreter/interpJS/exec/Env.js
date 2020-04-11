"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Env = /** @class */ (function () {
    function Env() {
        this.prevEnv = null;
        this.name = "";
        this.value = null;
    }
    Env.prototype.get = function (name) {
        if (name === this.name) {
            return this.value;
        }
        else {
            return this.prevEnv ? this.prevEnv.get(name) : null;
        }
    };
    Env.prototype.with = function (name, val) {
        var newEnv = new Env();
        newEnv.name = name;
        newEnv.value = val;
        newEnv.prevEnv = this;
        return newEnv;
    };
    Env.prototype.toWebPageEnv = function () {
        var env = {};
        if (this.value) {
            env[this.name] = this.value.toString();
        }
        var prev = this.prevEnv ? this.prevEnv.toWebPageEnv() : {};
        for (var name in prev) {
            if (!env[name]) {
                env[name] = prev[name];
            }
        }
        return env;
    };
    return Env;
}());
exports.Env = Env;
