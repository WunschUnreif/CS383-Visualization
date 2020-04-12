import { Expr } from "./Expr";
import { TypeEnv } from "../typing/TypeEnv";
import { IntType } from "../typing/Type";
import { Env } from "../exec/Env";
import { IntValue } from "../exec/IntValue";
import { CallStack } from "../exec/CallStack";
import { IntLiteral } from "./Literal";

export class Arith extends Expr {
    lhs : Expr;
    rhs : Expr;
    op : (a : number, b : number) => number;
    opString : string;

    constructor(l : Expr, r : Expr, op: (a : number, b : number) => number, opname : string) {
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
                return new IntType();
            }
        }

        this.reportError("type error");
        return null;
    }

    eval(e : Env) {
        var l = this.lhs.eval(e) as IntValue;
        var r = this.rhs.eval(e) as IntValue;

        return new IntValue(this.op(l.n, r.n));
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
        this.value = new IntValue(this.op(l.n, r.n));

        stack.popFrame();
    }

    toString() {
        return this.evalFinish ? this.value.toString() : (
            '(' + this.lhs.toString() + ') ' + this.opString + ' (' + this.rhs.toString() + ')'
        )
    }

    copy() {
        return new Arith(this.lhs.copy(), this.rhs.copy(), this.op, this.opString);
    }


    static OP_ADD = (a : number, b : number) => a + b;
    static OP_SUB = (a : number, b : number) => a - b;
    static OP_MUL = (a : number, b : number) => a * b;
    static OP_DIV = (a : number, b : number) => parseInt(a / b + '');
    static OP_REM = (a : number, b : number) => a % b;
}

// var expr = new Arith(
//     new Arith(new IntLiteral(2), new IntLiteral(3), Arith.OP_MUL, '*'),
//     new IntLiteral(5),
//     Arith.OP_SUB,
//     '-'
// );

// console.log(expr.toString());
// console.log(expr.typeCheck(new TypeEnv()).toString());
// console.log(expr.eval(new Env()).toString());

