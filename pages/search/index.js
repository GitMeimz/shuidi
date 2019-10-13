// pages/search/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabNav: ["推荐", "明星", "颜值", "摄影", "运动", "美食", "旅行", "时尚", "萌宠", "家居", "美妆", "育儿",],
    // tabNav点击后的索引值
    currentIndex: 0,
  },


  // tabNav栏点击事件
  clicktabNavItem(e) {
    console.log(e.target.dataset.index)
    const {
      index
    } = e.target.dataset
    this.setData({
      currentIndex: index,
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