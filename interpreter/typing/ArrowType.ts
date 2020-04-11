import {Type} from './Type'

export class ArrowType extends Type {
    argT : Type;
    retT : Type;

    constructor(a : Type, r : Type) {
        super()
        this.argT = a;
        this.retT = r;
    }

    toString() : string {
        return '(' + this.argT.toString() + ') -> (' + this.retT.toString() + ')';
    }

    canTestEquality() : boolean {
        return false;
    }
}
