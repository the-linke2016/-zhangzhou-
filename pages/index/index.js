var data = require('../../data/data.js');
var recomend = data.recomend;
var app = getApp();
Page({
  data: {
    systemInfo: {},
    navbar: ['推荐', '分类'],
    currentNavbar: '0',
    swiperUrls: ['https://upload-images.jianshu.io/upload_images/3235837-91c29f15dd0ba573.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240', 'https://upload-images.jianshu.io/upload_images/3235837-f2d6a6f307feb577.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240', 'https://upload-images.jianshu.io/upload_images/3235837-3b294a7814a71497.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240'],
    menuImg: ['https://upload-images.jianshu.io/upload_images/3235837-3163b21d84aff050.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240', 'https://upload-images.jianshu.io/upload_images/3235837-3419f2ebedd93bf8.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240','https://upload-images.jianshu.io/upload_images/3235837-3f1c5e2496f0bd13.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240'],
    recomend: recomend
  },

  onLoad() {
    var that = this;
    app.getSystemInfo(function (res) {
      that.setData({
        systemInfo: res
      })
    });

  },

  /**
   * 点击跳转详情页
   */


  /**
   * 切换 navbar
   */
  swichNav(e) {
    this.setData({
      currentNavbar: e.currentTarget.dataset.idx
    })
  },

  changeNav(e) {
    this.setData({
      currentNavbar: e.detail.current
    })
  }
})
