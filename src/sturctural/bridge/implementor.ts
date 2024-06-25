// Byimaan

interface Device {
    isEnabled(): boolean;
    enable(): void;
    disable(): void;
    getVolume(): number;
    setVolume(volume: number): void;
};

class TV implements Device {
    private enabled: boolean = false;
    private volume: number = 50;

    isEnabled(): boolean {
        return this.enabled;
    }

    enable(): void {
        this.enabled = true;
    }

    disable(): void {
        this.enabled = false;
    }

    getVolume(): number {
        return this.volume;
    }

    setVolume(volume: number): void {
        if (volume >= 0 && volume <= 100) {
            this.volume = volume;
        }
    }
};

// Second Implementor


class Radio implements Device {
    private on: boolean = false;
    private volume: number = 30;

    isEnabled(): boolean {
        return this.on;
    }

    enable(): void {
        this.on = true;
    }

    disable(): void {
        this.on = false;
    }

    getVolume(): number {
        return this.volume;
    }

    setVolume(volume: number): void {
        if (volume >= 0 && volume <= 50) {
            this.volume = volume;
        }
    }
};

export {Device, TV, Radio}