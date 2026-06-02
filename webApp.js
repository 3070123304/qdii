(function initWebApp() {
  const page = window.__miniPage;

  if (!page || !page.data) {
    document.body.innerHTML = '<p style="padding:24px;font-family:sans-serif;">页面数据加载失败</p>';
    return;
  }

  page.setData = function setData(updates, callback) {
    this.data = Object.assign({}, this.data, updates);
    if (typeof callback === 'function') callback.call(this);
  };

  const $ = (selector) => document.querySelector(selector);
  const updateDateLabel = $('#updateDateLabel');
  const glanceTitle = $('#glanceTitle');
  const glanceText = $('#glanceText');
  const coreStats = $('#coreStats');
  const searchInput = $('#searchInput');
  const searchClear = $('#searchClear');
  const categoryTabs = $('#categoryTabs');
  const fundList = $('#fundList');
  const sortButtons = Array.from(document.querySelectorAll('[data-sort-key]'));

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function renderCoreStats() {
    const marketCards = page.data.marketIndexes.map((item) => `
      <div class="core-stat market-stat">
        <span class="market-index-name">${escapeHtml(item.name)}</span>
        <div class="core-value-row">
          <span class="market-index-value">${escapeHtml(item.value)}</span>
          <span class="market-index-change ${escapeHtml(item.changeClass)}">${escapeHtml(item.change)}</span>
        </div>
      </div>
    `).join('');

    coreStats.innerHTML = `
      <div class="core-stat">
        <span class="core-label">可买基金</span>
        <div class="core-value-row">
          <span class="core-value">${escapeHtml(page.data.buyableCount)}</span>
          <span class="core-unit">只</span>
          <span class="core-delta ${escapeHtml(page.data.buyableDeltaClass)}">${escapeHtml(page.data.buyableDelta)}</span>
        </div>
      </div>
      <div class="core-stat">
        <span class="core-label">可购额度</span>
        <div class="core-value-row">
          <span class="core-value">${escapeHtml(page.data.avgLimit)}</span>
          <span class="core-unit">元</span>
          <span class="core-delta ${escapeHtml(page.data.avgDeltaClass)}">${escapeHtml(page.data.avgDelta)}</span>
        </div>
      </div>
      ${marketCards}
    `;
  }

  function renderCategories() {
    categoryTabs.innerHTML = page.data.fundCategories.map((item) => `
      <button class="category-tab ${escapeHtml(item.activeClass)}" type="button" data-category="${escapeHtml(item.key)}">
        ${escapeHtml(item.label)}
      </button>
    `).join('');

    categoryTabs.querySelectorAll('[data-category]').forEach((button) => {
      button.addEventListener('click', () => {
        page.setData({ activeCategory: button.dataset.category });
        refreshVisibleFunds();
      });
    });
  }

  function renderSortState() {
    sortButtons.forEach((button) => {
      button.classList.remove('th-sort--active', 'th-sort--asc', 'th-sort--desc');
      if (button.dataset.sortKey === page.data.sortKey) {
        button.classList.add('th-sort--active', `th-sort--${page.data.sortDirection}`);
      }
    });
  }

  function renderFunds() {
    const rows = page.data.visibleFunds.map((item) => `
      <div class="fund-row">
        <div class="td-name">
          <div class="name-wrap">
            <div class="fund-name">${escapeHtml(item.name)}</div>
            <div class="fund-meta">
              <span class="fund-code">${escapeHtml(item.code)}</span>
              <span class="fund-status ${escapeHtml(item.statusClass)}">${escapeHtml(item.statusLabel)}</span>
            </div>
          </div>
        </div>
        <div class="td-limit">
          <span class="cell-value ${escapeHtml(item.limitClass)}">${escapeHtml(item.limitText)}</span>
        </div>
        <div class="td-return">
          <span class="cell-value ${escapeHtml(item.returnClass)}">${escapeHtml(item.returnText)}</span>
        </div>
      </div>
    `).join('');

    fundList.innerHTML = rows || '<div class="empty-state">没有匹配的基金</div>';
  }

  function render() {
    updateDateLabel.textContent = page.data.updateDateLabel;
    glanceTitle.textContent = page.data.glanceTitle;
    glanceText.textContent = page.data.glanceText;
    searchInput.value = page.data.searchKeyword;
    searchClear.classList.toggle('is-visible', Boolean(page.data.searchKeyword));

    renderCoreStats();
    renderCategories();
    renderSortState();
    renderFunds();
  }

  function refreshVisibleFunds() {
    const visibleFunds = page.getVisibleFunds();
    page.setData({
      fundCategories: page.getFundCategories(),
      visibleFunds,
      visibleCount: visibleFunds.length,
    });
    render();
  }

  searchInput.addEventListener('input', () => {
    page.setData({ searchKeyword: searchInput.value || '' });
    refreshVisibleFunds();
  });

  searchClear.addEventListener('click', () => {
    page.setData({ searchKeyword: '' });
    refreshVisibleFunds();
  });

  sortButtons.forEach((button) => {
    button.addEventListener('click', () => {
      page.onSortTap({
        currentTarget: {
          dataset: {
            sortKey: button.dataset.sortKey,
          },
        },
      });
      render();
    });
  });

  page.renderPage();
  render();
}());
