import { Expr } from "./Expr";
import { Env } from "../exec/Env";
import { CallStack } from "../exec/CallStack";
import { TypeEnv } from "../typing/TypeEnv";

export class Name extends Expr {
    name : string;

    constructor(x : string) {
        super();
        this.name = x;
    }

    toString() {
        return this.evalFinish ? this.value.toString() : this.name;
    }

    eval(e : Env) {
        return e.get(this.name);
    }

    oneStep(e : Env, stack : CallStack) {
        this.value = e.get(this.name);
        this.evalFinish = true;

        if(this.value === null) {
            this.reportError("name undefined : " + this.name);
        }

        stack.popFrame();
    }

    typeCheck(e : TypeEnv) {
        return e.get(this.name);
    }

    copy() {
        return new Name(this.name);
    }
}