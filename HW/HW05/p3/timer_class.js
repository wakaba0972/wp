
// 用來計算遊戲進行時間的計時器
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
        return (this.endTime - this.startTime) / 1000
    }
}