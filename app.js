const shops = [
  // New York
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
    name: "Velvet Lantern",
    country: "United States",
    city: "New York",
    neighborhood: "East Village",
    vibes: ["Kitsch / Eclectic", "Artsy", "Cozy"],
    starRating: 4.6,
    reviewCount: 678,
    touristiness: 3
  },
  {
    name: "Page Turner Espresso",
    country: "United States",
    city: "New York",
    neighborhood: "Upper West Side",
    vibes: ["Quiet / Study-friendly", "Cozy"],
    starRating: 4.8,
    reviewCount: 521,
    touristiness: 2
  },
  {
    name: "Copper Rail Roasters",
    country: "United States",
    city: "New York",
    neighborhood: "Chelsea",
    vibes: ["Modern", "Lively"],
    starRating: 4.3,
    reviewCount: 1420,
    touristiness: 4
  },
  {
    name: "Moss & Mug",
    country: "United States",
    city: "New York",
    neighborhood: "Greenpoint",
    vibes: ["Rustic", "Local hidden gem", "Cozy"],
    starRating: 4.7,
    reviewCount: 389,
    touristiness: 1
  },
  {
    name: "Neon Drip",
    country: "United States",
    city: "New York",
    neighborhood: "Lower East Side",
    vibes: ["Kitsch / Eclectic", "Lively", "Modern"],
    starRating: 4.2,
    reviewCount: 910,
    touristiness: 4
  },
  {
    name: "Harbor Light Cafe",
    country: "United States",
    city: "New York",
    neighborhood: "DUMBO",
    vibes: ["Artsy", "Modern", "Lively"],
    starRating: 4.5,
    reviewCount: 1102,
    touristiness: 4
  },
  {
    name: "Stillwater Brew Bar",
    country: "United States",
    city: "New York",
    neighborhood: "Park Slope",
    vibes: ["Quiet / Study-friendly", "Local hidden gem"],
    starRating: 4.9,
    reviewCount: 276,
    touristiness: 1
  },
  {
    name: "Grandstand Coffee",
    country: "United States",
    city: "New York",
    neighborhood: "Midtown",
    vibes: ["Modern", "Lively"],
    starRating: 4.1,
    reviewCount: 1980,
    touristiness: 5
  },
  // Chicago
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
    name: "Lakeview Lattes",
    country: "United States",
    city: "Chicago",
    neighborhood: "Lakeview",
    vibes: ["Cozy", "Lively"],
    starRating: 4.4,
    reviewCount: 734,
    touristiness: 2
  },
  {
    name: "Wicker Park Workshop",
    country: "United States",
    city: "Chicago",
    neighborhood: "Wicker Park",
    vibes: ["Artsy", "Kitsch / Eclectic", "Modern"],
    starRating: 4.6,
    reviewCount: 891,
    touristiness: 3
  },
  {
    name: "Loop Rush Espresso",
    country: "United States",
    city: "Chicago",
    neighborhood: "The Loop",
    vibes: ["Modern", "Lively"],
    starRating: 4.0,
    reviewCount: 1650,
    touristiness: 5
  },
  {
    name: "Hyde Park Hideout",
    country: "United States",
    city: "Chicago",
    neighborhood: "Hyde Park",
    vibes: ["Quiet / Study-friendly", "Rustic", "Local hidden gem"],
    starRating: 4.7,
    reviewCount: 318,
    touristiness: 1
  },
  // San Francisco
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
    name: "Fogline Coffee",
    country: "United States",
    city: "San Francisco",
    neighborhood: "Noe Valley",
    vibes: ["Cozy", "Local hidden gem"],
    starRating: 4.8,
    reviewCount: 445,
    touristiness: 2
  },
  {
    name: "Cable Car Cup",
    country: "United States",
    city: "San Francisco",
    neighborhood: "Union Square",
    vibes: ["Modern", "Lively"],
    starRating: 4.2,
    reviewCount: 2100,
    touristiness: 5
  },
  {
    name: "Painted Mug Studio",
    country: "United States",
    city: "San Francisco",
    neighborhood: "Hayes Valley",
    vibes: ["Kitsch / Eclectic", "Artsy"],
    starRating: 4.6,
    reviewCount: 602,
    touristiness: 3
  },
  {
    name: "Redwood Retreat",
    country: "United States",
    city: "San Francisco",
    neighborhood: "Inner Sunset",
    vibes: ["Rustic", "Quiet / Study-friendly", "Cozy"],
    starRating: 4.7,
    reviewCount: 388,
    touristiness: 1
  },
  // Boston
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
    name: "Harborline Brew",
    country: "United States",
    city: "Boston",
    neighborhood: "North End",
    vibes: ["Lively", "Modern"],
    starRating: 4.3,
    reviewCount: 1280,
    touristiness: 4
  },
  {
    name: "Cambridge Commons",
    country: "United States",
    city: "Boston",
    neighborhood: "Cambridge",
    vibes: ["Quiet / Study-friendly", "Cozy"],
    starRating: 4.8,
    reviewCount: 556,
    touristiness: 2
  },
  {
    name: "South End Sippers",
    country: "United States",
    city: "Boston",
    neighborhood: "South End",
    vibes: ["Artsy", "Local hidden gem"],
    starRating: 4.5,
    reviewCount: 412,
    touristiness: 2
  },
  // Seattle
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
    name: "Rain City Roasters",
    country: "United States",
    city: "Seattle",
    neighborhood: "Capitol Hill",
    vibes: ["Modern", "Lively", "Artsy"],
    starRating: 4.4,
    reviewCount: 987,
    touristiness: 3
  },
  {
    name: "Pike Pour House",
    country: "United States",
    city: "Seattle",
    neighborhood: "Pike Place",
    vibes: ["Lively", "Modern"],
    starRating: 4.1,
    reviewCount: 1750,
    touristiness: 5
  },
  {
    name: "Evergreen Nook",
    country: "United States",
    city: "Seattle",
    neighborhood: "Ballard",
    vibes: ["Rustic", "Cozy", "Local hidden gem"],
    starRating: 4.7,
    reviewCount: 334,
    touristiness: 1
  },
  // Los Angeles
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
    name: "Sunset Strip Espresso",
    country: "United States",
    city: "Los Angeles",
    neighborhood: "Hollywood",
    vibes: ["Lively", "Kitsch / Eclectic"],
    starRating: 4.0,
    reviewCount: 1520,
    touristiness: 5
  },
  {
    name: "Venice Vibe Cafe",
    country: "United States",
    city: "Los Angeles",
    neighborhood: "Venice",
    vibes: ["Artsy", "Lively", "Modern"],
    starRating: 4.5,
    reviewCount: 890,
    touristiness: 4
  },
  {
    name: "Silver Lake Still",
    country: "United States",
    city: "Los Angeles",
    neighborhood: "Silver Lake",
    vibes: ["Local hidden gem", "Cozy", "Artsy"],
    starRating: 4.8,
    reviewCount: 467,
    touristiness: 2
  },
  // Portland
  {
    name: "Pine & Mug",
    country: "United States",
    city: "Portland",
    neighborhood: "Alberta Arts District",
    vibes: ["Artsy", "Cozy", "Rustic"],
    starRating: 4.7,
    reviewCount: 637,
    touristiness: 2
  },
  {
    name: "Rose City Roastery",
    country: "United States",
    city: "Portland",
    neighborhood: "Pearl District",
    vibes: ["Modern", "Rustic"],
    starRating: 4.5,
    reviewCount: 812,
    touristiness: 3
  },
  {
    name: "Hawthorne Hideaway",
    country: "United States",
    city: "Portland",
    neighborhood: "Hawthorne",
    vibes: ["Kitsch / Eclectic", "Local hidden gem", "Cozy"],
    starRating: 4.6,
    reviewCount: 298,
    touristiness: 1
  },
  {
    name: "Bridgeport Brew Lab",
    country: "United States",
    city: "Portland",
    neighborhood: "Division",
    vibes: ["Quiet / Study-friendly", "Modern"],
    starRating: 4.4,
    reviewCount: 544,
    touristiness: 2
  },
  // International samples
  {
    name: "Canal Corner",
    country: "Netherlands",
    city: "Amsterdam",
    neighborhood: "Jordaan",
    vibes: ["Cozy", "Artsy", "Local hidden gem"],
    starRating: 4.7,
    reviewCount: 623,
    touristiness: 3
  },
  {
    name: "De Pijp Pour",
    country: "Netherlands",
    city: "Amsterdam",
    neighborhood: "De Pijp",
    vibes: ["Lively", "Modern"],
    starRating: 4.4,
    reviewCount: 891,
    touristiness: 4
  },
  {
    name: "Left Bank Lattes",
    country: "France",
    city: "Paris",
    neighborhood: "Saint-Germain",
    vibes: ["Rustic", "Cozy", "Quiet / Study-friendly"],
    starRating: 4.6,
    reviewCount: 1104,
    touristiness: 4
  },
  {
    name: "Marais Modern",
    country: "France",
    city: "Paris",
    neighborhood: "Le Marais",
    vibes: ["Modern", "Artsy", "Kitsch / Eclectic"],
    starRating: 4.5,
    reviewCount: 756,
    touristiness: 4
  },
  {
    name: "Shoreditch Steam",
    country: "United Kingdom",
    city: "London",
    neighborhood: "Shoreditch",
    vibes: ["Artsy", "Lively", "Modern"],
    starRating: 4.4,
    reviewCount: 1340,
    touristiness: 4
  },
  {
    name: "Notting Hill Nook",
    country: "United Kingdom",
    city: "London",
    neighborhood: "Notting Hill",
    vibes: ["Cozy", "Local hidden gem"],
    starRating: 4.8,
    reviewCount: 489,
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
  countryInput: document.getElementById("country-input"),
  countryList: document.getElementById("country-list"),
  cityInput: document.getElementById("city-input"),
  cityList: document.getElementById("city-list"),
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

function fillDatalist(listEl, options) {
  listEl.innerHTML = "";
  options.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    listEl.appendChild(option);
  });
}

