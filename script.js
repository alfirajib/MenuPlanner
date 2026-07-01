const MENU_DATA = [
  {
    id: "m01",
    name: "Nasi Putih",
    category: "Pokok",
    calories: 180,
    price: 5000,

    img: "images/nasi-putih.jpg",
  },
  {
    id: "m02",
    name: "Nasi Goreng Spesial",
    category: "Pokok",
    calories: 450,
    price: 18000,

    img: "images/nasi-goreng.jpg",
  },
  {
    id: "m03",
    name: "Mie Goreng Jawa",
    category: "Pokok",
    calories: 380,
    price: 16000,

    img: "images/mie-jawa.jpg",
  },
  {
    id: "m04",
    name: "Spaghetti Aglio Olio",
    category: "Pokok",
    calories: 420,
    price: 28000,

    img: "images/spageti.jpg",
  },
  {
    id: "m05",
    name: "Kentang Panggang",
    category: "Pokok",
    calories: 220,
    price: 15000,

    img: "images/kentang.jpg",
  },
  {
    id: "m06",
    name: "Roti Gandum (2 lembar)",
    category: "Pokok",
    calories: 160,
    price: 8000,

    img: "images/gandum.jpg",
  },

  {
    id: "m07",
    name: "Ayam Goreng Tepung",
    category: "LaukPauk",
    calories: 300,
    price: 17000,

    img: "images/ayam.jpg",
  },
  {
    id: "m08",
    name: "Ayam Bakar Madu",
    category: "LaukPauk",
    calories: 280,
    price: 20000,

    img: "images/ayam-bakar.jpg",
  },
  {
    id: "m09",
    name: "Rendang Daging Sapi",
    category: "LaukPauk",
    calories: 380,
    price: 32000,

    img: "images/rendang.jpg",
  },
  {
    id: "m10",
    name: "Tempe Orek",
    category: "LaukPauk",
    calories: 150,
    price: 8000,

    img: "images/tempe.jpg",
  },
  {
    id: "m11",
    name: "Tahu Goreng",
    category: "LaukPauk",
    calories: 120,
    price: 6000,

    img: "images/tahu.jpg",
  },
  {
    id: "m12",
    name: "Ikan Nila Bakar",
    category: "LaukPauk",
    calories: 250,
    price: 22000,

    img: "images/ikan-nila.jpg",
  },
  {
    id: "m13",
    name: "Telur Dadar",
    category: "LaukPauk",
    calories: 190,
    price: 7000,

    img: "images/telur-dadar.jpg",
  },
  {
    id: "m14",
    name: "Beef Steak Sirloin",
    category: "LaukPauk",
    calories: 420,
    price: 45000,

    img: "images/steak.jpg",
  },

  {
    id: "m15",
    name: "Tumis Kangkung",
    category: "Sayur",
    calories: 90,
    price: 9000,

    img: "images/kangkung.jpg",
  },
  {
    id: "m16",
    name: "Sayur Asem",
    category: "Sayur",
    calories: 70,
    price: 8000,

    img: "images/sayur-asem.jpg",
  },
  {
    id: "m17",
    name: "Capcay Kuah",
    category: "Sayur",
    calories: 110,
    price: 13000,

    img: "images/capcay.jpg",
  },
  {
    id: "m18",
    name: "Salad Sayur Segar",
    category: "Sayur",
    calories: 80,
    price: 14000,

    img: "images/salad-sayur.jpg",
  },
  {
    id: "m19",
    name: "Gado-Gado",
    category: "Sayur",
    calories: 280,
    price: 16000,

    img: "images/gado-gado.jpg",
  },

  {
    id: "m20",
    name: "Pisang (1 buah)",
    category: "Buah",
    calories: 105,
    price: 5000,

    img: "images/pisang.jpg",
  },
  {
    id: "m21",
    name: "Apel Fuji (1 buah)",
    category: "Buah",
    calories: 95,
    price: 7000,

    img: "images/apel.jpg",
  },
  {
    id: "m22",
    name: "Semangka (1 potong)",
    category: "Buah",
    calories: 60,
    price: 6000,

    img: "images/semangka.jpg",
  },
  {
    id: "m23",
    name: "Fruit Salad Cup",
    category: "Buah",
    calories: 140,
    price: 17000,

    img: "images/fruitsalad.jpg",
  },

  {
    id: "m24",
    name: "Es Teh Manis",
    category: "Minuman",
    calories: 90,
    price: 5000,

    img: "images/es-teh.jpg",
  },
  {
    id: "m25",
    name: "Air Mineral 600ml",
    category: "Minuman",
    calories: 0,
    price: 4000,

    img: "images/air-putih.jpg",
  },
  {
    id: "m26",
    name: "Jus Alpukat",
    category: "Minuman",
    calories: 230,
    price: 18000,

    img: "images/jus-alpukat.jpg",
  },
];

