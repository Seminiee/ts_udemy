export function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
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