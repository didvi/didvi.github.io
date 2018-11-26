$(document).ready(function()  {
  let randomHexes = [Math.floor(Math.random() * 60) + 20, Math.floor(Math.random() * 60) + 20, Math.floor(Math.random() * 60) + 20];

  let hexRow1 = 0;
  let hexRow2 = 0;
  let hexRow3 = 0;

  let numberofPauses = 0
  let pausestoWin = 3

  $("#original div div, #copied3 div div").hover(function() {
    hexRow1 += 1
    if (hexRow1 == randomHexes[0]) {
      hexRow1 += 1
      $(this).find('img').attr("src", "assets/img/hexagonbackblue.png")
    }

  });

  $("#copied4 div div, #copied5 div div").hover(function() {
    hexRow2 += 1
    if (hexRow2 == randomHexes[1]) {
      hexRow2 += 1
      $(this).find('img').attr("src", "assets/img/hexagonbackblue.png")
    }

  });

  $("#copied6 div div, #copied7 div div").hover(function() {
    hexRow3 += 1
    if (hexRow3 == randomHexes[2]) {
      hexRow3 += 1
      $(this).find('img').attr("src", "assets/img/hexagonbackblue.png")
    }
  });

  $(".hexagon").click(function() {
    //if the right one is clicked
    if ($(this).find('img').attr("src") == "assets/img/hexagonbackblue.png") {
      var animatedParent = $(this).parent().parent()

      //if it hasn't already been clicked, need this in here to count how many pauses have happened
      if (animatedParent.css("animation-play-state") != "paused") {

        if (animatedParent.attr("id") == "original" || animatedParent.attr("id") == "copied3") {
          pauseAnimations("#original", "#copied3")
          $(this).find('img').attr("src", "assets/img/hexagondarkblue.png")
          numberofPauses += 1
        } else if (animatedParent.attr("id") == "copied4" || animatedParent.attr("id") == "copied5") {
          pauseAnimations("#copied4", "#copied5")
          $(this).find('img').attr("src", "assets/img/hexagondarkblue.png")
          numberofPauses += 1
        } else if (animatedParent.attr("id") == "copied6" || animatedParent.attr("id") == "copied7") {
          pauseAnimations("#copied6", "#copied7")
          $(this).find('img').attr("src", "assets/img/hexagondarkblue.png")
          numberofPauses += 1
        }
        checkWin()
      }
    }
  });

  function pauseAnimations(left, right) {
    $(left).css("animation-play-state", "paused")
    $(right).css("animation-play-state", "paused")
  }

  //check to see if level is won, also put a short delay in
  function checkWin() {
    console.log(numberofPauses)
    setTimeout(function() {
      if (numberofPauses == pausestoWin) {
        window.location.href = "fourth.html"
      }
    }, 200)
  }


});
