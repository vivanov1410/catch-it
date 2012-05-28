catchit.screens["game-screen"] = (function () {
    var game = catchit.game,
        logic = catchit.logic,
        mouse = logic.mouse,
        prey = logic.prey,
        balls = logic.balls,
        firstRun = true,
        score = 0,
        maxScore = 0;
        
    var canvas = document.getElementById("game-canvas");
    var ctx = canvas.getContext("2d");
    
    function setUp() {
        canvas.width = 320;
        canvas.height = 480;
        
        $("#game-canvas").mousemove(function(e) {
            var canvasPosition = $(this).offset();
            mouse.x = (e.clientX - canvasPosition.left);
            mouse.y = (e.clientY - canvasPosition.top);
            
            if (isCatchIt()) {
                prey.x = logic.getRandomX();
                prey.y = logic.getRandomY();
                
                balls.push(new logic.Ball(logic.getRandomX(),
                                    logic.getRandomY(),
                                    Math.random() * 10 - 5,
                                    Math.random() * 10 - 5,
                                    8));
                
                score += 1;
                updateStat();
            }
        });
    }
    
    function run() {
        if (firstRun) {
            setUp();
            firstRun = false;
        }
        
        setInterval(gameLoop, 30);
    }
    
    function gameLoop() {
        clear(ctx);
        
        for(var i = 0; i < balls.length; i++) {
            balls[i].move();
            
            var dx = mouse.x - balls[i].x;
            var dy = mouse.y - balls[i].y;
            var radii = mouse.size + balls[i].radius;
            if((dx * dx) + (dy * dy) < radii * radii) {
                balls = new Array();
                
                // update score
                if(score > maxScore) {
                    maxScore = score;
                }
                score = 0;
                updateStat();   
            }
        }
        
        drawMouse();
        drawPrey();
        drawBalls();
    }
    
    function drawMouse() {
        ctx.fillStyle = "#fff";
        // draw the path
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.size, 0, Math.PI*2, true);
        ctx.closePath();
        // fill circle path
        ctx.fill();
    }
    
    function drawPrey() {
        ctx.fillStyle = "#c30";
        ctx.fillRect(prey.x, prey.y, prey.size, prey.size);
    }
    
    function drawBalls() {
        for(var i = 0; i < balls.length; i++) {
            balls[i].draw(ctx);
        }
    }
    
    function updateStat() {
        document.getElementById("score").innerHTML = score;
        document.getElementById("max-score").innerHTML = maxScore;
    }
    
    function clear(ctx) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
    
    function isCatchIt() {
        if (prey.x <= mouse.x + mouse.size && mouse.x <= prey.x + prey.size &&
            prey.y <= mouse.y + mouse.size && mouse.y <= prey.y + prey.size)
        {
            return true;
        }
        return false;
    }
    
    return {
        run: run
    }
})();