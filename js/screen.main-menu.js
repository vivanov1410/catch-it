catchit.screens["main-menu"] = (function() {
    var game = catchit.game,
        firstRun = true;
    
    function setUp() {
        $("#main-menu ul.menu").on("click", function(e) {
            if (e.target.nodeName.toLowerCase() === "button") {
                var action = e.target.getAttributes("name");
                game.showScreen(action);
            }
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