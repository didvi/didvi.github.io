$(document).ready(function()  {
  let randomHexes = [Math.floor(Math.random() * 50) + 20, Math.floor(Math.random() * 50) + 20, Math.floor(Math.random() * 50) + 20];

  let hexesHovered = [0, 0, 0]
  let hexRow1 = 0;
  let hexRow2 = 0;
  let hexRow3 = 0;

  let numberofPauses = 0;
  let pausestoWin = 3;

function changeHex(hexagon, hexagonColor) {
  let imgSrc = "assets/img/" + hexagonColor + ".png";
  $(hexagon).find('img').attr("src", imgSrc);
}


//general hover function to reveal the hexagon that stops the row
function hoverFunction(hexagon, rowNumber) {
  hexesHovered[rowNumber] += 1;
  if (hexesHovered[rowNumber] == randomHexes[0]) {
    hexesHovered[rowNumber] += 1;
    changeHex(hexagon, "hexagonbackblue")
    $(hexagon).find('img').css("cursor", "pointer");
  }
}

  $("#original div div, #copied3 div div").hover(function() {
    hoverFunction(this, 0);
  });

  $("#copied4 div div, #copied5 div div").hover(function() {
    hoverFunction(this, 1);
  });

  $("#copied6 div div, #copied7 div div").hover(function() {
    hoverFunction(this, 2);
  });

  $(".hexagon").click(function() {
    //if the right one is clicked
    if ($(this).find('img').attr("src") == "assets/img/hexagonbackblue.png") {
      var animatedParent = $(this).parent().parent();

      //if it hasn't already been clicked, need this in here to count how many pauses have happened
      if (animatedParent.css("animation-play-state") != "paused") {

        if (animatedParent.attr("id") == "original" || animatedParent.attr("id") == "copied3") {
          pauseAnimations("#original", "#copied3");
          changeHex(this, "hexagondarkblue")
          numberofPauses += 1;
        } else if (animatedParent.attr("id") == "copied4" || animatedParent.attr("id") == "copied5") {
          pauseAnimations("#copied4", "#copied5");
          changeHex(this, "hexagondarkblue")
          numberofPauses += 1;
        } else if (animatedParent.attr("id") == "copied6" || animatedParent.attr("id") == "copied7") {
          pauseAnimations("#copied6", "#copied7");
          changeHex(this, "hexagondarkblue")
          numberofPauses += 1;
        }
        checkWin();
      }
    }
  });

  function pauseAnimations(left, right) {
    $(left).css("animation-play-state", "paused");
    $(right).css("animation-play-state", "paused");
  }

  //check to see if level is won, also put a short delay in
  function checkWin() {
    setTimeout(function() {
      if (numberofPauses == pausestoWin) {
        window.location.href = "fourth.html";
      }
    }, 200);
  }


});
