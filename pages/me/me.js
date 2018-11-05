// pages/me/me.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // nick_name: '陈yob_1',
    // avatar_url: 'https://wx.qlogo.cn/mmopen/vi_32/UtGsLfUtgdKSiaGgWVz2yOeCiamEia93cCDaa1WrbE7INIsSklkPAoZxa4ibiaIMgO2yNJhoyzDkqa15bkBbYKoYiaJQ/132',
    nick_name: '',
    avatar_url: '', 
    // 待付款、待收货等等
    order_type: [
      { src: '../../images/order_1.jpg', title: '待付款' },
      { src: '../../images/order_2.jpg', title: '待收货' },
      { src: '../../images/order_3.jpg', title: '待评价' },
      { src: '../../images/order_4.jpg', title: '退换修' },
    ],
    // 底部相关的列表
    my_list: [
      { src: '../../images/my_list/1.jpg', title: '优惠券' },
      { src: '../../images/my_list/2.jpg', title: '会员中心' },
      { src: '../../images/my_list/3.jpg', title: '我的钱包' },
      { src: '../../images/my_list/4.jpg', title: '服务中心' },
      { src: '../../images/my_list/5.jpg', title: '小米之家' },
      { src: '../../images/my_list/6.jpg', title: '直供点' },
      { src: '../../images/my_list/7.jpg', title: '更多功能' },
      { src: '../../images/my_list/8.jpg', title: '设置' },
    ],
  },

  // 相关函数 开始
  f_order: function(e){
    wx.navigateTo({
      url: '/pages/order/order',
    })
  },
  bindGetUserInfo(e) {
    // console.log(e.detail.userInfo)
    var that = this;
    // 查看是否授权
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (info_res) {
              let user_info = info_res.userInfo;
              that.setData({
                nick_name: user_info.nickName
              },() => {
                wx.request({
                  url: 'https://www.dianyingzy.xyz/mini/shop/user_init.php',
                  // 搭配 data 用的
                  header: {
                    'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                  },
                  // 搜索关键字 作为参数传入请求当中
                  data: { nick_name: user_info.nickName, },
                  method: 'POST',
                  success(res) {
                    app.globalData.user_id = res.data.user_id
                      
                  }
                },()=>{
                  console.log("jsisii"+app.globalData.user_id)
                })
              })
            }
          })
        }
      }
      
    })
    console.log(this.data.nick_name)
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
  // 获得全局变量的 id nick_name 刷新顶部的个人信息,这样会不会速度不太好？？！
  onShow: function () {
    console.log(app.globalData)
    this.setData({
      nick_name: app.globalData.nick_name,
      avatar_url: app.globalData.avatar_url
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