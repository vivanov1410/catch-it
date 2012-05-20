catchit.screens["splash-screen"] = (function() {
    var game = catchit.game,
        firstRun = true;
        
    function setUp() {
        $("#splash-screen").on("click", function() {
            game.showScreen("main-menu");
        });
    }
    
    function run() {
        if (firstRun) {
            setUp();
            firstRun = false;
        }
    }
    
    return {
        run: run
    }
})();