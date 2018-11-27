$(document).ready(function()  {
//initial construction of the page

  //adds number of hexagons to the first row which is then copied
  var hexagonSRC = "assets/img/hexagondarkblue.png"
  var numofHexagon = 28
  addHex = function (i) {
    let addedHex = '<div class="hexagon ' + String(i)
    addedHex += '"><img src="' + hexagonSRC + '"></div>'
    $('#row1').append(addedHex)
    if (i % 4 == 0) {
      $("." + String(i)).css("opacity", "1")
    }
  }
  for (numofHexagon; numofHexagon; numofHexagon--) {
    addHex(numofHexagon);
  }

//copies first row i number of times, with id=rowi also moves every second row over to keep rows properly aligned
  function copyRow(i) {
      $("#row1").clone().prop({ id: "row" + String(i)}).appendTo("#content");
      if (i % 2 == 0) {
        $("#row" + String(i)).css({"position": "relative", "left": "31px"});
      }
  }
  for (i = 2; i < 16; i++) {
    copyRow(i);
  }


//functionality of the page
  //decides the color palatte of the hexagons, first one is good but i would change the others
  let pageColors1 = ["blue1", "bluecontrast2", "blue2", "bluecontrast1"];
  let backgroundColor1 = "#C0CDD6";

  let pageColors2 = ["green1", "greencontrast2", "green2", "greencontrast1"];
  let backgroundColor2 = "#BAD9C2";

  let pageColors3 = ["purple1", "purplecontrast1", "purple2", "purplecontrast2"];
  let backgroundColor3 = "#DED7DA"

  let allPageColors = [pageColors1, pageColors2, pageColors3];
  let allBackgroundColors = [backgroundColor1, backgroundColor2, backgroundColor3];

function changeHex(hexagon, hexagonColor) {
  let imgSrc = "assets/sandboximg/" + hexagonColor + ".png";
  $(hexagon).find('img').attr("src", imgSrc);
}

function changeAll(imgSrc) {
  $(".hexagon").find('img').attr("src", imgSrc);
}


// returns a click function that should then be used to change the color of the hexagons
function setHexagonColors(first, second, third, fourth) {

  let firstSRC = "assets/sandboximg/" + first + ".png";
  let secondSRC = "assets/sandboximg/" + second + ".png";
  let thirdSRC = "assets/sandboximg/" + third + ".png";
  let fourthSRC = "assets/sandboximg/" + fourth + ".png";

  changeAll(firstSRC);

  function clickFunction(thing) {
    if ($(thing).find('img').attr("src") == firstSRC) {
      changeHex(thing, second);
    } else if ($(thing).find('img').attr("src") == secondSRC) {
      changeHex(thing, third);
    } else if ($(thing).find("img").attr("src") == thirdSRC){
      changeHex(thing, fourth);
    } else if ($(thing).find('img').attr("src") == fourthSRC) {
      changeHex(thing, first);
    }
  }
  return clickFunction;
}

var pageColorIndex = 0
clickFunction = setHexagonColors.apply(this, allPageColors[pageColorIndex]);

$(".hexagon").click(function() {
  clickFunction(this);
});

$("#colorchoice").click(function() {
  pageColorIndex = ((pageColorIndex + 1) % allPageColors.length);
  clickFunction = setHexagonColors.apply(this, allPageColors[pageColorIndex]);

  //changes background color
  $("html").css("background-color", allBackgroundColors[pageColorIndex])
});


});
