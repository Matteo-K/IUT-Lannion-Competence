let btncopy = document.querySelector(".js-copy");
if (btncopy) {
  btncopy.addEventListener("click", docopy);
}

function docopy() {
  // Cible de l'élément qui doit être copié
  let target = this.dataset.target;
  let fromElement = document.querySelector(target);
  if (!fromElement) return;
  // Sélection des caractères concernés
  var range = document.createRange();
  var selection = window.getSelection();
  range.selectNode(fromElement);
  selection.removeAllRanges();
  selection.addRange(range);

  try {
    // Exécution de la commande de copie
    var result = document.execCommand("copy");
  } catch (err) {
    // Une erreur est surevnue lors de la tentative de copie
    alert(err);
  }

  // Fin de l'opération
  selection = window.getSelection();
  if (typeof selection.removeRange === "function") {
    selection.removeRange(range);
  } else if (typeof selection.removeAllRanges === "function") {
    selection.removeAllRanges();
  }
}
