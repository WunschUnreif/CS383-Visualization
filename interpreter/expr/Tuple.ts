import { Expr } from "./Expr";
import { TypeEnv } from "../typing/TypeEnv";
import { Type } from "../typing/Type";
import { TupleType } from "../typing/TupleType";
import { TupleValue } from "../exec/TupleValue"
import { Value } from "../exec/Value";
import { Env } from "../exec/Env";
import { CallStack, CallFrame } from "../exec/CallStack";
import { IntLiteral, BoolLiteral } from "./Literal";

export class Tuple extends Expr {
    components : Expr[];

    constructor(comps : Expr[]) {
        super();
        this.components = comps;
    }

    typeCheck(e : TypeEnv) {
        var tys: Type[] = [];

        for(var idx in this.components) {
            let ty = this.components[idx].typeCheck(e);
            if(ty === null) {
                this.reportError("type error");
                return null;
            }
            tys.push(ty);
        }

        return new TupleType(tys);
    }

    eval(e : Env) {
        var vals: Value[] = [];

        for(var idx in this.components) {
            var val = this.components[idx].eval(e);

            if(val === null) {
                this.reportError("eval to null");
                return null;
            }

            vals.push(val);
        }

        return new TupleValue(...vals);
    }

    oneStep(e : Env, stack : CallStack) {
        for(var idx in this.components) {
            if(this.components[idx].evalFinish === false) {
                stack.pushFrame(this.components[idx], e);
                return;
            }
        }

        this.evalFinish = true;
        var vals : Value[] = [];

        for(var idx in this.components) {
            vals.push(this.components[idx].value);
        }

        this.value = new TupleValue(...vals);
        stack.popFrame();
    }

    toString() {
        if(this.evalFinish) {
            return this.value.toString();
        }
        return this.components.reduce<string>((p, c) => p + '(' + c.toString() + ') ', '{') + '}';
    }

    copy() {
        return new Tuple(this.components.map(v => v.copy()));
    }
}

// var tupexpr = new Tuple([
//     new IntLiteral(3), 
//     new IntLiteral(4),
//     new BoolLiteral(false)
// ]);

// console.log(tupexpr.toString());
// console.log(tupexpr.typeCheck(new TypeEnv()).toString());
// console.log(tupexpr.eval(new Env()).toString());

