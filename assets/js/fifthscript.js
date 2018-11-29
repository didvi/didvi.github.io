$(document).ready(function()  {
  let changedHexes = 0;

  function changeHex(hexagon, hexagonColor) {
    let imgSrc = "assets/img/" + hexagonColor + ".png";
    $(hexagon).find('img').attr("src", imgSrc);
  }

  $(".hexagon").click(function() {
    if ($(this).find('img').attr("src") == "assets/img/hexagonrealpurple.png") {
      changeHex(this, "3dhexagonpurple");
      changedHexes += 1
      console.log(changedHexes)
      checkWin()
    }
  });

  function checkWin() {
    if (changedHexes >= 73) {
          alert("You Win!");
          window.location.href = "index.html";
        }
  }

/* BEFORE CLEANUP OF HTML
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


*/
});
