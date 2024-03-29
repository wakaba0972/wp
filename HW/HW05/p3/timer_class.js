class Timer{
    constructor(){
        this.startTime;
        this.endTime;
    }

    start(){
        this.startTime = new Date().getTime()
    }

    end(){
        this.endTime = new Date().getTime()
    }

    output(){
        return this.endTime = (this.endTime - this.startTime) / 1000
    }
}