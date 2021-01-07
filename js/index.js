var hello = "Xin Chào Mọi Người";
var txt = document.getElementById("hello");
var speed = 50;
var i = 0;
var widthpage = screen.width;
var menulink = document.getElementsByClassName("menu-link");
window.onload = typeWriter;
window.onresize = function () {
  widthpage = screen.width;
};
document.getElementById("fix-icon").onclick = openMenu;
document.getElementById("menu-close").onclick = closeMenu;
function typeWriter() {
  if (i < hello.length) {
    txt.innerHTML += hello[i];
    i++;
    setTimeout(typeWriter, speed);
  }
}
for (let j = 0; j < menulink.length; j++) {
  menulink[j].onclick = function () {
    if (widthpage <= 992) {
      closeMenu();
    } else {
      removeClassMenuLink();
      this.classList.add("action_link_menu");
    }
  };
}
function removeClassMenuLink() {
  for (let j = 0; j < menulink.length; j++) {
    menulink[j].classList.remove("action_link_menu");
  }
}
function openMenu() {
  document.getElementsByClassName("menu")[0].style.width = "60%";
}
function closeMenu() {
  document.getElementsByClassName("menu")[0].style.width = "0";
}
