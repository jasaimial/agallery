
// Use constructor function to define a class in JS
function FooCtorFunction(value) {
    this.value = value;
}

FooCtorFunction.prototype.showValue = function() {
    console.log(this.value);
}

// ES 6 support this class syntax
class FooClass {
    constructor(value) {
        this.value = value;
    }

    showValue() {
        console.log(this.value);
    }
}

const foo1 = new FooCtorFunction(100)
foo1.showValue();

const foo2 = new FooClass(200);
foo2.showValue();
