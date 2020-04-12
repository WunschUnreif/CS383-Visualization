import { InterpreterInterface } from "./interface/interface";
import { Env } from "./exec/Env";

var shell = new InterpreterInterface(
    'let app_g = \\ap:[Int]->Int->[Int].\
  \\l:[Int].\\n:Int.\
    case l of nil => n::nil(Int) \
      | x::y => x::(ap y n) \
in let app = fix app_g \
in app 3::2::nil(Int) 1')

var succ = shell.compile(e => console.log(e));

console.log(shell.compiledExpr.toString())

console.log(succ);

console.log(shell.typeCheck());

console.log(shell.compiledExpr.eval(new Env()).toString())

shell.prepare()

do {
    console.log(shell.getWebpageStack().reverse())
} while(shell.oneStep())