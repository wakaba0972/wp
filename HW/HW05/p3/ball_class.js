// 邊界
const LEFT = 0
const TOP = 0
const RIGHT = window.innerWidth - 50
const BUTTOM = window.innerHeight - 50

// 按鈕半徑
const MIN_RADIUS = 60
const MAX_RADIUS = 70

// 按鈕速度
const MIN_VELOCITY = 2
const MAX_VELOCITY = 5

// 亂數生成
function rand(min,max){
    return Math.floor(Math.random()*max)+min;
};

//碰撞檢測
function isCollision(b1, b2){
    let curDistance = (b1.x - b2.x) ** 2 + (b1.y - b2.y) ** 2;
	let nextDistance = ((b1.x + b1.vx) - (b2.x + b2.vx)) ** 2 + ((b1.y + b1.vy) - (b2.y + b2.vy)) ** 2;

    // nextDistance < curDistance可以避免球黏在一起
	return  curDistance <= (b1.r + b2.r) ** 2 && nextDistance < curDistance ;
}

// 二維彈性碰撞
function collision(b1, b2){
	let nb1vx = (b1.vx * (b1.m - b2.m) + 2 * b2.m * b2.vx) / (b1.m + b2.m);
	let nb1vy = (b1.vy * (b1.m - b2.m) + 2 * b2.m * b2.vy) / (b1.m + b2.m);

	let nb2vx = (b2.vx * (b2.m - b1.m) + 2 * b1.m * b1.vx) / (b2.m + b1.m);
	let nb2vy = (b2.vy * (b2.m - b1.m) + 2 * b1.m * b1.vy) / (b2.m + b1.m);

	b1.vx = nb1vx;
	b1.vy = nb1vy;
	b2.vx = nb2vx;
	b2.vy = nb2vy;
	
	//prevent balls stuck together
	//while(isCollision(b1, b2)){
	//	b1.move();
	//	b2.move();
	//}
}

class Button_Ball{
    constructor(idx){
        this.clicked = false

        // 球的半徑, 座標, 速度, 質量
        this.r = rand(MIN_RADIUS, MAX_RADIUS)
        this.x = rand(LEFT + this.r, RIGHT - this.r)
        this.y = rand(TOP + this.r, BUTTOM - this.r)
        this.v = rand(MIN_VELOCITY, MAX_VELOCITY) + level
        this.angle = rand(0, 2 * Math.PI)
        this.vx = Math.cos(this.angle) * this.v
        this.vy = Math.sin(this.angle) * this.v
        this.m = Math.PI * this.r ** 2

        // 新增button元素
        this.node = document.createElement("button")
        this.node.id = idx
        this.node.style = `position: absolute; border-radius: 100%; top: ${this.y - this.r}; left: ${this.x - this.r}; width: ${2 * this.r}; height: ${2 * this.r};`

        // 把button加進body裡
        document.body.appendChild(this.node)
    }

    move() {
        // 檢測邊界碰撞, 如果碰到該速度分量 * -1
        if(this.x - this.r <= LEFT && this.vx < 0 || this.x + this.r >= RIGHT && this.vx > 0) this.vx *= -1
        if(this.y - this.r <= TOP && this.vy < 0 || this.y + this.r >= BUTTOM && this.vy > 0) this.vy *= -1

        this.x += this.vx;
        this.y += this.vy;

        // 位置更新
        this.node.style.top = this.y - this.r
        this.node.style.left = this.x - this.r
    }
}

//Don't Click ME按鈕的class, 繼承自Button_Ball
class Normal_Button_Ball extends Button_Ball {
    constructor(idx) {
        super(idx)

        this.node.innerText = "Don't Click ME"
        this.node.onclick = function() {balls[idx].activate()}
    }

    // 按鈕被點擊後的事件
    activate() {
        if(this.clicked) {
            rest++;
            this.clicked = false
            this.node.innerText = "Don't Click ME"
            this.node.style.backgroundColor = ""
        }
        else{
            rest--;
            this.clicked = true
            this.node.innerText = "Clicked"
            this.node.style.backgroundColor = "yellow"
        }
    }
}

//Click ME按鈕的class, 也是繼承自Button_Ball
class Reset_Button_Ball extends Button_Ball {
    constructor(idx) {
        super(idx)

        this.node.innerText = "Click ME"
        this.node.style.backgroundColor = "gray"
        this.node.onclick = function() {
            killer_idx = idx + NUM
            reset(true)
        }
    }
}
