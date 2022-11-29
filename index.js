window.addEventListener("load", function () {
  const menu = document.querySelector(".menu");
  const hamburgerMenuIcon = document.querySelector("#hamburgerMenuIcon");

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
});
