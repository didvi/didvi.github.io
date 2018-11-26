$(document).ready(function()  {
  var pinkHex = 0
  $(".hexagon").hover(function() {
    if ($(this).find('img').attr("src") != "assets/img/hexagonpink.png" && $(this).css("opacity") != "0") {
      pinkHex += 1
    }
    $(this).find('img').attr("src", "assets/img/hexagonpink.png")
  if (pinkHex >= 95) {
    window.location.href = "second.html"
  }

  });

  // makes some divs dissapear
  $(".copy div:eq(4)").css("opacity", "0");
  $(".copy div:eq(5)").css("opacity", "0");
  $(".copy div:eq(6)").css("opacity", "0");
  $(".copy div:eq(7)").css("opacity", "0");


  $(".copy div:eq(11)").css("opacity", "0");
  $(".copy div:eq(12)").css("opacity", "0");
  $(".copy div:eq(13)").css("opacity", "0");
  $(".copy div:eq(14)").css("opacity", "0");
  $(".copy div:eq(15)").css("opacity", "0");

  $("#row2 div:eq(5)").css("opacity", "0");
  $("#row2 div:eq(4)").css("opacity", "0");

  $("#row2 div:eq(12)").css("opacity", "0");
  $("#row2 div:eq(13)").css("opacity", "0");
  $("#row2 div:eq(14)").css("opacity", "0");


  $("#row8 div:eq(8)").css("opacity", "0");
  $("#row8 div:eq(9)").css("opacity", "0");
  $("#row8 div:eq(10)").css("opacity", "0");

  $("#row9 div:eq(9)").css("opacity", "0");
  $("#row9 div:eq(10)").css("opacity", "0");
  $("#row9 div:eq(11)").css("opacity", "0");
  $("#row9 div:eq(12)").css("opacity", "0");

  $("#row7 div:eq(20)").css("opacity", "0");
  $("#row7 div:eq(21)").css("opacity", "0");
  $("#row7 div:eq(22)").css("opacity", "0");

  $("#row8 div:eq(19)").css("opacity", "0");
  $("#row8 div:eq(20)").css("opacity", "0");
  $("#row8 div:eq(21)").css("opacity", "0");

  $("#row9 div:eq(18)").css("opacity", "0");
  $("#row9 div:eq(19)").css("opacity", "0");
  $("#row9 div:eq(20)").css("opacity", "0");
  $("#row9 div:eq(21)").css("opacity", "0");
});

// link to next page if all hexagons are pink
