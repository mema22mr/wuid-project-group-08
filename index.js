const menu = document.querySelector(".menu");
const hamburgerMenuIcon = document.querySelector("#hamburgerMenuIcon");

/*hamburger menu pressed that
 will make the menu appear */
hamburgerMenuIcon.addEventListener("clikc", function () {
  menu.style.display = "block";
});
