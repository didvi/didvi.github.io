$(document).ready(function()  {
  var randomHex = Math.floor(Math.random() * 120);
  var numberofHex = 0

  $(".hexagon").hover(function() {
    if ($(this).find('img').attr("src") != "assets/img/hexagonbrightorange.png" && $(this).css("opacity") != "0") {
      numberofHex += 1
      console.log(numberofHex)
      $(this).find('img').attr("src", "assets/img/hexagonbrightorange.png")
    }

    if (numberofHex == randomHex) {
      numberofHex += 1
      $(this).replaceWith('<a href="third.html"><div class="hexagon"><img src="assets/img/hexagonolive.png"></div></a>')
      $(this).css("cursor", "pointer")
    }
  });
});
