import {Type} from './Type'

export class ListType extends Type {
    elemT : Type;

    constructor(e : Type) {
        super();
        this.elemT = e;
    }

    toString() {
        return '[' + this.elemT.toString() + ']'
    }

    canTestEquality() {
        return this.elemT.canTestEquality();
    }
}
