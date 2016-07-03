// $(window).load(function(){

//   var $gal   = $("article #wrapper"),
//     galW   = $gal.outerHeight(true),
//     galSW  = $gal[0].scrollHeight,
//     wDiff  = (galSW/galW)-1,  // Heights difference ratio
//     mPadd  = 60,  // Mousemove Padding
//     damp   = 50,  // Mousemove response softness
//     mX     = 0,   // Real mouse position
//     mX2    = 0,   // Modified mouse position
//     posX   = 0,
//     mmAA   = galW-(mPadd*2), // The mousemove available area
//     mmAAr  = (galW/mmAA);    // get available mousemove fidderence ratio

//   $gal.mousemove(function(e) {
//     mX = e.pageY - $(this).parent().offset().top - this.offsetLeft;
//     mX2 = Math.min( Math.max(0, mX-mPadd), mmAA ) * mmAAr;
//   });

//   setInterval(function(){
//     posX += (mX2 - posX) / damp; // zeno's paradox equation "catching delay" 
//     $gal.scrollTop(posX*wDiff);
//   }, 10);
// });

//
// when hover over sentence
$('#mainCol a').mouseenter(function(event){

  var name = $(this).attr('data-name');

  $("#leftCol .preview h3").each(function(){
    $(this).css('color','#000').removeClass('hovereditem');
  })

  $("#mainCol a").each(function(){
    $(this).css({'color' : '#000', 'text-decoration' : 'none'});
  });

  $(this).css({'color' : '#00f', 'text-decoration' : 'underline'});

  // $('#mainCol a').each(function(i,a){

  //   return this.innerHTML = this.innerText.replace('g','<span class="no-underline">g</span>');

  // });

  $("#leftCol .preview h3:contains('" + name + "')").parent().find('h3').css('color', '#00f').addClass('hovereditem');

});



//
// when hover over person names
$('#leftCol .preview h3').mouseenter(function(){
    $('#mainCol #wrapper').stop();

    var name = $(this).text();
    // console.log(name);

    $("#leftCol .preview h3").each(function(){
      $(this).css('color','#000').removeClass('hovereditem');
    });

    $("#mainCol a").each(function(){
      $(this).css({'color' : '#000', 'text-decoration' : 'none'});
    });

    $(this).css('color', '#00f').addClass('hovereditem');

    var getThisSentence = $("#mainCol a[data-name='" + name + "']");
    getThisSentence.css({'color' : '#00f', 'text-decoration' : 'underline'});

    if(getThisSentence.length > 0){
      // var thisWindowHeight = $(window).height();
      var topBarHeight = $('#topbar').height();
      // var getThisSentenceOffSet = getThisSentence;

      // getThisSentenceOffSet = getThisSentenceOffSet < 0 ? getThisSentenceOffSet+topBarHeight : getThisSentenceOffSet-topBarHeight;

      // var getThisSentenceTOP = getThisSentenceOffSet.top;

      // var getThisSentenceScrollTOP = $('#mainCol').scrollTop();

      // console.log(getThisSentenceScrollTOP);

      // $('#mainCol #wrapper').animate({scrollTop : getThisSentenceOffSet}, 1000);
      // console.log(getThisSentenceOffSet);
      $('#wrapper').scrollTo(getThisSentence, 1000, {offset:-topBarHeight});
    }
});

// $('#leftCol').mouseleave(function(){

//     $('#mainCol #wrapper').scrollTop(0);

// });

//
// when click on sentences
$('#mainCol a').click(function(event){

  event.preventDefault();

  var name = $(this).attr('data-name');

  $("#leftCol .preview h3").each(function(){
    $(this).removeClass('currentyleSelected');
  });

  $("#leftCol .preview figure").each(function(){
    $(this).css('display','none');
  });

  $("#leftCol .preview h2").each(function(){
    $(this).css('display','none');
  });

  $("#leftCol .preview p").each(function(){
    $(this).css('display','none');
  });

  $("#leftCol .preview h3:contains('" + name + "')").addClass('currentyleSelected').parent().find('h2').addClass('active').toggle();
  $("#leftCol .preview h3:contains('" + name + "')").addClass('currentyleSelected').parent().find('p').addClass('active').toggle();
});

//
// when click on person names
$('#leftCol .preview h3').click(function(){

  $("#leftCol .preview h3").each(function(){
    $(this).removeClass('currentyleSelected');
  });

  $("#leftCol .preview figure").each(function(){
    $(this).css('display','none');
  });

  $("#leftCol .preview h2").each(function(){
    $(this).css('display','none');
  });

  $("#leftCol .preview p").each(function(){
    $(this).css('display','none');
  });

  $(this).addClass('currentyleSelected').parent().find('h2').addClass('active').toggle();
  $(this).addClass('currentyleSelected').parent().find('p').addClass('active').toggle();
});

/** This script does nothing, except printing a small message to the console.
*   The console is a part of the browser where you can find feedback on how your scripts are doing
*   You can find it when you choose ‘inspect element’ and choose the ‘console’ tab
*/

console.log("started loading the thesis javascript");

/** 
Here we try to use the jQuery function $.find()
If jQuery is not properly defined (linked in from the HTML)
the console will show an error like:

Uncaught ReferenceError: $ is not defined

or

Uncaught TypeError: $.find is not a function(…)
*
*/
var $paragraphs = $.find("p");

if ($paragraphs) {
    console.log('found ' + $paragraphs.length + ' paragraphs in thesis');
}
