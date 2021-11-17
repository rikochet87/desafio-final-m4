function main() {
  const buttonBurgerEL = document.querySelector(".header__burger-button");
  const buttonBurgerCloseEl = document.querySelector(".window__close-button");
  const windowEl = document.querySelector(".window");
  buttonBurgerEL.addEventListener("click", () => {
    windowEl.style.display = "inherit";
  });
  buttonBurgerCloseEl.addEventListener(
    "click",
    () => (windowEl.style.display = "none")
  );
}
main();

function headerComponent(el) {
  const componentEl = document.createElement("div");

  componentEl.innerHTML = `
    <section class="header">
          <a href="./index.html" class="header__link-home">
            <img
              src="./imagenes/LogoMakr-0crHQu.png"
              alt="logo"
              class="header__logo"
            />
          </a>
          <div class="header__desk-menu">
            <nav class="header__desk-nav">
              <a href="./portfolio.html" class="header__desk-link">Portfolio</a>
              <a href="./servicios.html" class="header__desk-link">Servicios</a>
              <a href="./contacto.html" class="header__desk-link">Contacto</a>
            </nav>
          </div>
          <div class="header__burger">
            <button class="header__burger-button">
              <span class="header__burger-button-bar"></span>
              <span class="header__burger-button-bar"></span>
              <span class="header__burger-button-bar"></span>
            </button>
          </div>
          <div class="window">
            <div class="window__cont-close-button">
              <button class="window__close-button">X</button>
            </div>

            <ul class="window__menu_vert">
              <li class="window__item">
                <a href="./portfolio.html" class="window__item-link"
                  >Portfolio</a
                >
              </li>
              <li class="window__item">
                <a href="./servicios.html" class="window__item-link"
                  >Servicios</a
                >
              </li>
              <li class="window__item">
                <a href="./contacto.html" class="window__item-link">Contacto</a>
              </li>
            </ul>
          </div>
        </section>
     `;

  el.appendChild(componentEl);
}
