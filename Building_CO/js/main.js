$(document).ready(function () {
  // nav
  $(".nav-link").click(function (e) {
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
  });

  // slider
  $("#slider").slick({
    dots: true,
    arrows: false,
  });

  $(".js-prev-btn").click(function () {
    $("#slider").slick("slickPrev");
  });

  $(".js-next-btn").click(function () {
    $("#slider").slick("slickNext");
  });

  // back-to-top
  const backToTop = document.getElementById("back-to-top");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

  backToTop.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
