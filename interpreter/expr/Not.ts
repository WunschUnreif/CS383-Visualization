import { Expr } from "./Expr";
import { TypeEnv } from "../typing/TypeEnv";
import { BoolType } from "../typing/Type";
import { Env } from "../exec/Env";
import { IntValue } from "../exec/IntValue";
import { CallStack } from "../exec/CallStack";
import { BoolValue } from "../exec/BoolValue";

export class Not extends Expr {
    rhs : Expr;

    constructor(e : Expr) {
        super()
        this.rhs = e;
    }

    typeCheck(e : TypeEnv) {
        var rhsTy = this.rhs.typeCheck(e);

        if(rhsTy && rhsTy instanceof BoolType) {
            return new BoolType();
        }

        this.reportError("type error");
        return null;
    }

    eval(e : Env) {
        var val = this.rhs.eval(e);
        return new BoolValue(!(val as BoolValue).b);
    }

    oneStep(e : Env, stack : CallStack) {
        if(this.rhs.evalFinish) {
            this.evalFinish = true;
            this.value = new BoolValue(!(this.rhs.value as BoolValue).b);
            stack.popFrame();
        } else {
            stack.pushFrame(this.rhs, e);
        }
    }

    toString() {
        return this.evalFinish ? this.value.toString() : ('not (' + this.rhs.toString() + ')');
    }

    copy() {
        return new Not(this.rhs.copy());
    }
}