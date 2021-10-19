$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $("header").toggleClass("toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $("header").removeClass("toggle");
  });

  // smooth scrolling

  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });
});

var type = new Typed(".typing-text", {
  strings: ["Shubham Dhage", "a full stack developer", "a learner"],
  typeSpeed: 120,
  loop: true,
});

var index = 1;
document.querySelector(".awards").onclick = () => {
  document.querySelector(".popup-image").style.display = "block";
};

document.querySelector(".popup-image span").onclick = () => {
  document.querySelector(".popup-image").style.display = "none";
};

document.querySelector(".prev").onclick = () => {
  if (--index == 0) index = 5;
  document.querySelector(".popup-image img").src = "Images/" + index + ".png";
};

document.querySelector(".next").onclick = () => {
  if (++index == 6) index = 1;
  document.querySelector(".popup-image img").src = "Images/" + index + ".png";
};
