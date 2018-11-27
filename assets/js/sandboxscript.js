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
  let pageColors1 = ["hexagondarkblue", "hexagonbackblue", "hexagonpink", "hexagonskyblue"]
  let pageColors2 = ["hexagonlightblue", "hexagonpalegreen", "hexagonnicegreen", "hexagondarknicegreen"]
  let pageColors3 = ["hexagonolive", "hexagonlightolive", "hexagonburgundy", "hexagonlightburgundy"]

  let allPageColors = [pageColors1, pageColors2, pageColors3]


function changeHex(hexagon, hexagonColor) {
  let imgSrc = "assets/img/" + hexagonColor + ".png";
  $(hexagon).find('img').attr("src", imgSrc);
}

// returns a click function that should then be used to change the color of the hexagons
function setHexagonColors(first, second, third, fourth) {

  let firstSRC = "assets/img/" + first + ".png";
  let secondSRC = "assets/img/" + second + ".png";
  let thirdSRC = "assets/img/" + third + ".png";
  let fourthSRC = "assets/img/" + fourth + ".png";

  function clickFunction(thing) {
    console.log("changing hex")
    console.log($(thing).find('img').attr("src"))
    console.log(firstSRC, secondSRC, thirdSRC, fourthSRC)
    if ($(thing).find('img').attr("src") == firstSRC) {
      changeHex(thing, second);
    } else if ($(thing).find('img').attr("src") == secondSRC) {
      changeHex(thing, third);
    } else if ($(thing).find("img").attr("src") == thirdSRC){
      changeHex(thing, fourth);
    } else if ($(thing).find('img').attr("src") == fourthSRC) {
      changeHex(thing, first);
    } else {
      //idealy should never happen once colorchoice button is implemented
      console.log("hexagon not in array")
      changeHex(thing, first);
    }
  }
  return clickFunction;
}

var pageColorIndex = 0
clickFunction = setHexagonColors.apply(this, allPageColors[pageColorIndex]);

$(".hexagon").click(function() {
  console.log("clicked")
  clickFunction(this);
});

$("#colorchoice").click(function() {
  pageColorIndex = ((pageColorIndex + 1) % allPageColors.length);
  clickFunction = setHexagonColors.apply(this, allPageColors[pageColorIndex]);
  //need to change background color
  // TODO: make function to change color of hexagons not just change on next hex
});




});