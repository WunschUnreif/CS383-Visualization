import { Expr } from "./Expr";
import { TypeEnv } from "../typing/TypeEnv";
import { ListType } from "../typing/ListType";
import { Env } from "../exec/Env";
import { NilValue, ConsValue } from "../exec/ConsValue";
import { CallStack } from "../exec/CallStack";

export class Case extends Expr {
    lst : Expr;
    onNil : Expr;
    hdName : string;
    tlName : string;
    onCons : Expr;

    exec : {expr : Expr, env : Env};

    constructor(e : Expr, e1 : Expr, x : string, y : string, e2 : Expr) {
        super();
        this.lst = e;
        this.onNil = e1;
        this.hdName = x;
        this.tlName = y;
        this.onCons = e2;
    }

    copy() {
        return new Case(this.lst.copy(), this.onNil.copy(), this.hdName, this.tlName, this.onCons.copy());
    }

    typeCheck(e : TypeEnv) {
        var lTy = this.lst.typeCheck(e);
        if(lTy && lTy instanceof ListType) {
            var nTy = this.onNil.typeCheck(e);
            var cTy = this.onCons.typeCheck(e.with(this.hdName, lTy.elemT).with(this.tlName, lTy));

            if(nTy && cTy) {
                if(nTy.toString() == cTy.toString()) {
                    return nTy;
                }
            }
        }

        this.reportError("type error");
        return null;
    }

    eval(e : Env) {
        var lstval = this.lst.eval(e);
        if(lstval instanceof NilValue) {
            return this.onNil.eval(e);
        } else {
            var l = lstval as ConsValue;
            return this.onCons.eval(e.with(this.hdName, l.head).with(this.tlName, l.tail));
        }
    }

    oneStep(e : Env, stack : CallStack) {
        if(this.lst.evalFinish === false) {
            stack.pushFrame(this.lst, e);
            return;
        }

        if(this.exec) {
            if(this.exec.expr.evalFinish) {
                this.evalFinish = true;
                this.value = this.exec.expr.value;
                stack.popFrame();
                return;
            }
        }

        var lstval = this.lst.value;

        if(lstval instanceof NilValue) {
            this.exec = {
                expr : this.onNil,
                env : e
            }
            stack.pushFrame(this.exec.expr, this.exec.env)
        } else {
            var l = lstval as ConsValue;
            this.exec = {
                expr : this.onCons,
                env : e.with(this.hdName, l.head).with(this.tlName, l.tail)
            }
            stack.pushFrame(this.exec.expr, this.exec.env)
        }
    }

    toString() {
        if(this.evalFinish) {
            return this.value.toString();
        }
        return 'case (' + this.lst.toString() + ') of nil => (' + this.onNil.toString() + 
                ') | ' + this.hdName + '::' + this.tlName + ' => (' + this.onCons.toString() + ')'
    }
}
