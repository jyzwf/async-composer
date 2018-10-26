## async-composer

a function for compose asynchronous functions or synchronous functions

![](https://img.shields.io/badge/npm-v1.0.1-blue.svg)

## example

```js
import asyncCompose from async-composer;

const f1 = a => `f1: ${a}`;

const f2 = b => `f2: ${b}`;

const f3 = c =>
  new Promise((r, j) => {
    setTimeout(() => r(c), 2000);
  });

console.log(asyncCompose([f1, f2])("f0"));  // f2: f1: f0

asyncCompose([f1, f2, f3])("f0").then(r => console.log("f3: " + r));    // after 2s：f3: f2: f1: f0
```
