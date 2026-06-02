const shops = [
  {
    name: "Hearth & Bean",
    city: "New York",
    neighborhood: "West Village",
    vibes: ["Cozy", "Rustic", "Local hidden gem"],
    starRating: 4.7,
    reviewCount: 842,
    touristiness: 2
  },
  {
    name: "Draftline Coffee",
    city: "New York",
    neighborhood: "Williamsburg",
    vibes: ["Modern", "Lively", "Artsy"],
    starRating: 4.4,
    reviewCount: 1160,
    touristiness: 3
  },
  {
    name: "Quiet Corner Cafe",
    city: "Chicago",
    neighborhood: "Lincoln Park",
    vibes: ["Quiet / Study-friendly", "Cozy", "Local hidden gem"],
    starRating: 4.8,
    reviewCount: 512,
    touristiness: 1
  },
  {
    name: "Palette Roasters",
    city: "San Francisco",
    neighborhood: "Mission District",
    vibes: ["Artsy", "Lively", "Modern"],
    starRating: 4.5,
    reviewCount: 932,
    touristiness: 4
  },
  {
    name: "Old Brick Espresso",
    city: "Boston",
    neighborhood: "Beacon Hill",
    vibes: ["Rustic", "Cozy", "Quiet / Study-friendly"],
    starRating: 4.6,
    reviewCount: 721,
    touristiness: 3
  },
  {
    name: "Locals Only Brew",
    city: "Seattle",
    neighborhood: "Fremont",
    vibes: ["Local hidden gem", "Artsy", "Quiet / Study-friendly"],
    starRating: 4.9,
    reviewCount: 403,
    touristiness: 1
  },
  {
    name: "Metro Sip House",
    city: "Los Angeles",
    neighborhood: "Downtown",
    vibes: ["Modern", "Lively"],
    starRating: 4.2,
    reviewCount: 1840,
    touristiness: 5
  },
  {
    name: "Pine & Mug",
    city: "Portland",
    neighborhood: "Alberta Arts District",
    vibes: ["Artsy", "Cozy", "Rustic"],
    starRating: 4.7,
    reviewCount: 637,
    touristiness: 2
  }
];

const selectedVibes = [
  "Cozy",
  "Quiet / Study-friendly",
  "Lively",
  "Artsy",
  "Modern",
  "Rustic",
  "Local hidden gem"
];

const ui = {
  vibeSelect: document.getElementById("vibe-select"),
  minRating: document.getElementById("min-rating"),
  minRatingValue: document.getElementById("min-rating-value"),
  minReviews: document.getElementById("min-reviews"),
  minReviewsValue: document.getElementById("min-reviews-value"),
  neighborhood: document.getElementById("neighborhood-filter"),
  maxTouristy: document.getElementById("max-touristy"),
  maxTouristyValue: document.getElementById("max-touristy-value"),
  resultCount: document.getElementById("result-count"),
  resultsList: document.getElementById("results-list"),
  resetBtn: document.getElementById("reset-btn")
};

function initVibeOptions() {
  selectedVibes.forEach((vibe) => {
    const option = document.createElement("option");
    option.value = vibe;
    option.textContent = vibe;
    ui.vibeSelect.appendChild(option);
  });
}

function filterShops() {
  const desiredVibe = ui.vibeSelect.value;
  const minRating = Number(ui.minRating.value);
  const minReviews = Number(ui.minReviews.value);
  const neighborhoodQuery = ui.neighborhood.value.trim().toLowerCase();
  const maxTouristy = Number(ui.maxTouristy.value);

  return shops.filter((shop) => {
    const vibeOk = !desiredVibe || shop.vibes.includes(desiredVibe);
    const ratingOk = shop.starRating >= minRating;
    const reviewsOk = shop.reviewCount >= minReviews;
    const neighborhoodOk =
      !neighborhoodQuery ||
      shop.neighborhood.toLowerCase().includes(neighborhoodQuery) ||
      shop.city.toLowerCase().includes(neighborhoodQuery);
    const touristyOk = shop.touristiness <= maxTouristy;

    return vibeOk && ratingOk && reviewsOk && neighborhoodOk && touristyOk;
  });
}

function renderResults() {
  const filtered = filterShops();
  ui.resultCount.textContent =
    filtered.length === 0
      ? "No shops match your filters."
      : `${filtered.length} matching shop${filtered.length === 1 ? "" : "s"}`;

  ui.resultsList.innerHTML = "";

  filtered.forEach((shop) => {
    const item = document.createElement("li");
    item.className = "result-item";
    item.innerHTML = `
      <h3 class="result-title">${shop.name}</h3>
      <p class="result-meta">
        ${shop.neighborhood}, ${shop.city} • ⭐ ${shop.starRating} (${shop.reviewCount} reviews) • Touristiness: ${shop.touristiness}/5
      </p>
      <div class="tag-row">
        ${shop.vibes.map((vibe) => `<span class="tag">${vibe}</span>`).join("")}
      </div>
    `;
    ui.resultsList.appendChild(item);
  });
}

function syncLabels() {
  ui.minRatingValue.textContent = ui.minRating.value;
  ui.minReviewsValue.textContent = ui.minReviews.value;
  ui.maxTouristyValue.textContent = ui.maxTouristy.value;
}

function resetFilters() {
  ui.vibeSelect.value = "";
  ui.minRating.value = "3.5";
  ui.minReviews.value = "100";
  ui.neighborhood.value = "";
  ui.maxTouristy.value = "5";
  syncLabels();
  renderResults();
}

function attachEvents() {
  [
    ui.vibeSelect,
    ui.minRating,
    ui.minReviews,
    ui.neighborhood,
    ui.maxTouristy
  ].forEach((el) => {
    el.addEventListener("input", () => {
      syncLabels();
      renderResults();
    });
  });

  ui.resetBtn.addEventListener("click", resetFilters);
}

initVibeOptions();
attachEvents();
syncLabels();
renderResults();
