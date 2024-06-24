// Byimaan

import { IconFlyweight } from "./flyweight";

// Flyweight Factory
export class IconFlyweightFactory {
    private flyweights: {[key: string]: IconFlyweight} = {};

    getFlyweight(iconType: string){
    if (!this.flyweights[iconType]){
        this.flyweights[iconType] = new IconFlyweight(iconType)
    };
    return this.flyweights[iconType]
    }
};


// Context Code
export class PointOfInterestContext {
    constructor(public x:number, public y: number, public iconType: string){}
}