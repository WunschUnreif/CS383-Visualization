import {Value} from './Value'

export class Env {
    prevEnv : Env | null;
    name : string;
    value : Value | null;

    constructor() {
        this.prevEnv = null;
        this.name = "";
        this.value = null;
    }

    get(name: string) : Value | null {
        if (name === this.name) {
            return this.value;
        } else {
            return this.prevEnv ? this.prevEnv.get(name) : null;
        }
    }

    with(name: string, val: Value) {
        var newEnv = new Env();
        newEnv.name = name;
        newEnv.value = val;
        newEnv.prevEnv = this;
        return newEnv
    }

    toWebPageEnv() : object {
        var env = {}
        if(this.value) {
            env[this.name] = this.value.toString();
        }

        var prev = this.prevEnv ? this.prevEnv.toWebPageEnv() : {};

        for(var name in prev) {
            if(!env[name]) {
                env[name] = prev[name];
            }
        }

        return env;
    }
}
