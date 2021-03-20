// pages/new/new.js
Page({
  data: {
    bannerSrc:'../../images/oder/1.jpg',
    listArr:[
      '../../images/oder/1.jpg',
      '../../images/oder/2.jpg',
      '../../images/oder/3.jpg',
      '../../images/oder/4.jpg',
      '../../images/oder/5.jpg',
      '../../images/oder/6.jpg',
      '../../images/oder/7.jpg',
      '../../images/oder/8.jpg',
      '../../images/oder/9.jpg',

    ],
    listNum:0,
    tastesArr:["原味","加冰","浓烈","香甜","加奶","狂野"],
    tasteNum:0
  },
  chooseItem(e){
    this.setData({
      listNum:e.currentTarget.dataset.myindex,
      bannerSrc:this.data.listArr[e.currentTarget.dataset.myindex]
    })
  },
  chooseTaste(e){
    console.log(e.currentTarget.dataset.myindex);
    this.setData({
      tasteNum:e.currentTarget.dataset.myindex
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})