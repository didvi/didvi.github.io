var canvas = document.querySelector('canvas');
console.log(window.innerWidth)
console.log(window.innerHeight)
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var mouse = {
    x: undefined,
    y: undefined
}

class Hexagon {
    constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
    }

    update() {
        this.draw();
    };

    draw() {
        c.beginPath();
        c.moveTo(this.x + this.size * Math.cos(0), this.y + this.size * Math.sin(0));
        
        for (var i  = 0; i < 7; i++) {
            c.lineTo(this.x + this.size * Math.cos(i * 2 * Math.PI / 6), this.y + this.size * Math.sin(i * 2 * Math.PI / 6));
        }
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
    };
}

class Enemy extends Hexagon {
    constructor(x, y, size, dx, dy) {
        super(x, y, size, "4d4d4d")
        this.dx = dx;
        this.dy = dy;
    }

    move() {
        if (this.x + this.size / 2 > innerWidth || this.x - this.size / 2 < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.size / 2 > innerHeight || this.y - this.size / 2 < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        this.update();
    }
}

var player = new Hexagon(0, 0, 30, "#234234");

window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
     mouse.y = event.y;

     player.x = event.x;
    player.y = event.y;
    console.log(mouse.x, mouse.y);
})

var numEnemies = 10;
var enemies = [];

function init() {
    var e, x, y, dx, dy;
    var size = 60;
    for (numEnemies; numEnemies > 0; numEnemies--) {
        x = Math.random() * (innerWidth - size) + size / 2;
        y = Math.random() * (innerHeight - size) + size / 2;
        dx = (Math.random() - 0.5) * 10 + 4;
        dy = (Math.random() - 0.5) * 10 + 4;

        e = new Enemy(x, y, size, dx, dy);
        e.draw();
        enemies.push(e);
    }
    console.log("inited")
}

function animate() {
    console.log("animed")

    requestAnimationFrame(animate);

    c.clearRect(0, 0, innerWidth, innerHeight);

    player.update();

    for (var i = 0; i < enemies.length; i++) {
        var e = enemies[i];
        e.move();
    }
    
}

init();
animate();