// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    names:"haha",
    txt:"双大括号语法,允许声明式将数据渲染进DOM系统",
    msg:"wuhan",
    flag:true,
    imgSrc: "https://zuozhaoxi.com/base/img/3.jpg",
    array: [{
      message: 'foo-1909',
    }, {
      message: 'bar-1910'
    }],
  },
  
  changeflag(){
    this.setData({
      flag:!this.data.flag
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
   
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123'
    }
  }
})