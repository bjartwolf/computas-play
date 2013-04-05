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
play.help = function () { console.log("Skriv play.spin() og trykk enter. Eller play.kitten(). Eller play.blinkBackground(). Eller play.shake()."); };
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
play.shake = function () {
    $("body").addClass("animated wobble");
    var getWobbleCss = function(){/*
        <style>        
        .animated {
            -webkit-animation-duration: 1s;
               -moz-animation-duration: 1s;
                 -o-animation-duration: 1s;
                    animation-duration: 1s;
            -webkit-animation-iteration-count: infinite;
               -moz-animation-iteration-count: infinite;
                 -o-animation-iteration-count: infinite;
                    animation-iteration-count: infinite;
            -webkit-animation-fill-mode: both;
               -moz-animation-fill-mode: both;
                 -o-animation-fill-mode: both;
                    animation-fill-mode: both;
        }
        @-webkit-keyframes wobble {
          0% { -webkit-transform: translateX(0%); }
          15% { -webkit-transform: translateX(-25%) rotate(-5deg); }
          30% { -webkit-transform: translateX(20%) rotate(3deg); }
          45% { -webkit-transform: translateX(-15%) rotate(-3deg); }
          60% { -webkit-transform: translateX(10%) rotate(2deg); }
          75% { -webkit-transform: translateX(-5%) rotate(-1deg); }
          100% { -webkit-transform: translateX(0%); }
        }

        @-moz-keyframes wobble {
          0% { -moz-transform: translateX(0%); }
          15% { -moz-transform: translateX(-25%) rotate(-5deg); }
          30% { -moz-transform: translateX(20%) rotate(3deg); }
          45% { -moz-transform: translateX(-15%) rotate(-3deg); }
          60% { -moz-transform: translateX(10%) rotate(2deg); }
          75% { -moz-transform: translateX(-5%) rotate(-1deg); }
          100% { -moz-transform: translateX(0%); }
        }

        @-o-keyframes wobble {
          0% { -o-transform: translateX(0%); }
          15% { -o-transform: translateX(-25%) rotate(-5deg); }
          30% { -o-transform: translateX(20%) rotate(3deg); }
          45% { -o-transform: translateX(-15%) rotate(-3deg); }
          60% { -o-transform: translateX(10%) rotate(2deg); }
          75% { -o-transform: translateX(-5%) rotate(-1deg); }
          100% { -o-transform: translateX(0%); }
        }

        @keyframes wobble {
          0% { transform: translateX(0%); }
          15% { transform: translateX(-25%) rotate(-5deg); }
          30% { transform: translateX(20%) rotate(3deg); }
          45% { transform: translateX(-15%) rotate(-3deg); }
          60% { transform: translateX(10%) rotate(2deg); }
          75% { transform: translateX(-5%) rotate(-1deg); }
          100% { transform: translateX(0%); }
        }

        .wobble {
            -webkit-animation-name: wobble;
            -moz-animation-name: wobble;
            -o-animation-name: wobble;
            animation-name: wobble;
        }
        </style>
    */}.toString().slice(14,-3);    
    $("head").append(getWobbleCss);    
};
play.barrelroll = function () {    
    return function() {
        var rot = "360deg";         
        $("body")
            .css("-ms-transform", "rotate(" + rot + ")")
            .css("-o-transform", "rotate3d(0,0,1," + rot + ")")
            .css("-webkit-transform", "rotate3d(0,0,1," + rot + ")")
            .css("-webkit-transition", "3s")
            .css("-moz-transform", "rotate3d(0,0,1," + rot + ")")
            .css("-moz-transition", "3s");
    }
}();