// Byimaan


/**
     * The Strategy Pattern is a behavioral design pattern that allows you to define a family of algorithms, encapsulate each one, and make them interchangeable. This pattern lets the algorithm vary independently from clients that use it.

    Key Concepts of the Strategy Pattern
    Strategy Interface: This is an interface that defines a set of methods that each algorithm (strategy) must implement.
    Concrete Strategies: These are the classes that implement the strategy interface, providing specific implementations of the algorithm.
    Context: This is a class that uses a strategy. It maintains a reference to the current strategy object and delegates the algorithm's execution to this object.
*/

import { BubbleSortStrategy, QuickSortStrategy, InsertionSortStrategy } from "./strategies";
import { SortContext } from "./strategy-context";

const data = [5, 3, 8, 4, 2];

const bubbleSort = new BubbleSortStrategy();
const quickSort = new QuickSortStrategy();
const insertionSort = new InsertionSortStrategy();

const sortContext = new SortContext(bubbleSort);
console.log(sortContext.executeSort([...data])); // Sorting using Bubble Sort

sortContext.setStrategy(quickSort);
console.log(sortContext.executeSort([...data])); // Sorting using Quick Sort

sortContext.setStrategy(insertionSort);
console.log(sortContext.executeSort([...data])); // Sorting using Insertion Sort
