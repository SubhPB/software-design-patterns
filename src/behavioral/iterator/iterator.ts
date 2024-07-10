// Byimaan

interface IteratorTS<T>{
    next(): T | null;
    hasNext(): boolean
};

class ConcreteIterator<T> implements IteratorTS<T>{
    private collection: T[];
    private position: number;

    constructor(collection: T[]){
        this.collection = collection;
        this.position = 0
    };

    next():T|null{
        if (this.hasNext()){
            return this.collection[this.position++];
        
        };
        return null
    };

    hasNext(): boolean {
        return this.position < this.collection.length
    }
};

export {IteratorTS, ConcreteIterator}