// add an event listener and execute only when the DOM Content is loaded
document.addEventListener("DOMContentLoaded", function () {
  // grab the buttons
  const menuBar = document.querySelector(".sidebar__toggle");
  const sideBar = document.querySelector(".sidebar");
  const closeBtn = document.querySelector(".close-btn");

  menuBar.addEventListener("click", function () {
    sideBar.classList.toggle("show-sidebar");
  });

  //the close-button logic
  closeBtn.addEventListener("click", function () {
    sideBar.classList.remove("show-sidebar");
  });
});
