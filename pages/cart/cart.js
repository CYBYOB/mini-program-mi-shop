// pages/cart/cart.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cart_list: [],
    cart_list_hidden: true,
    //  编辑 的 点击态
    edit_click: false,
    // 默认未选中
    select_icon: '/images/select_icon.jpg'
  },

  // 相关函数 开始
  f_edit: function(e){
    this.setData({
      edit_click: !this.data.edit_click
    })
  },
  
  f_select_item: function(e){
    // 编辑状态 处于 “活跃（点击）状态”
    if (this.data.edit_click == true){
      
    }
  },

  // 相关函数 结束
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
    let that = this;
    wx.request({
      url: 'https://www.dianyingzy.xyz/mini/shop/cart.php',
      // 搭配 data 用的
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
      // 搜索关键字 作为参数传入请求当中
      data: { 
        user_id: app.globalData.user_id 
        // user_id: app.globalData.user_id
        },
      method: 'POST',
      success(res) {
        console.log(res.data)
        // 购物车有东西
        if (res.data != 'zhaobudao'){
          that.setData({
            cart_list: res.data,
            cart_list_hidden: false
          })
        }
      }
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