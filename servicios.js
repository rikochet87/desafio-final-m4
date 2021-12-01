function addServicesCard(params = {}) {
  const template = document.querySelector("#services-template");
  const container = document.querySelector(".services__container");

  template.content.querySelector(".services__item").textContent = params.title;
  template.content.querySelector(".services__text").textContent =
    params.description;
  template.content.querySelector(".services__img").src = "http:" + params.image;

  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function getServices() {
  return fetch(
    "https://cdn.contentful.com/spaces/fadzizx1hsb2/environments/master/entries?access_token=pcryjI8lpZ7IB50078UX11kkYEnoF_BMc5ABJzh4JAg&content_type=services"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      const fieldsCollection = data.items.map((item) => {
        const imagen = buscarEnAsset(item.fields.imagen.sys.id, data);
        return {
          title: item.fields.titulo,
          description: item.fields.descripcion,
          image: imagen.fields.file.url,
        };
      });

      return fieldsCollection;
    });

  function buscarEnAsset(id, data) {
    console.log(id, data.includes.Asset);
    const arrayEncontrado = data.includes.Asset.find((asset) => {
      return asset.sys.id == id;
    });
    return arrayEncontrado;
  }
}

function main() {
  getServices().then(function (services) {
    for (const s of services) {
      addServicesCard(s);
    }
  });
}

main();
