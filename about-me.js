function addTextAboutMe(params = {}) {
  const template = document.querySelector("#template-about-me");
  const container = document.querySelector(".about-me");

  template.content.querySelector(".about-me__name").textContent = params.title;
  template.content.querySelector(".about-me__text").textContent =
    params.description;
  // template.content.querySelector(".services__img").src = "http:" + params.image;

  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function getAboutMe() {
  return fetch(
    "https://cdn.contentful.com/spaces/fadzizx1hsb2/environments/master/entries?access_token=pcryjI8lpZ7IB50078UX11kkYEnoF_BMc5ABJzh4JAg&content_type=presentation"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      const fieldsCollection = data.items.map((item) => {
        //   const imagen = buscarEnAsset(item.fields.imagen.sys.id, data);
        return {
          title: item.fields.titulo,
          description: item.fields.descripcion,
          // image: imagen.fields.file.url,
        };
      });

      return fieldsCollection;
    });

  //     function buscarEnAsset(id, data) {
  //       console.log(id, data.includes.Asset);
  //       const arrayEncontrado = data.includes.Asset.find((asset) => {
  //         return asset.sys.id == id;
  //       });
  //       return arrayEncontrado;
  //     }
}

function main() {
  getAboutMe().then(function (services) {
    for (const s of services) {
      addTextAboutMe(s);
    }
  });
}

main();
