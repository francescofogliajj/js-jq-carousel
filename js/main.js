$(document).ready(
  function() {

    $(".prev").click(
      function () {
        prevImage()
      }
    );

    $(".next").click(
      function () {
        nextImage()
      }
    );

    $(document).keydown(
      function() {
        if (event.which == 37) {
          prevImage();
        } else if (event.which == 39) {
          nextImage();
        }
      }
    );

    $(".nav i").click(
      function() {
        $(".nav i.active").removeClass("active");
        $(this).addClass("active");
        var circleIndex = $(this).index();

        $(".images > img.active").removeClass("active");
        $(".images > img").eq(circleIndex).addClass("active");
      }
    );

  }
);

function prevImage() {
  var activeImage = $(".images img.active");
  var activeCircle = $(".nav i.active");

  activeImage.removeClass("active");
  activeCircle.removeClass("active");

  if (activeImage.hasClass("first") == true) {
    $(".images img.last").addClass("active");
    $(".nav i.last").addClass("active");
  } else {
    activeImage.prev().addClass("active");
    activeCircle.prev().addClass("active");
  }

}

function nextImage() {
  var activeImage = $(".images img.active");
  var activeCircle = $(".nav i.active");

  activeImage.removeClass("active");
  activeCircle.removeClass("active");

  if (activeImage.hasClass("last") == true) {
    $(".images img.first").addClass("active");
    $(".nav i.first").addClass("active");
  } else {
    activeImage.next().addClass("active");
    activeCircle.next().addClass("active");
  }

}
