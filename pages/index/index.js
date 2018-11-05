//index.js
//获取应用实例
const app = getApp()
// 获取公共函数相关实例
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 'data_id',
    top_banner: [
      { id: '1', src: '../../images/top_banner_1.jpg' },
      { id: '2_dianshi', src: '../../images/top_banner_2.jpg' },
      { id: '3', src: '../../images/top_banner_3.jpg' },
      ],
    sub_nav: [
      { id: 'sub_1', src: '../../images/sub_nav/1.jpg', title: '新品发布' },
      { id: 'sub_2', src: '../../images/sub_nav/2.jpg', title: '小米闪购' },
      { id: 'sub_3', src: '../../images/sub_nav/3.jpg', title: '1分拼团' },
      { id: 'sub_4', src: '../../images/sub_nav/4.jpg', title: '米粉卡' },
      { id: 'sub_5', src: '../../images/sub_nav/5.jpg', title: '每日精选' },
      { id: 'sub_6', src: '../../images/sub_nav/6.jpg', title: '以旧换新' },
      { id: 'sub_7', src: '../../images/sub_nav/7.jpg', title: '活动频道' },
      { id: 'sub_8', src: '../../images/sub_nav/8.jpg', title: '电视热卖' },
      ],
    hot_good: [
      { id: 'hot_2', src: '../../images/hot_good/2.jpg' },
      { id: 'hot_3', src: '../../images/hot_good/3.jpg' },
      ],
  },

  // 相关函数 开始
  f_good_new: function(e){
    // 跳转 good 页面，onshow 更新数据
    util.f_good_new(e)
  },
  // 相关函数结束

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData)
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