function matchCanonical(input, options) {
  const trimmed = input.trim();
  if (!trimmed) return "";
  const lower = trimmed.toLowerCase();
  return options.find((opt) => opt.toLowerCase() === lower) || "";
}

function getCountries() {
  return uniqueSorted(shops.map((shop) => shop.country));
}

function getCitiesForCountry(country) {
  if (!country) return [];
  return uniqueSorted(
    shops.filter((shop) => shop.country === country).map((shop) => shop.city)
  );
}

function getResolvedCountry() {
  return matchCanonical(ui.countryInput.value, getCountries());
}

function getResolvedCity() {
  const country = getResolvedCountry();
  if (!country) return "";
  return matchCanonical(ui.cityInput.value, getCitiesForCountry(country));
}

function initCountryDatalist() {
  fillDatalist(ui.countryList, getCountries());
}

function updateCityDatalist() {
  const country = getResolvedCountry();
  const cities = getCitiesForCountry(country);
  fillDatalist(ui.cityList, cities);
  ui.cityInput.disabled = !country;
  if (!country) {
    ui.cityInput.value = "";
  }
}

function syncLocationFromInput() {
  const country = getResolvedCountry();
  if (country && ui.countryInput.value.trim().toLowerCase() !== country.toLowerCase()) {
    ui.countryInput.value = country;
  }
  updateCityDatalist();
  const city = getResolvedCity();
  if (city && ui.cityInput.value.trim().toLowerCase() !== city.toLowerCase()) {
    ui.cityInput.value = city;
  }
}

