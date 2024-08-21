// 이번 Section에서 만들려고 하는 것
// 회사 내 다양한 부서를 관리할 수 있는 웹 툴의 사용자 인터페이스를 웹 애플리케이션으로 구축한다고 가정

abstract class Department {
    //field
    // name: string;
    static fiscalYear = 2020; //회계연도
    protected employees: string[] = []; // 접근 제한자 private, public(default)
    //methods
    constructor(protected readonly id: string, public name: string, ) {
        // this.id = id;
        // this.name = name;
    }

    abstract describe(this: Department): void;
        // console.log(`Department (${this.id}: ${this.name})`);
    addEmployee(employee: string) {
        this.employees.push(employee);
    }
    printEmployeeInformation(this: Department) {
        console.log(this.employees.length);
        console.log(this.employees);
    }
    static createEmployee(name: string) {
        return {name: name};
    }
}

class ITDepartment extends Department { //생성자를 별도로 정의하지 않으면 super클래스의 생성자 그대로 사용
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, 'IT'); //생성자 안에서는 this 키워드를 사용해 작업하기 전에 반드시 super를 먼저 호출해야 한다.
        this.admins = admins;
    }
    describe(): void {
        console.log(`IT Department - ID: ${this.id}`)
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    get mostRecentReport() {
        if(this.lastReport) return this.lastReport;
        throw new Error('No report found');
    }

    set mostRecentReport(value: string) {
        if(!value) {
            throw new Error('Please pass in a valid value!');
        }
        this.addReport(value);
    }

    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0]
    }
    static getInstance(){
        if(AccountingDepartment.instance) {
            return AccountingDepartment.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }

    addEmployee(name: string) {
        if( name === 'Semin') {
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }
    describe(): void {
        console.log(`Accounting Department - ID: ${this.id}`)
    }
}
const employee1 = Department.createEmployee('Cherry');
console.log(employee1);
const it = new ITDepartment('d1', ['Semin']);
// const accounting = new AccountingDepartment('d2',[]);
const accounting = AccountingDepartment.getInstance();

it.addEmployee('Momo');
it.addEmployee('Darae');
it.describe();
it.printEmployeeInformation();

console.log(it);
// console.log(accounting.mostRecentReport);
accounting.addReport('Something went wrong...');
accounting.mostRecentReport = 'Year End Report';
// accounting.printReports();
accounting.addEmployee('Semin');
accounting.addEmployee('Momo');
accounting.addEmployee('Darae');

// accounting.printEmployeeInformation();
accounting.describe();
console.log(accounting.mostRecentReport);






// const accountingCopy = {name: 'DUMMY', describe: accounting.describe};
// accountingCopy.describe(); // Department: undefined