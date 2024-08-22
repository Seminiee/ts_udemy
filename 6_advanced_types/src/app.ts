type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

interface IAdmin {
    name: string;
    privileges: string[];
};

interface IEmployee {
    name: string;
    startDate: Date;
};

interface IElevatedEmployee extends IAdmin,IEmployee {}

const e1: ElevatedEmployee = {
    name: 'Semin',
    privileges: ['create-server'],
    startDate: new Date(),
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: Combinable, b: Combinable) {
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add('Semin', 'Lim');
result.split(' ');

const fetchedUserData = {
    id: 'u1',
    name: 'Semin',
    job: { title: 'CEO',description: 'My own company',}
}
// console.log(fetchedUserData.job && fetchedUserData.job.title); //javascript에서 런타임 에러를 피하는 접근방법
console.log( fetchedUserData?.job?.title); 

const userInput = undefined;

const storedData = userInput ?? 'DEFAULT';

console.log(storedData);

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//     console.log('Name: ' + emp.name);
//     if('privileges' in emp) {
//         console.log('Privileges: ' + emp.privileges);
//     }
//     if('startDate' in emp) {
//         console.log('startDate: ' + emp.startDate);
//     }
// }

// printEmployeeInformation(e1);

// class Car {
//     drive() {
//         console.log('Driving...');
//     }
// }

// class Truck {
//     drive() {
//         console.log('Driving a truck');
//     }
    
//     loadCargo(amount: number){
//         console.log(`Loading cargo ... ${amount}`);
//     }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//     vehicle.drive();
//     if(vehicle instanceof Truck) {
//         vehicle.loadCargo(5);
//     }
// }

// interface Bird {
//     type: 'bird';
//     flyingSpeed: number;
// }

// interface Horse {
//     type: 'horse';
//     runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//     let speed;
//     switch(animal.type) {
//         case 'bird':
//             speed = animal.flyingSpeed;
//             break;
//         case 'horse':
//             speed = animal.runningSpeed;
//             break;
//     }
//     console.log('Moving with speed: ' + speed);
// }

// moveAnimal({type: 'bird', flyingSpeed: 10});

// // const userInputElement = <HTMLInputElement>document.getElementById('user-input');
// const userInputElement = document.getElementById('user-input') as HTMLInputElement;

// userInputElement.value = 'Hi there!';

// interface ErrorContainer { // {email: 'Not a valid email', username: 'Must start with a character!'}
//     // id: string;
//     [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//     email: 'Not a valid email!'
// };