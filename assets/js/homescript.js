$(document).ready(function()  {
  $(".hexagon").mouseenter(function() {
    $(this).css("opacity", "1")
    let rowNumber = $(this).parent().attr("id").substr(3)
    let hexNumber = $(this).attr("class").split(' ')[1]
    rowNumber = Number(rowNumber)
    hexNumber = Number(hexNumber)

    //find hexagons around selected hexagon-- three in same row, two in row above and below
    if (rowNumber % 2 != 0) {
      let top1 = "#row" + String(rowNumber - 1) + " div:eq(" + String(23 - hexNumber) + ")"
      $(top1).css("opacity", "1");

      let top2 = "#row" + String(rowNumber - 1) + " div:eq(" + String(24 - hexNumber) + ")"
      $(top2).css("opacity", "1");

      let bottom1 = "#row" + String(rowNumber + 1) + " div:eq(" + String(23 - hexNumber) + ")"
      $(bottom1).css("opacity", "1");

      let bottom2 = "#row" + String(rowNumber + 1) + " div:eq(" + String(24 - hexNumber) + ")"
      $(bottom2).css("opacity", "1");

    } else {

      let top1 = "#row" + String(rowNumber - 1) + " div:eq(" + String(24 - hexNumber) + ")"
      $(top1).css("opacity", "1");

      let top2 = "#row" + String(rowNumber - 1) + " div:eq(" + String(25 - hexNumber) + ")"
      $(top2).css("opacity", "1");

      let bottom1 = "#row" + String(rowNumber + 1) + " div:eq(" + String(24 - hexNumber) + ")"
      $(bottom1).css("opacity", "1");

      let bottom2 = "#row" + String(rowNumber + 1) + " div:eq(" + String(25 - hexNumber) + ")"
      $(bottom2).css("opacity", "1");

    }

    if (hexNumber == 24) {
      let side2 = "#row" + String(rowNumber) + " div:eq(" + String(25 - hexNumber) + ")"
      $(side2).css("opacity", "1");
      return;
    }

    let side1 = "#row" + String(rowNumber) + " div:eq(" + String(23 - hexNumber) + ")"
    $(side1).css("opacity", "1");

    let side2 = "#row" + String(rowNumber) + " div:eq(" + String(25 - hexNumber) + ")"
    $(side2).css("opacity", "1");


  });

  $(".hexagon").mouseleave(function() {
    $(this).css("opacity", "0.4")
    let rowNumber = $(this).parent().attr("id").substr(3)
    let hexNumber = $(this).attr("class").split(' ')[1]

    rowNumber = Number(rowNumber)
    hexNumber = Number(hexNumber)


    //find hexagons around selected hexagon-- three in same row, two in row above and below
    if (rowNumber % 2 != 0) {
      let top1 = "#row" + String(rowNumber - 1) + " div:eq(" + String(23 - hexNumber) + ")"
      $(top1).css("opacity", "0.4");

      let top2 = "#row" + String(rowNumber - 1) + " div:eq(" + String(24 - hexNumber) + ")"
      $(top2).css("opacity", "0.4");

      let bottom1 = "#row" + String(rowNumber + 1) + " div:eq(" + String(23 - hexNumber) + ")"
      $(bottom1).css("opacity", "0.4");

      let bottom2 = "#row" + String(rowNumber + 1) + " div:eq(" + String(24 - hexNumber) + ")"
      $(bottom2).css("opacity", "0.4");

    } else {

      let top1 = "#row" + String(rowNumber - 1) + " div:eq(" + String(24 - hexNumber) + ")"
      $(top1).css("opacity", "0.4");

      let top2 = "#row" + String(rowNumber - 1) + " div:eq(" + String(25 - hexNumber) + ")"
      $(top2).css("opacity", "0.4");

      let bottom1 = "#row" + String(rowNumber + 1) + " div:eq(" + String(24 - hexNumber) + ")"
      $(bottom1).css("opacity", "0.4");

      let bottom2 = "#row" + String(rowNumber + 1) + " div:eq(" + String(25 - hexNumber) + ")"
      $(bottom2).css("opacity", "0.4");

    }

    if (hexNumber == 24) {
      let side2 = "#row" + String(rowNumber) + " div:eq(" + String(25 - hexNumber) + ")"
      $(side2).css("opacity", "0.4");
      return;
    }

    let side1 = "#row" + String(rowNumber) + " div:eq(" + String(23 - hexNumber) + ")"
    $(side1).css("opacity", "0.4");

    let side2 = "#row" + String(rowNumber) + " div:eq(" + String(25 - hexNumber) + ")"
    $(side2).css("opacity", "0.4");

  });



});