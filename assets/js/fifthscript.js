$(document).ready(function()  {
  var hex = 0
  $(".hexagon").hover(function() {
    if ($(this).find('img').attr("src") != "assets/img/hexagondarknicegreen.png" && $(this).css("opacity") != "0") {
      hex += 1
    }
  $(this).find('img').attr("src", "assets/img/hexagonnicegreen.png")
  $(this).css("z-index", "1")
  });

  $("#title").hover(function() {
    $(this).css("color", "#414141")

  });


});
