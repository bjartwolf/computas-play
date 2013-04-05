var play = function(){
    console.log('Velkommen til konsollet.');
    console.log('Konsollet er din venn.');
    console.log('Skriv play.spin() og se hva som skjer!')
    console.log('Skriv play.kitten() og se hva som skjer!')
    console.log('Skriv play.help() for hjelp og play.about() for bakgrunnsinfo');
    console.log('Du kan og skrive play.kitten.help(), og det samme for spin etc...')
};
play.spin = function () {
    var rotated = false;
    return function() {
        var rot = rotated ? "0deg" : "180deg"; 
        rotated = ! rotated;
        $("body")
            .css("-ms-transform", "rotate(" + rot + ")")
            .css("-o-transform", "rotate3d(1,1,0," + rot + ")")
            .css("-webkit-transform", "rotate3d(1,1,0," + rot + ")")
            .css("-webkit-transition", "1s")
            .css("-moz-transform", "rotate3d(1,1,0," + rot + ")")
            .css("-moz-transition", "1s");
    }
}();
play.spin.help = function () {
	console.log('Vi burde forklare hvordan denne virker...');
}
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
        $("#PageArea #MainMenuArea").css("background-image","url('')"); 
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
play.blinkBackground.help = function () {
    console.log('Vi burde forklare hvordan denne virker...');
}
play.kitten = function() {
    var img = '<img src="http://placekitten.com/g/1150/350" alt="KITTEN!!!"/>';
    $("#Slider-wrapper").html(img);
};
play.kitten.help = function () {
    console.log('Vi burde forklare hvordan denne virker...');
}
