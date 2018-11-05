// pages/classify/classify.js
// 获得公共的函数
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 记录之前被点击的 scroll id值，颜色切换要用
    pre_scroll: 0,
    scroll_list: [
      { id: 1, title: '新品',  active: true },
      { id: 2, title: '手机',  active: false },
      { id: 3, title: '电视',  active: false },
      { id: 4, title: '家电',  active: false },
      { id: 5, title: '路由',  active: false },
      { id: 6, title: '出行',  active: false },
      { id: 7, title: '穿戴',  active: false },
      { id: 8, title: '智能',  active: false },
      { id: 9, title: '电源',  active: false },
      { id: 10, title: '健康',  active: false },
      { id: 11, title: '灯具',  active: false },
      { id: 12, title: '儿童',  active: false },
      { id: 13, title: '插线板', active: false },
      { id: 14, title: '音频',  active: false },
      { id: 15, title: '箱包',  active: false },
      { id: 16, title: '生活',  active: false },
      { id: 17, title: '配件',  active: false },
      { id: 18, title: '家装',  active: false },
      { id: 19, title: '礼品',  active: false },
      { id: 20, title: '服务',  active: false },
      { id: 21, title: '米粉卡',  active: false },
      { id: 22, title: '零售店',  active: false },
    ],
    good_list: [
      { id: '1', src: '../../images/good/1.jpg', title: '小米8 青春版' },
      { id: '2', src: '../../images/good/2.jpg', title: '小米8 指纹版' },
      { id: '3', src: '../../images/good/3.jpg', title: '小米8' },
      { id: '4', src: '../../images/good/4.jpg', title: '小米8 SE' },
      { id: '5', src: '../../images/good/5.jpg', title: '小米Max 3' },
      { id: '6', src: '../../images/good/6.jpg', title: '红米6 Pro' },
      { id: '7', src: '../../images/good/7.jpg', title: '红米6' },
      { id: '8', src: '../../images/good/8.jpg', title: '红米6A' },
    ],
    good_list_1: [
      { id: '1', src: '../../images/good/1.jpg', title: '小米8 青春版' },
      { id: '2', src: '../../images/good/2.jpg', title: '小米8 指纹版' },
      { id: '3', src: '../../images/good/3.jpg', title: '小米8' },
      { id: '4', src: '../../images/good/4.jpg', title: '小米8 SE' },
      { id: '5', src: '../../images/good/5.jpg', title: '小米Max 3' },
      { id: '6', src: '../../images/good/6.jpg', title: '红米6 Pro' },
      { id: '7', src: '../../images/good/7.jpg', title: '红米6' },
      { id: '8', src: '../../images/good/8.jpg', title: '红米6A' },
    ],
    good_list_2: [
      { id: '1', src: '../../images/good/21.jpg', title: '小米8 青春版' },
      { id: '2', src: '../../images/good/22.jpg', title: '小米8 指纹版' },
      { id: '3', src: '../../images/good/23.jpg', title: '小米8' },
      { id: '4', src: '../../images/good/24.jpg', title: '小米8 SE' },
      { id: '25', src: '../../images/good/25.jpg', title: '小米MIX 2S' },
      { id: '5', src: '../../images/good/26.jpg', title: '小米Max 3' },
      { id: '27', src: '../../images/good/27.jpg', title: '小米6X' },
      { id: '28', src: '../../images/good/28.jpg', title: '黑鲨手机' },
      { id: '29', src: '../../images/good/29.jpg', title: '小米MIX 2' },
      { id: '210', src: '../../images/good/210.jpg', title: '小米Max 2' },
    ],
  },

  // 相关函数 开始
  f_scroll: function(e){
    let pre_id = this.data.pre_scroll;
    let id = e.currentTarget.id - 1;
    let old_scroll = 'scroll_list[' + pre_id + '].active'
    let new_scroll = 'scroll_list[' + id + '].active';
    if(id%2 == 0){
      var temp_good_list = this.data.good_list_1;
    }
    else{
      var temp_good_list = this.data.good_list_2;
    }
    this.setData({
      [old_scroll]: false,
      [new_scroll]: true,
      pre_scroll: id,
      good_list: temp_good_list
    })
  },
  
  f_good_new: function (e) {
    // 跳转 good 页面，onshow 更新数据
    util.f_good_new(e)
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