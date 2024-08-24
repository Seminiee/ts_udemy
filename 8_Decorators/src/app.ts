function Logger(logString: string) {
    return function (constructor: Function) {
        console.log(logString);
        console.log(constructor);
    };
}

function WithTemplate(template: string, hookId: string) {
    // 인스턴스화 되었을 때 실행되는 테코레이터로 개선
    return <T extends { new (...args: any[]): { name: string } }>(
        originalConstructor: T
    ) => {
        return class extends originalConstructor {
            constructor(..._: any[]) {
                super();
                console.log("Rendering template");
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector("h1")!.textContent = this.name;
                }
            }
        };
    };
}

@Logger("LOGGING - PERSON")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
    name = "Semin";

    constructor() {
        console.log("Creating person object...");
    }
}

// const pers = new Person();
// console.log(pers);

function MyPropertyDecorator(target: any, propertyName: string | Symbol) {
    console.log("Property Decorator!");
    console.log(target, propertyName);
}

function MyAccessorDecorator(
    target: any,
    name: string,
    descriptor: PropertyDescriptor
) {
    console.log("Accessor decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function MyMethodDecorator(
    target: any,
    name: string | Symbol,
    descriptor: PropertyDescriptor
) {
    console.log("Method decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function MyParameterDecorator(
    target: any,
    name: string | Symbol,
    position: number
) {
    console.log("Parameter decorator!");
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {
    @MyPropertyDecorator
    title: string;
    private _price: number;

    @MyAccessorDecorator
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error("Invalid price - should be positive");
        }
    }

    constructor(title: string, price: number) {
        this.title = title;
        this._price = price;
    }
    @MyMethodDecorator
    getPriceWithTax(@MyParameterDecorator tax: number) {
        return this._price * (1 + tax);
    }
}

function Autobind(
    _: any,
    _2: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            // getter 메서드는 언제나 자신이 속한 실제 객체에 의해 실행됨 따라서, getter 내부의 this는 언제나 getter를 정의한 객체를 가리킴
            const boundFn = originalMethod.bind(this);
            return boundFn;
        },
    };
    return adjDescriptor;
}

class Printer {
    message = "This works!";
    @Autobind
    showMessage() {
        console.log(this.message);
    }
}
const p = new Printer();

const button = document.querySelector("button")!;
button.addEventListener("click", p.showMessage);

interface VallidatorConfig {
    [property: string]: {
        [validatableProp: string]: string[] // ['required', 'positive']
    }
}

const registeredValidators: VallidatorConfig = {};


function Required(target: any, propertyName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propertyName]: ['required']
    };
}

function PositiveNumber(target: any, propertyName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propertyName]: ['positive']
    };
}

function validate(obj: any) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    for (const prop in objValidatorConfig) {
        console.log(prop);
        for (const validator of objValidatorConfig[prop]) {
            switch(validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}

class Course {
    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event => {
    event.preventDefault();
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;

    const createdCourse = new Course(title, price);

    if (!validate(createdCourse)) {
        alert('Invalid input, please try again!');
    }
    console.log(createdCourse);
})