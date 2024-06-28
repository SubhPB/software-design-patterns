// Byimaan

import { Mediator } from "."

export abstract class User {
    constructor(protected mediator: Mediator, protected name: string){
        this.name = name;
        this.mediator = mediator;
    };

    abstract send(message: string):void;

    abstract receive(message: string): void;
};

export class ChatUser extends User {
    constructor(mediator: Mediator, name: string){
        super(mediator, name)
    };

    send(message: string): void {
        console.log(`${this.name} sends: ${message}`);
        this.mediator.notify(this, message);
    };

    receive(message: string): void {
        console.log(`${this.name} receives: ${message}`);
    }
}