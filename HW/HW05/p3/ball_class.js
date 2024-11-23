// 按鈕半徑
const MIN_RADIUS = 60
const MAX_RADIUS = 70

// 按鈕速度
const MIN_VELOCITY = 2
const MAX_VELOCITY = 5

// 邊界
const LEFT = 50
const TOP = 0
const RIGHT = window.innerWidth - MAX_RADIUS
const BUTTOM = window.innerHeight - MAX_RADIUS

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
    let u_vector = {
        x: b2.x - b1.x,
        y: b2.y - b1.y
    };
    let un_vector = {
        x: u_vector.x / Math.sqrt(u_vector.x ** 2 + u_vector.y ** 2),
        y: u_vector.y / Math.sqrt(u_vector.x ** 2 + u_vector.y ** 2)
    };
    let ut_vector = {
        x: -un_vector.y,
        y: un_vector.x
    };
    let v1n = b1.vx * un_vector.x + b1.vy * un_vector.y;
    let v1t = b1.vx * ut_vector.x + b1.vy * ut_vector.y;
    let v2n = b2.vx * un_vector.x + b2.vy * un_vector.y;
    let v2t = b2.vx * ut_vector.x + b2.vy * ut_vector.y;
    let v1n_after = (v1n * (b1.m - b2.m) + 2 * b2.m * v2n) / (b1.m + b2.m);
    let v2n_after = (v2n * (b2.m - b1.m) + 2 * b1.m * v1n) / (b1.m + b2.m);
    let v1n_after_vector = {
        x: v1n_after * un_vector.x,
        y: v1n_after * un_vector.y
    };
    let v1t_after_vector = {
        x: v1t * ut_vector.x,
        y: v1t * ut_vector.y
    };
    let v2n_after_vector = {
        x: v2n_after * un_vector.x,
        y: v2n_after * un_vector.y
    };
    let v2t_after_vector = {
        x: v2t * ut_vector.x,
        y: v2t * ut_vector.y
    };
    let v1_final_vector = {
        x: v1n_after_vector.x + v1t_after_vector.x,
        y: v1n_after_vector.y + v1t_after_vector.y
    };
    let v2_final_vector = {
        x: v2n_after_vector.x + v2t_after_vector.x,
        y: v2n_after_vector.y + v2t_after_vector.y
    };
    b1.vx = v1_final_vector.x;
    b1.vy = v1_final_vector.y;
    b2.vx = v2_final_vector.x;
    b2.vy = v2_final_vector.y;

	/*let nb1vx = (b1.vx * (b1.m - b2.m) + 2 * b2.m * b2.vx) / (b1.m + b2.m);
	let nb1vy = (b1.vy * (b1.m - b2.m) + 2 * b2.m * b2.vy) / (b1.m + b2.m);

	let nb2vx = (b2.vx * (b2.m - b1.m) + 2 * b1.m * b1.vx) / (b2.m + b1.m);
	let nb2vy = (b2.vy * (b2.m - b1.m) + 2 * b1.m * b1.vy) / (b2.m + b1.m);

	b1.vx = nb1vx;
	b1.vy = nb1vy;
	b2.vx = nb2vx;
	b2.vy = nb2vy;*/
	
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
        this.r = 50
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

        // 摩擦力
        /*
        this.vx *= 0.99
        this.vy *= 0.99

        if(Math.abs(this.vx) < 0.1) this.vx = 0
        if(Math.abs(this.vy) < 0.1) this.vy = 0*/

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