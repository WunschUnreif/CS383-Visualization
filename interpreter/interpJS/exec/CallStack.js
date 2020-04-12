"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CallStack = /** @class */ (function () {
    function CallStack() {
        this.frames = [];
    }
    CallStack.prototype.pushFrame = function (expr, env) {
        this.frames.push(new CallFrame(expr, env));
    };
    CallStack.prototype.popFrame = function () {
        if (this.frames.length !== 0) {
            this.poped = this.top();
            this.frames.pop();
        }
    };
    CallStack.prototype.top = function () {
        if (this.frames.length !== 0) {
            return this.frames[this.frames.length - 1];
        }
        else {
            return null;
        }
    };
    CallStack.prototype.toWebPageStack = function () {
        var res = this.frames.reverse().map(function (fm) { return fm.toWebPageFrame(); });
        this.frames.reverse();
        if (this.poped) {
            res.unshift(this.poped.toWebPageFrame());
            this.poped = null;
        }
        return res;
    };
    return CallStack;
}());
exports.CallStack = CallStack;
var CallFrame = /** @class */ (function () {
    function CallFrame(expr, env) {
        this.expr = expr;
        this.env = env;
    }
    CallFrame.prototype.toWebPageFrame = function () {
        return {
            expr: this.expr.toString(),
            env: this.env.toWebPageEnv()
        };
    };
    return CallFrame;
}());
exports.CallFrame = CallFrame;
