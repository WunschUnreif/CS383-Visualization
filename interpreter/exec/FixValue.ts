import { Value } from "./Value";
import { FunValue } from "./FunValue";
import { Env } from "./Env";
import { Expr } from "../expr/Expr";

export class FixValue extends Value {
    env : Env;
    expr : Expr;

    constructor(e: Expr, env: Env) {
        super();
        this.env = env;
        this.expr = e;
    }

    toString() {
        return 'fix(' + this.expr.toString() + ')';
    }

    equal(x : Value) {
        return false;
    }
    
}