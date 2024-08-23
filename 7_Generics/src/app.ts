// const names: Array<string> = []
// // names[0].split(' ');

// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('This is done!');
//     }, 2000);
// });

// promise.then(data => {
//     data.split(' ');
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Semin", hobbies: ["Sports"] }, { age: 25 });
console.log(mergedObj);

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = "Got no Value.";
    if (element.length === 1) {
        descriptionText = "Got 1 element";
    } else if (element.length > 1) {
        descriptionText = "Got " + element.length + " elements";
    }
    return [element, descriptionText];
}

console.log(countAndDescribe("Hi There!"));

function extractAndConvert<T extends object, U extends keyof T>(
    obj: T,
    key: U
) {
    return `Value: ${obj[key]}`;
}

console.log(extractAndConvert({ name: "Semin" }, "name"));

class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) return;
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Semin");
textStorage.addItem("Lim");
textStorage.removeItem("Semin");
console.log(textStorage.getItems());

// const objStorage = new DataStorage<object>();
// const seminObj = {name: 'Semin'};
// objStorage.addItem(seminObj);
// objStorage.addItem({name: 'Momo'});
// objStorage.removeItem(seminObj);
// console.log(objStorage.getItems());

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(
    title: string,
    description: string,
    date: Date
): CourseGoal {
    let courseGoal: CourseGoal = {
        title : title,
        description : description,
        completeUntil : date,
    };
    let courseGoalPartial: Partial<CourseGoal> = {};
    courseGoalPartial.title = title;
    courseGoalPartial.description = description;
    courseGoalPartial.completeUntil = date;
    return courseGoalPartial as CourseGoal;
}

let names: Readonly<string[]> = ['Momo', 'Darae'];
// names.push('Cherry');
// names.pop();