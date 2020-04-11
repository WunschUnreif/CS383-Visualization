import { Expr } from "./Expr";
import { TypeEnv } from "../typing/TypeEnv";
import { IntType } from "../typing/Type";
import { Env } from "../exec/Env";
import { IntValue } from "../exec/IntValue";
import { CallStack } from "../exec/CallStack";

export class Neg extends Expr {
    rhs : Expr;

    constructor(e : Expr) {
        super()
        this.rhs = e;
    }

    typeCheck(e : TypeEnv) {
        var rhsTy = this.rhs.typeCheck(e);

        if(rhsTy && rhsTy instanceof IntType) {
            return new IntType();
        }

        this.reportError("type error");
        return null;
    }

    eval(e : Env) {
        var val = this.rhs.eval(e);
        return new IntValue(-(val as IntValue).n);
    }

    oneStep(e : Env, stack : CallStack) {
        if(this.rhs.evalFinish) {
            this.evalFinish = true;
            this.value = new IntValue(-(this.rhs.value as IntValue).n);
            stack.popFrame();
        } else {
            stack.pushFrame(this.rhs, e);
        }
    }

    toString() {
        return this.evalFinish ? this.value.toString() : ('~(' + this.rhs.toString() + ')');
    }

    copy() {
        return new Neg(this.rhs.copy());
    }
}