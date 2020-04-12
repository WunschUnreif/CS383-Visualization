
var antlr4 = require('antlr4')

const { ErrorListener, ProxyErrorListener, ConsoleErrorListener } = require('antlr4/error/ErrorListener');

const {BailErrorStrategy} = require('antlr4/error/ErrorStrategy')

var LambdaLexer = require('../parser/TypedLambdaLexer').TypedLambdaLexer
var LambdaParser = require('../parser/TypedLambdaParser').TypedLambdaParser

import { Expr } from '../expr/Expr'
import { Type } from '../typing/Type'
import { TypeEnv } from '../typing/TypeEnv'
import { CompileVisitor } from '../parser/CompileVisitor';
import { CallStack } from '../exec/CallStack';
import { Env } from '../exec/Env';

export class InterpreterInterface {

    progText = ''

    compiledExpr : Expr;

    stack = new CallStack()
    env = new Env()

    constructor(code : string) {
        this.progText = code;
    }

    compile(onCompileError : (msg : string) => void) {
        var chars = new antlr4.InputStream(this.progText);

        var lexer = new LambdaLexer(chars);
        var tokens  = new antlr4.CommonTokenStream(lexer);
        tokens.fill()

        var listener = new LambdaErrorListener()

        var parser = new LambdaParser(tokens);
        parser.removeErrorListeners()
        parser.addErrorListener(listener)
        parser.buildParseTrees = true;

        var rawTokens = tokens.tokens.filter((x) => x.type >= 0 && x.channel == 0)

        var root = parser.program()

        var usedTokens = root.getAllTokens()

        if(listener.hasErrors) {
            onCompileError(listener.msg)
            return false;
        }

        if(rawTokens.length !== usedTokens.length) {
            onCompileError("Some tokens are ignored.")
            return false;
        }

        try {
            var visitor = new CompileVisitor()
            this.compiledExpr = root.accept(visitor)
        } catch(e) {
            console.log(e)
            return false;
        }

        return true;
    }

    typeCheck() {
        if(!this.compiledExpr) return null;

        var te = new TypeEnv()
        var result = this.compiledExpr.typeCheck(te);
        return result;
    }

    prepare() {
        this.stack.pushFrame(this.compiledExpr, this.env)
    }

    oneStep() {
        if(this.stack.top()) {
            this.stack.top().expr.oneStep(this.stack.top().env, this.stack);
            return true;
        }
        return false;
    }

    getWebpageStack() {
        return this.stack.toWebPageStack();
    }

}

class LambdaErrorListener extends ErrorListener {
    msg : string = "";
    hasErrors = false;

    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        this.msg += ("Syntax Error: at line " + line + " col " + column + " : " + msg + '\n');
        this.hasErrors = true;
    }
}