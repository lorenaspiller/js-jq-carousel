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
  var bullet = $(".nav > i");

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


  // 3. evento con arrow da tastiera
  $(document).keydown(
    function(e) {
      // 3b con arrow right e arrow up incremento e vado all'immagine dopo
      if (e.keyCode == 39 || e.keyCode == 38) {
        // alert('Enter key pressed!');
        nextImage();
      // 3c con arrow left e arrow down decremento e vado all'immagine prima
      } else if (e.keyCode == 37 || e.keyCode == 40){
        // alert('Enter key pressed!');
        previousImage();
      }
    }
  );


  // 4. evento con tastiera bullet
  bullet.click(
    function bulletAction() {
      var activeImage = $(".images img.active");
      var image = $(".images img");
      var activeBullet = $(".nav .fas.fa-circle.active");
      // 4a. setto una variabile con un indice dato dal bullet cliccato
      var eq = bullet.index($(this));
      // 4b. rimuovo le classi .active da immagini e bullet
      activeBullet.removeClass("active");
      activeImage.removeClass("active");
      // 4c. aggiungo la classe .active a ciò che clicco con bullet e img correlati
      $(this).addClass("active");
      image.eq(eq).addClass("active");
      console.log(image.eq(eq).addClass("active"));
    }
  );
});
