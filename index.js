window.addEventListener("load", function () {
  const menu = document.querySelector(".menu");
  const hamburgerMenuIcon = document.querySelector("#hamburgerMenuIcon");
  const serumOnClick = document.querySelector("#serumOnClick");
  const tonerOnClick = document.querySelector("#tonerOnClick");
  const bodylotionOnClick = document.querySelector("#bodylotionOnClick");
  const shoppingBagIcon = document.querySelector("#shoppingBagIcon");
  const shoppingBag = document.querySelector(".shoppingBag");
  /*hamburger menu pressed that
 will make the menu appear */
  /**why do i have to press 2 times? */
  hamburgerMenuIcon.addEventListener("click", function () {
    if (menu.style.display == "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  });

  serumOnClick.addEventListener("click", function () {
    window.location.assign("serum.html");
  });

  tonerOnClick.addEventListener("click", function () {
    window.location.assign("toner.html");
  });

  bodylotionOnClick.addEventListener("click", function () {
    window.location.assign("body_lotion.html");
  });

  shoppingBagIcon.addEventListener("click", function () {
    if (shoppingBag.style.display == "none") {
      shoppingBag.style.display = "block";
    } else {
      shoppingBag.style.display = "none";
    }
  });
});
