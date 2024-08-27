import { ProjectInput } from './components/project-input.js';
import { ProjectList } from './components/project-list.js';

new ProjectInput();
new ProjectList("active");
new ProjectList("finished");
// const prjInput = new ProjectInput();
// const activePrjList = new ProjectList("active");
// const finishedPrjList = new ProjectList("finished");

//-----------------------------------------------------------------------------------------
// // Decorators
// function Autobind(
//     _: any,
//     _2: string,
//     descriptor: PropertyDescriptor
// ) {
//     const originalMethod = descriptor.value;
//     const adjDescriptor: PropertyDescriptor = {
//         configurable: true,
//         enumerable: false,
//         get() {
//             // getter 메서드는 언제나 자신이 속한 실제 객체에 의해 실행됨 따라서, getter 내부의 this는 언제나 getter를 정의한 객체를 가리킴
//             const boundFn = originalMethod.bind(this);
//             return boundFn;
//         },
//     };
//     return adjDescriptor;
// }

// const htmlTemplateRendering = (...templateIdList: string[]) => {
//     for(const templateID of templateIdList) {
//         const template = document.getElementById(templateID) as HTMLTemplateElement;
//         if(template) {
//             const templateInstance = document.importNode(template.content, true);
//             document.body.appendChild(templateInstance);
//         } else throw new Error('Check HTML Template ID');
//     }
// }
// // Project Class
// class Project {
//     title: string;
//     description: string;
//     people: number;

//     constructor(title: string, description: string, people: number) {
//         this.title = title;
//         this.description = description;
//         this.people = people;
//     }
//     get fullProjectInfo() {
//         return `Project Title: ${this.title}, Project People: ${this.people}, Description: ${this.description}`;
//     }
// }

// // Submit Button Handler
// const submitEventHandler = (event: Event) => {
//     event.preventDefault();

//     const titleEl = document.getElementById('title') as HTMLInputElement;
//     const descriptionEl = document.getElementById('description') as HTMLInputElement;
//     const peopleEl = document.getElementById('people') as HTMLInputElement;

//     const title = titleEl.value;
//     const description = descriptionEl.value;
//     const people = +peopleEl.value;

//     const project = new Project(title, description, people);
//     // console.log(project);
//     const singleProject = document.getElementById('single-project')!;
//     const singleProjectLi = document.createElement('li');
//     // singleProject.value =  `${project.fullProjectInfo}`;
//     console.log(singleProjectLi);
//     // liNode.appendChild(singleProjectLi);
// }

// // main program
// htmlTemplateRendering('project-input', 'single-project', 'project-list');
// const submitForm = document.querySelector('form')!;
// submitForm.addEventListener('submit', submitEventHandler);
