const shops = [
  {
    name: "Hearth & Bean",
    country: "United States",
    city: "New York",
    neighborhood: "West Village",
    vibes: ["Cozy", "Rustic", "Local hidden gem"],
    starRating: 4.7,
    reviewCount: 842,
    touristiness: 2
  },
  {
    name: "Draftline Coffee",
    country: "United States",
    city: "New York",
    neighborhood: "Williamsburg",
    vibes: ["Modern", "Lively", "Artsy"],
    starRating: 4.4,
    reviewCount: 1160,
    touristiness: 3
  },
  {
    name: "Quiet Corner Cafe",
    country: "United States",
    city: "Chicago",
    neighborhood: "Lincoln Park",
    vibes: ["Quiet / Study-friendly", "Cozy", "Local hidden gem"],
    starRating: 4.8,
    reviewCount: 512,
    touristiness: 1
  },
  {
    name: "Palette Roasters",
    country: "United States",
    city: "San Francisco",
    neighborhood: "Mission District",
    vibes: ["Artsy", "Lively", "Modern"],
    starRating: 4.5,
    reviewCount: 932,
    touristiness: 4
  },
  {
    name: "Old Brick Espresso",
    country: "United States",
    city: "Boston",
    neighborhood: "Beacon Hill",
    vibes: ["Rustic", "Cozy", "Quiet / Study-friendly"],
    starRating: 4.6,
    reviewCount: 721,
    touristiness: 3
  },
  {
    name: "Locals Only Brew",
    country: "United States",
    city: "Seattle",
    neighborhood: "Fremont",
    vibes: ["Local hidden gem", "Artsy", "Quiet / Study-friendly"],
    starRating: 4.9,
    reviewCount: 403,
    touristiness: 1
  },
  {
    name: "Metro Sip House",
    country: "United States",
    city: "Los Angeles",
    neighborhood: "Downtown",
    vibes: ["Modern", "Lively"],
    starRating: 4.2,
    reviewCount: 1840,
    touristiness: 5
  },
  {
    name: "Pine & Mug",
    country: "United States",
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
  "Local hidden gem",
  "Kitsch / Eclectic"
];

const ui = {
  countrySelect: document.getElementById("country-select"),
  citySelect: document.getElementById("city-select"),
  vibeSelect: document.getElementById("vibe-select"),
  secondaryFilters: document.getElementById("secondary-filters"),
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

function uniqueSorted(values) {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b));
}

function initCountryOptions() {
  const countries = uniqueSorted(shops.map((shop) => shop.country));
  countries.forEach((country) => {
    const option = document.createElement("option");
    option.value = country;
    option.textContent = country;
    ui.countrySelect.appendChild(option);
  });
}

function initVibeOptions() {
  selectedVibes.forEach((vibe) => {
    const option = document.createElement("option");
    option.value = vibe;
    option.textContent = vibe;
    ui.vibeSelect.appendChild(option);
  });
}

function updateCityOptions() {
  const selectedCountry = ui.countrySelect.value;
  ui.citySelect.innerHTML = '<option value="">Select city</option>';

  if (!selectedCountry) {
    ui.citySelect.disabled = true;
    return;
  }

  const cities = uniqueSorted(
    shops
      .filter((shop) => shop.country === selectedCountry)
      .map((shop) => shop.city)
  );

  cities.forEach((city) => {
    const option = document.createElement("option");
    option.value = city;
    option.textContent = city;
    ui.citySelect.appendChild(option);
  });
  ui.citySelect.disabled = false;
}

function hasRequiredSelections() {
  return Boolean(ui.countrySelect.value && ui.citySelect.value && ui.vibeSelect.value);
}

function updateSecondaryFiltersVisibility() {
  ui.secondaryFilters.classList.toggle("hidden", !hasRequiredSelections());
}

