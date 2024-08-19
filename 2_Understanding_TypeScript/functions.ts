// 변수의 타입은 typescript가 추론할 수 있게 두는 것이 좋다.
// 타입을 명시적으로 설정할 특별한 이유가 있지 않다면 타입을 설정하지 않고 타입스크립트가 추론
function add(n1: number, n2: number): number {
    return n1 + n2;
}

function printResult(num: number) {
    console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) { 
    // 콜백함수의 return 타입 void: 콜백함수가 무엇을 반환하더라도 사용하지 않을거라고 명시
    const result = n1 + n2;
    cb(result);
}

printResult(add(5,12));

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = 5;
// combineValues = printResult;

console.log(combineValues(8,8))

addAndHandle(10, 20, (result) => {
    console.log(result);
    return result;
});