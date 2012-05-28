catchit.logic = (function() {
    var settings,
        difficulty,
        baseScore;
    
    var screenHeight = 480;
    var screenWidth = 320;
    var circle = Math.PI * 2;
    
    var mouse = {
        size: 10,
        x: -100,
        y: -100
    };
    
    var prey = {
        size: 20,
        x: Math.random() * screenWidth,
        y: Math.random() * screenHeight
    }
    
    var balls = new Array();
    
    function Ball(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        
        this.move = function() {
            if(this.x + this.radius > screenWidth) {
                this.x = screenWidth - this.radius;
                this.dx = -this.dx;
            } else if(this.x - this.radius < 0) {
                this.x = this.radius;
                this.dx = -this.dx;
            }

            if(this.y + this.radius > screenHeight) {
                this.y = screenHeight - this.radius;
                this.dy = -this.dy;
            } else if(this.y - this.radius < 0) {
                this.y = this.radius;
                this.dy = -this.dy;
            }

            this.x+= this.dx;
            this.y+= this.dy;
        }
        
        this.draw = function (ctx) {
            ctx.fillStyle = "rgb(0, 255, 0)";
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, circle, true);
            ctx.closePath();
            ctx.fill();
        }
    }
    
    function getRandomX() {
        return Math.random() * screenWidth;
    }
    
    function getRandomY() {
        return Math.random() * screenHeight;
    }
    
    function initialize(callback) {
        settings = catchit.settings;
        difficulty = settings.difficulty;
        baseScore = settings.baseScore;
        callback();
    }
    
    return{
        initialize: initialize,
        mouse: mouse,
        prey: prey,
        balls: balls,
        Ball: Ball,
        getRandomX: getRandomX,
        getRandomY: getRandomY
        // exposed functions
    }
})();