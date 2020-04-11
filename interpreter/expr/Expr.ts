
import {Value} from '../exec/Value'
import {Type} from '../typing/Type'
import {TypeEnv} from '../typing/TypeEnv'
import { Env } from '../exec/Env';
import { CallStack } from '../exec/CallStack';

export class Expr {
    evalFinish : boolean;
    value : Value | null;

    static errormsg : string = ""

    constructor() {
        this.evalFinish = false;
        this.value = null;
    }

    typeCheck(env : TypeEnv): Type | null {
        return null;
    }

    oneStep(env : Env, stack : CallStack): void {
        
    }

    eval(env : Env) : Value | null {
        return null;
    }

    toString() : string {
        return '';
    }

    copy() : Expr {
        return new Expr();
    }

    reportError(msg : string) {
        Expr.errormsg += msg + ' \n';
    }

    clearError() {
        Expr.errormsg = '';
    }
}
