import { Expr } from "../expr/Expr";
import { Env } from "./Env";

export class CallStack {
    frames : CallFrame[] = []

    poped : CallFrame;

    pushFrame(expr: Expr, env: Env) {
        this.frames.push(new CallFrame(expr, env));
    }

    popFrame() {
        if(this.frames.length !== 0) {
            this.poped = this.top();
            this.frames.pop();
        }
    }

    top() : CallFrame | null {
        if(this.frames.length !== 0) {
            return this.frames[this.frames.length - 1];
        } else {
            return null;
        }
    }

    toWebPageStack() : object[] {
        var res = this.frames.reverse().map((fm) => fm.toWebPageFrame());
        this.frames.reverse();
        if(this.poped) {
            res.unshift(this.poped.toWebPageFrame());
            this.poped = null
        }
        return res;
    }
}

export class CallFrame {
    expr : Expr;
    env : Env;

    constructor(expr: Expr, env : Env) {
        this.expr = expr;
        this.env = env;
    }

    toWebPageFrame() : object {
        return {
            expr : this.expr.toString(),
            env : this.env.toWebPageEnv()
        }
    }
}
