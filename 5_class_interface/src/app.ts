// type AddFn = (a: number, b:number) => number;
interface AddFn { 
    (a: number, b:number) : number;
}
let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
}

interface Named {
    readonly name: string;
    outputName?: string;
}

interface Aged {
    age?: number;
}

interface Greetable extends Named{
    greet(phrase: string): void;
}

interface Student extends Named, Aged, Greetable {
    schoolName: string;
    grade: number;
    currentClass: string;
}

class Person implements Greetable, Aged {
    readonly name: string;
    age?: number;

    constructor(n: string, age?: number) {
        this.name = n;
        if(age) this.age = age;
    }
    greet(phrase: string) {
        if(this.name) {
            console.log(phrase + ' ' + this.name);
        } else {
            console.log('Hi!');
        }
    }
}

let user1 = new Person('Semin');
user1.greet('Hello, I am ')