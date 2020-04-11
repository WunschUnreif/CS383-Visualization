import { Expr } from "./Expr";
import { TypeEnv } from "../typing/TypeEnv";
import { BoolType } from "../typing/Type";
import { Env } from "../exec/Env";
import { IntValue } from "../exec/IntValue";
import { CallStack } from "../exec/CallStack";
import { IntLiteral } from "./Literal";
import { BoolValue } from "../exec/BoolValue";
import { Arith } from "./Arith";

export class Eq extends Expr {
    lhs : Expr;
    rhs : Expr;

    constructor(l : Expr, r : Expr) {
        super();
        this.lhs = l;
        this.rhs = r;
    }

    typeCheck(e : TypeEnv) {
        var lTy = this.lhs.typeCheck(e);
        var rTy = this.rhs.typeCheck(e);

        if(lTy && lTy.canTestEquality()) {
            if(rTy && rTy.canTestEquality()) {
                return new BoolType();
            }
        }

        this.reportError("type error");
        return null;
    }

    eval(e : Env) {
        var l = this.lhs.eval(e)
        var r = this.rhs.eval(e)

        return new BoolValue(l.equal(r));
    }

    oneStep(e : Env, stack : CallStack) {
        if(this.lhs.evalFinish == false) {
            stack.pushFrame(this.lhs, e);
            return;
        }

        if(this.rhs.evalFinish == false) {
            stack.pushFrame(this.rhs, e);
            return;
        }

        this.evalFinish = true;

        var l = this.lhs.value
        var r = this.rhs.value
        this.value = new BoolValue(l.equal(r));

        stack.popFrame();
    }

    toString() {
        return this.evalFinish ? this.value.toString() : (
            '(' + this.lhs.toString() + ') = (' + this.rhs.toString() + ')'
        )
    }

    copy() {
        return new Eq(this.lhs.copy(), this.rhs.copy());
    }
}

// var lhs = new Arith(
//     new Arith(new IntLiteral(2), new IntLiteral(3), Arith.OP_MUL, '*'),
//     new IntLiteral(5),
//     Arith.OP_SUB,
//     '-'
// );

// var rhs = new IntLiteral(2);

// var expr = new Eq(lhs, rhs);

// console.log(expr.toString());
// console.log(expr.typeCheck(new TypeEnv()).toString());
// console.log(expr.eval(new Env()).toString());

