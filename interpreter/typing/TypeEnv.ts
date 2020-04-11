import {Type} from './Type'

export class TypeEnv {
    prevEnv : TypeEnv | null;
    name : string;
    type : Type | null;

    constructor() {
        this.prevEnv = null;
        this.name = "";
        this.type = null;
    }

    get(name: string) : Type | null {
        if (name === this.name) {
            return this.type;
        } else {
            return this.prevEnv ? this.prevEnv.get(name) : null;
        }
    }

    with(name: string, type: Type) {
        var newEnv = new TypeEnv();
        newEnv.name = name;
        newEnv.type = type;
        newEnv.prevEnv = this;
        return newEnv
    }
}