function filterShops() {
  if (!hasRequiredSelections()) {
    return [];
  }

  const selectedCountry = ui.countrySelect.value;
  const selectedCity = ui.citySelect.value;
  const desiredVibe = ui.vibeSelect.value;
  const minRating = Number(ui.minRating.value);
  const minReviews = Number(ui.minReviews.value);
  const neighborhoodQuery = ui.neighborhood.value.trim().toLowerCase();
  const maxTouristy = Number(ui.maxTouristy.value);

  return shops.filter((shop) => {
    const countryOk = shop.country === selectedCountry;
    const cityOk = shop.city === selectedCity;
    const vibeOk = !desiredVibe || shop.vibes.includes(desiredVibe);
    const ratingOk = shop.starRating >= minRating;
    const reviewsOk = shop.reviewCount >= minReviews;
    const neighborhoodOk =
      !neighborhoodQuery ||
      shop.neighborhood.toLowerCase().includes(neighborhoodQuery) ||
      shop.city.toLowerCase().includes(neighborhoodQuery);
    const touristyOk = shop.touristiness <= maxTouristy;

    return countryOk && cityOk && vibeOk && ratingOk && reviewsOk && neighborhoodOk && touristyOk;
  });
}

function rankShops(filteredShops) {
  if (filteredShops.length <= 1) {
    return filteredShops;
  }

  const desiredVibe = ui.vibeSelect.value;
  const neighborhoodQuery = ui.neighborhood.value.trim().toLowerCase();
  const maxReviews = Math.max(...filteredShops.map((shop) => shop.reviewCount));

  const scored = filteredShops.map((shop) => {
    const vibeScore = desiredVibe && shop.vibes.includes(desiredVibe) ? 1 : 0;
    const ratingScore = shop.starRating / 5;
    const reviewScore = maxReviews === 0 ? 0 : shop.reviewCount / maxReviews;
    const localScore = (6 - shop.touristiness) / 5;
    const neighborhoodBoost =
      neighborhoodQuery && shop.neighborhood.toLowerCase() === neighborhoodQuery ? 1 : 0;

    const score =
      vibeScore * 0.35 +
      ratingScore * 0.3 +
      reviewScore * 0.2 +
      localScore * 0.1 +
      neighborhoodBoost * 0.05;

    return { shop, score };
  });

  scored.sort((a, b) => b.score - a.score || b.shop.starRating - a.shop.starRating);
  return scored.map((entry) => entry.shop);
}

function renderResults() {
  const filtered = filterShops();
  const ranked = rankShops(filtered);
  if (!hasRequiredSelections()) {
    ui.resultCount.textContent = "Choose country, city, and vibe to see matches.";
    ui.resultsList.innerHTML = "";
    return;
  }

  ui.resultCount.textContent =
    ranked.length === 0
      ? "No shops match your filters."
      : `${ranked.length} matching shop${ranked.length === 1 ? "" : "s"} (ranked best match first)`;

  ui.resultsList.innerHTML = "";

  ranked.forEach((shop) => {
    const item = document.createElement("li");
    item.className = "result-item";
    item.innerHTML = `
      <h3 class="result-title">${shop.name}</h3>
      <p class="result-meta">
        ${shop.neighborhood}, ${shop.city}, ${shop.country} • ⭐ ${shop.starRating} (${shop.reviewCount} reviews) • Touristiness: ${shop.touristiness}/5
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
  ui.countrySelect.value = "";
  ui.citySelect.innerHTML = '<option value="">Select city</option>';
  ui.citySelect.disabled = true;
  ui.vibeSelect.value = "";
  ui.minRating.value = "3.5";
  ui.minReviews.value = "100";
  ui.neighborhood.value = "";
  ui.maxTouristy.value = "5";
  syncLabels();
  updateSecondaryFiltersVisibility();
  renderResults();
}

function attachEvents() {
  ui.countrySelect.addEventListener("input", () => {
    ui.citySelect.value = "";
    updateCityOptions();
    updateSecondaryFiltersVisibility();
    renderResults();
  });

  ui.citySelect.addEventListener("input", () => {
    updateSecondaryFiltersVisibility();
    renderResults();
  });

  ui.vibeSelect.addEventListener("input", () => {
    updateSecondaryFiltersVisibility();
    renderResults();
  });

  [
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
initCountryOptions();
attachEvents();
syncLabels();
updateSecondaryFiltersVisibility();
renderResults();
