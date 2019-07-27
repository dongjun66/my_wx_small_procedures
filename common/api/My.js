/**
 * api {Function} 
*/

export default class My {

  /**
   * @param {String} title  //toast的text
   * @param {Number} duration // toast的时长，默认2s
   * @param {String} icon // toast图标，默认none
  */
  static showToast(title = '', duration=2000,icon = 'none') {
    if (!title) return;
    wx.showToast({
      title: title,
      duration: 2000,
      icon:icon
    })
  }

  static hideToast() {
    wx.hideToast();
  }

  /**
   * @param {String} title
   * @param {Boolean} mask //默认false ‘是否显示透明蒙层，防止触摸穿透’
  */
  static showLoading(title,mask) {
    if (!title) return;
    wx.showLoading({
      title: title,
      mask: mask
    })
  }

  static hideLoading() {
    wx.hideLoading()
  }

  /**
   * title //提示的标题
   * content //提示的内容
   * showCancel //是否显示取消按
   * cancelText //取消按钮的文字，最多 4 个字符
   * cancelColor //取消按钮的文字颜色，必须是 16 进制格式的颜色字符串
   * confirmText //确认按钮的文字，最多 4 个字符
   * confirmColor //确认按钮的文字颜色，必须是 16 进制格式的颜色字符串
  */
  static showModal(obj,callBack) {
    if (!obj || typeof obj !== 'object') return;
    wx.showModal(obj)

  }

  static showActionSheet(array,callBack) {
    wx.showActionSheet({
      itemList: array,
      success(res) {
        callBack(res, message)
      },
      fail(res) {
        callBack(res, message)
      }
    })

  }

  static navigateTo(url) {
    if (!url) return;
    wx.navigateTo({
      url:url
    })
  }

  static reLaunch(url) {
    wx.reLaunch({
      url:url
    })
  }

  static redirectTo(url) {
    wx.reLaunch({
      url: url
    })
  }

  static navigateBack(delta) {
    wx.reLaunch({
      delta: delta
    })
  }
}