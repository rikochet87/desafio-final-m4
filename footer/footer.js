function footerComponent(el) {
  const componentEl = document.createElement("div");

  componentEl.innerHTML = `<section class="footer">
  <a href="./index.html" class="footer__link-logo">
    <img
      src="./imagenes/LogoMakr-0crHQu.png"
      alt="logo"
      class="footer__logo"
    />
  </a>
  <div class="footer__social-media-section">
    <div class="footer__social-media">
      <img
        src="./imagenes/instagram.png"
        alt=""
        class="footer__instagram"
      />
      <span class="footer__social-media-name">Instagram</span>
    </div>

    <div class="footer__social-media">
      <img
        src="./imagenes/linkedin.png"
        alt=""
        class="footer__linkedin"
      />
      <span class="footer__social-media-name">Linkedin</span>
    </div>

    <div class="footer__social-media">
      <img src="./imagenes/github.png" alt="" class="footer__github" />
      <span class="footer__social-media-name">GitHub</span>
    </div>
  </div>
</section> `;

  el.appendChild(componentEl);
}
