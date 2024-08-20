// const add = (a: number, b: number) => a + b;
const add = (...numbers: number[]) => { //rest parameters(array로 받는) => Type Declaration 필요
    return numbers.reduce((acc, curV) => acc + curV,0);
}
console.log(add(2,5));
const addNumbers = add(5, 10, 2, 3.7);
console.log(addNumbers);
// const printOutput = (output: string | number) => console.log(output);
const printOutput : (a: number | string) => void = output => console.log(output);

const button = document.querySelector('button');

if (button) {
    button.addEventListener('click', event => console.log(event)); 
    // typescript는 addEventListener의 콜백함수의 파라미터 event가 event 객체인 것을 이미 알고 있기 때문에 명시하지 않아도 ok
}

printOutput(add(5,2));

const hobbies = ['coding', 'soccer', 'shopping'];

const [hobby1, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, remainingHobbies);
// 객체 구조 분해 할당은 임의의 이름이 아닌 존재하는 key로만 분해가 가능하다.