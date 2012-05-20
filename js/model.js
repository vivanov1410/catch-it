catchit.model = (function() {
    var settings,
        difficulty,
        baseScore;
        
    function initialize(callback) {
        settings = catchit.settings;
        difficulty = settings.difficulty;
        baseScore = settings.baseScore;
        
        setIt();
        callback();
    }
    
    function setIt() {
        
    }
    // game functions
    
    return{
        initialize: initialize
        // exposed functions
    }
})();