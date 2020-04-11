import { Expr } from "./Expr";
import { TypeEnv } from "../typing/TypeEnv";
import { BoolType } from "../typing/Type";
import { Env } from "../exec/Env";
import { IntValue } from "../exec/IntValue";
import { BoolValue } from "../exec/BoolValue";
import { CallStack } from "../exec/CallStack";

export class Logic extends Expr {
    lhs : Expr;
    rhs : Expr;
    op : (a : boolean, b : boolean) => boolean;
    opString : string;

    constructor(l : Expr, r : Expr, op: (a : boolean, b : boolean) => boolean, opname : string) {
        super();
        this.lhs = l;
        this.rhs = r;
        this.op = op;
        this.opString = opname;
    }

    typeCheck(e : TypeEnv) {
        var lTy = this.lhs.typeCheck(e);
        var rTy = this.rhs.typeCheck(e);

        if(lTy && lTy instanceof BoolType) {
            if(rTy && rTy instanceof BoolType) {
                return new BoolType();
            }
        }

        this.reportError("type error");
        return null;
    }

    eval(e : Env) {
        var l = this.lhs.eval(e) as BoolValue;
        var r = this.rhs.eval(e) as BoolValue;

        return new BoolValue(this.op(l.b, r.b));
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

        var l = this.lhs.eval(e) as BoolValue;
        var r = this.rhs.eval(e) as BoolValue;
        this.value = new BoolValue(this.op(l.b, r.b));

        stack.popFrame();
    }

    toString() {
        return this.evalFinish ? this.value.toString() : (
            '(' + this.lhs.toString() + ') ' + this.opString + ' (' + this.rhs.toString() + ')'
        )
    }

    copy() {
        return new Logic(this.lhs.copy(), this.rhs.copy(), this.op, this.opString);
    }


    static OP_OR  = (a : boolean, b : boolean) => a || b;
    static OP_AND = (a : boolean, b : boolean) => a && b;
}
