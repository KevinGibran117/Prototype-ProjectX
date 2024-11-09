//  toggle menu navbar (class active)
const navbarNav = document.querySelector(".navbar-nav");
//  saat tombol menu diklik
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
// klik diluar sidebar, hide nav
const burger = document.querySelector("#menu");
document.addEventListener("click", function (e) {
  if (!burger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
