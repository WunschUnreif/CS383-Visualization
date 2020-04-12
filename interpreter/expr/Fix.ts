import { Expr } from "./Expr";
import { TypeEnv } from "../typing/TypeEnv";
import { ArrowType } from "../typing/ArrowType";
import { Env } from "../exec/Env";
import { FunValue } from "../exec/FunValue";
import { FixValue } from "../exec/FixValue";
import { CallStack } from "../exec/CallStack";

export class Fix extends Expr {
    func : Expr;

    exec : {expr : Expr, env : Env};

    constructor(f : Expr) {
        super();
        this.func = f.copy();
    }

    copy() {
        return new Fix(this.func.copy());
    }

    typeCheck(e : TypeEnv) {
        var fTy = this.func.typeCheck(e);
        console.log("f->", fTy.toString());
        if(fTy && fTy instanceof ArrowType) {
            var arrow = fTy as ArrowType;
            if(arrow.argT.toString() === arrow.retT.toString()) {
                return arrow.argT;
            }
        }

        this.reportError("type error");
        return null;
    }

    eval(e : Env) {
        var funval = this.func.eval(e) as FunValue;
        return funval.expr.eval(funval.env.with(funval.param, new FixValue(this.func.copy(), e)));
    }

    oneStep(e : Env, stack : CallStack) {
        if(this.func.evalFinish === false) {
            stack.pushFrame(this.func, e);
            return;
        }

        if(this.exec) {
            this.evalFinish = true;
            this.value = this.exec.expr.value;
            stack.popFrame();
            return;
        }

        var funval = this.func.value as FunValue;
        this.exec = {
            expr : funval.expr.copy(),
            env : funval.env.with(funval.param, new FixValue(this.func.copy(), e))
        };
        stack.pushFrame(this.exec.expr, this.exec.env);
    }

    toString() {
        return 'fix ' + this.func.toString();
    }
}