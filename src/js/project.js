const PATH_PHOTO = "src/medias/photos/";
fetch("src/js/project.json") // Charge les données depuis le fichier JSON
  .then((response) => response.json()) // Convertit la réponse en objet JS
  .then((projects) => {
    document.getElementById("project-list").innerHTML = projects
      .map(
        (project) => `
            <div class="swiper-slide">
                <img src="${PATH_PHOTO}${project.image}" alt="${project.title}">
                <div>
                <h2>${project.title}</h2>
                <a href="${project.url}" target="_blank">Lien du projet<i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                <p>${project.description}</p>
                </div>
            </div>
        `
      )
      .join("");
  })
  .catch((error) => console.error("Erreur de chargement :", error));
