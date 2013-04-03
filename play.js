var play = function(){
  console.log('Velkommen til konsollet. Skriv play.spin() og se hva som skjer! Skriv play.help() for hjelp og play.about() for bakgrunnsinfo ');
};
play.spin = function () { $("body").css("-webkit-transform", "rotate3d(1,1,0,180deg)")};
play.help = function () { console.log("Skriv play.spin() og trykk enter")};
play.about = function () { console.log("Sjekk ut http://blog.bjartwolf.com/?p=552") };