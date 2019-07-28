// pages/white-block.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    whiteBlockArray:[
      ['color-black', 'color-white', 'color-white', 'color-white'],
      ['color-white', 'color-black', 'color-white', 'color-white'],
      ['color-white', 'color-white', 'color-black', 'color-white'],
      ['color-white', 'color-white', 'color-white', 'color-black'],
    ],
    showBlockData:[],
    startStatus:true,
    gameOver:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.init();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  init() {
    const array = this.data.whiteBlockArray;
    let newArray = [];
    for(let i = 0 ; i < 3; i++) {
      const random = Math.floor(Math.random() * 4);
      newArray.push(array[random]);
    }
    this.setData({ showBlockData: newArray, gameOver:false,startStatus:true});
  },

  start(e) {
    this.creatBlock();
    this.setData({
      startStatus:false
    })
  },

  gameOver() {
    this.setData({
      gameOver:true
    })
  },

  userClickBlock(e) {
    console.log('e--------',e)
    const dataset = e.target.dataset;
    const { index } = dataset;
    const { type } = dataset;
    if (index === 2 && type === 'color-black' && this.data.startStatus) {
      this.start(e);
      return;
    }
    if (type === 'color-white') {
      this.gameOver();
      return;
    }
    this.creatBlock();
  },

  creatBlock() {
    let showBlockData = this.data.showBlockData;
    showBlockData.unshift(this.randomBlock());
    this.setData({ showBlockData: showBlockData })
  },

  randomBlock() {
    return this.data.whiteBlockArray[Math.floor(Math.random() * 4)];
  }
})