import { Value } from "./Value";
import { Env } from "./Env";
import { Expr } from "../expr/Expr";

export class FunValue extends Value {
    env : Env;
    param : string;
    expr : Expr;

    constructor(e : Env, x : string, ex : Expr) {
        super();
        this.env = e;
        this.param = x;
        this.expr = ex;
    }

    toString() {
        return 'fun(\\' + this.param + '.' + this.expr.copy().toString() + ')';
    }

    equal(other : Value) {
        return false;
    }
}