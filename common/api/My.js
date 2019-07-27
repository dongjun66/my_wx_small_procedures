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

  }
}