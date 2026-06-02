const mockData = {
  updateDateLabel: '2026-05-31 08:00',
  previousSummary: {
    buyableCount: 32,
    totalLimit: 12190,
  },
  glanceTitle: '今日速览',
  glance: '今日限额无明显变化',
  marketIndexes: [
    { name: '纳斯达克', value: '30333', change: '+0.36%' },
    { name: '标普500', value: '7580', change: '+0.22%' },
  ],
  fundCategories: [
    { key: 'broad', label: '宽基指数' },
    { key: 'theme', label: '行业主题' },
  ],
  funds: [
    { id: '1', category: 'theme', name: '汇添富纳斯达克生物科技ETF发起式联接(QDII)A', code: '017894', limitText: '5000元', oneYearReturn: '+32.28%', updatedAt: '08:00 05-27' },
    { id: '2', category: 'theme', name: '汇添富纳斯达克生物科技ETF发起式联接(QDII)C', code: '017895', limitText: '5000元', oneYearReturn: '+31.95%', updatedAt: '08:00 05-27' },
    { id: '3', name: '南方纳斯达克100指数(QDII)A', code: '016452', limitText: '200元', oneYearReturn: '+30.25%', updatedAt: '08:00 05-27' },
    { id: '4', name: '南方纳斯达克100指数(QDII)C', code: '016453', limitText: '200元', oneYearReturn: '+30.13%', updatedAt: '08:00 05-27' },
    { id: '5', name: '国泰纳斯达克100指数(QDII)', code: '160213', limitText: '100元', oneYearReturn: '+32.17%', updatedAt: '08:00 05-27' },
    { id: '8', name: '摩根纳斯达克100指数(QDII)人民币A', code: '019172', limitText: '100元', oneYearReturn: '+30.63%', updatedAt: '08:00 05-27' },
    { id: '9', name: '天弘纳斯达克100指数发起(QDII)A', code: '018043', limitText: '100元', oneYearReturn: '+30.64%', updatedAt: '08:00 05-27' },
    { id: '10', name: '天弘纳斯达克100指数发起(QDII)C', code: '018044', limitText: '100元', oneYearReturn: '+30.39%', updatedAt: '08:00 05-27' },
    { id: '11', name: '摩根纳斯达克100指数(QDII)人民币C', code: '019173', limitText: '100元', oneYearReturn: '+30.24%', updatedAt: '08:00 05-27' },
    { id: '12', name: '招商纳斯达克100ETF发起式联接(QDII)A', code: '019547', limitText: '100元', oneYearReturn: '+30.00%', updatedAt: '08:00 05-27' },
    { id: '13', name: '宝盈纳斯达克100指数发起(QDII)A人民币', code: '019736', limitText: '100元', oneYearReturn: '+29.69%', updatedAt: '08:00 05-27' },
    { id: '15', name: '招商纳斯达克100ETF发起式联接(QDII)C', code: '019548', limitText: '100元', oneYearReturn: '+29.48%', updatedAt: '08:00 05-27' },
    { id: '16', name: '宝盈纳斯达克100指数发起(QDII)C人民币', code: '019737', limitText: '100元', oneYearReturn: '+29.38%', updatedAt: '08:00 05-27' },
    { id: '14', name: '建信纳斯达克100指数(QDII)A人民币', code: '539001', limitText: '100元', oneYearReturn: '+29.53%', updatedAt: '08:00 05-27' },
    { id: '17', name: '建信纳斯达克100指数(QDII)C人民币', code: '012752', limitText: '100元', oneYearReturn: '+29.15%', updatedAt: '08:00 05-27' },
    { id: '18', name: '建信纳斯达克100指数(QDII)D人民币', code: '023422', limitText: '100元', oneYearReturn: '+29.14%', updatedAt: '08:00 05-27' },
    { id: '19', name: '汇添富纳斯达克100ETF发起式联接(QDII)A', code: '018966', limitText: '100元', oneYearReturn: '+28.68%', updatedAt: '08:00 05-27' },
    { id: '20', name: '汇添富纳斯达克100ETF发起式联接(QDII)E', code: '021773', limitText: '100元', oneYearReturn: '+28.55%', updatedAt: '08:00 05-27' },
    { id: '21', name: '汇添富纳斯达克100ETF发起式联接(QDII)C', code: '018967', limitText: '100元', oneYearReturn: '+28.16%', updatedAt: '08:00 05-27' },
    { id: '6', name: '大成纳斯达克100ETF联接(QDII)A', code: '000834', limitText: '50元', oneYearReturn: '+31.21%', updatedAt: '08:00 05-27' },
    { id: '7', name: '大成纳斯达克100ETF联接(QDII)C', code: '008971', limitText: '50元', oneYearReturn: '+30.81%', updatedAt: '08:00 05-27' },
    { id: '22', name: '万家纳斯达克100指数发起(QDII)A', code: '019441', limitText: '50元', oneYearReturn: '+29.53%', updatedAt: '08:00 05-27' },
    { id: '23', name: '万家纳斯达克100指数发起(QDII)C', code: '019442', limitText: '50元', oneYearReturn: '+29.26%', updatedAt: '08:00 05-27' },
    { id: '26', name: '华安纳斯达克100ETF联接A', code: '040046', limitText: '10元', oneYearReturn: '+31.86%', updatedAt: '08:00 05-27' },
    { id: '27', name: '华安纳斯达克100ETF联接C', code: '014978', limitText: '10元', oneYearReturn: '+31.60%', updatedAt: '08:00 05-27' },
    { id: '28', name: '广发纳斯达克100ETF联接人民币(QDII)A', code: '270042', limitText: '10元', oneYearReturn: '+31.30%', updatedAt: '08:00 05-27' },
    { id: '29', name: '广发纳斯达克100ETF联接人民币(QDII)C', code: '006479', limitText: '10元', oneYearReturn: '+31.04%', updatedAt: '08:00 05-27' },
    { id: '30', name: '华泰柏瑞纳斯达克100ETF发起式联接(QDII)A', code: '019524', limitText: '10元', oneYearReturn: '+29.45%', updatedAt: '08:00 05-27' },
    { id: '24', category: 'theme', name: '广发生物科技指数人民币(QDII)A', code: '001092', limitText: '10元', oneYearReturn: '+31.48%', updatedAt: '08:00 05-27' },
    { id: '31', name: '华泰柏瑞纳斯达克100ETF发起式联接(QDII)I', code: '022664', limitText: '10元', oneYearReturn: '+29.28%', updatedAt: '08:00 05-27' },
    { id: '32', name: '华泰柏瑞纳斯达克100ETF发起式联接(QDII)C', code: '019525', limitText: '10元', oneYearReturn: '+29.13%', updatedAt: '08:00 05-27' },
    { id: '25', category: 'theme', name: '广发生物科技指数人民币(QDII)C', code: '016470', limitText: '10元', oneYearReturn: '+31.03%', updatedAt: '08:00 05-27' },
    { id: '33', category: 'theme', name: '景顺长城纳斯达克科技ETF联接(QDII)A人民币', code: '017091', limitText: '0元', oneYearReturn: '+45.45%', statusText: '暂停买入', updatedAt: '08:00 05-27' },
    { id: '34', category: 'theme', name: '景顺长城纳斯达克科技ETF联接(QDII)E人民币', code: '019118', limitText: '0元', oneYearReturn: '+45.15%', statusText: '暂停买入', updatedAt: '08:00 05-27' },
    { id: '35', category: 'theme', name: '景顺长城纳斯达克科技ETF联接(QDII)C人民币', code: '017093', limitText: '0元', oneYearReturn: '+44.87%', statusText: '暂停买入', updatedAt: '08:00 05-27' },
    { id: '36', name: '博时纳斯达克100ETF发起式联接(QDII)A', code: '016055', limitText: '0元', oneYearReturn: '+31.12%', statusText: '暂停买入', updatedAt: '08:00 05-27' },
    { id: '37', name: '博时纳斯达克100ETF发起式联接(QDII)C', code: '016057', limitText: '0元', oneYearReturn: '+30.72%', statusText: '暂停买入', updatedAt: '08:00 05-27' },
    { id: '38', name: '华夏纳斯达克100ETF发起式联接(QDII)A', code: '015299', limitText: '0元', oneYearReturn: '+30.34%', statusText: '暂停买入', updatedAt: '08:00 05-27' },
    { id: '40', name: '华夏纳斯达克100ETF发起式联接(QDII)C', code: '015300', limitText: '0元', oneYearReturn: '+29.96%', statusText: '暂停买入', updatedAt: '08:00 05-27' },
    { id: '39', name: '易方达纳斯达克100ETF联接(QDII-LOF)A', code: '161130', limitText: '0元', oneYearReturn: '+30.01%', statusText: '暂停买入', updatedAt: '08:00 05-27' },
    { id: '41', name: '嘉实纳斯达克100ETF发起联接(QDII)A人民币', code: '016532', limitText: '0元', oneYearReturn: '+29.90%', statusText: '暂停买入', updatedAt: '08:00 05-27' },
    { id: '42', name: '易方达纳斯达克100ETF联接(QDII-LOF)C', code: '012870', limitText: '0元', oneYearReturn: '+29.61%', statusText: '暂停买入', updatedAt: '08:00 05-27' },
    { id: '43', name: '嘉实纳斯达克100ETF发起联接(QDII)C人民币', code: '016533', limitText: '0元', oneYearReturn: '+29.57%', statusText: '暂停买入', updatedAt: '08:00 05-27' },
  ],
};

