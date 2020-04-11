import { Expr } from "./Expr";
import { TypeEnv } from "../typing/TypeEnv";
import { TupleType } from "../typing/TupleType";
import { Env } from "../exec/Env";
import { TupleValue } from "../exec/TupleValue";
import { CallStack } from "../exec/CallStack";

export class Proj extends Expr {
    tup : Expr;
    n : number;

    constructor(e : Expr, n : number) {
        super();
        this.tup = e;
        this.n = n;
    }

    copy() {
        return new Proj(this.tup.copy(), this.n);
    }

    typeCheck(e : TypeEnv) {
        var tTy = this.tup.typeCheck(e);
        if(tTy && tTy instanceof TupleType) {
            var t = tTy as TupleType;
            if(this.n <= t.compTs.length) {
                return t.compTs[this.n - 1]
            }
        }

        this.reportError('type error');
        return null;
    }

    eval(e : Env) {
        var t = this.tup.eval(e) as TupleValue;
        return t.vals[this.n - 1];
    }

    oneStep(e : Env, stack : CallStack) {
        if(this.tup.evalFinish === false) {
            stack.pushFrame(this.tup, e);
            return;
        }

        this.evalFinish = true;
        var t = this.tup.value as TupleValue;
        this.value = t.vals[this.n - 1];
        stack.popFrame();
    }

    toString() {
        if(this.evalFinish) {
            return this.value.toString();
        }
        return '(' + this.tup.toString() + ').' + this.n;
    }
}