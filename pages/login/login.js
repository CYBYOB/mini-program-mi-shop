// pages/login/login.js
var app = getApp();
Page({
  data: {
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },


  onLoad: function () {
    
  },


  bindGetUserInfo: function (e) {
    // console.log(e)
    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      var that = this;
      
      // 方便测试用的
      // let nick_name = app.globalData.nick_name;
      let nick_name = e.detail.userInfo.nickName
      wx.request({
        // 授权后立马改变全局的 用户 id 和 nick_name
        url: 'https://www.dianyingzy.xyz/mini/shop/user_id.php',
        // 搭配 data 用的
        header: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
        // 搜索关键字 作为参数传入请求当中
        data: { nick_name: nick_name },
        method: 'POST',
        success(res) {
          console.log(res)
          // 全局中的 用户相关数据 进行变更
          app.globalData.nick_name = e.detail.userInfo.nickName
          app.globalData.avatar_url = e.detail.userInfo.avatarUrl
          app.globalData.user_id = res.data[0].id
        }
      })

      //授权成功后，跳转进入小程序首页
      wx.switchTab({
        url: '/pages/index/index'
      })
    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!',
        showCancel: false,
        confirmText: '返回授权',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击了“返回授权”')
          }
        }
      })
    }
  },

})