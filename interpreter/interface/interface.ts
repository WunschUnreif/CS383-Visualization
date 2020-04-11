
var antlr4 = require('antlr4')

const { ErrorListener, ProxyErrorListener, ConsoleErrorListener } = require('antlr4/error/ErrorListener');

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

        var root = parser.program()

        if(listener.msg.length !== 0) {
            onCompileError(listener.msg)
            return false;
        }

        try {
            var visitor = new CompileVisitor()
            this.compiledExpr = visitor.visit(root);
        } catch(e) {
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

    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        this.msg += ("Syntax Error: at line " + line + " col " + column + " : " + msg + '\n');
    }
}