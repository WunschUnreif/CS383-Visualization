import { Value } from "./Value";

export class BoolValue extends Value {
    b : boolean;

    constructor(b: boolean) {
        super();
        this.b = b;
    }

    toString() {
        return '' + this.b;
    }

    equal(other : Value) {
        if(other instanceof BoolValue) {
            return this.b === (other as BoolValue).b;
        } else {
            return false;
        }
    }
}
