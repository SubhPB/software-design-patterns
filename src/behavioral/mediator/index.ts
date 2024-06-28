// Byimaan

/**
 * he Mediator pattern is a behavioral design pattern that allows you to reduce chaotic dependencies between objects. The pattern restricts direct communications between the objects and forces them to collaborate only via a mediator object.
 */
import { ChatUser, User } from "./colleague";

export interface Mediator {
    notify(sender: object, event: string): void;
}

class ChatroomMediator implements Mediator{
    private users: User[] = [];

    addUser(user: User): void {
        this.users.push(user)
    };

    notify(sender: object, event: string): void {
        for(const user of this.users){
            if (user !== sender){
                user.receive(event)
            }
        }
    }
};

const mediator = new ChatroomMediator();

const user1 = new ChatUser(mediator, 'Alice')
const user2 = new ChatUser(mediator, "Bob");
const user3 = new ChatUser(mediator, "Charlie");

user1.send('Hello everyone!');
user2.send('Hey Alice!');
user3.send("Hi all!")