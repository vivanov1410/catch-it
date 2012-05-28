catchit.game = (function() {
    // hide the active screen and show a screen with specified id
    function showScreen(screenID) {
        var activeScreen = $("#game").find(".active"),
            screen = $("#" + screenID);
        console.log("active screen is ", activeScreen, "size is ", activeScreen.size());        
          
        if (activeScreen.size() != 0) {
            activeScreen.removeClass("active");
            console.log("removed screen is ", activeScreen);
        }
        
        console.log(screenID);
        // run the screen module
        catchit.screens[screenID].run();
        
        // display a screen html
        screen.addClass("active");
    }
    
    // create background pattern
    function createBackground() {
        if (!Modernizr.canvas) {
            console.log("Canvas check - ERROR");
            return;
        }
        
        console.log("Canvas check - OK");
        
        var canvas = document.getElementById("bg"),
            ctx = canvas.getContext("2d"),
            //background = $("#game").find(".background"),
            //rect = background.getBoundingClientRect(),
            gradient,
            i;
            
            //console.log(background[0]);
            
        //canvas.width = rect.width;
        //canvas.height = rect.height;
        //ctx.scale(rect.width, rect.height);
        ctx.scale(canvas.width, canvas.height);
        gradient = ctx.createRadialGradient(
            0.25, 0.15, 0.5,
            0.25, 0.15, 1
        );
        gradient.addColorStop(0, "rgb(55,65,50)");
        gradient.addColorStop(1, "rgb(0,0,0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 1, 1);
        ctx.strokeStyle = "rgba(255,255,255,0.02)";
        ctx.strokeStyle = "rgba(0,0,0,0.2)";
        ctx.lineWidth = 0.008;
        ctx.beginPath();
        for (i=0;i<2;i+=0.020) {
            ctx.moveTo(i, 0);
            ctx.lineTo(i - 1, 1);
        }
        ctx.stroke();
        //background.appendChild(canvas);
    }
    
    function setup() {
        createBackground();
    }
    
    // expose public methods
    return {
        showScreen: showScreen,
        setup: setup
    };
})();