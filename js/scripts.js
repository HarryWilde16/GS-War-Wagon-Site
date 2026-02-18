console.log('GS War Wagon top-level site loaded.');
(function(){
    document.querySelectorAll('img').forEach(function(img){
        if(!img.hasAttribute('loading')) img.setAttribute('loading','lazy');
        if(!img.hasAttribute('decoding')) img.setAttribute('decoding','async');
    });
})();
