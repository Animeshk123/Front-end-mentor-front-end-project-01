const menus = document.querySelectorAll('.menu')
navbar = document.querySelector('header .container nav'),
  overlays = document.querySelector(".overlay"),
  openBtn = document.querySelector(".opened"),
  closeBtn = document.querySelector(".closed");

window.addEventListener("load", () => {
  document.body.classList.remove("load");
})

openBtn.addEventListener("click", () => {
  navbar.classList.add("opennav");
  overlays.classList.add("show");
});

closeBtn.addEventListener("click", closeNav);
overlays.addEventListener('click', closeNav);

function closeNav() {
  navbar.classList.remove("opennav");
  overlays.classList.remove("show");
}


menus.forEach(menu => {
  menu.addEventListener('click', () => {
    menu.classList.toggle("open");
    if (menu.classList.contains("down")) {
      menu.classList.remove("down");
      menu.classList.add("up");
    }
    else {
      menu.classList.remove("up");
      menu.classList.add("down");
    }
  })
})
