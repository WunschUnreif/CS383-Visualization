import { Expr } from "./Expr";
import { TypeEnv } from "../typing/TypeEnv";
import { ListType } from "../typing/ListType";
import { Env } from "../exec/Env";
import { IntValue } from "../exec/IntValue";
import { CallStack } from "../exec/CallStack";
import { IntLiteral, NilLiteral } from "./Literal";
import { ConsValue } from "../exec/ConsValue";

export class Cons extends Expr {
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

        if(lTy && rTy) {
            if(rTy instanceof ListType && lTy.toString() === (rTy as ListType).elemT.toString()) {
                return new ListType((rTy as ListType).elemT);
            }
        }

        this.reportError("type error");
        return null;
    }

    eval(e : Env) {
        var l = this.lhs.eval(e);
        var r = this.rhs.eval(e);

        return new ConsValue(l, r);
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

        var l = this.lhs.value;
        var r = this.rhs.value;
        this.value = new ConsValue(l, r);

        stack.popFrame();
    }

    toString() {
        return this.evalFinish ? this.value.toString() : (
            '(' + this.lhs.toString() + ')::(' + this.rhs.toString() + ')'
        )
    }

    copy() {
        return new Cons(this.lhs.copy(), this.rhs.copy());
    }
}

// var expr = new Cons(
//     new IntLiteral(2),
//     new Cons(new IntLiteral(3), new NilLiteral(new IntType))
// )

// console.log(expr.toString());
// console.log(expr.typeCheck(new TypeEnv()).toString());
// console.log(expr.eval(new Env()).toString());

