export class HoursMinsSecsView {
    constructor(clock, element) {
        clock.addObserver(this);
        this.clock = clock;
        this.element = element;
    }

    update = () => {
        this.element.innerHTML = `
        <div class="row"> 
            <div class="col-sm-4"> 
                <p>Hours: </p>   ${this.clock.hours}  
            </div> 
           <div class="col-sm-4"> 
               <p>Minutes: </p>   ${this.clock.mins}  
           </div> 
           <div class="col-sm-4"> 
               <p>Seconds: </p>   ${this.clock.secs}  
           </div> 
        </div>`;
    };
}