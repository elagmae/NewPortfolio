const filterButtons = document.querySelectorAll("projects-filter button");
const projectCards = document.querySelectorAll("project-card");

filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    // retirer active partout
    filterButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    // ajouter active au bouton cliqué
    button.classList.add("active");

    const filter = button.dataset.filter.toLowerCase();

    projectCards.forEach(card => {

      const tags = (card.getAttribute("tags") || "")
        .toLowerCase();

      if (filter === "all" || tags.includes(filter)) 
      {
        card.classList.add("active");
      } 

      else 
      {
        card.classList.remove("active");
      }
    });
  });
});