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

  el.appendChild(componentEl);
  sendForm();
}

function sendForm() {
  var form = document.querySelector(".contacto");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(`Datos enviados! Muchas gracias.`);
    formData = new FormData(event.target);
    data = Object.fromEntries(formData.entries());
    form.reset();
    delete data.name;

    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.text())
      .then((res) => console.log(res));
  });
}