function initVibeOptions() {
  selectedVibes.forEach((vibe) => {
    const option = document.createElement("option");
    option.value = vibe;
    option.textContent = vibe;
    ui.vibeSelect.appendChild(option);
  });
}

function hasRequiredSelections() {
  return Boolean(getResolvedCountry() && getResolvedCity() && ui.vibeSelect.value);
}

function updateSecondaryFiltersVisibility() {
  ui.secondaryFilters.classList.toggle("hidden", !hasRequiredSelections());
}

function filterShops() {
  if (!hasRequiredSelections()) {
    return [];
  }

  const selectedCountry = getResolvedCountry();
  const selectedCity = getResolvedCity();
  const desiredVibe = ui.vibeSelect.value;
  const minRating = Number(ui.minRating.value);
  const minReviews = Number(ui.minReviews.value);
  const neighborhoodQuery = ui.neighborhood.value.trim().toLowerCase();
  const maxTouristy = Number(ui.maxTouristy.value);

  return shops.filter((shop) => {
    const countryOk = shop.country === selectedCountry;
    const cityOk = shop.city === selectedCity;
    const vibeOk = shop.vibes.includes(desiredVibe);
    const ratingOk = shop.starRating >= minRating;
    const reviewsOk = shop.reviewCount >= minReviews;
    const neighborhoodOk =
      !neighborhoodQuery || shop.neighborhood.toLowerCase().includes(neighborhoodQuery);
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
    const vibeScore = shop.vibes.includes(desiredVibe) ? 1 : 0;
    const ratingScore = shop.starRating / 5;
    const reviewScore = maxReviews === 0 ? 0 : shop.reviewCount / maxReviews;
    const localScore = (6 - shop.touristiness) / 5;
    const neighborhoodBoost =
      neighborhoodQuery && shop.neighborhood.toLowerCase().includes(neighborhoodQuery) ? 1 : 0;

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
  if (!hasRequiredSelections()) {
    ui.resultCount.textContent = "Choose country, city, and vibe to see matches.";
    ui.resultsList.innerHTML = "";
    return;
  }

  const filtered = filterShops();
  const ranked = rankShops(filtered);

  ui.resultCount.textContent =
    ranked.length === 0
      ? "No shops match your filters. Try lowering minimum rating or review count."
      : `${ranked.length} matching shop${ranked.length === 1 ? "" : "s"} (ranked best match first)`;

  ui.resultsList.innerHTML = "";

  ranked.forEach((shop, index) => {
    const item = document.createElement("li");
    item.className = "result-item";
    item.innerHTML = `
      <h3 class="result-title">#${index + 1} ${shop.name}</h3>
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
  ui.countryInput.value = "";
  ui.cityInput.value = "";
  ui.cityInput.disabled = true;
  updateCityDatalist();
  ui.vibeSelect.value = "";
  ui.minRating.value = "3.0";
  ui.minReviews.value = "0";
  ui.neighborhood.value = "";
  ui.maxTouristy.value = "5";
  syncLabels();
  updateSecondaryFiltersVisibility();
  renderResults();
}

function attachEvents() {
  ui.countryInput.addEventListener("input", () => {
    const prevCountry = getResolvedCountry();
    updateCityDatalist();
    const nextCountry = getResolvedCountry();
    if (prevCountry !== nextCountry) {
      ui.cityInput.value = "";
    }
    updateSecondaryFiltersVisibility();
    renderResults();
  });

  ui.countryInput.addEventListener("change", () => {
    syncLocationFromInput();
    updateSecondaryFiltersVisibility();
    renderResults();
  });

  ui.cityInput.addEventListener("input", () => {
    updateSecondaryFiltersVisibility();
    renderResults();
  });

  ui.cityInput.addEventListener("change", () => {
    syncLocationFromInput();
    updateSecondaryFiltersVisibility();
    renderResults();
  });

  ui.vibeSelect.addEventListener("input", () => {
    updateSecondaryFiltersVisibility();
    renderResults();
  });

  [ui.minRating, ui.minReviews, ui.neighborhood, ui.maxTouristy].forEach((el) => {
    el.addEventListener("input", () => {
      syncLabels();
      renderResults();
    });
  });

  ui.resetBtn.addEventListener("click", resetFilters);
}

initVibeOptions();
initCountryDatalist();
updateCityDatalist();
attachEvents();
syncLabels();
updateSecondaryFiltersVisibility();
renderResults();
