// Byimaan

import { Device } from "./implementor"

abstract class Remote {
    protected device: Device;

    constructor(device: Device){
        this.device = device
    };

    abstract powerOn() : void;
    abstract powerOff(): void;
    abstract setVolume(volume: number): void
};


// Refined Abstraction 1
class BasicRemote extends Remote {
    constructor(device: Device) {
        super(device);
    }

    powerOn(): void {
        this.device.enable();
        console.log('Remote: power on');
    }

    powerOff(): void {
        this.device.disable();
        console.log('Remote: power off');
    }

    setVolume(volume: number): void {
        this.device.setVolume(volume);
        console.log(`Remote: set volume to ${volume}`);
    }
};

// Refined Abstraction 2
class AdvancedRemote extends Remote {
    constructor(device: Device) {
        super(device);
    }

    powerOn(): void {
        this.device.enable();
        console.log('Remote: power on');
    }

    powerOff(): void {
        this.device.disable();
        console.log('Remote: power off');
    }

    setVolume(volume: number): void {
        this.device.setVolume(volume);
        console.log(`Remote: set volume to ${volume}`);
    }
}


export {BasicRemote, AdvancedRemote, Remote}
