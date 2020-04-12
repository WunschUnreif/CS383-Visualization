import { Expr } from "./Expr";
import { Env } from "../exec/Env";
import { CallStack } from "../exec/CallStack";
import { TypeEnv } from "../typing/TypeEnv";
import { FixValue } from "../exec/FixValue";
import { Fix } from "./Fix";

export class Name extends Expr {
    name : string;

    exec : {expr : Expr, env : Env};

    constructor(x : string) {
        super();
        this.name = x;
    }

    toString() {
        return this.evalFinish ? this.value.toString() : this.name;
    }

    eval(e : Env) {
        var val = e.get(this.name);
        if(val instanceof FixValue) {
            var fixval = val as FixValue;
            return (new Fix(fixval.expr.copy())).eval(fixval.env);
        }

        return val;
    }

    oneStep(e : Env, stack : CallStack) {
        if(this.exec) {
            this.value = this.exec.expr.value;
            this.evalFinish = true;
            stack.popFrame();
            return;
        }

        var val = e.get(this.name);

        if(!(val instanceof FixValue)) {
            this.evalFinish = true;
            this.value = val;

            stack.popFrame();
            return;
        }

        this.exec = {
            expr : new Fix((val as FixValue).expr),
            env : (val as FixValue).env
        };
        stack.pushFrame(this.exec.expr, this.exec.env);
    }

    typeCheck(e : TypeEnv) {
        return e.get(this.name);
    }

    copy() {
        return new Name(this.name);
    }
}