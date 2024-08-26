// Decorators
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

// Project Class
class Project {
    title: string;
    description: string;
    people: number;

    constructor(title: string, description: string, people: number) {
        this.title = title;
        this.description = description;
        this.people = people;
    }
}

// Submit Button Handler
const subminEventHandler = (event: Event) => {
    event.preventDefault();

    const titleEl = document.getElementById('title') as HTMLInputElement;
    const descriptionEl = document.getElementById('description') as HTMLInputElement;
    const peopleEl = document.getElementById('people') as HTMLInputElement;

    const title = titleEl.value;
    const description = descriptionEl.value;
    const people = +peopleEl.value;

    const project = new Project(title, description, people);
    console.log(project);
}

// main program
const inputTemplate = document.getElementById('project-input') as HTMLTemplateElement;
const singleTemplate = document.getElementById('single-project')as HTMLTemplateElement;
const pListTemplate = document.getElementById('project-list')as HTMLTemplateElement;
const inputTemplateInstance = document.importNode(inputTemplate.content, true);
const singleTemplateInstance = document.importNode(singleTemplate.content, true);
const pListTemplateInstance = document.importNode(pListTemplate.content, true);
document.body.appendChild(inputTemplateInstance);
document.body.appendChild(singleTemplateInstance);
document.body.appendChild(pListTemplateInstance);
const submitForm = document.querySelector('form')!;
submitForm.addEventListener('click', subminEventHandler);