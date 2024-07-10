// Byimaan

import { SortStrategy } from "./strategies";

class SortContext {
    private strategy: SortStrategy;

    constructor(strategy: SortStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: SortStrategy) {
        this.strategy = strategy;
    }

    executeSort(data: number[]): number[] {
        return this.strategy.sort(data);
    }
}

export {SortContext}