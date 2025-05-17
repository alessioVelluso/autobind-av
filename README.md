# av-autobind
A tiny utility to automatically bind class methods to their instance, allowing you to write clean, overridable methods without using arrow functions.

## ✨ Why
When you use arrow functions inside classes, they get bound to the instance automatically — which is great — but they also lose some of their behavior as proper class methods:
* You can't **override** them from subclasses.
* They don't live on the class prototype, which makes them harder to mock/test/extend.
* They're **recreated for every instance**, slightly increasing memory usage.
* This library allows you to write standard class methods that:
    * Can be overridden.
    * Retain their prototype behavior.
    * Still work correctly when passed as callbacks (this stays bound).

## ⚙️ Usage

```
npm install av-autobind
```

```ts
import { autobind } from "av-autobind";

class MyClass {
    private label = "Bound";

    constructor() {
        autobind(this); // 👈 This will automatically bind methods
    }

    myMethod() {
        console.log("Hello from", this.label);
    }

    myArrow = () => {
        console.log("This is already bound");
    }
}

const instance = new MyClass();
setTimeout(instance.myMethod, 1000); // ✅ prints "Hello from Bound"
```

## Parameters
* autobind(instance: object, methodsToExclude?: string[]): void;
    * `instance`: Your class instance (this).
    * `methodsToExclude`: Optional array of method names to skip (e.g. ['onDestroy']).
