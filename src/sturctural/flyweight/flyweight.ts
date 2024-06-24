// Byimaan

/**
 * Flyweight pattern used to minimize memory usage by sharing as much data as possible with similar objects. It is especially useful when dealing with a large number of objects that share some common data.
 * 
 * Implementaion:-
 * 1) Flyweight Interface: Defines the methods for Flyweight objects.
2) Concrete Flyweight: Implements the Flyweight interface and stores intrinsic state.
3) Flyweight Factory: Creates and manages Flyweight objects
 */


// Flyweight interface
export interface PointOfInterest {
    render(x: number,y: number): void;
};

// Concerte Flyweight 
export class IconFlyweight implements PointOfInterest {
    private iconType: string;

    constructor(iconType: string){
        this.iconType = iconType
    };

    render(x: number, y: number): void {
        // code logic ...
        console.log(`Rendering ${this.iconType} icon at (${x}, ${y})`)
    }
};

