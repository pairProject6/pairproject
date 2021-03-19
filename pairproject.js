function makeStopwatch() {
    return {
        stop2: undefined,
        time: 180,
        startwatch: startwatch,
        stopwatch: stopwatch,
        reset: reset,
        
    };
}

var startwatch = function() {
    var that = this;
    this.stop2 = setInterval(function() {
        that.time = that.time -1;
    },1000);
};

var stopwatch = function() {
    clearInterval(this.stop2);
};

var reset = function() {
    clearInterval(this.stop2);
    this.time = 0;
};

////clearTimeout() 