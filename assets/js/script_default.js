let body = document.getElementById("body");
let sidebar = document.getElementById("menu__side");
let btn_open = document.getElementById("btn__open");

// para ocultar y mostrar el menú
const OpenClose_menu = () => {
  body.classList.toggle("body__move");
  sidebar.classList.toggle("menu__side__move");
};
btn_open.addEventListener("click", OpenClose_menu);
