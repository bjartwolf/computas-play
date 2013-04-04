var play = function(){
    console.log('Velkommen til konsollet. Skriv play.spin() og se hva som skjer! Skriv play.help() for hjelp og play.about() for bakgrunnsinfo');
};
play.spin = function () {
    var rotated = false;
    return function() {
        var rot = rotated ? "0deg" : "180deg"; 
        rotated = ! rotated;
        $("body")
            .css("-ms-transform", rot)
            .css("-o-transform", "rotate3d(1,1,0," + rot + ")")
            .css("-webkit-transform", "rotate3d(1,1,0," + rot + ")")
            .css("-webkit-transition", "1s")
            .css("-moz-transform", "rotate3d(1,1,0," + rot + ")")
            .css("-moz-transition", "1s");
    }
}();
play.help = function () { console.log("Skriv play.spin() og trykk enter. Eller play.kitten(). Eller play.blinkBackground()."); };
play.about = function () { console.log("Sjekk ut http://blog.bjartwolf.com/?p=552"); };
play.blinkBackground = function () {
    var newColor = function() {
        var f = function() {
            return parseInt(Math.random()*256, 10);
        } 
        return function() {
            return "rgb(" + f() +"," + f() + "," + f() + ")";
        }
    }();
    return function() {
        $("div").animate(
        { 
            backgroundColor: newColor() 
        },
        { 
            duration: 2000,
            complete: function () { play.blinkBackground(); }
        });
    }
}();
play.kitten = function() {
    var img = '<img src="http://placekitten.com/g/1150/350" alt="KITTEN!!!"/>';
    $("#Slider-wrapper").html(img);
};
