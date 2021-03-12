/*
SLIDER
Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
In oltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera
Utiliziamo una classe first e last per capire quali sono la prima e ultima immagine dello slider
Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider
*/

/*
  FUNZIONI
*/

/*
 * nextImage - evento al click ella freccia next che scorre all'immagine successiva
*/

function nextImage(){

  var activeImage = $(".images img.active");
  var firstImage = $(".images img.first");
  var activeBullet = $(".nav .fas.fa-circle.active");
  var firstBullet = $(".nav .fas.fa-circle.first");
  activeImage.removeClass("active");
  activeBullet.removeClass("active");

  // 1a. se l'immagine ha la classe .last == false allora limmagine dopo sarà active
  if (activeImage.hasClass("last") == false) {
    activeImage.next().addClass("active");
    activeBullet.next().addClass("active");

  } else {
    // 1b. se l'immagine ha la classe .last allora la classe .first sarà active
    firstImage.addClass("active");
    firstBullet.addClass("active");
  }

}


/*
 * previousImage - evento al click ella freccia previous che scorre all'immagine precedente
*/
function previousImage(){
  var activeImage = $(".images img.active");
  var lastImage = $(".images img.last");
  var activeBullet = $(".nav .fas.fa-circle.active");
  var lastBullet = $(".nav .fas.fa-circle.last");


  activeImage.removeClass("active");
  activeBullet.removeClass("active");
  // 2a. se l'immagine ha la classe .last == false allora limmagine prima sarà active
  if (activeImage.hasClass("first") == false) {
    activeImage.prev().addClass("active");
    activeBullet.prev().addClass("active");
  } else {
    // 2b. se l'immagine ha la classe .first allora la classe .last sarà active
    lastImage.addClass("active");
    lastBullet.addClass("active");
  }
}



$(function(){

  var previous = $(".prev");
  var next = $(".next");
  var bullet = $("nav > i");

  // 1. evento click su classe .next
  next.click(
    function() {
      nextImage();
    }
  );


  // 2. evento click su classe .prev
  previous.click(
    function() {
      previousImage();
    }
  );


});
