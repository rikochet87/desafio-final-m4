function addWelcome(params = {}) {
  const template = document.querySelector("#welcome-template");
  const container = document.querySelector(".welcome__container");

  template.content.querySelector(".welcome__text-one").textContent =
    params.title;
  template.content.querySelector(".welcome__text-two").textContent =
    params.subtitle;
  template.content.querySelector(".welcome__img").src = "http:" + params.image;

  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function getWelcome() {
  return fetch(
    "https://cdn.contentful.com/spaces/fadzizx1hsb2/environments/master/entries?access_token=pcryjI8lpZ7IB50078UX11kkYEnoF_BMc5ABJzh4JAg&content_type=welcome"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      const fieldsCollection = data.items.map((item) => {
        const fondo = buscarEnAsset(item.fields.fondo.sys.id, data);
        return {
          title: item.fields.hola,
          subtitle: item.fields.soy,
          image: fondo.fields.file.url,
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
  getWelcome().then(function (welcome) {
    for (const s of welcome) {
      addWelcome(s);
    }
  });
}

main();
