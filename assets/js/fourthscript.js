$(document).ready(function()  {
  let changedHexes = [];

  $(".hexagon").click(function() {
    //find unique name of hexagon
    let rowNumber = $(this).parent().attr("id").substr(3);
    let hexNumber = $(this).attr("class").split(' ')[1];
    let name = String(rowNumber) + String(hexNumber);

    if ($(this).find('img').attr("src") == "assets/img/hexagonrealpurple.png") {
      changeHex(this, "3dhexagonpurple");
      if ( !(changedHexes.includes(name))) {
        console.log('newhex');
        changedHexes.push(name);
        checkWin();
      }
    } else {
      changeHex(this, "hexagonrealpurple")
      let index = changedHexes.indexOf(name);
      changedHexes.splice(index, 1);
    }
    console.log(changedHexes)
  });

function changeHex(hexagon, hexagonColor) {
  let imgSrc = "assets/img/" + hexagonColor + ".png";
  $(hexagon).find('img').attr("src", imgSrc);
}

function checkWin() {
  if (changedHexes.length >= 67) {
        window.location.href = "fifth.html";
      }
}


});
