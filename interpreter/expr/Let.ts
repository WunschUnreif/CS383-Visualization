import { Expr } from "./Expr";
import { TypeEnv } from "../typing/TypeEnv";
import { Env } from "../exec/Env";
import { CallStack } from "../exec/CallStack";
import { IntValue } from "../exec/IntValue";
import { Arith } from "./Arith";
import { Name } from "./Name";
import { IntLiteral } from "./Literal";

export class Let extends Expr {
    name : string;
    bindto : Expr;
    inside : Expr;

    exec : {expr : Expr, env : Env};

    constructor(x : string, e1 : Expr, e2 : Expr) {
        super();
        this.name = x;
        this.bindto = e1;
        this.inside = e2;
    }

    copy() {
        return new Let(this.name, this.bindto.copy(), this.inside.copy());
    }

    typeCheck(e : TypeEnv) {
        var bTy = this.bindto.typeCheck(e);
        if(bTy) {
            var iTy = this.inside.typeCheck(e.with(this.name, bTy));
            if(iTy) {
                return iTy;
            }
        }

        this.reportError("type error");
        return null;
    }

    eval(e : Env) {
        var bindtoval = this.bindto.eval(e);
        return this.inside.eval(e.with(this.name, bindtoval));
    }

    oneStep(e : Env, stack : CallStack) {
        if(this.bindto.evalFinish === false) {
            stack.pushFrame(this.bindto, e);
            return;
        }

        if(this.exec) {
            if(this.exec.expr.evalFinish) {
                this.evalFinish = true;
                this.value = this.exec.expr.value;
                stack.popFrame();
                return;
            }
        }

        this.exec = {
            expr : this.inside.copy(),
            env : e.with(this.name, this.bindto.value)
        };

        stack.pushFrame(this.exec.expr, this.exec.env);
    }

    toString() {
        if(this.evalFinish) {
            return this.value.toString();
        }
        return 'let ' + this.name + '=(' + this.bindto.toString() + ') in (' + this.inside.toString() + ')';
    }
}

// var expr = new Let("x", new IntLiteral(10), new Arith(
//     new Name('x'), new IntLiteral(5), Arith.OP_ADD, '+'
// ))

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
