// const person: {
//     name: string,
//     age: number;
//     hobbies: string[];
//     role: [number, string]; // tuple은 특별한 data type
// } = {
//     name: 'Maximilian',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author'], //union type
// }

enum Role {
    ADMIN='ADMIN', 
    READ_ONLY= 100,
    AUTHOR = 'AUTHOR',
};

const person =  {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
}

// person.role.push('admin'); //push는 typescript에서 허용되는 예외로. typescript는 튜플에 push할 때 잘못된 값이 들어가는 지를 잡지 못함
// person.role[1] = 10 // tuple 선언 후에는 오류
let favoriteActivites: string[];
// favoriteActivites = 'Sports' // Error
favoriteActivites = ['Sports'];
console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); Error
}

if(person.role === Role.AUTHOR) {
    console.log('is author')
}