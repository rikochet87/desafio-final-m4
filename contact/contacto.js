function contactComponent(el) {
  const componentEl = document.createElement("div");

  componentEl.innerHTML = `
  <section class="contacto">
    <h2 class="contacto__title">Contacto</h2>
    <form class="contacto__form">
      <label>
        <h3 class="contacto__label">Nombre</h3>   
        <input class="contacto__input" type="text">
      </label>
      <label>
       <h3 class="contacto__label">Email</h3>   
       <input class="contacto__input" type="text">
     </label>
     <label>
       <h3 class="contacto__label">Mensaje</h3>   
       <textarea class="contacto__input-mensaje"></textarea>
     </label>
     <div class="contacto__submit-cont">
       <button class="contacto__submit-button">Enviar</button>
     </div>
    </form>
   </section>
   `;

  const form = componentEl.querySelector(".contacto__form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("el form se envio");
  });

  el.appendChild(componentEl);
}
