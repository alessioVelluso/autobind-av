# av-autobind

<div style="text-align:center; width:100%;">
<img src="https://img.shields.io/badge/v-1.0.1-blue" alt="Typescript" />
<a href="https://github.com/alessioVelluso/av-autobind/stargazers">
  <img src="https://img.shields.io/github/stars/alessioVelluso/av-autobind?style=social" alt="GitHub stars" />
</a>
</div>

<div style="text-align:center; width:100%; margin-bottom: 20px;">

</div>


> *A tiny utility to automatically bind class methods to their instance, allowing you to write clean, overridable methods without using arrow functions.*

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

### Copy And Paste (good old solution)
You can [copy the code directly from here](https://github.com/alessioVelluso/av-autobind/blob/master/package/autobind.ts) and paste in your ts/js file.
> Remove any types in the js file)

### Install as package
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
