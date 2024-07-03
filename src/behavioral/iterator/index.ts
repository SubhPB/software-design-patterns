// Byimaan

/* Iterator pattern
* The pattern allows you to traverse a collection (like a list or an array) without needing to know the internal structure of that collection. Here's a simple breakdown
*
* Usecases:-
* When to Use the Iterator Pattern:-
    i) When you need to traverse a collection without exposing its internal structure.
    ii) When you need multiple ways to traverse a collection.
    iii) When you want to provide a uniform interface for traversing different types of collections.
* 
*/


import { ConcreteAggregate } from "./aggregate";


const aggregate = new ConcreteAggregate<number>();
aggregate.addItem(1);
aggregate.addItem(2);
aggregate.addItem(3);

const iterator = aggregate.createIterator();
while (iterator.hasNext()){
    console.log(iterator.next())
}