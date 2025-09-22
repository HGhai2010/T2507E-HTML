document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("productGrid");
  const items = Array.from(grid.querySelectorAll(".product-item"));
  const buttons = document.querySelectorAll(".btn");
  const searchInput = document.getElementById("searchInput");
  const sortSelect = document.getElementById("sort");

  // 🔹 Load More button
  const loadMoreBtn = document.createElement("button");
  loadMoreBtn.textContent = "Load more";
  loadMoreBtn.className = "load-more-btn";
  grid.insertAdjacentElement("afterend", loadMoreBtn);

  let batchSize = 3;
  let loaded = 0;
  let filtered = [...items];

  function renderProducts(reset = false) {
    if (reset) {
      loaded = 0;
      items.forEach(i => (i.style.display = "none"));
    }
    const next = filtered.slice(loaded, loaded + batchSize);
    next.forEach(item => (item.style.display = "block"));
    loaded += batchSize;
    loadMoreBtn.style.display = loaded >= filtered.length ? "none" : "block";
  }

  // --- Filter, Sort, Search ---
  let currentFilter = "all";
  let searchQuery = "";
  let sortBy = sortSelect.value;

  function applyFilters() {
    filtered = items.filter(item => {
      const matchesFilter = currentFilter === "all" || item.dataset.category === currentFilter;
      const matchesSearch = item.dataset.name.toLowerCase().includes(searchQuery);
      return matchesFilter && matchesSearch;
    });

    filtered.sort((a, b) => {
      return sortBy === "name"
        ? a.dataset.name.localeCompare(b.dataset.name, undefined, { sensitivity: "base" })
        : b.dataset.year - a.dataset.year;
    });

    renderProducts(true);
  }

  // --- Events ---
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      applyFilters();
    });
  });

  searchInput.addEventListener("input", e => {
    searchQuery = e.target.value.trim().toLowerCase();
    applyFilters();
  });

  sortSelect.addEventListener("change", e => {
    sortBy = e.target.value;
    applyFilters();
  });

  loadMoreBtn.addEventListener("click", () => renderProducts());

  // --- Modal ---
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const closeBtn = document.querySelector(".modal .close");

  grid.addEventListener("click", e => {
    const btn = e.target.closest(".viewBtn");
    if (!btn) return;
    const parent = btn.closest(".product-item");
    modalTitle.textContent = parent.dataset.name;
    modalDesc.textContent = `Năm phát hành: ${parent.dataset.year} — Danh mục: ${parent.dataset.category}`;
    modal.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => (modal.style.display = "none"));
  window.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
  });
  window.addEventListener("keydown", e => {
    if (e.key === "Escape") modal.style.display = "none";
  });

  // 🔹 Khởi động
  applyFilters();
});
document.addEventListener("DOMContentLoaded", () => {
  const backToTop = document.querySelector(".back-to-top");

  backToTop.addEventListener("click", e => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});