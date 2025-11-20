(function () {
  function createCard(rec) {
    var card = document.createElement("article");
    card.className = "card";

    // ---- CATEGORY (top) ----
    var category = document.createElement("div");
    category.className = "card-category";
    category.textContent = rec.category || "";
    card.appendChild(category);

    // ---- SHORT NAME ----
    var tag = document.createElement("div");
    tag.className = "card-tag";
    tag.textContent = rec.short;
    card.appendChild(tag);

    // ---- MAIN TEXT ----
    var text = document.createElement("div");
    text.className = "card-text";
    text.textContent = rec.text;
    card.appendChild(text);

    // ---- PREVALENCE (bottom) ----
    if (rec.approx_prevalence) {
      var prevalence = document.createElement("div");
      prevalence.className = "card-prevalence";
      prevalence.textContent = rec.approx_prevalence;
      card.appendChild(prevalence);
    }

    return card;
  }

  function renderCards() {
    var container = document.getElementById("cards");
    if (!container || !Array.isArray(VARIATIONS)) return;

    VARIATIONS.forEach(function (rec) {
      container.appendChild(createCard(rec));
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderCards);
  } else {
    renderCards();
  }
})();
