import { Value } from "./Value";
import { IntValue } from "./IntValue";

export class TupleValue extends Value {
    vals : Value[];

    constructor(...vals : Value[]) {
        super();
        this.vals = vals;
    }

    toString() {
        return this.vals.reduce<string>((p, v) => p + ' (' + v.toString() + ') ', '{') + '}'
    }

    equal(other : Value) {
        if(other instanceof TupleValue) {
            let otherTup = other as TupleValue;

            if(otherTup.vals.length !== this.vals.length) {
                return false;
            } else {
                for(var idx in this.vals) {
                    if(this.vals[idx].equal(otherTup.vals[idx]) === false) {
                        return false;
                    }
                    return true;
                }
            }

        } else {
            return false;
        }
    }
}
