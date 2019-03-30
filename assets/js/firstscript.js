$(document).ready(function()  {
  var pinkHex = 0
  $(".hexagon").hover(function() {
    if ($(this).find('img').attr("src") != "assets/img/hexagonpink.png" && $(this).css("opacity") != "0") {
      pinkHex += 1
    }
    $(this).find('img').attr("src", "assets/img/hexagonpink.png")
  if (pinkHex >= 103) {
    window.location.href = "second.html"
  }

  });

  // makes some divs dissapear for asthetic reasons
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

/* ATTEMPT TO FIX FOR ALL SCREEN SIXES
  //removes all hexagons that are outside the element-- need for this to work on other screens
  function remover(element) {
    for(var i=0; i<element.childElementCount; i++){
      if (element.children[i].offsetTop + element.children[i].offsetHeight >
          element.offsetTop + element.offsetHeight ||
          element.children[i].offsetLeft + element.children[i].offsetWidth >
          element.offsetLeft + element.offsetWidth )
      {
        console.log(element.children[1])
        $(element.children[i]).css("opacity", "0");
      }

    }
  }

  //removes all hexagons outside of content
  remover($("#wrapper"))
*/

});