function parseLimitNum(text) {
  if (!text || String(text).includes('暂停')) return -1;
  const n = parseInt(String(text).replace(/[^\d]/g, ''), 10);
  return Number.isFinite(n) ? n : 0;
}

function yuanFromLimitText(text) {
  if (!text || String(text).includes('暂停')) return 0;
  const n = parseInt(String(text).replace(/[^\d]/g, ''), 10);
  return Number.isFinite(n) ? n : 0;
}

function formatThousands(num) {
  const n = Math.round(Number(num)) || 0;
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function formatSignedDelta(value) {
  const n = Math.round(Number(value)) || 0;
  if (n > 0) return `较昨 +${formatThousands(n)}`;
  if (n < 0) return `较昨 -${formatThousands(Math.abs(n))}`;
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
  const n = parseFloat(String(returnText).replace('%', ''));
  return Number.isFinite(n) ? n : Number.NEGATIVE_INFINITY;
}

function getCompanyName(name) {
  const knownCompanies = ['汇添富', '南方', '国泰', '摩根', '天弘', '招商', '宝盈', '建信', '大成', '万家', '华安', '广发', '华泰柏瑞', '景顺长城', '博时', '华夏', '易方达', '嘉实'];
  return knownCompanies.find((company) => String(name || '').startsWith(company)) || '基金';
}

function getLogoClass(companyName) {
  const palette = ['logo--blue', 'logo--cyan', 'logo--green', 'logo--orange', 'logo--slate'];
  const code = String(companyName || '').split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return palette[code % palette.length];
}

Page({
  data: {
    loading: true,
    skeletonRows: [1, 2, 3, 4, 5, 6],
    updateDateLabel: mockData.updateDateLabel,
    glanceTitle: mockData.glanceTitle,
    glanceText: mockData.glance,
    marketIndexes: [],
    fundCategories: [],
    funds: mockData.funds,
    visibleFunds: [],
    searchKeyword: '',
    activeCategory: 'broad',
    sortKey: 'limit',
    sortDirection: 'desc',
    buyableCount: 0,
    avgLimit: '0',
    buyableDelta: '0',
    avgDelta: '0',
    totalCount: mockData.funds.length,
    visibleCount: 0,
    limitAlertTitle: '额度平稳',
    limitAlertText: '今日暂无明显额度变化',
    buyableDeltaClass: '',
    avgDeltaClass: '',
    limitSortClass: 'th-sort--active th-sort--desc',
    returnSortClass: '',
  },

  onLoad() {
    setTimeout(() => this.renderPage(), 240);
  },

  renderPage() {
    const summary = this.calculateSummary(this.data.funds);
    const previousSummary = mockData.previousSummary || {};
    const buyableDeltaValue = summary.buyableCount - Number(previousSummary.buyableCount || 0);
    const limitDeltaValue = summary.totalLimit - Number(previousSummary.totalLimit || 0);
    const visibleFunds = this.getVisibleFunds();

    this.setData({
      loading: false,
      marketIndexes: mockData.marketIndexes.map((item, index) => ({
        ...item,
        indexClass: index === 0 ? 'market-index-item--first' : 'market-index-item--second',
        dotClass: index === 0 ? 'market-index-dot--nasdaq' : 'market-index-dot--sp500',
        changeClass: String(item.change || '--').startsWith('-') ? 'market-index-change--down' : 'market-index-change--up',
      })),
      buyableCount: summary.buyableCount,
      avgLimit: formatThousands(summary.totalLimit),
      buyableDelta: formatSignedDelta(buyableDeltaValue),
      avgDelta: formatSignedDelta(limitDeltaValue),
      buyableDeltaClass: buyableDeltaValue < 0 ? 'glance-stat-diff--down' : 'glance-stat-diff--up',
      avgDeltaClass: limitDeltaValue < 0 ? 'glance-stat-diff--down' : 'glance-stat-diff--up',
      limitAlertTitle: limitDeltaValue > 0 ? '额度增加' : (limitDeltaValue < 0 ? '额度下降' : '额度平稳'),
      limitAlertText: limitDeltaValue > 0 ? `今日合计额度增加 ${formatThousands(limitDeltaValue)} 元` : (limitDeltaValue < 0 ? `今日合计额度减少 ${formatThousands(Math.abs(limitDeltaValue))} 元` : '今日暂无明显额度变化'),
      fundCategories: this.getFundCategories(),
      visibleFunds,
      totalCount: this.data.funds.length,
      visibleCount: visibleFunds.length,
    });
  },

  getFundCategories() {
    return mockData.fundCategories.map((item) => ({
      ...item,
      activeClass: item.key === this.data.activeCategory ? 'category-tab--active' : '',
    }));
  },

  calculateSummary(funds) {
    const purchasableFunds = funds.filter((item) => yuanFromLimitText(item.limitText) > 0);
    const buyableCount = purchasableFunds.length;
    const totalLimit = purchasableFunds.reduce((sum, item) => sum + yuanFromLimitText(item.limitText), 0);
    return { buyableCount, totalLimit };
  },

  getVisibleFunds() {
    const keyword = String(this.data.searchKeyword || '').trim().toLowerCase();
    const categoryFunds = this.data.activeCategory === 'all'
      ? this.data.funds
      : this.data.funds.filter((item) => inferFundCategory(item) === this.data.activeCategory);

    const filteredFunds = keyword
      ? categoryFunds.filter((item) => {
        const companyName = getCompanyName(item.name);
        return [item.name, item.code, companyName].some((value) => String(value || '').toLowerCase().includes(keyword));
      })
      : categoryFunds;

    return this.sortFunds(filteredFunds).map((item) => {
      const returnText = getOneYearReturn(item);
      const limitValue = yuanFromLimitText(item.limitText);
      const isOpen = limitValue > 0;
      const companyName = getCompanyName(item.name);
      return {
        ...item,
        companyName,
        logoText: companyName.slice(0, 1),
        logoClass: getLogoClass(companyName),
        returnText,
        returnClass: String(returnText).startsWith('-') ? 'td-return--down' : 'td-return--up',
        limitClass: isOpen ? '' : 'limit--closed',
        statusLabel: isOpen ? '可申购' : '暂停',
        statusClass: isOpen ? 'fund-status--open' : 'fund-status--closed',
      };
    });
  },

  sortFunds(list) {
    const next = list.slice();
    const { sortKey, sortDirection } = this.data;

    next.sort((a, b) => {
      const na = sortKey === 'return' ? parseReturnNum(a) : parseLimitNum(a.limitText);
      const nb = sortKey === 'return' ? parseReturnNum(b) : parseLimitNum(b.limitText);
      return sortDirection === 'asc' ? na - nb : nb - na;
    });
    return next;
  },

  getSortClass(sortKey) {
    if (this.data.sortKey !== sortKey) return '';
    return `th-sort--active th-sort--${this.data.sortDirection}`;
  },

  onCategoryTap(event) {
    this.setData({ activeCategory: event.currentTarget.dataset.category }, () => {
      const visibleFunds = this.getVisibleFunds();
      this.setData({
        fundCategories: this.getFundCategories(),
        visibleFunds,
        visibleCount: visibleFunds.length,
      });
    });
  },

  onSearchInput(event) {
    this.setData({ searchKeyword: event.detail.value || '' }, () => {
      const visibleFunds = this.getVisibleFunds();
      this.setData({
        visibleFunds,
        visibleCount: visibleFunds.length,
      });
    });
  },

  onClearSearch() {
    this.setData({ searchKeyword: '' }, () => {
      const visibleFunds = this.getVisibleFunds();
      this.setData({
        visibleFunds,
        visibleCount: visibleFunds.length,
      });
    });
  },

  onSortTap(event) {
    const sortKey = event.currentTarget.dataset.sortKey;
    let nextSortKey = this.data.sortKey;
    let nextSortDirection = this.data.sortDirection;

    if (nextSortKey !== sortKey) {
      nextSortKey = sortKey;
      nextSortDirection = 'desc';
    } else if (nextSortDirection === 'desc') {
      nextSortDirection = 'asc';
    } else {
      nextSortKey = 'limit';
      nextSortDirection = 'desc';
    }

    this.setData({
      sortKey: nextSortKey,
      sortDirection: nextSortDirection,
    }, () => {
      const visibleFunds = this.getVisibleFunds();
      this.setData({
        limitSortClass: this.getSortClass('limit'),
        returnSortClass: this.getSortClass('return'),
        visibleFunds,
        visibleCount: visibleFunds.length,
      });
    });
  },

  onFeedbackTap() {
    const feedbackUrl = 'https://wj.qq.com/s2/26714160/844f/';
    wx.openEmbeddedMiniProgram({
      appId: 'wxebadf544ddae62cb',
      path: 'pages/webview/index?sid=26714160&hash=844f&navigateBackMiniProgram=true',
      fail() {
        wx.setClipboardData({
          data: feedbackUrl,
          success() {
            wx.showToast({ title: '反馈链接已复制', icon: 'none' });
          },
        });
      },
    });
  },
});
