// Client code

import { IconFlyweightFactory, PointOfInterestContext } from "./factory";

class MapApplication {
    private factory: IconFlyweightFactory;
    private pointOfInterest: PointOfInterestContext[] = [];

    constructor (factory: IconFlyweightFactory) {
        this.factory = factory;
    }

    addPointOfInterest (x: number, y: number, iconType: string): void {
        const context = new PointOfInterestContext(x, y, iconType);
        this.pointOfInterest.push(context)
    }

    render() : void {
        this.pointOfInterest.forEach(
            poi => {
                const icon = this.factory.getFlyweight(poi.iconType);
                icon.render(poi.x, poi.y)
            }
        ) 
    }
};

const iconFactory = new IconFlyweightFactory();
const mapApp = new MapApplication(iconFactory);

mapApp.addPointOfInterest(10, 20, 'Restaurant');
mapApp.addPointOfInterest(15, 25, 'Restaurant');
mapApp.addPointOfInterest(30, 40, 'GasStation');
mapApp.addPointOfInterest(50, 60, 'Hospital');
mapApp.addPointOfInterest(50, 70, 'GasStation');

mapApp.render();