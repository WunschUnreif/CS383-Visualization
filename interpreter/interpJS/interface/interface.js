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
var antlr4 = require('antlr4');
var _a = require('antlr4/error/ErrorListener'), ErrorListener = _a.ErrorListener, ProxyErrorListener = _a.ProxyErrorListener, ConsoleErrorListener = _a.ConsoleErrorListener;
var BailErrorStrategy = require('antlr4/error/ErrorStrategy').BailErrorStrategy;
var LambdaLexer = require('../parser/TypedLambdaLexer').TypedLambdaLexer;
var LambdaParser = require('../parser/TypedLambdaParser').TypedLambdaParser;
var TypeEnv_1 = require("../typing/TypeEnv");
var CompileVisitor_1 = require("../parser/CompileVisitor");
var CallStack_1 = require("../exec/CallStack");
var Env_1 = require("../exec/Env");
var InterpreterInterface = /** @class */ (function () {
    function InterpreterInterface(code) {
        this.progText = '';
        this.stack = new CallStack_1.CallStack();
        this.env = new Env_1.Env();
        this.progText = code;
    }
    InterpreterInterface.prototype.compile = function (onCompileError) {
        var chars = new antlr4.InputStream(this.progText);
        var lexer = new LambdaLexer(chars);
        var tokens = new antlr4.CommonTokenStream(lexer);
        tokens.fill();
        var listener = new LambdaErrorListener();
        var parser = new LambdaParser(tokens);
        parser.removeErrorListeners();
        parser.addErrorListener(listener);
        parser.buildParseTrees = true;
        var rawTokens = tokens.tokens.filter(function (x) { return x.type >= 0 && x.channel == 0; });
        var root = parser.program();
        var usedTokens = root.getAllTokens();
        if (listener.hasErrors) {
            onCompileError(listener.msg);
            return false;
        }
        if (rawTokens.length !== usedTokens.length) {
            onCompileError("Some tokens are ignored.");
            return false;
        }
        try {
            var visitor = new CompileVisitor_1.CompileVisitor();
            this.compiledExpr = root.accept(visitor);
        }
        catch (e) {
            console.log(e);
            return false;
        }
        return true;
    };
    InterpreterInterface.prototype.typeCheck = function () {
        if (!this.compiledExpr)
            return null;
        var te = new TypeEnv_1.TypeEnv();
        var result = this.compiledExpr.typeCheck(te);
        return result;
    };
    InterpreterInterface.prototype.prepare = function () {
        this.stack.pushFrame(this.compiledExpr, this.env);
    };
    InterpreterInterface.prototype.oneStep = function () {
        if (this.stack.top()) {
            this.stack.top().expr.oneStep(this.stack.top().env, this.stack);
            return true;
        }
        return false;
    };
    InterpreterInterface.prototype.getWebpageStack = function () {
        return this.stack.toWebPageStack();
    };
    return InterpreterInterface;
}());
exports.InterpreterInterface = InterpreterInterface;
var LambdaErrorListener = /** @class */ (function (_super) {
    __extends(LambdaErrorListener, _super);
    function LambdaErrorListener() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.msg = "";
        _this.hasErrors = false;
        return _this;
    }
    LambdaErrorListener.prototype.syntaxError = function (recognizer, offendingSymbol, line, column, msg, e) {
        this.msg += ("Syntax Error: at line " + line + " col " + column + " : " + msg + '\n');
        this.hasErrors = true;
    };
    return LambdaErrorListener;
}(ErrorListener));
