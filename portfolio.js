function addPortfolioCard(params = {}) {
  const template = document.querySelector("#portfolio-template");
  const container = document.querySelector(".portfolio__container");

  template.content.querySelector(".portfolio__title").textContent =
    params.title;
  template.content.querySelector(".portfolio__description").textContent =
    params.description;
  template.content.querySelector(".portfolio__img").src =
    "http:" + params.image;

  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function getPortfolio() {
  return fetch(
    "https://cdn.contentful.com/spaces/fadzizx1hsb2/environments/master/entries?access_token=pcryjI8lpZ7IB50078UX11kkYEnoF_BMc5ABJzh4JAg&content_type=portfolio"
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
  portfolio().then(function (services) {
    for (const s of services) {
      addPortfolioCard(s);
    }
  });
}

main();
