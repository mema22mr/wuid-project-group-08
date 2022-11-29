window.addEventListener("load", function () {
  const menu = document.querySelector(".menu");
  const hamburgerMenuIcon = document.querySelector("#hamburgerMenuIcon");

  /*hamburger menu pressed that
   will make the menu appear */
  hamburgerMenuIcon.addEventListener("click", function () {
    if (menu.style.display == "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  });
});
