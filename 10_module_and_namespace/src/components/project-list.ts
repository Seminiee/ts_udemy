import { DragTarget } from '../models/drag-drop.js';
import { Project, ProjectStatus } from '../models/project.js';
import Component from './base-components.js';
import { Autobind } from '../decorators/autobind.js';
import { projectState } from '../state/project-state.js';
import { ProjectItem } from './project-item.js';

export class ProjectList
    extends Component<HTMLDivElement, HTMLElement>
    implements DragTarget
{
    assignedProjects: Project[];

    constructor(private type: "active" | "finished") {
        super("project-list", "app", false, `${type}-projects`);
        this.assignedProjects = [];
        this.configure();
        this.renderContent();
    }

    private renderProjects() {
        const listEl = document.getElementById(
            `${this.type}-projects-list`
        )! as HTMLUListElement;
        listEl.innerHTML = "";
        for (const prjItem of this.assignedProjects) {
            new ProjectItem(this.element.querySelector("ul")!.id, prjItem);
            // const listItem = document.createElement("li");
            // listItem.textContent = prjItem.title;
            // listEl.appendChild(listItem);
        }
    }

    @Autobind
    dragOverHandler(event: DragEvent): void {
        if (
            event.dataTransfer &&
            event.dataTransfer.types[0] === "text/plain"
        ) {
            event.preventDefault(); // javascript 드래그 앤 드롭 이벤트의 기본값은 드롭을 허용하지 않는 것 -> preventDefault()
            const listEl = this.element.querySelector("ul")!;
            listEl.classList.add("droppable");
        }
    }

    @Autobind
    dropHandler(event: DragEvent): void {
        const prjId = event.dataTransfer!.getData("text/plain");
        projectState.moveProject(
            prjId,
            this.type === "active"
                ? ProjectStatus.Active
                : ProjectStatus.Finished
        );
    }

    @Autobind
    dragLeaveHandler(_: DragEvent): void {
        const listEl = this.element.querySelector("ul")!;
        listEl.classList.remove("droppable");
    }

    configure() {
        this.element.addEventListener("dragover", this.dragOverHandler);
        this.element.addEventListener("dragleave", this.dragLeaveHandler);
        this.element.addEventListener("drop", this.dropHandler);
        projectState.addListener((projects: Project[]) => {
            const relevantProjects = projects.filter((prj) => {
                if (this.type === "active") {
                    return prj.status === ProjectStatus.Active;
                }
                return prj.status === ProjectStatus.Finished;
            });
            this.assignedProjects = relevantProjects;
            this.renderProjects();
        });
    }

    renderContent() {
        const listId = `${this.type}-projects-list`;
        this.element.querySelector("ul")!.id = listId;
        this.element.querySelector("h2")!.textContent =
            this.type.toUpperCase() + " PROEJCTS";
    }
}