const CATEGORIES = [
  { key: "Pokok", label: "Makanan Pokok" },
  { key: "LaukPauk", label: "Lauk-Pauk" },
  { key: "Sayur", label: "Sayur" },
  { key: "Buah", label: "Buah" },
  { key: "Minuman", label: "Minuman" },
];

/* ---------------------------------------------------------
   Helpers
   --------------------------------------------------------- */
function formatRupiah(n) {
  return "Rp " + n.toLocaleString("id-ID");
}
function formatKalori(n) {
  return n.toLocaleString("id-ID") + " kkal";
}
function categoryLabel(key) {
  const found = CATEGORIES.find((c) => c.key === key);
  return found ? found.label : key;
}
function thumbHtml(item) {
  if (item.img) {
    // this.replaceWith(...) -> kalau gambar gagal dimuat (file tidak
    // ditemukan / nama salah), otomatis diganti kembali ke emoji.
    const fallback = document.createElement("span");
    fallback.textContent = item.emoji;
    return `<img src="${item.img}" alt="${item.name}" loading="lazy"
      onerror="this.replaceWith(Object.assign(document.createElement('span'),{textContent:'${item.emoji}'}))">`;
  }
  return item.emoji;
}

const pages = {
  landing: document.getElementById("page-landing"),
  planner: document.getElementById("page-planner"),
};
document.querySelectorAll("[data-nav]").forEach((el) => {
  el.addEventListener("click", () => {
    const target = el.getAttribute("data-nav");
    Object.entries(pages).forEach(([key, node]) => {
      node.classList.toggle("page--hidden", key !== target);
    });
    window.scrollTo({
      top: 0,
      behavior: "instant" in window ? "instant" : "auto",
    });
  });
});

function renderHighlights() {
  const grid = document.getElementById("highlight-grid");
  const favoriteIds = ["m02", "m09", "m14", "m19", "m24", "m26", "m03", "m20"];
  favoriteIds.forEach((id) => {
    const item = MENU_DATA.find((m) => m.id === id);
    if (!item) return;

    const card = document.createElement("div");
    card.className = "hcard";

    const img = document.createElement("div");
    img.className = `hcard-img cat-${item.category}`;
    img.innerHTML = thumbHtml(item);

    const body = document.createElement("div");
    body.className = "hcard-body";

    const name = document.createElement("div");
    name.className = "hcard-name";
    name.textContent = item.name;

    const meta = document.createElement("div");
    meta.className = "hcard-meta";
    meta.innerHTML = `<span>${formatKalori(item.calories)}</span><span>${formatRupiah(item.price)}</span>`;

    body.appendChild(name);
    body.appendChild(meta);
    card.appendChild(img);
    card.appendChild(body);
    grid.appendChild(card);
  });
}

let activeFilter = "all";

function renderFilters() {
  const wrap = document.getElementById("category-filters");
  const chips = [{ key: "all", label: "Semua" }, ...CATEGORIES];

  chips.forEach((c) => {
    const btn = document.createElement("button");
    btn.className = "filter-chip" + (c.key === "all" ? " is-active" : "");
    btn.textContent = c.label;
    btn.dataset.filter = c.key;
    btn.addEventListener("click", () => {
      activeFilter = c.key;
      document
        .querySelectorAll(".filter-chip")
        .forEach((b) =>
          b.classList.toggle("is-active", b.dataset.filter === activeFilter),
        );
      applyFilter();
    });
    wrap.appendChild(btn);
  });
}

