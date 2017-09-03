$("body").mousemove(function(event) {
  var pxDistance = 128;
  if (isNear($("#side-bar-open"), pxDistance, event)) {
    $("#side-bar-open").css("visibility","visible");
    $("#side-bar-closed").css("visibility","hidden");
  } else {
    $("#side-bar-open").css("visibility","hidden");
    $("#side-bar-closed").css("visibility","visible");
  }
});

function isNear(element, distance, event) {
  var left = element.offset().left - distance,
  top = element.offset().top - distance,
  right = left + element.width() + 2*distance,
  bottom = top + element.height() + 2*distance,
  x = event.pageX,
  y = event.pageY;

  return ( x > left && x < right && y > top && y < bottom );
}
