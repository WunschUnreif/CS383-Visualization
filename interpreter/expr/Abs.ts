import { Expr } from "./Expr";
import { TypeEnv } from "../typing/TypeEnv";
import { Type } from "../typing/Type";
import { ArrowType } from "../typing/ArrowType";
import { Env } from "../exec/Env";
import { FunValue } from "../exec/FunValue";
import { CallStack } from "../exec/CallStack";
import { Arith } from "./Arith";
import { Name } from "./Name";
import { IntLiteral } from "./Literal";

export class Abs extends Expr {
    param : string;
    paramTy : Type;
    expr : Expr;

    constructor(x : string, t : Type, e : Expr) {
        super();

        this.param = x;
        this.expr = e;
        this.paramTy = t;
    }

    typeCheck(e : TypeEnv) {
        var retTy = this.expr.typeCheck(e.with(this.param, this.paramTy));
        if(retTy) {
            return new ArrowType(this.paramTy, retTy);
        }

        this.reportError("type error");
        return null;
    }

    eval(e : Env) {
        return new FunValue(e, this.param, this.expr);
    }

    oneStep(e : Env, stack : CallStack) {
        this.evalFinish = true;
        this.value = new FunValue(e, this.param, this.expr);

        stack.popFrame();
    }

    toString() {
        if(this.evalFinish) {
            return this.value.toString();
        }
        return '\\' + this.param + ':' + this.paramTy.toString() + '.' + this.expr.toString();
    }

    copy() {
        return new Abs(this.param, this.paramTy, this.expr.copy());
    }
}

// var expr = new Abs("x", new IntType(), new Arith(
//     new Name("x"), new IntLiteral(1), Arith.OP_ADD, '+'
// ));

// console.log(expr.toString());
// console.log(expr.typeCheck(new TypeEnv()).toString());
// console.log(expr.eval(new Env()).toString());
