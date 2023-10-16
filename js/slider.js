var slider1 = document.getElementById("slide1");
var slider2 = document.getElementById("slide2");
var slider3 = document.getElementById("slide3");
var slider4 = document.getElementById("slide4");
var sliderHead1 = document.getElementById("sliderHead1");
var sliderHead2 = document.getElementById("sliderHead2");

var current = 1;

function sliderChange(select) {
  if (select == 1) {
    slider1.classList.add("active");
    slider2.classList.remove("active");
    slider3.classList.remove("active");
    slider4.classList.remove("active");
    current = 1;
    // image.src="images/how-it-worksks-2.png";
    // sliderHead.innerHTML = "* Construction Package Finalised by Customer";
    sliderHead1.innerHTML = "Construction Package Finalised by Customer";
    sliderHead2.innerHTML = "Initial Booking & Advance Payment";
  } else if (select == 2) {
    slider1.classList.add("active");
    slider2.classList.add("active");
    slider3.classList.remove("active");
    slider4.classList.remove("active");
    current = 2;
    // image.src="images/how-it-works-4.png";
    sliderHead1.innerHTML = "Drawing, Design discussions & Finalizing";
    sliderHead2.innerHTML = "Main Agreement signed";
  } else if (select == 3) {
    slider1.classList.add("active");
    slider2.classList.add("active");
    slider3.classList.add("active");
    slider4.classList.remove("active");
    current = 3;
    // image.src="images/how-it-works-5.png";
    sliderHead1.innerHTML = "Project Schedule Creation & Excution";
    sliderHead2.innerHTML = "Monthly Cash-flow created";
  } else if (select == 4) {
    slider1.classList.add("active");
    slider2.classList.add("active");
    slider3.classList.add("active");
    slider4.classList.add("active");
    current = 4;
    // image.src="images/how-it-works-3.png";
    sliderHead1.innerHTML = "Progress tracking and audit";
    sliderHead2.innerHTML = "Project completion & Handover";
  }
}

function next() {
  if (current < 4) sliderChange(++current);
}
function previous() {
  if (current > 1) sliderChange(--current);
}

$(document).ready(function () {
  $(".collapse.in").prev(".panel-heading").addClass("active");
  $("#accordion, #bs-collapse")
    .on("show.bs.collapse", function (a) {
      $(a.target).prev(".panel-heading").addClass("active");
    })
    .on("hide.bs.collapse", function (a) {
      $(a.target).prev(".panel-heading").removeClass("active");
    });
});
