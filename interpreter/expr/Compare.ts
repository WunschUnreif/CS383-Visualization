import { Expr } from "./Expr";
import { TypeEnv } from "../typing/TypeEnv";
import { IntType, BoolType } from "../typing/Type";
import { Env } from "../exec/Env";
import { IntValue } from "../exec/IntValue";
import { BoolValue } from "../exec/BoolValue";
import { CallStack } from "../exec/CallStack";

export class Compare extends Expr {
    lhs : Expr;
    rhs : Expr;
    op : (a : number, b : number) => boolean;
    opString : string;

    constructor(l : Expr, r : Expr, op: (a : number, b : number) => boolean, opname : string) {
        super();
        this.lhs = l;
        this.rhs = r;
        this.op = op;
        this.opString = opname;
    }

    typeCheck(e : TypeEnv) {
        var lTy = this.lhs.typeCheck(e);
        var rTy = this.rhs.typeCheck(e);

        if(lTy && lTy instanceof IntType) {
            if(rTy && rTy instanceof IntType) {
                return new BoolType();
            }
        }

        this.reportError("type error");
        return null;
    }

    eval(e : Env) {
        var l = this.lhs.eval(e) as IntValue;
        var r = this.rhs.eval(e) as IntValue;

        return new BoolValue(this.op(l.n, r.n));
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

        var l = this.lhs.value as IntValue;
        var r = this.rhs.value as IntValue;
        this.value = new BoolValue(this.op(l.n, r.n));

        stack.popFrame();
    }

    toString() {
        return this.evalFinish ? this.value.toString() : (
            '(' + this.lhs.toString() + ') ' + this.opString + ' (' + this.rhs.toString() + ')'
        )
    }

    copy() {
        return new Compare(this.lhs.copy(), this.rhs.copy(), this.op, this.opString);
    }


    static OP_LT  = (a : number, b : number) => a < b;
    static OP_LTE = (a : number, b : number) => a <= b;
    static OP_GT  = (a : number, b : number) => a > b;
    static OP_GTE = (a : number, b : number) => a >= b;
}
