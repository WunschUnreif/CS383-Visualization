import { Value } from "./Value";
import { IntValue } from "./IntValue";

export class ConsValue extends Value {
    head : Value;
    tail : ConsValue | NilValue;

    constructor(hd : Value, tl : ConsValue | NilValue) {
        super()
        this.head = hd;
        this.tail = tl;
    }

    toString() {
        return '(' + this.head.toString() + ')::' + this.tail.toString(); 
    }

    equal(other : Value) {
        if(other instanceof ConsValue) {
            let cons = other as ConsValue;
            return this.head.equal(cons.head) && this.tail.equal(cons.tail);
        } else {
            return false;
        }
    }
}

export class NilValue extends Value {
    toString() {
        return 'nil';
    }

    equal(other : Value) {
        if(other instanceof NilValue) {
            return true;
        } else {
            return false;
        }
    }
}
