import { Expr } from "./Expr";
import { IntValue } from '../exec/IntValue'
import { BoolValue } from '../exec/BoolValue'
import { NilValue } from '../exec/ConsValue'
import { TypeEnv } from "../typing/TypeEnv";
import { IntType, BoolType } from "../typing/Type";
import { ListType } from '../typing/ListType'
import { Env } from "../exec/Env";
import { CallStack } from "../exec/CallStack";
import { Type } from "../typing/Type";

export class IntLiteral extends Expr {

    constructor(n : number) {
        super();
        this.value = new IntValue(n);
        this.evalFinish = true;
    }

    eval(e : Env) {
        return this.value;
    }

    oneStep(e : Env, stack : CallStack) {
        this.reportError("Can't happen: IntLiteral.oneStep()");
    }

    typeCheck(e : TypeEnv) {
        return new IntType();
    }

    toString() {
        return this.value.toString();
    }

    copy() {
        return this;
    }

}

export class BoolLiteral extends Expr {

    constructor(b : boolean) {
        super();
        this.value = new BoolValue(b);
        this.evalFinish = true;
    }

    eval(e : Env) {
        return this.value;
    }

    oneStep(e : Env, stack : CallStack) {
        this.reportError("Can't happen: BoolLiteral.oneStep()");
    }

    typeCheck(e : TypeEnv) {
        return new BoolType();
    }

    toString() {
        return this.value.toString();
    }

    copy() {
        return this;
    }

}

export class NilLiteral extends Expr {

    type : Type

    constructor(t : Type) {
        super();
        this.value = new NilValue();
        this.evalFinish = true;
        this.type = t;
    }

    eval(e : Env) {
        return this.value;
    }

    oneStep(e : Env, stack : CallStack) {
        this.reportError("Can't happen: BoolLiteral.oneStep()");
    }

    typeCheck(e : TypeEnv) {
        return new ListType(this.type);
    }

    toString() {
        return this.value.toString();
    }

    copy() {
        return this;
    }

}
