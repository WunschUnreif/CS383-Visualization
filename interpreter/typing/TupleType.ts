import {Type} from './Type'

export class TupleType extends Type {
    compTs : Type[];

    constructor(e : Type[]) {
        super();
        this.compTs = e;
    }

    toString() {
        var result = ''
        var first = true;
        for(var idx in this.compTs) {
            if(!first) {
                result += ' * '
            }
            result += '(' + this.compTs[idx] + ')'
            first = false;
        }

        return result;
    }

    canTestEquality() {
        return this.compTs.reduce<boolean>((p, cT) => p && cT.canTestEquality(), true);
    }
}
