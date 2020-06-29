//Menu Responsivo

let show = true;
const MenuSection = document.querySelector(".menu-section")
const menuToggle= MenuSection.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {

  document.body.style.overflow = show ? "hidden" : "initial"; //Tirando a rolagem quando o menu estiver ativado
  MenuSection.classList.toggle("on", show);
  show = !show;
})