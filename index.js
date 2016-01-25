function animateScrollTo(scrollTo, time, callback) {
    var scrollFrom = parseInt(document.body.scrollTop),
        i = 0,
        runEvery = 10; // run every 5ms
    
    scrollTo = parseInt(scrollTo);
    time /= runEvery;
    
    var interval = setInterval(function () {
        i++;
        
        document.body.scrollTop = (scrollTo - scrollFrom) / time * i + scrollFrom;
       
        if (i >= time) {
            clearInterval(interval);
            if(typeof callback == "function"){
                callback();
            }
        }
    }, runEvery);
}

(function(){
    var scrollingInt = 0;
    var stamp = new Date().getTime();
    $(window).on("scroll", function(){
        clearTimeout(scrollingInt);
        scrollingInt = setTimeout(function(){
            currStamp = new Date().getTime();
            if(currStamp-stamp>150){
                $(window).trigger("scrollStop");
            }
            stamp = new Date().getTime();
        },50);
    });    
})();
