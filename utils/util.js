// 用于放置公共函数的
// 根据传入的 ID 跳转到 good 页面，并在 onshow 更新数据（做到每次载入数据都是最新的！）
function f_good_new(e){
  wx.navigateTo({
    url: '../good/good?id=' + e.currentTarget.id,
  })
}

module.exports={
  f_good_new: f_good_new
}