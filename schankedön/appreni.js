$(document) .ready (function () {

 $ (".button").click(function() {

   $(".article-interactive").toggleClass ("action")

 })

 // click oder mouseover

 $("[data-sound]").mouseover(function() {

   var file = $(this).attr("data-sound");
   new Audio(file).play()

 })

})
