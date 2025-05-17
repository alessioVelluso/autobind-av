import { autobind } from "av-autobind";

class MyClass {
    private label = "Bound";

    constructor() {
        autobind(this); // 👈 This will automatically bind methods
    }

    myMethod() {
        console.log("Hello from", this.label);
    }
}

class MySuperClass extends MyClass {
    override myMethod(): void {
        console.log("Correclt overriding method, printing this string before the original one.")
        super.myMethod();
    }
}

const instance = new MySuperClass();
setTimeout(instance.myMethod, 1000); // ✅ prints "Hello from Bound"
