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

  // const form = componentEl.querySelector(".contacto__form");
  // form.addEventListener("submit", function (e) {
  //   e.preventDefault();

  //   console.log("el form se envio");
  // });

  el.appendChild(componentEl);
}

function sendForm() {
  const formEl = document.querySelector(".contacto__form");

  formEl.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const formData = new FormData(evento.target);
    const datosObj = Object.fromEntries(formData.entries());

    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      headers: { "content-type": "application/json" },

      body: JSON.stringify({
        to: "matias3282@hotmail.com",
        message: `
        Nombre: ${datosObj.nombre} <br> <br>
        Email: ${datosObj.email} <br> <br>
        Mensaje: ${datosObj.mensaje}
        `,
      }),
    });
    formEl.reset();
    alert(
      "Mensaje enviado correctamente, Gracias " +
        datosObj.nombre +
        " por comunicarte."
    );
  });
}
