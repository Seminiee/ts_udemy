// Drag & Drop Interfaces

export interface Draggable {
    dragStartHandler(event: DragEvent): void;
    dragEndHandler(event: DragEvent): void;
}

export interface DragTarget {
    dragOverHandler(event: DragEvent): void; // 드래그하는 대상이 유효한 드래그 타깃이라는 것을 브라우저와 javascript에 알려줌(드롭을 할 수 있게 해줌)
    dropHandler(event: DragEvent): void; //실제로 드롭이 일어나면 반응하는 역할 (드롭이 일어남)
    dragLeaveHandler(event: DragEvent): void; // 사용자에게 시각적인 피드백을 줌
}

