import my from "../../common/api/My.js";

Page({
    data: {
      modeTextData:['贪吃蛇','别踩白块','飞机大战','节奏大师','叠叠乐','90坦克大战','h5小游戏集合']
    },
    onLoad() {},
    onUnload() {},
    onShow() {},
    onHide() {},
    onReady() {},
    navigateToClick(e) {
      const { index } = e.target.dataset;
      const text = this.data.modeTextData[index];
      const url = this.handleNavigateToUrl(text);
      if (!url) {
        my.showToast('正在努力更新中……',2000,'loading');
        return;
      }
        my.navigateTo(url)
    },

    handleNavigateToUrl(type) {
      if (type === '贪吃蛇') {
        return '/pages/retro-snaker/retro-snaker';
      }
    }
})