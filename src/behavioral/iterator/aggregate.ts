// Byimaan

import { ConcreteIterator, IteratorTS } from "./iterator";

interface AggregateTS<T>{
    createIterator(): IteratorTS<T>
};

class ConcreteAggregate<T> implements AggregateTS<T> {
    private collection: T[] = [];
    
    addItem(item: T):void{
        this.collection.push(item)
    };

    createIterator(): IteratorTS<T> {
        return new ConcreteIterator(this.collection)
    }
};

export {AggregateTS, ConcreteAggregate}