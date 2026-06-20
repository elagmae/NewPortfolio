// On attend que tout soit prêt : custom elements + rendu dynamique des filtres
customElements.whenDefined("project-card").then(() => {

  // Les boutons de filtre sont injectés par renderHome(), donc on délègue
  // l'écoute au conteneur parent plutôt qu'aux boutons directs
  const filterContainer = document.getElementById("projects-filter");
  const projectCards = document.querySelectorAll("project-card");

  if (!filterContainer) return;

  filterContainer.addEventListener("click", (e) => {

    const button = e.target.closest("button");
    if (!button) return;

    // Retirer active partout
    filterContainer.querySelectorAll("button").forEach(btn => {
      btn.classList.remove("active");
    });

    // Ajouter active au bouton cliqué
    button.classList.add("active");

    const filter = button.dataset.filter.toLowerCase();

    projectCards.forEach(card => {
      const tags = (card.getAttribute("tags") || "").toLowerCase();

      if (filter === "all" || tags.includes(filter)) {
        card.classList.add("active");
      } else {
        card.classList.remove("active");
      }
    });
  });
});