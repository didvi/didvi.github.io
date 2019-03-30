$(document).ready(function()  {

    $("#startScreen").css("width", String(window.innerWidth));
    $("#startScreen").css("height", String(window.innerHeight));
    var canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var c = canvas.getContext('2d');

    var mouse = {
        x: undefined,
        y: undefined
    }

    function distance(x1, y1, x2, y2) {
        var xd = x1 - x2;
        var yd = y1 - y2;

        return Math.sqrt(Math.pow(xd, 2) + Math.pow(yd, 2))
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

    window.addEventListener('mousemove', function(event) {
        mouse.x = event.x;
        mouse.y = event.y;

        player.x = event.x;
        player.y = event.y;
    })

    class Enemy extends Hexagon {
        constructor(x, y, size, dx, dy) {
            super(x, y, size, "#2B303A")
            this.dx = dx;
            this.dy = dy;
        }

        move() {
            if (this.x + this.size / 2 > canvas.width || this.x - this.size / 2 < 0) {
                this.dx = -this.dx;
            }
            if (this.y + this.size / 2 > canvas.height || this.y - this.size / 2 < 0) {
                this.dy = -this.dy;
            }

            if (this.checkCollision() && startTime < 0) {
                this.color = player.color;
                isGameStarted = false;
            }

            this.x += this.dx;
            this.y += this.dy;

            this.update();
        }

        checkCollision() {
            if (distance(this.x, this.y, player.x, player.y) < this.size * 2 / 3 + player.size * 2 / 3) {
                return true;
            }
            return false;
        }
    }

    var player = new Hexagon(0, 0, 30, "#FF6F61");

    var numEnemies = 10;
    var enemies = [];

    var startTime = 3; 
    var isGameStarted = false;
    var score = 0;
    var highScore = 0;

    function keepScore() {
        score = -startTime
    }

    function keepTime() {
        if (startTime > 0) {
            c.font="30px Inconsolata";
            c.fillStyle = "black";
            c.textAlign = "center";
            c.fillText("Get Ready", innerWidth / 2, innerHeight / 2);
            c.fillText(String(startTime), innerWidth / 2, innerHeight / 2 + 40);
        } else {
            keepScore();
            c.font="30px Inconsolata";
            c.fillStyle = "black";
            c.textAlign = "center";
            c.fillText("Current Score: " + String(score), 180 , 90);
        }
    }

    function makeEnemies() {
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
    }

    function startGame() {
        isGameStarted = true;

        $("#canvas").css("cursor", "none");
        makeEnemies();
        keepTime();
        window.setInterval(() => {startTime -= 1}, 1000);
        animate();
    }

    function animate() {
        if (isGameStarted == false) {
            c.clearRect(0, 0, innerWidth, innerHeight);
            endGame();
        } else {
            c.clearRect(0, 0, innerWidth, innerHeight);
            requestAnimationFrame(animate);
        
            player.update();

            for (var i = 0; i < enemies.length; i++) {
                var e = enemies[i];
                e.move();
            }
            keepTime();
        }
    }

    function endGame() {
        $("#canvas").css("cursor", "auto");
        $("#restartScreen").css("display", "initial");
        isTimerStarted = false;

        highScore = Math.max(highScore, score);
        $("#currScore").text("Your score: " + String(score));
        $("#highScore").text("High score: " + String(highScore));
    }

    function restart() {
        isGameStarted = true;

        enemies = [];
        numEnemies = 10;
        startTime = 3;

        $("#canvas").css("cursor", "none");
        makeEnemies();
        keepTime();
        animate()
    }

    $("#firstStart").click(function() {
        $("#startScreen").css("display", "none");
        startGame();
    });

    $("#restart").click(function() {
        $("#restartScreen").css("display", "none");
        restart();
    });

});