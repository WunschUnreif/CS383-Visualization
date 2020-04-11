import { Expr } from "./Expr";
import { TypeEnv } from "../typing/TypeEnv";
import { BoolType } from "../typing/Type";
import { Env } from "../exec/Env";
import { BoolValue } from "../exec/BoolValue";
import { CallStack } from "../exec/CallStack";
import { Compare } from "./Compare";
import { IntLiteral, BoolLiteral } from "./Literal";
import { Not } from "./Not";

export class Cond extends Expr {
    cond : Expr;
    then : Expr;
    else : Expr;

    constructor(c : Expr, t : Expr, e : Expr) {
        super();
        this.cond = c;
        this.then = t;
        this.else = e;
    }

    copy() {
        return new Cond(this.cond.copy(), this.then.copy(), this.else.copy());
    }

    typeCheck(e : TypeEnv) {
        var cTy = this.cond.typeCheck(e);
        var tTy = this.then.typeCheck(e);
        var eTy = this.else.typeCheck(e);

        if(cTy && tTy && eTy) {
            if(cTy instanceof BoolType) {
                if(tTy.toString() === eTy.toString()) {
                    return tTy;
                }
            }
        }

        this.reportError('type error');
        return null;
    }

    eval(e : Env) {
        var cond = this.cond.eval(e) as BoolValue;
        if(cond.b) {
            return this.then.eval(e);
        } else {
            return this.else.eval(e);
        }
    }

    oneStep(e : Env, stack : CallStack) {
        if(this.cond.evalFinish === false) {
            stack.pushFrame(this.cond, e);
            return;
        }

        var cond = this.cond.value as BoolValue;

        if(cond.b) {
            if(this.then.evalFinish === false) {
                stack.pushFrame(this.then, e);
                return ;
            } else {
                this.evalFinish = true;
                this.value = this.then.value;
                stack.popFrame();
                return;
            }
        } else {
            if(this.else.evalFinish === false) {
                stack.pushFrame(this.else, e);
                return ;
            } else {
                this.evalFinish = true;
                this.value = this.else.value;
                stack.popFrame();
                return;
            }
        }
    }

    toString() {
        if(this.evalFinish) {
            return this.value.toString();
        } else {
            return 'if (' + this.cond.toString() + ') then (' + this.then.toString() + ') else (' + this.else.toString() + ')'
        }
    }
}

// var expr = new Cond(
//     new Compare(new IntLiteral(3), new IntLiteral(2), Compare.OP_LT, '<'),
//     new Not(new BoolLiteral(false)),
//     new BoolLiteral(false)
// );

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
