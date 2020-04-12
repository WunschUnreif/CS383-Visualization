"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var interface_1 = require("./interface/interface");
var Env_1 = require("./exec/Env");
var shell = new interface_1.InterpreterInterface('let app_g = \\ap:[Int]->Int->[Int].\
  \\l:[Int].\\n:Int.\
    case l of nil => n::nil(Int) \
      | x::y => x::(ap y n) \
in let app = fix app_g \
in app 3::2::nil(Int) 1');
var succ = shell.compile(function (e) { return console.log(e); });
console.log(shell.compiledExpr.toString());
console.log(succ);
console.log(shell.typeCheck());
console.log(shell.compiledExpr.eval(new Env_1.Env()).toString());
shell.prepare();
do {
    console.log(shell.getWebpageStack().reverse());
} while (shell.oneStep());
