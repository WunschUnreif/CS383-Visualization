var readline = require('readline-sync')

var antlr4 = require('antlr4')
const { ErrorListener, ProxyErrorListener } = require('antlr4/error/ErrorListener');
var LambdaLexer = require('./parser/TypedLambdaLexer').TypedLambdaLexer
var LambdaParser = require('./parser/TypedLambdaParser').TypedLambdaParser

var CompileVisitor = require('./parser/CompileVisitor').CompileVisitor
var Type = require('./typing/index')
var Exe = require('./exec/index')

var Interface = require('./interface/interface').InterpreterInterface

var progText = 'let succ \\x:Int.x + 1 in succ 3'

var shell = new Interface(progText)

try {
    var success = shell.compile((e) => console.log(e));
} catch(e) {
    console.log(e)
}

if(success) {
    var ty = shell.typeCheck()

    if(ty) {
        console.log(ty.toString());

        shell.prepare()

        // do {
        //     console.log(shell.getWebpageStack())
        // } while(shell.oneStep());
    }
}
