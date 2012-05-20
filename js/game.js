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
        
        // run the screen module
        catchit.screens[screenID].run();
        
        // display a screen html
        screen.addClass("active");
    }
    
    // expose public methods
    return {
        showScreen: showScreen
    };
})();