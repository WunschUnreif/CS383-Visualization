import { Expr } from "./Expr";
import { TypeEnv } from "../typing/TypeEnv";
import { ArrowType } from "../typing/ArrowType";
import { Env } from "../exec/Env";
import { FunValue } from "../exec/FunValue";
import { CallStack } from "../exec/CallStack";
import { Abs } from "./Abs";
import { Arith } from "./Arith";
import { Name } from "./Name";
import { IntLiteral } from "./Literal";

export class App extends Expr {
    fun : Expr;
    arg : Expr;

    exec : {expr : Expr, env : Env}

    constructor(f : Expr, x : Expr) {
        super();
        this.fun = f;
        this.arg = x;
    }

    typeCheck(e : TypeEnv) {
        var fTy = this.fun.typeCheck(e);
        var xTy = this.arg.typeCheck(e);

        if(fTy && xTy) {
            if(fTy instanceof ArrowType) {
                if((fTy as ArrowType).argT.toString() === xTy.toString()) {
                    return (fTy as ArrowType).retT;
                }
            }
        }

        this.reportError("type error");
        return null;
    }

    eval(e : Env) {
        var f = this.fun.eval(e) as FunValue;
        var x = this.arg.eval(e);

        return f.expr.eval(f.env.with(f.param, x));
    }

    oneStep(e : Env, stack : CallStack) {
        if(this.fun.evalFinish === false) {
            stack.pushFrame(this.fun, e);
            return;
        }

        if(this.arg.evalFinish === false) {
            stack.pushFrame(this.arg, e);
            return;
        }

        if(this.exec && this.exec.expr.evalFinish) {
            this.evalFinish = true;
            this.value = this.exec.expr.value;
            stack.popFrame();
            return;
        }

        this.exec = {
            expr : (this.fun.value as FunValue).expr.copy(),
            env : (this.fun.value as FunValue).env.with((this.fun.value as FunValue).param, this.arg.value)
        };

        stack.pushFrame(this.exec.expr, this.exec.env);
    }

    toString() {
        if(this.evalFinish) {
            return this.value.toString();
        }
        return '(' + this.fun.toString() + ') (' + this.arg.toString() + ')'
    }

    copy() {
        return new App(this.fun.copy(), this.arg.copy());
    }
}

// var abs = new Abs("x", new IntType(), new Arith(
//     new Name("x"), new IntLiteral(1), Arith.OP_ADD, '+'
// ));

// var expr = new App(abs, new IntLiteral(10));

// console.log(expr.toString());
// console.log(expr.typeCheck(new TypeEnv()).toString());
// console.log(expr.eval(new Env()).toString());

// var stack = new CallStack();
// var env = new Env();

// stack.pushFrame(expr, env);

// do {
//     stack.top().expr.oneStep(stack.top().env, stack);
//     console.log(stack.toWebPageStack());
// } while(stack.frames.length != 0);

// expr = new App(abs, new IntLiteral(12));

// stack.pushFrame(expr, env);

// do {
//     stack.top().expr.oneStep(stack.top().env, stack);
//     console.log(stack.toWebPageStack());
// } while(stack.frames.length != 0);
