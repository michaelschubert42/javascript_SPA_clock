class Observable {
    constructor() {
        this.observers = [];
    }

    notify = () => {
        for (var observer of this.observers) {
            observer.update();
        }
    };

    addObserver = (observer) => {
        this.observers.push(observer);
    };
}

export class Clock {
    constructor() {
        this.hours = 0;
        this.mins = 0;
        this.secs = 0;
        this.observable = new Observable();
    }

    totalSeconds = () => {
        return (this.hours * 60 * 60) + (this.mins * 60) + this.secs;
    };

    addObserver = (observer) => {
        this.observable.addObserver(observer);
    };

    tick = () => {
        this.secs++;
        if (this.secs == 60) {
            this.secs = 0;
            this.mins++;
        }
        if (this.mins == 60) {
            this.mins = 0;
            this.hours++;
        }
        this.observable.notify();
    };

    reset = () => {
        this.hours = 0;
        this.mins = 0;
        this.secs = 0;
        this.observable.notify();
    };
}