const $nav = $(".navbar");
const $root = $("html, body");

//Changes Navbar color to blue after scrolling amount equal to its height
$(document).scroll(() => {
  $nav.toggleClass("scrolled", $(this).scrollTop() > (1.7*$nav.height()));
});

// Force the Navbar to turn blue when expanded
$(".navbar-toggler").click(() => {
  // The code below somehow works the opposite way, but I kind of understand why
  if ($(this).attr("aria-expanded") == "false") $nav.addClass("expanded");
  else $nav.removeClass("expanded");
});

//Smooth scroll for anchors linking to elements within the same page
$('a[href^="#"]').click(e => {
  e.preventDefault();

  $root.animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    500
  );
});
