import membres from "../assets/membres";

// Réorganisation du tableau contenant les membres pour les avoir dans l'odre alphabétique
function alphaOrder(a, b) {
  if (a.nom.toLowerCase() < b.nom.toLowerCase()) {
    return -1;
  }
  if (a.nom.toLowerCase() > b.nom.toLowerCase()) {
    return 1;
  }
  return 0;
}

// Réorganisation du tableau pour avoir le formateur en première position (Gorski)
function formateurFirst() {
  const index = membres.findIndex((e) => e.nom === "Gorski");
  const formateurInfo = membres[index];
  membres.splice(index, 1);
  membres.unshift(formateurInfo);
}

export { alphaOrder, formateurFirst };