function applyFilter() {
  document.querySelectorAll("#menu-tbody tr").forEach((row) => {
    const match =
      activeFilter === "all" || row.dataset.category === activeFilter;
    row.style.display = match ? "" : "none";
  });
}

function renderMenuTable() {
  const tbody = document.getElementById("menu-tbody");

  MENU_DATA.forEach((item) => {
    const tr = document.createElement("tr");
    tr.dataset.category = item.category;
    tr.dataset.id = item.id;

    // Gambar
    const tdImg = document.createElement("td");
    tdImg.className = "col-img";
    const thumb = document.createElement("div");
    thumb.className = `row-thumb cat-${item.category}`;
    thumb.innerHTML = thumbHtml(item);
    tdImg.appendChild(thumb);

    // Nama
    const tdName = document.createElement("td");
    tdName.className = "col-name row-name";
    tdName.textContent = item.name;

    // Kategori
    const tdCat = document.createElement("td");
    tdCat.className = "col-cat";
    const tag = document.createElement("span");
    tag.className = `cat-tag tag-${item.category}`;
    tag.textContent = categoryLabel(item.category);
    tdCat.appendChild(tag);

    // Kalori
    const tdCal = document.createElement("td");
    tdCal.className = "col-cal";
    tdCal.textContent = formatKalori(item.calories);

    // Harga
    const tdPrice = document.createElement("td");
    tdPrice.className = "col-price";
    tdPrice.textContent = formatRupiah(item.price);

    // Checkbox
    const tdPick = document.createElement("td");
    tdPick.className = "col-pick";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "pick-checkbox";
    checkbox.id = `chk-${item.id}`;
    checkbox.dataset.id = item.id;
    checkbox.addEventListener("change", () => {
      tr.classList.toggle("is-checked", checkbox.checked);
      updateResults();
    });
    tdPick.appendChild(checkbox);

    tr.appendChild(tdImg);
    tr.appendChild(tdName);
    tr.appendChild(tdCat);
    tr.appendChild(tdCal);
    tr.appendChild(tdPrice);
    tr.appendChild(tdPick);

    tbody.appendChild(tr);
  });
}

function renderChecklist() {
  const list = document.getElementById("category-checklist");
  CATEGORIES.forEach((c) => {
    const li = document.createElement("li");
    li.dataset.category = c.key;
    li.innerHTML = `<span class="check-dot">✓</span><span>${c.label}</span>`;
    list.appendChild(li);
  });
}

function updateResults() {
  const checkedBoxes = Array.from(
    document.querySelectorAll(".pick-checkbox:checked"),
  );
  const checkedItems = checkedBoxes.map((cb) =>
    MENU_DATA.find((m) => m.id === cb.dataset.id),
  );

  const totalKalori = checkedItems.reduce(
    (sum, item) => sum + item.calories,
    0,
  );
  const totalHarga = checkedItems.reduce((sum, item) => sum + item.price, 0);
  document.getElementById("total-kalori").textContent =
    formatKalori(totalKalori);
  document.getElementById("total-harga").textContent = formatRupiah(totalHarga);

  const stackZone = document.getElementById("stack-zone");
  stackZone.innerHTML = "";
  if (checkedItems.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.id = "empty-state";
    empty.innerHTML =
      "Belum ada menu dipilih.<br>Centang menu di tabel untuk mulai.";
    stackZone.appendChild(empty);
  } else {
    checkedItems.forEach((item) => {
      const thumb = document.createElement("div");
      thumb.className = `stack-thumb cat-${item.category}`;
      thumb.title = item.name;
      thumb.innerHTML = thumbHtml(item);
      stackZone.appendChild(thumb);
    });
  }

  const fulfilledCategories = new Set(
    checkedItems.map((item) => item.category),
  );

  CATEGORIES.forEach((c) => {
    const li = document.querySelector(
      `#category-checklist li[data-category="${c.key}"]`,
    );
    li.classList.toggle("is-met", fulfilledCategories.has(c.key));
  });

  const isBalanced = CATEGORIES.every((c) => fulfilledCategories.has(c.key));
  document
    .getElementById("balanced-badge")
    .classList.toggle("is-visible", isBalanced);
}

renderHighlights();
renderFilters();
renderMenuTable();
renderChecklist();
updateResults();
