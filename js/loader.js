var catchit = {
    screens: {},
    settings: {
        difficulty: "normal",
        baseScore: 10
    }
};

// wait until main document is loaded
window.addEventListener("load", function() {
    Modernizr.addTest("standalone", function() {
        return (window.navigator.standalone != false);
    });
    
    // loading stage 1
    Modernizr.load([
    {
        // these files are always loaded
        load: [
            "utils/jquery.js",
            "js/game.js",
            "js/logic.js",
            "js/screen.splash.js",
            "js/screen.main-menu.js",
            "js/game-screen.js"
        ],
        // call when all files have finished loading and executing
        complete: function() {
            catchit.game.setup();
            console.log("All files loaded!");
            
            // show a first screen
            catchit.game.showScreen("splash-screen");
        }
    }
    ]);
    
    // loading stage 2
    if (Modernizr.standalone) {
        Modernizr.load([{
            load: [
                "js/screen.main-menu.js",
                "js/logic.js"
            ]
        }]);
    }
}, false);