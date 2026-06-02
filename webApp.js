(function initWebApp() {
  const mockData = window.mockData;

  if (!mockData) {
    document.body.innerHTML = '<p style="padding:24px;font-family:sans-serif;">mockData.js 加载失败</p>';
    return;
  }

  const state = {
    activeCategory: 'broad',
    sortKey: 'limit',
    sortDirection: 'desc',
    searchKeyword: '',
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

  function yuanFromLimitText(text) {
    if (!text || String(text).includes('暂停')) return 0;
    const value = parseInt(String(text).replace(/[^\d]/g, ''), 10);
    return Number.isFinite(value) ? value : 0;
  }

  function parseLimitNum(text) {
    if (!text || String(text).includes('暂停')) return -1;
    const value = parseInt(String(text).replace(/[^\d]/g, ''), 10);
    return Number.isFinite(value) ? value : 0;
  }

  function formatThousands(num) {
    const value = Math.round(Number(num)) || 0;
    return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function formatSignedDelta(value) {
    const num = Math.round(Number(value)) || 0;
    if (num > 0) return `较昨 +${formatThousands(num)}`;
    if (num < 0) return `较昨 -${formatThousands(Math.abs(num))}`;
    return '较昨 0';
  }

  function inferFundCategory(item) {
    const name = item.name || '';
    if (item.category) return item.category;
    if (name.includes('生物') || name.includes('科技')) return 'theme';
    return 'broad';
  }

  function getOneYearReturn(item) {
    return item.oneYearReturn || '--';
  }

  function parseReturnNum(item) {
    const returnText = getOneYearReturn(item);
    if (!returnText || returnText === '--') return Number.NEGATIVE_INFINITY;
    const value = parseFloat(String(returnText).replace('%', ''));
    return Number.isFinite(value) ? value : Number.NEGATIVE_INFINITY;
  }

  function getCompanyName(name) {
    const knownCompanies = [
      '汇添富',
      '南方',
      '国泰',
      '摩根',
      '天弘',
      '招商',
      '宝盈',
      '建信',
      '大成',
      '万家',
      '华安',
      '广发',
      '华泰柏瑞',
      '景顺长城',
      '博时',
      '华夏',
      '易方达',
      '嘉实',
    ];
    return knownCompanies.find((company) => String(name || '').startsWith(company)) || '基金';
  }

  function calculateSummary(funds) {
    const purchasableFunds = funds.filter((item) => yuanFromLimitText(item.limitText) > 0);
    return {
      buyableCount: purchasableFunds.length,
      totalLimit: purchasableFunds.reduce((sum, item) => sum + yuanFromLimitText(item.limitText), 0),
    };
  }

  function sortFunds(list) {
    return list.slice().sort((a, b) => {
      const left = state.sortKey === 'return' ? parseReturnNum(a) : parseLimitNum(a.limitText);
      const right = state.sortKey === 'return' ? parseReturnNum(b) : parseLimitNum(b.limitText);
      return state.sortDirection === 'asc' ? left - right : right - left;
    });
  }

  function getVisibleFunds() {
    const keyword = state.searchKeyword.trim().toLowerCase();
    const categoryFunds = mockData.funds.filter((item) => inferFundCategory(item) === state.activeCategory);
    const filteredFunds = keyword
      ? categoryFunds.filter((item) => {
        const companyName = getCompanyName(item.name);
        return [item.name, item.code, companyName].some((value) => String(value || '').toLowerCase().includes(keyword));
      })
      : categoryFunds;

    return sortFunds(filteredFunds).map((item) => {
      const returnText = getOneYearReturn(item);
      const limitValue = yuanFromLimitText(item.limitText);
      const isOpen = limitValue > 0;
      return {
        ...item,
        returnText,
        returnClass: String(returnText).startsWith('-') ? 'td-return--down' : 'td-return--up',
        limitClass: isOpen ? '' : 'limit--closed',
        statusLabel: isOpen ? '可申购' : '暂停',
        statusClass: isOpen ? 'fund-status--open' : 'fund-status--closed',
      };
    });
  }

  function renderCoreStats() {
    const summary = calculateSummary(mockData.funds);
    const previousSummary = mockData.previousSummary || {};
    const buyableDelta = summary.buyableCount - Number(previousSummary.buyableCount || 0);
    const limitDelta = summary.totalLimit - Number(previousSummary.totalLimit || 0);

    const marketCards = mockData.marketIndexes.map((item) => {
      const changeClass = String(item.change || '').startsWith('-') ? 'market-index-change--down' : 'market-index-change--up';
      return `
        <div class="core-stat market-stat">
          <span class="market-index-name">${escapeHtml(item.name)}</span>
          <div class="core-value-row">
            <span class="market-index-value">${escapeHtml(item.value)}</span>
            <span class="market-index-change ${changeClass}">${escapeHtml(item.change)}</span>
          </div>
        </div>
      `;
    }).join('');

    coreStats.innerHTML = `
      <div class="core-stat">
        <span class="core-label">可买基金</span>
        <div class="core-value-row">
          <span class="core-value">${escapeHtml(summary.buyableCount)}</span>
          <span class="core-unit">只</span>
          <span class="core-delta ${buyableDelta < 0 ? 'glance-stat-diff--down' : 'glance-stat-diff--up'}">${escapeHtml(formatSignedDelta(buyableDelta))}</span>
        </div>
      </div>
      <div class="core-stat">
        <span class="core-label">可购额度</span>
        <div class="core-value-row">
          <span class="core-value">${escapeHtml(formatThousands(summary.totalLimit))}</span>
          <span class="core-unit">元</span>
          <span class="core-delta ${limitDelta < 0 ? 'glance-stat-diff--down' : 'glance-stat-diff--up'}">${escapeHtml(formatSignedDelta(limitDelta))}</span>
        </div>
      </div>
      ${marketCards}
    `;
  }

  function renderCategories() {
    categoryTabs.innerHTML = mockData.fundCategories.map((item) => `
      <button class="category-tab ${item.key === state.activeCategory ? 'category-tab--active' : ''}" type="button" data-category="${escapeHtml(item.key)}">
        ${escapeHtml(item.label)}
      </button>
    `).join('');

    categoryTabs.querySelectorAll('[data-category]').forEach((button) => {
      button.addEventListener('click', () => {
        state.activeCategory = button.dataset.category;
        render();
      });
    });
  }

  function renderSortState() {
    sortButtons.forEach((button) => {
      button.classList.remove('th-sort--active', 'th-sort--asc', 'th-sort--desc');
      if (button.dataset.sortKey === state.sortKey) {
        button.classList.add('th-sort--active', `th-sort--${state.sortDirection}`);
      }
    });
  }

  function renderFunds() {
    const visibleFunds = getVisibleFunds();
    fundList.innerHTML = visibleFunds.map((item) => `
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
    `).join('') || '<div class="empty-state">没有匹配的基金</div>';
  }

  function render() {
    updateDateLabel.textContent = mockData.updateDateLabel;
    glanceTitle.textContent = mockData.glanceTitle;
    glanceText.textContent = mockData.glance;
    searchInput.value = state.searchKeyword;
    searchClear.classList.toggle('is-visible', Boolean(state.searchKeyword));
    renderCoreStats();
    renderCategories();
    renderSortState();
    renderFunds();
  }

  searchInput.addEventListener('input', () => {
    state.searchKeyword = searchInput.value || '';
    render();
  });

  searchClear.addEventListener('click', () => {
    state.searchKeyword = '';
    render();
  });

  sortButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const nextSortKey = button.dataset.sortKey;
      if (state.sortKey !== nextSortKey) {
        state.sortKey = nextSortKey;
        state.sortDirection = 'desc';
      } else {
        state.sortDirection = state.sortDirection === 'desc' ? 'asc' : 'desc';
      }
      render();
    });
  });

  render();
}());
