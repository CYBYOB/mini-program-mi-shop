// pages/good/good.js
var util = require('../../utils/util.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 商品id onload 初始化，方便后续 假如购物车、购买等
    good_id: '',
    src: '',
    title: '',
    detail: '',
    price: -1,
    sale_num: -1,
    ava_num: -1,
  },


  // 相关函数 开始
  f_like: function(e){
    // 简单弹出 消息，无任何处理
    wx.showToast({
      title: '喜欢成功！',
      duration:1000
    })
  },
  f_cart_page: function(e){
    // duration 没有用
    // wx.showToast({
    //   title: '正在跳转至购物车页面。。。',
    //   duration: 5000
    // })
    wx.switchTab({
      url: '/pages/cart/cart',
    })
  },
  // 加入购物车
  f_add_cart: function (e) {
    console.log(e)
    wx.request({
      url: 'https://www.dianyingzy.xyz/mini/shop/add_cart.php',
      // 搭配 data 用的
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
      // 搜索关键字 作为参数传入请求当中
      data: { user_id: app.globalData.user_id, good_id: '2' },
      method: 'POST',
      success(res) {
        console.log(res)
        // 之前已有相同的商品加入过购物车
        if (res.data == 'exist'){
          wx.showToast({
            title: '购物车中已存在！',
            icon: 'none',
            duration: 1000,
          })
        }
        else if (res.data == 'insert successfully') {
          wx.showToast({
            title: '加入购物车成功！',
            duration: 1000
          })
          // 可以进行 cart 页面的跳转！
        }
      }
    })
  },
  f_installment: function(e){
    wx.showActionSheet({
      itemList: ['1055.93*3期','536.64*6期','276.84*12期'],
    })
  },

  // 相关函数 结束


  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: function (options) {
    // console.log(options.id)
    // 商品id
    this.setData({
      good_id: options.id
    })
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
    console.log("show!!"+this.data.good_id);
    var that = this
    wx.request({
      url: 'https://www.dianyingzy.xyz/mini/shop/good.php',
      // 搭配 data 用的
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
      // 搜索关键字 作为参数传入请求当中
      data: { good_id: this.data.good_id },
      method: 'POST',
      success(res) {
        console.log(res)
        that.setData({
          good_id: res.data[0].id,
          src: res.data[0].src,
          title: res.data[0].title,
          detail: res.data[0].detail,
          price: res.data[0].price,
          sale_num: res.data[0].sale_num,
          ava_num: res.data[0].ava_num,
        })

      },
    })
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