// Byimaan

/**
 * The Prototype Pattern is a creational design pattern used to instantiate new objects by copying an existing object, known as the prototype. 
 * 
 * Key Concepts of the Prototype Pattern
    Prototype Interface,
    Concrete Prototype,
    Client
 * UseCase -> Creation cost > Cloning cost
 */


interface ProtoType {
    clone(): ProtoType;
};

// we are just returning new instance on the basis of parameters
class ConcretePrototype1 implements ProtoType {
    constructor(public value: number) {};

    clone(): ProtoType {
        return new ConcretePrototype1(this.value)
    };

    showDetails(): void {
        console.log(`ConcretePrototype1 with value ${this.value}`);
    }
};

class ConcretePrototype2 implements ProtoType {
    constructor(public value: string) {}

    clone(): ProtoType {
        return new ConcretePrototype2(this.value);
    }

    showDetails(): void {
        console.log(`ConcretePrototype2 with value ${this.value}`);
    }
}