let userInput: unknown; //better than any
let userName: string;

userInput = 5;
userInput = 'Max'; //unknown은 문자열을 받으려 하는 변수에 할당하기 전에 먼저 userInput에 담긴 값의 타입을 확인하는 과정을 인식함
if (typeof userInput === 'string') {
    userName = userInput;
}

function generateError(message: string, code: number): never { //스크립트를 중지함(never 리턴) -> 이 함수는 절대 값을 생성하지 않음
    throw {message: message, errorCode: code};
}

const result = generateError('An error occurred!', 500);
console.log(result);