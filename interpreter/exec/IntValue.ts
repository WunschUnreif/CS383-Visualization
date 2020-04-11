import { Value } from "./Value";

export class IntValue extends Value {
    n : number;

    constructor(n: number) {
        super();
        this.n = n;
    }

    toString() {
        return '' + this.n;
    }

    equal(other : Value) {
        if(other instanceof IntValue) {
            return this.n === (other as IntValue).n;
        } else {
            return false;
        }
    }
}