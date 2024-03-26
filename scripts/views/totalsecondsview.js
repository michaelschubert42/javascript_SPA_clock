export class TotalSecondsView {
    constructor(clock, element) {
        clock.addObserver(this);
        this.clock = clock;
        this.element = element;
    }

    update = () => {
        this.element.innerHTML = `
            <div class="row">
                <div class="col-sm-4">
                    <p>Total Seconds: </p> ${this.clock.totalSeconds()}
                </div>
            </div>`;
    };
}