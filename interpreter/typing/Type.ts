
export class Type {
    toString(): string { return '' }
    canTestEquality(): boolean { return false }
}

export class IntType extends Type {
    toString(): string {
        return 'Int';
    }

    canTestEquality():boolean {
        return true;
    }
}

export class BoolType extends Type {
    toString(): string {
        return 'Bool';
    }

    canTestEquality():boolean {
        return true;
    }
}
