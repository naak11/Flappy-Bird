class Bird extends p5.Vector {
    constructor(r) {
        super(r * 2, height / 4);
        this.r = r;
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0.1);
    }
    show() {
        fill(255, 255, 0);
        ellipse(this.x, this.y, this.r);
    }
    update() {
        this.vel.add(this.acc);
        this.add(this.vel);
        if (this.checkEdges()) {
            this.y = height - this.r * 0.5;
        }
    }
    jump() {
        if (this.controlJump()) {
            let jval = createVector(0, -4);
            this.vel = jval;
        }
    }
    controlJump() {
        // return this.vel.y > 0.0
        return true
    }
    checkEdges(t = height, s = 0) {
        return this.y + this.r * 0.5 >= t || this.y - this.r * 0.5 <= s
    }
}

class Pipe extends p5.Vector {
    constructor(x, y, h){
        super(x, y)
        this.rx = x;
        this.w = 40;
        this.h = h;
        this.speed = 1.5;
        this.state = true;
    }
    update(){
        this.x -= this.speed;
    }
    show(){
        fill(0, 255, 0)
        rect(this.x, this.y, this.w, this.h)
    }
}